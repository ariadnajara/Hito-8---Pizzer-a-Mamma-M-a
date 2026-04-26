import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false; // cambia a true para simular usuario logueado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo + navegación */}
        <div className="d-flex align-items-center">
          <span className="navbar-brand text-white fw-light me-4">
            Pizzería Mamma Mia!
          </span>

          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-outline-light btn-sm px-3">
              🏠 Home
            </Link>

            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light btn-sm px-3">
                  🔓 Profile
                </Link>
                <button className="btn btn-outline-light btn-sm px-3">
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm px-3">
                  🔐 Login
                </Link>
                <Link to="/register" className="btn btn-outline-light btn-sm px-3">
                  🔐 Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Carrito */}
        <Link
          to="/cart"
          className="btn btn-outline-info btn-sm px-3 fw-bold text-info"
        >
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;