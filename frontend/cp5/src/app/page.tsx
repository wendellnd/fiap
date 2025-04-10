"use client";

import { useTheme } from "@/context/ThemeContext";
import CategoryList from "@/components/CategoryList/page";
import CategorySelector from "@/components/CategorySelector/page";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-start items-center flex-col flex-grow ${
        theme == "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <CategorySelector />

      <CategoryList />
    </div>
  );
}
