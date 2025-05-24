import React, { useRef, useState, createContext, useContext } from "react";
import "./homepage.css";
import Sliding from "../Sliding/Sliding";
import Footer from "../Footer/Footer";
import Logo from "../../Assets/Logo.jpg";
import Cards from "../Cards/Cards";
import Services from "../Services/Services";
import Download from "../Download/Download";
import GlobalStats from "../GlobalStats/GlobalStats";
import { Link } from "react-router-dom";
import Payment from "../Payment/Payment";
import TrackDriver from "../Location/TrackDriver/TrackDriver";
import Location from "../Location/Location";
import BookingSummary from "../BookingSummary/BookingSummary";
import Login from "../Login/login";
import Login1 from "../Login1/Login";
import PublishRide from "../PublishRide/PublishRide";
import Profile from "../Profile/Profile";

import MainHome from "../MainHome/MainHome";
import Page2 from "../Page2/Page2";
import DriverLogin from "../DriverLogin/DriverLogin";

import Features from "../Features/Features";
import Fetched_rides from "../Fetched_rides/Fetched_rides";
import BookRide from "../BookRide/BookRide";
import Search from "../Search/Search";
import Help from "../Help/Help";
import Signup from "../Signup/signup";

export const SearchContext = createContext();
export const HelpContext = createContext();

export default function Homepage() {
  const slidingRef = useRef(null);
  const footerRef = useRef(null); 

  // State to manage which component to display
  const [activeComponent, setActiveComponent] = useState("MainHome");

  // Functions to handle component change
  const showMainHome = () => {
    setActiveComponent("MainHome");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const showLoginPassenger = () => {
    setActiveComponent("Login");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const showLoginDriver = () => {
    setActiveComponent("DriverLogin");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to footer
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ShowSearch = () => {
    setActiveComponent("Rides");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeNavbar = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const ShowHelp = () => {
    setActiveComponent("Help");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const ShowPublish = () => {
    setActiveComponent("Publish");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    const featuresElement = document.getElementById("features-section");
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Login":
        return <Login />;
      case "DriverLogin":
        return <DriverLogin />;

      case "Rides":
        return <Search />;
      case "Help":
        return <Help />;
      case "Signup":
        return <Signup />;
      case "Publish":
        return <PublishRide />;
      default:
        return (
          <SearchContext.Provider value={{ ShowSearch, ShowPublish }}>
            <HelpContext.Provider value={{ ShowHelp }}>
              <MainHome scrollToFeatures={scrollToFeatures} />
            </HelpContext.Provider>
          </SearchContext.Provider>
        );
    }
  };

  return (
    <div>
      <div className="homepage-container bg-black">
        <div className="mb-5">
          <nav
            className="navbar fixed-top navbar-expand-lg navbar-light bg-white mb-5"
            ref={slidingRef}
          >
            <div className="container-fluid gap-4">
              <a
                class="navbar-brand d-flex align-items-center ms-3 hidden-overflow"
                href="#"
              >
                <img
                  src={Logo}
                  alt="Taxica Logo"
                  width="50"
                  height="40"
                  class="me-2"
                />
                <span className="text-[#111010]">ca</span>
                <span className="text-green-600">bb</span>
                <span className="text-[#111010]">mate</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item m-2">
                    <a
                      className="nav-link"
                      onClick={() => {
                        closeNavbar();
                        showMainHome();
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item m-2">
                    <a
                      className="nav-link"
                      onClick={() => {
                        closeNavbar();
                        scrollToFeatures(); // Calls the function passed from Homepage
                      }}
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item dropdown m-2">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="taxiDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Drivers
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="taxiDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            closeNavbar();
                            showLoginDriver();
                          }}
                        >
                          Login as Driver
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown m-2 ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="serviceDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Passengers
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="serviceDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            closeNavbar();
                            showLoginPassenger();
                          }}
                        >
                          Login as passenger
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item m-2">
                    <a
                      className="nav-link"
                      onClick={() => {
                        closeNavbar();
                        scrollToFooter();
                      }}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Render the selected component */}
        {renderActiveComponent()}

        <div ref={footerRef}>
          <Footer
            onJumpClick={() =>
              slidingRef.current.scrollIntoView({ behavior: "smooth" })
            }
            onHomeClick={showMainHome}
            onAboutClick={scrollToFeatures}
          />
        </div>
      </div>
    </div>
  );
}