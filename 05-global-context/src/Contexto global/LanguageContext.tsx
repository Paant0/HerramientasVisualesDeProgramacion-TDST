import React, { createContext, useContext, useState, type ReactNode, } from "react";

interface LanguageState {
  language: "es" | "en";
  cambiarIdioma: () => void;
}

export const LanguageContext = createContext({} as LanguageState);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const cambiarIdioma = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, cambiarIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
