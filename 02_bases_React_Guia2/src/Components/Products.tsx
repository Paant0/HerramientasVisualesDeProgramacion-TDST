import React from 'react'

export const Products = () => {

    interface Tienda {
        nameProduct?: String;
        Stock: number;
        price: number;
        isAvailable: boolean
    }
    const tiendas: Tienda[] = [
        {
            nameProduct: "IceCream",
            Stock: 13,
            price: 2400,
            isAvailable: true,
        },
        {
            nameProduct: "PanConQueso",
            Stock: 0,
            price: 500,
            isAvailable: false,
        },
        {
            nameProduct: "Lentejas",
            Stock: 5356,
            price: 2600,
            isAvailable: true,
        },
    ]

    return (
        <>
        <h2> HOLAAAA!!!!</h2>
            <ul>
                {tiendas.map(
                    (value, index) => <div key={index}>

                        <div>{value.nameProduct}</div>
                        <div>{value.Stock}</div>
                        <div>{value.price}</div>
                        <div>{value.isAvailable ? "Disponible" : "NoDisponible"}</div>
                        <hr />
                        

                    </div>
                )

                }
            </ul>

        </>
    )
}
