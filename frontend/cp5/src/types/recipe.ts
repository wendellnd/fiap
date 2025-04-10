export type RecipeCategory =
  | "Sobremesas"
  | "Entradas"
  | "Pratos Principais"
  | "Bebidas"
  | "Todas";

export type Recipe = {
  id: number;
  categoria: RecipeCategory;
  nome: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
  imagem: string;
};

export type RecipeListType = Recipe[];

export type RecipeListByCategory = {
  [key in RecipeCategory]: Recipe[];
};
