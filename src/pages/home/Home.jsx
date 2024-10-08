import "../../assets/css/Home.css";
import { FaHome } from "react-icons/fa";
import { FcMusic } from "react-icons/fc";
import { TbMusicSearch } from "react-icons/tb";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./MusicPlayer";

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); //Usuario logueado
      } else {
        setIsLoggedIn(false); //Usuario no logueado
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
      >
        <div className="container-fluid">
          <Link
            to={"/kodigoMusic/"}
            style={{ textDecoration: "underline", color: "white" }}
          >
            Plans
          </Link>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="auth-buttons">
            {/* Si el usuario no está logueado, muestra los botones de login/register */}
            {!isLoggedIn ? (
              <>
                <Link to="/kodigoMusic/session/login">
                  <button className="auth-button btn btn-danger me-2">
                    Login
                  </button>
                </Link>
                <Link to="/kodigoMusic/session/signup">
                  <button className="auth-button btn btn-danger me-2">
                    Register
                  </button>
                </Link>
              </>
            ) : (
              <button
                className="auth-button btn btn-danger me-2"
                onClick={() => auth.signOut()}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
      <div className="main-content">
        <div className="content row">
          <h1 className="text-start">Everything you need in one place</h1>
          <h5 className="text-start">Categories</h5>
          <div className="card text-bg-primary m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Nuevos Lanzamientos</h4>
            </div>
          </div>
          <div className="card text-bg-secundary m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Lista de exitos</h4>
            </div>
          </div>
          <div className="card text-bg-success m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Women's Voices</h4>
            </div>
          </div>
          <div className="card text-bg-danger m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Chill</h4>
            </div>
          </div>
          <div className="card text-bg-warning m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Los 90'</h4>
            </div>
          </div>
          <div className="card text-bg-info m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Lofi</h4>
            </div>
          </div>
          <div className="card text-bg-light m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Hip-Hop 50</h4>
            </div>
          </div>
          <div className="card text-bg-warning m-2" style={{maxWidth: '18rem'}}>
            <div className="card-body">
              <h4 className="card-title">Love</h4>
            </div>
          </div>
        </div>
        {isLoggedIn && <MusicPlayer />}

        <div className="signup-banner" style={{ display: isLoggedIn ? 'none' : 'block' }}>
          <div className="signup-content">
            <span className="icon">💎</span>
            <div className="text">
              <h4>Live the music with Kodigo Music</h4>
              <p>Create a free account to get all benefits and start listening!</p>
            </div>
            <a href="/kodigoMusic/session/signup" className="btn-signup">Regístrate gratis</a>
          </div>
        </div>
      </div>
    </>
  );
};
