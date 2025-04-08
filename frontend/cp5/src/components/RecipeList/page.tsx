"use client";
import { RecipeList } from "@/types/recipe";

import RecipeItem from "@/components/RecipeItem/page";

type RecipeListProps = {
  recipes: RecipeList;
};

const RecipeListComponent = ({ recipes }: RecipeListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
export default RecipeListComponent;
