import { useState } from "react";
import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/kodigoMusic/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="card text-center mb-3 card-color text-light " style={{ with: "18rem" }}>
      <div className="card-body">
      <h2 className="card-title">KODIGO MUSIC - LOGIN</h2>
        <form onSubmit={handleLogin}>
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
            aria-describedby="passwordHelpBlock"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div id="passwordHelpBlock" className="form-text text-white-50">
            Your password must be 8-20 characters long, contain letters and <br/>
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
          {error && <p>{error}</p>}
          <button type="submit" className="btn btn-dark my-2">Login</button>
          <p>
            No tienes cuenta?{" "}
            <Link to="/kodigoMusic/session/signup">Crea un nueva cuenta</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
