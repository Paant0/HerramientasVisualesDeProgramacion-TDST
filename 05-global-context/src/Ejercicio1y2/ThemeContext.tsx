import React, { useState, type ReactNode } from 'react'
import { createContext, useContext } from "react";

interface ThemeState {
    tema: "dark"|"light";
    CambiarTema: () => void;
}

export const ThemeContext = createContext({} as ThemeState);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [tema, setTema] = useState<"dark" | "light">("dark");
    const CambiarTema = () => {
        setTema(prev => (prev === "light" ? "dark" : "light"));
    };
    const value: ThemeState = { tema, CambiarTema };
    return (
        <ThemeContext.Provider
      value={{
        tema,
        CambiarTema,
      }}
    >
      {children}
    </ThemeContext.Provider>
    )
}
export const useThemeContext = () => useContext(ThemeContext);