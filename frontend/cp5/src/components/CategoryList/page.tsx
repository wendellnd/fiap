"use client";

import { useRecipe } from "@/context/RecipeContext";
import RecipeList from "@/components/RecipeList/page";

const CategoryList = () => {
  const { categories, selectedCategory } = useRecipe();

  return (
    <>
      {categories.map((category, index) => {
        if (category == "Todas") {
          return;
        }

        if (selectedCategory == "Todas" || selectedCategory == category) {
          return <RecipeList key={index} category={category} />;
        }
      })}
    </>
  );
};
export default CategoryList;
