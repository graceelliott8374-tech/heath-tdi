import "./Hero.css";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="container hero__content">
          <p className="hero__eyebrow">Managed Technology Solutions</p>

          <h1>
            Reliable IT.
            <br />
            Trusted Communications.
          </h1>

          <p className="hero__text">
            Managed IT, structured cabling, fiber optics, VoIP, cybersecurity,
            and cloud solutions for businesses across the CSRA.
          </p>

          <div className="hero__buttons">
            <NavLink
              to="/services"
              className="hero__button hero__button--primary"
            >
              Our Services
            </NavLink>

            <NavLink
              to="/support"
              className="hero__button hero__button--secondary"
            >
              Get Support
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
