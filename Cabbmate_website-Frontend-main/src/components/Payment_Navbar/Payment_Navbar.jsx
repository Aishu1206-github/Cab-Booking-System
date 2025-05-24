import React from "react";
import Logo from "../../Assets/Logo.png";

export default function Payment_Navbar() {
  return (
    <div className="homepage-container">
      <nav className="navbar  navbar-expand-lg navbar-light bg-white mt-1 ">
        <div className="container-fluid gap-4">
          <a
            className="navbar-brand d-flex align-items-center ms-3 hidden-overflow"
            href="#"
          >
            <img
              src={Logo}
              alt="Taxica Logo"
              width="40"
              height="40"
              className="me-2"
            />
            <span className="taxica-logo-text">CABBMATE</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavPayment"
            aria-controls="navbarNavPayment"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavPayment">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item dropdown m-2 ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="homeDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submenu 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item m-2">
                <a className="nav-link" href="#">
                  Offers
                </a>
              </li>
              <li className="nav-item m-2">
                <a className="nav-link" href="#">
                  Brands & Apps
                </a>
              </li>
              <li className="nav-item m-2">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item m-2">
                <button
                  className="nav-link px-3 py-2 rounded"
                  style={{ backgroundColor: "#59dab2" }}
                >
                  Pay Bill
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
