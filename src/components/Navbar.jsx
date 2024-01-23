import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import "./css/navbar.css";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { googleSignIn, logOut, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <div className="navbar-container">
        <img className="navbar-logo" src={logo} alt="logo" />
        <ul className="nabar-list-container" ref={navRef}>
          <li className="navabr-list">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navabr-list">
            <Link to="/internship" className="navbar-link">
              Internship Jobs
            </Link>
          </li>
          <li className="navabr-list">
            <Link to="/jobs" className="navbar-link">
              Fresher Jobs
            </Link>
          </li>
          {/* <li className="navabr-list">
            <Link to="/new-movies" className="navbar-link">
              New Movies
            </Link>
          </li> */}
          <li className="navabr-list">
            <Link to="/movies" className="navbar-link">
              Movies
            </Link>
          </li>
          <div
            className="navbar-authentication"
            style={{ color: "#fff", fontSize: "18px", cursor: "pointer" }}
          >
            {user ? (
              <Popup
                trigger={
                  <button className="profile-btn-setting">
                    Welcome, {user.displayName}
                  </button>
                }
                modal
                nested
                className="profile-popup"
              >
                {(close) => (
                  <div className="model">
                    <ul className="profile-popup-window">
                      <li className="profile-popup-window-list">
                        <button className="profile-popup-window-list-btn">
                          {user.displayName}
                        </button>
                      </li>
                      <li className="profile-popup-window-list">
                        <button className="profile-popup-window-list-btn">
                          {user.email}
                        </button>
                      </li>
                      {user.email === "combinebhaichara@gmail.com" ? (
                        <li className="profile-popup-window-list">
                          <button
                            className="profile-popup-window-list-btn"
                            onClick={() => navigate("/account/admin")}
                          >
                            admin
                          </button>
                        </li>
                      ) : null}
                      <li className="profile-popup-window-list">
                        <button
                          className="profile-popup-window-list-btn"
                          onClick={handleSignOut}
                        >
                          Logout
                        </button>
                      </li>
                      <li className="profile-popup-window-list">
                        <button
                          onClick={() => close()}
                          className="profile-popup-window-list-btn"
                        >
                          Close
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </Popup>
            ) : (
              <GoogleButton onClick={handleGoogleSignIn} />
            )}
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
