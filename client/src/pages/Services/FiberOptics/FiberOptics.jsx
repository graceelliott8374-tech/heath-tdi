import "./FiberOptics.css";

function FiberOptics() {
  return (
    <article className="fiber-optics">
      <section className="fiber-optics__hero">
        <div className="fiber-optics__hero-overlay">
          <div className="container fiber-optics__hero-content">
            <p className="fiber-optics-hero__eyebrow">Fiber Optic Solutions</p>

            <h1>
              Faster Connections.
              <br />
              Built For Tomorrow.
            </h1>

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
              Fiber optic cabling provides the speed and reliability modern
              businesses depend on for voice, data, cloud services, and
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
              src="/src/assets/images/services/fiberTechnician.jpg"
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
              src="/src/assets/images/services/fiberOptic1.jpg"
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
              fiber provides the performance today's businesses demand.
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
              Heath designs scalable fiber solutions that support today's needs
              while preparing your organization for tomorrow's technology.
            </p>
          </div>

          <div className="fiber-optics__image-wrapper">
            <img
              src="/src/assets/images/services/fiberopticServer.jpg"
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
