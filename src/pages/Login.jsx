import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    // 🔥 AQUÍ ocurre la magia real
    await login(email, password);

    alert("Login realizado (revisa si el token se guardó)");
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <form
        className="col-12 col-md-5 shadow p-4 rounded bg-white"
        onSubmit={validarLogin}
      >
        <h2 className="mb-4 text-center">Login</h2>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Ingresa tu password"
          />
        </div>

        <button type="submit" className="btn btn-dark w-100 mt-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;