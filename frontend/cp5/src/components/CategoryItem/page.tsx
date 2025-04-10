"use client";

import { useRecipe } from "@/context/RecipeContext";
import { RecipeCategory } from "@/types/recipe";

type CategoryItemProps = {
  category: RecipeCategory;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { selectedCategory, recipes, setFilteredRecipes, setSelectedCategory } =
    useRecipe();

  const selectCategory = (category: RecipeCategory) => {
    setSelectedCategory(category);

    let filtered = recipes;
    if (selectedCategory !== "Todas") {
      filtered = recipes.filter(
        (recipe) => recipe.categoria === selectedCategory
      );
      setFilteredRecipes(filtered);
    }
    setFilteredRecipes(recipes);
  };

  return (
    <li
      onClick={() => selectCategory(category)}
      className={`cursor-pointer text-lg font-semibold px-4 py-2 rounded ${
        selectedCategory === category ? "bg-[#ff8400]" : ""
      } hover:bg-[#ff8400] hover:text-white transition duration-100`}
    >
      {category}
    </li>
  );
};

export default CategoryItem;
