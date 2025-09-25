import React, { useState } from 'react'
import { useCounter } from "./useCounter";
import { StyledButton } from './StyledButton'

export const Counter = () => {
    const { count, increaseBy } = useCounter();

    return (
        <>

            <h3>
                Counter
                <small>
                    {" " + count}
                </small></h3>

            <div className='flex gap-4 mt-4'>
                <StyledButton label="-1" color="bg-red-600" handleClick={() => increaseBy(-1)} />
                <StyledButton label="+1" color="bg-blue-600" handleClick={() => increaseBy(1)} />
                {/*             
                <button onClick={() => increaseBy(-1)}>-1</button>
                <button onClick={() => increaseBy(1)}>+1</button> */}


            </div>

        </>

    )
}