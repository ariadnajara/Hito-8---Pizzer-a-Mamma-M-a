import { Link } from "react-router-dom";

const Profile = () => {
  const email = "usuario@email.com"; // email estático por ahora

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">👤 Perfil</h2>

      <p className="fs-5">
        <strong>Email:</strong> {email}
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-danger">
          🔒 Cerrar sesión
        </button>

        <Link to="/" className="btn btn-outline-dark">
          ⬅ Volver al Home
        </Link>
      </div>
    </div>
  );
};

export default Profile;