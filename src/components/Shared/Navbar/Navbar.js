import React from "react";

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
            <a className="nav-link mr-5" href="Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="Dental Services">
              Dental Services
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mr-5 "
              href="Reviews"
              style={{ color: "#FFFFFF" }}
            >
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mr-5 "
              href="Blogs"
              style={{ color: "#FFFFFF" }}
            >
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mr-5 "
              href="Contact Us"
              style={{ color: "#FFFFFF" }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
