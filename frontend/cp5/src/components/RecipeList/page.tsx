"use client";

import { useRecipe } from "@/context/RecipeContext";
import RecipeItem from "@/components/RecipeItem/page";
import { RecipeCategory } from "@/types/recipe";

type RecipeListProps = {
  category: RecipeCategory;
};

const RecipeList = ({ category }: RecipeListProps) => {
  const { recipes } = useRecipe();

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h2 className="text-2xl font-bold">{category}</h2>
      <ul className="flex flex-wrap justify-center gap-4 p-4">
        {recipes.map((recipe, index) => {
          if (recipe.categoria != category) {
            return;
          }

          return <RecipeItem key={index} recipe={recipe} />;
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
