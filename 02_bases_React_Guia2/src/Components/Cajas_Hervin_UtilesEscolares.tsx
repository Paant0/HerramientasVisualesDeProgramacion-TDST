import React from 'react'

export const Cajas_Hervin_UtilesEscolares = () => {

    interface UtilesEscolares {

        nameProduct: string;
        cantidad: number;
        price: number;
        categoria?: string;
        isAvailable: boolean;
    }

    const utilesEscolares: UtilesEscolares[] = [
        {
            nameProduct: "Cuaderno",
            cantidad: 120,
            price: 2500,
            categoria: "Papelería",
            isAvailable: true,
        },
        {
            nameProduct: "Lápiz",
            cantidad: 500,
            price: 800,
            categoria: "Escritura",
            isAvailable: true,
        },
        {
            nameProduct: "Borrador",
            cantidad: 0,
            price: 600,
            isAvailable: false,
        },
        {
            nameProduct: "Colores",
            cantidad: 45,
            price: 7500,
            categoria: "Escritura",
            isAvailable: true,
        },
        {
            nameProduct: "Regla",
            cantidad: 20,
            price: 1500,
            isAvailable: true,
        }
    ];


    return (
    <>
    <div>Utiles Escolares :3</div>
    <h2>|Utiles Escolares Don Pancho|</h2>

    <ul>
                {utilesEscolares.map(
                    (value, index) => <div key={index}>

                        <li>Nombre: {value.nameProduct}</li>
                        <div>Cantidad: {value.cantidad}</div>
                        <div>Precio: {value.price}</div>
                        <div>Categoria: {value.categoria}</div>
                        <div>Disponible? {value.isAvailable ? "Disponible" : "NoDisponible"}</div>
                        <hr />
                        

                    </div>
                )

                }
            </ul>
    </>
        
    )
}
