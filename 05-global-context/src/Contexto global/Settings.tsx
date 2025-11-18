import React, { useEffect } from "react";
import { useThemeContext } from "./ThemeContext";
import { useLanguageContext } from "./LanguageContext";


export const Settings = () => {
    const { tema, CambiarTema } = useThemeContext();
    const { language, cambiarIdioma } = useLanguageContext();


    useEffect(() => {
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.overflow = "hidden";
    }, []);

    const textos = {
        es: {
            titulo: "Configuración Actual",
            tema: "Tema",
            idioma: "Idioma",
            cambiarTema: "Cambiar Tema",
            cambiarIdioma: "Cambiar Idioma",
            temaDark: "oscuro",
            temaLight: "claro",
            english: "Inglés",
            spanish: "Español",
        },
        en: {
            titulo: "Current Settings",
            tema: "Theme",
            idioma: "Language",
            cambiarTema: "Change Theme",
            cambiarIdioma: "Change Language",
            temaDark: "dark",
            temaLight: "light",
            english: "English",
            spanish: "Spanish",
        },
    };

    const t = textos[language];

    return (
        <div
            style={{
                backgroundColor: tema === "light" ? "#fff" : "#222",
                color: tema === "light" ? "#000" : "#fff",
                height: "100vh", // 🔹 ocupa toda la pantalla
                width: "100vw", // 🔹 ancho completo
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.5s ease-in-out",
            }}
        >
            <h2>{t.titulo}</h2>
            <p>
                <strong>{t.tema}:</strong> {tema}
            </p>
            <p>
                <strong>{t.idioma}:</strong> {language === "es" ? t.spanish : t.english}
            </p>

            <div style={{ marginTop: "1rem" }}>
                <button onClick={CambiarTema} style={{ marginRight: "10px" }}>
                    {t.cambiarTema}
                </button>
                <button onClick={cambiarIdioma}>{t.cambiarIdioma}</button>
            </div>
        </div>
    );
};
