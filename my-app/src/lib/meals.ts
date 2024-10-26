import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

interface Meal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
}

export const getMeals = (): Meal[] => {
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};
export const getMeal = (slug: string) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

type Image = { name: string; arrayBuffer: () => Promise<ArrayBuffer> };

interface SaveMeal {
  title: string;
  slug?: string;
  summary: string;
  instructions: string;
  image: Image | string;
  creator: string;
  creator_email: string;
}

export async function saveMeal(meal: SaveMeal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Check if image is a file and not already a string path
  if (typeof meal.image !== "string") {
    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("Failed to save image");
      }
    });
    meal.image = `/images/${fileName}`;
  }

  db.prepare(
    `INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES 
    (@title,
     @slug, 
     @image,
     @summary,
     @instructions,
     @creator,
     @creator_email)`
  ).run(meal);
}
