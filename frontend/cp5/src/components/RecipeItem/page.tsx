"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Recipe } from "@/types/recipe";

type RecipeItemProps = {
  recipe: Recipe;
};

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  const { theme } = useTheme();

  return (
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
  );
};
export default RecipeItem;
