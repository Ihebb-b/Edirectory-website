import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <NavLink to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Excellence Airport
        </h1>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
          >
            Menu
          </NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <NavLink
                to="/booking"
                className="dropdown-item"
              >
                Booking
              </NavLink>
              <NavLink
                to="/team"
                className="dropdown-item"
              >
                Our Team
              </NavLink>
              <NavLink
                to="/testimonial"
                className="dropdown-item"
              >
                Testimonial
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>
        <a href="#" className="btn btn-primary py-2 px-4">
          Book A Table
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
