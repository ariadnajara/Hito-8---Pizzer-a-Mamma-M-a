import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas([
      {
        id: "p001",
        name: "Napolitana",
        price: 5950,
        ingredients: ["mozzarella", "tomate", "albahaca"],
      },
      {
        id: "p002",
        name: "Española",
        price: 6950,
        ingredients: ["mozzarella", "Salame"],
      },
      {
        id: "p003",
        name: "Pepperoni",
        price: 6950,
        ingredients: ["mozzarella", "pepperoni"],
      },
    ]);
  }, []);

  return (
    <div className="container">
     <h1 className="text-center my-4 fw-bold">
  🍕 Pizzería Mamma Mía
</h1>

      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4">
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;