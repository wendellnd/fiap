"use client";

import { useTheme } from "@/context/ThemeContext";
import RecipeListComponent from "@/components/RecipeList/page";
import CategoryList from "@/components/CategoryList/page";
import { useRecipe } from "@/context/RecipeContext";

export default function Home() {
  const { theme } = useTheme();

  const { filteredRecipes } = useRecipe();

  return (
    <>
      <div
        className={`flex justify-start items-center flex-col flex-grow ${
          theme == "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
        <CategoryList />

        <RecipeListComponent recipes={filteredRecipes} />
      </div>
    </>
  );
}
