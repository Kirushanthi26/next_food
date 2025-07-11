import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/mealsApi";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All meals",
  description: "Delicious meals, shared by a food-loving community.",
};

async function Meals() {
  const meanls = await getMeals();
  return <MealsGrid meals={meanls} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. it is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Four Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching Meals.....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
