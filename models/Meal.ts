import { Schema, model, models } from "mongoose";

const MealSchema = new Schema({
  title: String,
  summary: String,
  instructions: String,
  creator: String,
  creator_email: String,
  image: String,
});

export const Meal = models.Meal || model("Meal", MealSchema);
