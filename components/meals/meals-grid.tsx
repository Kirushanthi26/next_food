import { Meal } from "@/types/meals";
import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

type MealsGridProps = {
  meals: Meal[];
};

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <div className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </div>
  );
}
