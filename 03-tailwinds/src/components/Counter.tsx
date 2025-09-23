import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(10)





    return (
        <>

            <h3>
                Counter
                <small>
                    {" " + count}
                </small></h3>

            <div className='flex gap-4'>

                <button className="btn-Disminuir  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count - 1)}>
                    -1
                </button>

                <button className="btn-Aumentar bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
                    +1
                </button>

            </div>

        </>

    )
}