import { createContext, Dispatch, SetStateAction, useState } from "react";

interface CartContextProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    finalValue: number;
    setFinalValue: Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<CartContextProps>({
  count: 0,
  setCount: () => {},
  finalValue: 0,
  setFinalValue: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  return (
    <CartContext.Provider value={{ count, setCount, finalValue, setFinalValue }}>
      {children}
    </CartContext.Provider>
  );
};