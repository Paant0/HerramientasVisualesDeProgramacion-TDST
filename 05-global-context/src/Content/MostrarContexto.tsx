import React from 'react'
import { useThemeContext } from './ThemeContext'

export const MostrarContexto = () => {
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
                transition: "all 0.3s ease-in-out",
            }}
        >
            <h1>Tema actual: {tema}</h1>
            <button onClick={CambiarTema}>
                Cambiar a {tema === "light" ? "oscuro" : "claro"}
            </button>
        </div>
    )

}

