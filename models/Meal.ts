import { Schema, model, models } from "mongoose";

const MealSchema = new Schema({
  title: String,
  slug: { type: String, required: false },
  summary: String,
  instructions: String,
  creator: String,
  creator_email: String,
  image: String,
});

export const Meal = models.Meal || model("Meal", MealSchema);
