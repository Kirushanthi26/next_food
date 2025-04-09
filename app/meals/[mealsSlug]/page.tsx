type MealDetailsHomeProps = {
  params: {
    mealsSlug: string;
  };
};

export default function MealDetailsHome({ params }: MealDetailsHomeProps) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get MealDetailsHome!
      </h1>
      <p style={{ color: "white", textAlign: "center" }}>{params.mealsSlug}</p>
    </main>
  );
}
