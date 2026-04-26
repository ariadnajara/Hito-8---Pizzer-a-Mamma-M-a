import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    };

    getPizzas();
  }, []);

  return (
    <div>
      <h1>Pizzas 🍕</h1>

      <div className="pizzas-container">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
      <img src="http://localhost:5000/images/p001.jpg" alt="test" />
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>

            <ul>
              {pizza.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>

            <p><strong>${pizza.price}</strong></p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;