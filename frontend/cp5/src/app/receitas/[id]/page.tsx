"use client";
import { Recipe } from "@/types/recipe";
import RecipeDetails from "@/components/RecipeDetails/page";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useRecipe } from "@/context/RecipeContext";

const RecipeDetail = () => {
  const { id } = useParams();

  const { theme } = useTheme();
  const { recipes } = useRecipe();

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id && recipes.length > 0) {
      const recipe = recipes.find((recipe: Recipe) => String(recipe.id) === id);

      if (!recipe) {
        throw new Error("Recipe not found");
      }

      setRecipe(recipe);
    }
  }, [recipes, id]);

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center flex-grow  ${
          theme == "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
        {recipe ? <RecipeDetails recipe={recipe} /> : <p>Loading...</p>}

        <Link href="/" className="flex justify-center mt-4">
          <button className="bg-[#ff8400] text-white px-4 py-2 rounded">
            Voltar
          </button>
        </Link>
        <br />
      </div>
    </>
  );
};
export default RecipeDetail;
