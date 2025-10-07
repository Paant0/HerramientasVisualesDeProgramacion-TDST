import React, { useState } from 'react'
import { useCounter } from "./useCounter";
import { StyledButton } from './StyledButton'

export const Counter = () => {
    const { count, increaseBy, decreaseBy, reset } = useCounter();

    return (
        <>

            <h3>
                Counter
                <small>
                    {" " + count}
                </small></h3>

            <div className='flex gap-4 mt-4'>
                <StyledButton label="-1" color="bg-red-600" handleClick={() => decreaseBy(1)} />
                <StyledButton label="+1" color="bg-blue-600" handleClick={() => increaseBy(1)} />
                <StyledButton label="reset" color="bg-green-600" handleClick={() => reset(10)} />
                {/*             
                <button onClick={() => increaseBy(-1)}>-1</button>
                <button onClick={() => increaseBy(1)}>+1</button> */}


            </div>

        </>

    )
}