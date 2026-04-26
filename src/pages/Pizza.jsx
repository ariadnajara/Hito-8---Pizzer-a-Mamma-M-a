import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    };

    getPizza();
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} width="300" />

      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>

      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <p><strong>Precio: ${pizza.price}</strong></p>

      <button>Añadir al carrito 🛒</button>
    </div>
  );
};

export default Pizza;