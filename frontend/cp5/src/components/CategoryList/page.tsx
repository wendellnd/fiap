"use client";

import { useRecipe } from "@/context/RecipeContext/index";

const CategoryList = ({}) => {
  const {
    recipes,
    categories,
    selectedCategory,
    setSelectedCategory,
    setFilteredRecipes,
  } = useRecipe();

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    const filtered = recipes.filter((recipe) => recipe.categoria === category);
    setFilteredRecipes(filtered);
  };

  return (
    <ul className="flex flex-wrap justify-center gap-4 p-4">
      <li
        onClick={() => {
          setSelectedCategory(null);
          setFilteredRecipes(recipes);
        }}
        className={`cursor-pointer text-lg font-semibold bg-[#ff8400] px-4 py-2 rounded ${
          selectedCategory === null ? "bg-[#ff8400]" : ""
        }`}
      >
        Todos
      </li>
      {categories.map((category, index) => (
        <li
          onClick={() => selectCategory(category)}
          className={`cursor-pointer text-lg font-semibold px-4 py-2 rounded ${
            selectedCategory === category ? "bg-[#ff8400]" : ""
          }
              hover:bg-[#ff8400] hover:text-white transition duration-100`}
          key={index}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
