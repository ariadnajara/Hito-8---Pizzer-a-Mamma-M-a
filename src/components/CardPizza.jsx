const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow-sm mb-4" style={{ width: "100%", borderRadius: "8px" }}>
      {/* Imagen */}
      <img
        src={img}
        className="card-img-top"
        alt={`Pizza ${name}`}
        style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
      />

      <div className="card-body">
        {/* Título de la Pizza */}
        <h5 className="card-title fw-normal mb-3">Pizza {name}</h5>
        
        <hr className="my-3" />

        {/* Sección de Ingredientes */}
        <div className="text-center mb-3">
          <p className="fw-light text-muted mb-1" style={{ fontSize: "0.9rem" }}>
            Ingredientes:
          </p>
          <p className="card-text fw-light" style={{ fontSize: "0.85rem" }}>
            🍕 {ingredients.join(", ")}
          </p>
        </div>

        <hr className="my-3" />

        {/* Sección de Precio */}
        <h4 className="text-center fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
          Precio: ${price.toLocaleString("es-CL")}
        </h4>

        {/* Botones */}
        <div className="d-flex justify-content-between px-2 pb-2">
          <button className="btn btn-outline-secondary btn-sm px-3" style={{ color: "#666" }}>
            Ver Más 👀
          </button>

          <button className="btn btn-dark btn-sm px-3">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
export const pizzas = [
    {
        id: "p001",
        name: "Napolitana",
        price: 5950,
        ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
        img: "assets/napolitana.jpg",
    },
    {
        id: "p002",
        name: "Española",
        price: 6950,
        ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
        img: "assets/espanola.jpg",
    },
    {
        id: "p003",
        name: "Pepperoni",
        price: 6950,
        ingredients: ["mozzarella", "pepperoni", "orégano"],
        img: "assets/pepperoni.jpg",
    },
];

