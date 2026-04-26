import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404 🚫</h1>
      <h2 className="mb-4">Página no encontrada</h2>

      <p className="mb-4">
        Lo sentimos, la ruta que buscas no existe.
      </p>

      <Link to="/" className="btn btn-dark">
        ⬅ Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;