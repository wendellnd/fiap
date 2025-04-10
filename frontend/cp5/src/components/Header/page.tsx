"use client";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex justify-between items-center bg-[#ff8400] text-white p-5">
      <h1 className="text-4xl font-bold mb-2 text-center">Receitas Online</h1>
      <button
        className={`mr-0 ml-auto px-4 py-2 rounded ${
          theme === "light"
            ? "bg-gray-300 text-gray-700"
            : "bg-gray-800 text-white"
        }`}
        onClick={toggleTheme}
      >
        Mudar tema: {theme === "light" ? "Escuro" : "Claro"}
      </button>
    </header>
  );
};
export default Header;
