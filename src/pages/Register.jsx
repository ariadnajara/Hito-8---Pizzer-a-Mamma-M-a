import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      alert("El password y la confirmación deben ser iguales.");
      return;
    }

    alert("¡Registro exitoso!");
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <form className="col-12 col-md-6 shadow p-4 rounded bg-white" onSubmit={validarDatos}>
        <h2 className="mb-4 text-center">Registro</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
        </div>
        <button type="submit" className="btn btn-dark w-100 mt-2">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
