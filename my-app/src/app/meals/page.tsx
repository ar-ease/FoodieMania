import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense, type JSX } from "react";

function Meals() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
} // Converted the function component to TypeScript by adding the return type JSX.Element
export default function MealsPage(): JSX.Element {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created,{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Share your favorite recipes with the world!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
        {/* Added an empty array for meals prop to satisfy the MealsGrid component's type requirement */}
      </main>
    </>
  );
}
