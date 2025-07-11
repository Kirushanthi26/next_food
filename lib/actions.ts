"use server";
import { connectToDatabase } from "@/lib/mongodb";
import { Meal } from "@/models/Meal";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import path from "path";
import slugify from "slugify";
import xss from "xss";

export const shareMeal = async (formData: FormData) => {
  const file = formData.get("mealImage") as File;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");

  const filename = `${Date.now()}-${file.name}`;
  const filepath = path.join(uploadDir, filename);

  await writeFile(filepath, buffer);
  await connectToDatabase();

  const title = (formData.get("title") as string) ?? "";
  const instructions = (formData.get("instructions") as string) ?? "";

  const newMeal = new Meal({
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    title: formData.get("title") as string as string,
    summary: formData.get("summary") as string,
    instructions: xss(instructions),
    image: `/uploads/${filename}`,
    slug: slugify(title, { lower: true }),
  });

  //console.log("Meal data:", meal);
  await newMeal.save();
  revalidatePath("/meals", "layout");
  redirect("/meals");
};
