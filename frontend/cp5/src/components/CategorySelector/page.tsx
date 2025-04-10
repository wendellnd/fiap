"use client";

import { useRecipe } from "@/context/RecipeContext/index";
import CategoryItem from "../CategoryItem/page";

const CategorySelector = () => {
  const { categories } = useRecipe();

  return (
    <ul className="flex flex-wrap justify-center gap-4 p-4">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </ul>
  );
};

export default CategorySelector;
