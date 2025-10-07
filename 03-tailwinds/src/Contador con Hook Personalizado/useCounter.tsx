import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState<number>(10);
    const increaseBy = (value: number) => {
        setCount(count + value);
    };
    const decreaseBy = (value: number) => {
        setCount(count - value);
    };
    const reset = (value: number) => {
        setCount(value);
    };


    return {
        //properties
        count,


        //actions
        increaseBy,
        decreaseBy,
        reset,
    };
};
