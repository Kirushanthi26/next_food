"use server";

export const shareMeal = async (formData: FormData) => {
  const meal = {
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("mealImage") as File,
  };

  console.log("Meal data:", meal);
};
