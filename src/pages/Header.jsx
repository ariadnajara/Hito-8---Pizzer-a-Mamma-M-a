// 1. IMPORTA la imagen primero para que Vite la reconozca
import headerBg from "../assets/Header.jpg";

const Header = () => {
  return (
    <header
      className="text-white d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        // 2. USA la variable importada dentro del url()
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        width: "100%"
      }}
    >
      <h1 className="fw-bold display-4">¡Pizzería Mamma Mia!</h1>
      <p className="fs-5 fw-light">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 border-white opacity-50" />
    </header>
  );
};

export default Header;
