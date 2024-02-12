import { CartProvider } from "@/context/CartContext"

export function CartContextProvider({ children }: {children: React.ReactNode}) {
    return <CartProvider>{children}</CartProvider>;
}