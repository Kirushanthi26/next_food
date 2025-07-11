import { getMeal } from "@/lib/mealsApi";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type MealDetailsPageProps = {
  params: {
    mealsSlug: string;
  };
};

export async function generateMetadata({ params }: MealDetailsPageProps) {
  const meal = await getMeal(params.mealsSlug);

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({
  params,
}: MealDetailsPageProps) {
  const meal = await getMeal(params.mealsSlug);

  if (!meal) {
    //special function  - find closer error page or not found page
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt="meal image" fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            BY <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={styles.instructions}>
        <p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
}
