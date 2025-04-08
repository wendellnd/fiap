import type { Metadata } from "next";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { RecipeProvider } from "@/context/RecipeContext";

export const metadata: Metadata = {
  title: "Receitas",
  description: "Receitas incríveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecipeProvider>
        <ThemeProvider>
          <body>
            <div className="min-h-screen flex flex-col justify-between">
              <Header />
              {children}
              <Footer />
            </div>
          </body>
        </ThemeProvider>
      </RecipeProvider>
    </html>
  );
}
