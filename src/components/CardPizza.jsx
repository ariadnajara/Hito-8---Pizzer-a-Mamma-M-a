import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  if (!pizza) return null; // 🔒 evita crash

  return (
    <div
      className="card shadow-sm mb-4"
      style={{ width: "100%", borderRadius: "8px" }}
    >
      <img
       src={`/images/${pizza.id}.jpg`}
        className="card-img-top"
        alt={`Pizza ${pizza.name}`}
        style={{
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />

      <div className="card-body">
        <h5 className="card-title fw-normal mb-3">
          Pizza {pizza.name}
        </h5>

        <hr className="my-3" />

        <div className="text-center mb-3">
          <p className="fw-light text-muted mb-1">
            Ingredientes:
          </p>
          <p className="card-text fw-light">
            🍕 {pizza.ingredients?.join(", ") || "Sin ingredientes"}
          </p>
        </div>

        <hr className="my-3" />

        <h4 className="text-center fw-bold mb-4">
          Precio: ${pizza.price?.toLocaleString("es-CL") || 0}
        </h4>

        <div className="d-flex justify-content-between px-2 pb-2">
          <button className="btn btn-outline-secondary btn-sm px-3">
            Ver Más 👀
          </button>

          <button
            className="btn btn-dark btn-sm px-3"
            onClick={() => addToCart(pizza)}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;