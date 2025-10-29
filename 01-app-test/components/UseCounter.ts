import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState<number>(0);

  const onPress = () => {
    if (count < 20) setCount(count + 1);
  };

  const onLongPress = () => {
    setCount(0);
  };

  return {
    count,
    onPress,
    onLongPress
  };
}