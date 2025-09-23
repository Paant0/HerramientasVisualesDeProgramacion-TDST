import React, { useState } from 'react'

export const List = () => {

    const [query, setQuery] = useState("");
    const BASE = [
        "Huevos",
        "Tomates",
        "Papaya",
        "Maiz",
        "Cebolla",
        "Lechuga",
        "Zanahoria",
        "Acelga",
        "Apio",
        "Perejil",
        "Cilantro",
        "Brocoli",
        "Coliflor",
        "Espinaca",
        "Repollo",
        "Pepino"];

    const list = BASE.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase()));


    return (
        <>

            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar..."
                    className="w-full border border-gray-300 rounded px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />

                {list.length > 0 ? (
                    <ul className="divide-y divide-gray-200 border border-gray-200 rounded">
                        {list.map((item) => (
                            <li
                                key={item}
                                className="p-2 hover:bg-gray-50 transition-colors duration-150"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 italic">No hay coincidencias.</p>
                )}
            </div>

        </>
    )
}
