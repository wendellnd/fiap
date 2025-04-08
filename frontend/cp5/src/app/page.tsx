"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Recipe, RecipeList } from "@/types/recipe";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();

  const [recipes, setRecipes] = useState<RecipeList>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeList>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/receitas.json");
      const data = await response.json();
      setRecipes(data);
      setFilteredRecipes(data);

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
    <>
      <div
        className={`flex justify-center items-center flex-col flex-grow ${
          theme == "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
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
              onClick={() => {
                setSelectedCategory(category);
                const filtered = recipes.filter(
                  (recipe) => recipe.categoria === category
                );
                setFilteredRecipes(filtered);
              }}
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

        <div className="flex flex-wrap justify-center gap-4 p-4">
          {filteredRecipes.map((recipe) => (
            <Link
              href={`/receitas/${recipe.id}`}
              key={recipe.id}
              className={`rounded-lg shadow-lg p-4 w-64 ${
                theme == "light" ? "bg-white" : "bg-white dark:bg-gray-700"
              }
              hover:bg-[#ff8400] transition duration-200`}
            >
              <Image
                className="rounded-lg mb-4"
                width={256}
                height={256}
                alt={recipe.nome}
                src={recipe.imagem}
              />
              <h2 className="text-xl font-bold">{recipe.nome}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
