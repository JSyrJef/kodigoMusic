import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { Link, useNavigate } from "react-router-dom";

export const RegisterFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/kodigoMusic/session/login");
      alert('Cuenta creada exitosamente!')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="card text-center mb-3 card-color text-light "
      style={{ with: "18rem" }}
    >
      <div className="card-body">
        <h2 className="card-title">KODIGO MUSIC - CREATE ACCOUNT</h2>
        <form onSubmit={handleRegister}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
          className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
          className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {error && <p>{error}</p>}
          <button type="submit" className="btn btn-dark my-2">Register</button>
          <p>
            Ya tienes cuenta?{" "}
            <Link to="/kodigoMusic/session/login">Ingresa aqui</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
