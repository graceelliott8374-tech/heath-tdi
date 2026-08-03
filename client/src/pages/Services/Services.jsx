import { NavLink } from "react-router-dom";

import "./Services.css";

const services = [
  {
    title: "Managed IT",
    description:
      "Proactive monitoring, maintenance, system management, and strategic IT support that keeps your business productive.",
    image: "/src/assets/images/services/serverRack.jpg",
    path: "/services/managed-it",
  },
  {
    title: "Structured Cabling",
    description:
      "Professional voice and data cabling designed for reliable, organized, and scalable business infrastructure.",
    image: "/src/assets/images/services/cables_server.jpg",
    path: "/services/structured-cabling",
  },
  {
    title: "Fiber Optics",
    description:
      "High-speed fiber installation, testing, repair, and certification for dependable network performance.",
    image: "/src/assets/images/services/fiberOptic2.jpg",
    path: "/services/fiber-optics",
  },
  {
    title: "VoIP",
    description:
      "Modern business phone systems with flexible features, clear communication, and dependable reliability.",
    image: "/src/assets/images/services/VOIPphone.jpg",
    path: "/services/voip",
  },
  {
    title: "Cybersecurity",
    description:
      "Practical security solutions designed to protect your systems, users, accounts, and business data.",
    image: "/src/assets/images/services/cybersecurity2.jpg",
    path: "/services/cybersecurity",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure cloud services that support collaboration, business continuity, storage, and remote productivity.",
    image: "/src/assets/images/services/cloud2.jpg",
    path: "/services/cloud-solutions",
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero__overlay">
          <div className="container services-hero__content">
            <p className="services-hero__eyebrow">Our Services</p>

            <h1>Technology Solutions That Keep Your Business Moving.</h1>

            <p className="services-hero__text">
              From managed IT and structured cabling to fiber optics, VoIP,
              cybersecurity, and cloud solutions, Heath Telephone &amp; Data
              delivers dependable technology services for businesses throughout
              the CSRA.
            </p>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid-section__heading">
            <p className="services-grid-section__eyebrow">
              Complete Technology Support
            </p>

            <h2>Explore Our Services</h2>

            <p>
              Select a service to learn how Heath Telephone &amp; Data can help
              strengthen your business technology and communications.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <NavLink
                key={service.path}
                to={service.path}
                className="service-card"
              >
                <div className="service-card__image-wrapper">
                  <img
                    src={service.image}
                    alt=""
                    className="service-card__image"
                  />
                </div>

                <div className="service-card__content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-card__link">
                    Learn More <span aria-hidden="true">→</span>
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__content">
          <h2>Not Sure Where to Start?</h2>

          <p>
            Every business has unique technology needs. Whether you're planning
            a new project, upgrading your infrastructure, or looking for ongoing
            IT support, we're here to help you find the right solution.
          </p>

          <div className="services-cta__buttons">
            <NavLink to="/contact" className="services-cta__button">
              Request a Consultation
            </NavLink>

            <NavLink
              to="/support"
              className="services-cta__button services-cta__button--secondary"
            >
              Get Support
            </NavLink>
          </div>
        </div>
      </section>

      
    </main>
  );
}

export default Services;
