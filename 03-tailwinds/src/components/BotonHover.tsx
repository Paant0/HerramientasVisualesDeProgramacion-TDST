import React, { useState } from 'react'

export const BotonHover = () => {
    const [disabled, setDisabled] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <>

            <div>
                <button
                    disabled={disabled}
                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Boton
                </button>
                <input type="checkbox" id="toggle" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} className="cursor-pointer"
                />
                {disabled ? "desactivado" : "activado"}

            </div>

        </>
    )
}
