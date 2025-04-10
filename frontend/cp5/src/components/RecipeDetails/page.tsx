import Image from "next/image";
import { Recipe } from "@/types/recipe";

type RecipeDetailsProps = {
  recipe: Recipe;
};

const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
  return (
    <div className="mt-4">
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
        <p className="mt-4 text-justify max-w-[20rem]">{recipe.modoPreparo}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
