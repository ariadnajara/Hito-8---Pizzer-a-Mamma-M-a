import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // 👈 AQUÍ está la clave
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    };

    getPizza();
  }, [id]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="pizza-detail text-center mt-5">
      <img
        src={pizza.img || `/images/${pizza.id}.jpg`}
        alt={pizza.name}
        width="300"
      />

      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>

      <h3>Ingredientes:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>🍕 {ing}</li>
        ))}
      </ul>

      <p><strong>Precio: ${pizza.price}</strong></p>

      <button className="btn btn-dark">
        Añadir al carrito 🛒
      </button>
    </div>
  );
};

export default Pizza;