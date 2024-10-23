interface DynamicMealsProp {
  params: {
    slug: string;
  };
}

export default function DynamicMeals({ params }: DynamicMealsProp) {
  return (
    <>
      <h2>{params.slug}</h2>
      <h1>hello there from dynamic meals</h1>;
    </>
  );
}
