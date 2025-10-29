import React from 'react'
import { createContext, useContext } from "react";


interface IdiomState {
    language: "es" | "en";
    CambiarIdioma: () => void;
}

export const IdiomContext = createContext({} as IdiomState);
export const LanguageContext = () => {
    return (
        <div>LanguageContext</div>
    )
}
