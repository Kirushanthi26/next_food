import { Meal } from "@/types/meals";
import sql from "better-sqlite3";

const db = new sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare(`select * from meals`).all() as Meal[];

  /**
   * const stmt = db.prepare("SELECT * FROM meals");
  const meals: Meal[] = stmt.all(); 
  return meals;
   */
}
