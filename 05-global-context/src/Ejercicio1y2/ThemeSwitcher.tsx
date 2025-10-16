import React from 'react'
import { useThemeContext } from './ThemeContext';

export const ThemeSwitcher = () => {
    const { tema, CambiarTema } = useThemeContext();
    React.useEffect(() => {
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.overflow = "hidden"; // elimina el scroll
    }, []);
    return (
        <div
            style={{
                backgroundColor: tema === "light" ? "#fff" : "#222",
                color: tema === "light" ? "#000" : "#fff",
                height: "100vh", // ocupa toda la altura visible
                width: "100%", // ancho completo sin crear scroll
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.5s ease-in-out",
            }}
        >
            <h1>Tema actual: {tema}</h1>
            <button onClick={CambiarTema}
                style={{
                    font: "Roboto",
                    border: "2px",
                    backgroundColor: tema === "light" ? "#000000ff" : "#ffffffff",
                    color: tema === "light" ? "#ffffffff" : "#000000ff",
                }
                }>
                Cambiar a {tema === "light" ? "oscuro" : "claro"}
            </button>
        </div>
    )

}
