import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDown, List, X } from "@phosphor-icons/react";

import "./Navbar.css";

const serviceLinks = [
  {
    label: "Managed IT",
    path: "/services/managed-it",
  },
  {
    label: "Network Solutions",
    path: "/services/network-solutions",
  },
  {
    label: "WiFi & Wireless",
    path: "/services/wifi-wireless",
  },
  {
    label: "Structured Cabling",
    path: "/services/structured-cabling",
  },
  {
    label: "Fiber Optics",
    path: "/services/fiber-optics",
  },
  {
    label: "Communications",
    path: "/services/voip",
  },
  {
    label: "Security & Surveillance",
    path: "/services/security-surveillance",
  },
  {
    label: "Cybersecurity",
    path: "/services/cybersecurity",
  },
  {
    label: "Cloud & Hybrid Infrastructure",
    path: "/services/cloud-solutions",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="container navbar__content">
        <NavLink
          to="/"
          className="logo"
          aria-label="Heath Telephone and Data home"
          onClick={closeMenus}
        >
          <span className="logo__title">HEATH</span>
          <span className="logo__subtitle">Telephone &amp; Data</span>
        </NavLink>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X size={28} aria-hidden="true" />
          ) : (
            <List size={28} aria-hidden="true" />
          )}
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? "nav-links--open" : ""}`}
        >
          <li>
            <NavLink to="/" onClick={closeMenus}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenus}>
              About
            </NavLink>
          </li>

          <li
            className={`nav-dropdown ${
              isServicesOpen ? "nav-dropdown--open" : ""
            }`}
          >
            <div className="nav-dropdown__trigger">
              <NavLink to="/services" onClick={closeMenus}>
                Services
              </NavLink>

              <button
                type="button"
                className="nav-dropdown__button"
                aria-label="Toggle services menu"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((current) => !current)}
              >
                <CaretDown size={16} aria-hidden="true" />
              </button>
            </div>

            <ul className="services-dropdown">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <NavLink to={service.path} onClick={closeMenus}>
                    {service.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/whoweserve" onClick={closeMenus}>
              Who We Serve
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenus}>
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/support"
              className="nav-links__support"
              onClick={closeMenus}
            >
              Get Support
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
