import { createContext, useContext, useState } from "react";
import { IProduct } from "../models/ProductType";

interface CartContextProps {
  cartItems: IProduct[]; // Needed for header component
  addToCart: (product: IProduct) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems: cartItems, addToCart: addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "UseCart hook must be used within CartProvider component's descendants"
    );
  }

  return context;
};
