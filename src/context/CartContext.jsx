import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === pizza.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === id);

      if (!existing) return prevCart; // evita crash

      if (existing.count > 1) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, count: item.count - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== id);
      }
    });
  };

  // Calcular total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};