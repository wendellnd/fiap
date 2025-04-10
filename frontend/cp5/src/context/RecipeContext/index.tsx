"use client";
import { createContext, useContext, useEffect, useState } from "react";

import { Recipe, RecipeCategory, RecipeListType } from "@/types/recipe";

export interface RecipeContextType {
  recipes: RecipeListType;
  setRecipes: (recipes: RecipeListType) => void;
  categories: RecipeCategory[];
  setCategories: (categories: RecipeCategory[]) => void;
  selectedCategory: RecipeCategory;
  setSelectedCategory: (category: RecipeCategory) => void;
  filteredRecipes: RecipeListType;
  setFilteredRecipes: (recipes: RecipeListType) => void;
}

export const RecipeContext = createContext<RecipeContextType | undefined>(
  undefined
);
export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipes, setRecipes] = useState<RecipeListType>([]);
  const [categories, setCategories] = useState<RecipeCategory[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<RecipeCategory>("Todas");
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeListType>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/receitas.json");
      const data = await response.json();
      setRecipes(data);

      const uniqueCategories: RecipeCategory[] = ["Todas"];
      uniqueCategories.push(
        ...Array.from<RecipeCategory>(
          new Set(data.map((recipe: Recipe) => recipe.categoria))
        )
      );

      setCategories(uniqueCategories);
      setFilteredRecipes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        filteredRecipes,
        setFilteredRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
export const useRecipe = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("useRecipe must be used within a RecipeProvider");
  }
  return context;
};

export default RecipeContext;
