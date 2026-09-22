import { NavLink } from "react-router-dom";

import "./Services.css";
import serverRack from "../../assets/images/services/serverRack.jpg";
import switch1 from "../../assets/images/services/switch1.jpg";
import wifi2 from "../../assets/images/services/wifi2.jpg";
import cablesServer from "../../assets/images/services/cables_server.jpg";
import fiberOptic2 from "../../assets/images/services/fiberOptic2.jpg";
import voipPhone from "../../assets/images/services/VOIPphone.jpg";
import camera3 from "../../assets/images/other/camera3.jpg";
import cybersecurity2 from "../../assets/images/services/cybersecurity2.jpg";
import cloud2 from "../../assets/images/services/cloud2.jpg";

const services = [
  {
    title: "Managed IT",
    description:
      "Proactive monitoring, maintenance, and IT support that keeps your systems reliable and your business productive.",
    image: serverRack,
    path: "/services/managed-it",
  },
  {
    title: "Network Solutions",
    description:
      "Reliable network design, installation, configuration, and support built around your business needs.",
    image: switch1,
    path: "/services/network-solutions",
  },
  {
    title: "WiFi & Wireless",
    description:
      "Reliable wireless network design, installation, coverage optimization, and support for dependable business connectivity.",
    image: wifi2,
    path: "/services/wifi-wireless",
  },
  {
    title: "Structured Cabling",
    description:
      "Professional voice and data cabling designed for reliable, organized, and scalable connectivity.",
    image: cablesServer,
    path: "/services/structured-cabling",
  },
  {
    title: "Fiber Optics",
    description:
      "Fiber optic installation, testing, repair, and infrastructure solutions for reliable high-speed connectivity.",
    image: fiberOptic2,
    path: "/services/fiber-optics",
  },
  {
    title: "Communications",
    description:
      "Modern business phone systems with flexible features and dependable connectivity.",
    image: voipPhone,
    path: "/services/voip",
  },
  {
    title: "Security & Surveillance",
    description:
      "Professional camera systems, recording solutions, remote viewing, and surveillance infrastructure for business environments.",
    image: camera3,
    path: "/services/security-surveillance",
  },
  {
    title: "Cybersecurity",
    description:
      "Practical protection for your systems, networks, accounts, and business data.",
    image: cybersecurity2,
    path: "/services/cybersecurity",
  },
  {
    title: "Cloud & Hybrid Infrastructure",
    description:
      "Secure cloud services that support collaboration, business continuity, storage, and remote productivity.",
    image: cloud2,
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

            <h1>Complete Technology Solutions.</h1>

            <p className="services-hero__text">
              From managed IT and networking to communications, cybersecurity,
              cloud, and infrastructure, Heath Telephone &amp; Data provides the
              technology businesses need to stay connected, secure, and
              productive.
            </p>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid-section__heading">
            <h2>Our Technology Services</h2>

            <p>
              Explore solutions designed to keep your business connected,
              secure, and running reliably.
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

      <section className="services-lifecycle">
        <div className="container">
          <div className="services-lifecycle__heading">
            <p className="services-lifecycle__eyebrow">Technology Lifecycle</p>

            <h2>Technology That Works From Planning to Support.</h2>

            <p>
              Reliable technology starts with the right design and continues
              through installation, management, security, and ongoing support.
              Heath Telephone &amp; Data provides solutions across the entire
              technology lifecycle.
            </p>
          </div>

          <div className="services-lifecycle__steps">
            <div className="services-lifecycle__step">
              <span className="services-lifecycle__number">01</span>
              <h3>Plan</h3>
              <p>
                Assess your current environment, identify requirements, and
                design technology around your business needs.
              </p>
            </div>

            <div className="services-lifecycle__step">
              <span className="services-lifecycle__number">02</span>
              <h3>Build</h3>
              <p>
                Install the cabling, networking, communications, wireless,
                security, and infrastructure your organization depends on.
              </p>
            </div>

            <div className="services-lifecycle__step">
              <span className="services-lifecycle__number">03</span>
              <h3>Manage</h3>
              <p>
                Maintain systems, monitor performance, manage infrastructure,
                and keep technology operating reliably.
              </p>
            </div>

            <div className="services-lifecycle__step">
              <span className="services-lifecycle__number">04</span>
              <h3>Protect</h3>
              <p>
                Strengthen systems, networks, accounts, and data with practical
                cybersecurity and continuity solutions.
              </p>
            </div>

            <div className="services-lifecycle__step">
              <span className="services-lifecycle__number">05</span>
              <h3>Support</h3>
              <p>
                Provide ongoing technical assistance, troubleshooting, and
                guidance as your technology and business needs change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__content">
          <h2>Not Sure Where to Start?</h2>

          <p>
            Every business has unique technology needs. Whether you're planning
            a new project, upgrading your infrastructure, or looking for ongoing
            IT support, Heath Telephone &amp; Data can help you find the right
            solution.
          </p>

          <div className="services-cta__buttons">
            <NavLink to="/contact" className="services-cta__button">
              Contact Us
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
