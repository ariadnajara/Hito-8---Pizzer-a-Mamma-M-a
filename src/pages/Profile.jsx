import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mt-5 text-center">
      <h2>👤 Perfil</h2>

      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;