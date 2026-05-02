import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const RegisterPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // 🔥 LOGIN SIMULADO (hito 7)
    login();

    alert("¡Registro exitoso!");
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <form
        className="col-12 col-md-6 shadow p-4 rounded bg-white"
        onSubmit={validarDatos}
      >
        <h2 className="mb-4 text-center">Registro</h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="btn btn-dark w-100">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterPage;