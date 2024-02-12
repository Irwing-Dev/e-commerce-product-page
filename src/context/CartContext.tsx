import { createContext, Dispatch, SetStateAction, useState } from "react";

interface CartContextProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    finalValue: number;
    setFinalValue: Dispatch<SetStateAction<number>>;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextProps>({
  count: 1,
  setCount: () => {},
  finalValue: 0,
  setFinalValue: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(1);
  const [finalValue, setFinalValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ count, setCount, finalValue, setFinalValue, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};