import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { total = 0 } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Logo */}
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

      <div className="collapse navbar-collapse" id="navbarNav">
        {/* IZQUIERDA */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          {/* SOLO si está logueado */}
          {token && (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Perfil</Link>
            </li>
          )}
        </ul>

        {/* DERECHA */}
        <div className="d-flex align-items-center gap-3">
          
          {/* Si NO está logueado */}
          {!token ? (
            <>
              <Link className="btn btn-outline-light btn-sm" to="/login">
                Login
              </Link>

              <Link className="btn btn-outline-light btn-sm" to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              {/* Si está logueado */}
              <button
                className="btn btn-outline-light btn-sm"
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}

          {/* Carrito siempre visible */}
          <Link className="btn btn-warning btn-sm" to="/cart">
            🛒 ${total.toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
}