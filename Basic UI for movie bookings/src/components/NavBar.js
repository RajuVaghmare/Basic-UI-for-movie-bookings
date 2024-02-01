import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center ms-auto me-auto mb-0 h1 text-white"
        >
          Movie Bookings
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center ms-auto me-auto mb-0 h1 text-white"
            >
              Home
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div style={{ width: "20px" }}></div>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
