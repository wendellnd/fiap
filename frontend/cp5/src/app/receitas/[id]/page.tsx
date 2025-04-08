"use client";
import { Recipe } from "@/types/recipe";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const RecipeDetail = () => {
  const { theme } = useTheme();
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const fetchRecipeDetails = async (id: string) => {
    const response = await fetch(`/data/receitas.json`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch recipe details");
    }

    const recipe = data.find((recipe: Recipe) => String(recipe.id) === id);
    if (!recipe) {
      throw new Error("Recipe not found");
    }

    setRecipe(recipe);
  };

  useEffect(() => {
    if (id) {
      fetchRecipeDetails(id as string);
    }
  }, [id]);

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center flex-grow  ${
          theme == "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
        {recipe ? (
          <div className="mt-4 flex items-center flex-wrap">
            <div>
              <h1 className="text-2xl font-bold text-center">{recipe.nome}</h1>
              <Image
                src={recipe.imagem}
                alt={recipe.nome}
                width={400}
                height={400}
                className="rounded-lg shadow-lg mt-4"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold mt-4">Tempo de Preparo</h2>
              <p>{recipe.tempo}</p>
              <h2 className="text-xl font-semibold mt-4">Ingredientes</h2>
              <ul className="list-disc list-inside">
                {recipe.ingredientes.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h2 className="text-xl font-semibold mt-4">Modo de Preparo</h2>
              <p className="mt-4 text-justify">{recipe.modoPreparo}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}

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
