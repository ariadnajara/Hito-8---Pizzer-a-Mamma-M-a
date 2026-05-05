import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart, total } =
    useContext(CartContext);

  const { token } = useContext(UserContext);

  // 🔥 FUNCIÓN CHECKOUT
  const checkout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });

      const data = await res.json();

      alert("✅ Compra realizada con éxito 🎉");
    } catch (error) {
      console.error("Error en checkout:", error);
      alert("❌ Error al procesar la compra");
    }
  };

  return (
    <div className="container mt-4">
      <h1>Carrito 🛒</h1>

      {cart.length === 0 && <p>El carrito está vacío</p>}

      {cart.map((item) => (
        <div key={item.id} className="mb-3 border-bottom pb-2">
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.count}</p>

          <button
            className="btn btn-success btn-sm me-2"
            onClick={() => addToCart(item)}
          >
            +
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </button>
        </div>
      ))}

      <h2>Total: ${total.toLocaleString("es-CL")}</h2>

      <button
        className="btn btn-primary mt-3"
        disabled={!token}
        onClick={checkout}
      >
        Pagar 💳
      </button>

      {!token && (
        <p className="text-danger mt-2">
          Debes iniciar sesión para pagar
        </p>
      )}
    </div>
  );
}