import { useState } from "react";

// let it change = let
type ButtonProps = {
  text?: string;
  children?: string;
};

export function Button(props: ButtonProps) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return <button onClick={increment}>{counter}</button>;
}
