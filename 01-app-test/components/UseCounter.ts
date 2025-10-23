import { useState, useCallback } from "react";

export function useCounter() {
    const [count, setCount] = useState<number>(0);
    const onPress = () => {
        
    };
    const onLongPress = () => {
        
    };
 
  return {
        count,
        onPress,
        onLongPress
    };
    }