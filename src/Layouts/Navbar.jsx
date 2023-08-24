import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-danger navbar-dark">
        <img
          src={require(`../Assets/Images/Tours & Travels-logos_white.png`)}
          border="0"
          width="100px"
          alt="animated-bus-image-0007"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="searchbus">
                Search Bus
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="recentbooking">
                Recent Booking
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Login
              </a>
              <div className="dropdown-menu bg-danger">
                <Link className="dropdown-item" to="login">
                  Customer Login
                </Link>
                <Link className="dropdown-item" to="travelslogin">
                  Travels Login
                </Link>
              </div>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="contact">
                Contact US
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
