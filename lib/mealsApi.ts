import { Meal as mealType } from "@/types/meals";
import sql from "better-sqlite3";
import { connectToDatabase } from "@/lib/mongodb";
import { Meal } from "@/models/Meal";

const db = new sql("meals.db");

//export async function getMeals(): Promise<Meal[]> {
export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  //throw new Error("error");
  //return db.prepare(`select * from meals`).all() as Meal[];

  /**
   * const stmt = db.prepare("SELECT * FROM meals");
  const meals: Meal[] = stmt.all(); 
  return meals;
   */
  try {
    await connectToDatabase();
    const meals = await Meal.find();
    return meals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    return []; // or throw error, your choice
  }
}

export async function getMeal(slug: string) {
  // const meal = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug) as
  //   | mealType
  //   | undefined;
  // return Promise.resolve(meal ?? null);

  try {
    await connectToDatabase();
    const meal = await Meal.findOne({ slug: slug });
    return meal ?? null;
  } catch (error) {
    console.error("Error fetching meal by slug:", error);
    return null;
  }
}
