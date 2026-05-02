import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { total = 0 } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Logo / Nombre */}
      <Link className="navbar-brand fw-bold" to="/">
        🍕 Mamma Mía
      </Link>

      {/* Botón responsive */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Contenido */}
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Links izquierda */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/profile">Perfil</Link>
          </li>
        </ul>

        {/* Derecha */}
        <div className="d-flex align-items-center gap-3">
          <Link className="btn btn-outline-light btn-sm" to="/login">
            Login
          </Link>

          <Link className="btn btn-outline-light btn-sm" to="/register">
            Register
          </Link>

          <Link className="btn btn-warning btn-sm" to="/cart">
            🛒 ${total.toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
}