import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavoritesCount } from "../Redux/selectors/favoritesSelectors";
import { useContext } from "react";
import { LangContext } from "../App";
export default function ({ btn }) {
  const lang = useContext(LangContext);

  const favoritesCount = useSelector(selectFavoritesCount);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  text-light "
        style={{
          backgroundColor: "#0A100D",
          color: "white",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
      >
        <div className="container text-light ">
          <a className="navbar-brand text-light " to="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link text-light " to="/home">
                Home
              </Link>
              <Link className="nav-link text-light " to="/favorites">
                Favorites ({favoritesCount})
              </Link>
              <Link className="nav-link text-light " to="/login">
                Login
              </Link>
              <Link className="nav-link text-light " to="/regestration">
                Regestration
              </Link>
              {btn}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
