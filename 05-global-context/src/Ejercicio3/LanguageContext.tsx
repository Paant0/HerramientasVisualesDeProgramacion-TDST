import React from 'react'
import { createContext, useContext } from "react";


interface LanguageState {
    language: "es" | "en";
    CambiarIdioma: () => void;
}

export const IdiomContext = createContext({} as IdiomState);
export const LanguageContext = () => {
    return (
        <div>LanguageContext</div>
    )
}
