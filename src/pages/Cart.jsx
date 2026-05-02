import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart, total } =
    useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>

      {cart.length === 0 && <p>El carrito está vacío 🛒</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.count}</p>

          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>-</button>
        </div>
      ))}

      <h2>Total: ${total.toLocaleString()}</h2>
    </div>
  );
}