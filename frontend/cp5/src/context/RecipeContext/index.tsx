"use client";
import { createContext, useContext, useEffect, useState } from "react";

import { Recipe, RecipeList } from "@/types/recipe";

export interface RecipeContextType {
  recipes: RecipeList;
  setRecipes: (recipes: RecipeList) => void;
  categories: string[];
  setCategories: (categories: string[]) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  filteredRecipes: RecipeList;
  setFilteredRecipes: (recipes: RecipeList) => void;
}

export const RecipeContext = createContext<RecipeContextType | undefined>(
  undefined
);
export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipes, setRecipes] = useState<RecipeList>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeList>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/receitas.json");
      const data = await response.json();
      setRecipes(data);

      const uniqueCategories = Array.from<string>(
        new Set(data.map((recipe: Recipe) => recipe.categoria))
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
