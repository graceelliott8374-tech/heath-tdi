import "./FiberOptics.css";
import SEO from "../../../components/SEO/SEO";

import fiberTechnician from "../../../assets/images/services/fiberTechnician.jpg";
import fiberOptic1 from "../../../assets/images/services/fiberOptic1.jpg";
import fiberopticServer from "../../../assets/images/services/fiberopticServer.jpg";

function FiberOptics() {
  return (
    <article className="fiber-optics">
      <SEO
        title="Fiber Optic Installation & Services | Heath Telephone & Data"
        description="Professional fiber optic installation, testing, repair, and infrastructure solutions for high-speed business connectivity across the CSRA and surrounding areas."
        canonicalPath="/services/fiber-optics"
      />

      <section className="fiber-optics__hero">
        <div className="fiber-optics__hero-overlay">
          <div className="container fiber-optics__hero-content">
            <p className="fiber-optics-hero__eyebrow">Fiber Optic Solutions</p>

            <h1>Faster Connections. Built For Tomorrow.</h1>

            <p className="fiber-optics-hero__text">
              High-speed fiber optic installations designed to provide
              dependable connectivity, greater bandwidth, and room for your
              business to grow.
            </p>
          </div>
        </div>
      </section>

      <section className="fiber-optics__section fiber-optics__section--dark">
        <div className="container fiber-optics__section-content">
          <div className="fiber-optics__text">
            <p className="fiber-optics__eyebrow">Professional Installation</p>

            <h2>Precision Fiber Installation</h2>

            <p>
              Fiber optic infrastructure supports the high-capacity connections
              modern businesses depend on for voice, data, cloud services, and
              mission-critical applications.
            </p>

            <p>
              Heath Telephone &amp; Data installs fiber infrastructure with
              precision, ensuring clean routing, accurate termination, and
              dependable long-term performance.
            </p>
          </div>

          <div className="fiber-optics__image-wrapper">
            <img
              src={fiberTechnician}
              alt="Technician installing fiber optic equipment"
              className="fiber-optics__image"
            />
          </div>
        </div>
      </section>

      <section className="fiber-optics__section fiber-optics__section--gradient">
        <div className="container fiber-optics__section-content fiber-optics__section-content--reversed">
          <div className="fiber-optics__image-wrapper">
            <img
              src={fiberOptic1}
              alt="Fiber optic strands transmitting light"
              className="fiber-optics__image"
            />
          </div>

          <div className="fiber-optics__text">
            <p className="fiber-optics__eyebrow">High-Speed Performance</p>

            <h2>Built For Speed And Reliability</h2>

            <p>
              Fiber optic technology delivers exceptional bandwidth, low
              latency, and reliable performance for organizations that rely on
              fast communication and data transfer.
            </p>

            <p>
              Whether supporting cloud platforms, VoIP, or large data transfers,
              fiber provides the capacity needed for demanding business
              applications.
            </p>
          </div>
        </div>
      </section>

      <section className="fiber-optics__section fiber-optics__section--dark">
        <div className="container fiber-optics__section-content">
          <div className="fiber-optics__text">
            <p className="fiber-optics__eyebrow">Enterprise Connectivity</p>

            <h2>Ready For The Future</h2>

            <p>
              As technology continues to evolve, fiber optic infrastructure
              provides the foundation businesses need for future growth and
              expanding bandwidth requirements.
            </p>

            <p>
              Heath designs scalable fiber solutions that make it easier to
              expand capacity as your organization, locations, and technology
              requirements grow.
            </p>
          </div>

          <div className="fiber-optics__image-wrapper">
            <img
              src={fiberopticServer}
              alt="Fiber optic network equipment"
              className="fiber-optics__image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default FiberOptics;
