import sql from "better-sqlite3";

const db = sql("meals.db");

interface Meal {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export const getMeals = (): Meal[] => {
  return db.prepare("SELECT * FROM meals").all();
};
export const getMeal = (slug: string) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};
