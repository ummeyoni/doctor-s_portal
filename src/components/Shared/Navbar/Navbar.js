import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/dashboard/appointment">
              Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/dashboard/allPatients">
              All Patients
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/addDoctor">
              Add Doctors
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="#">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
