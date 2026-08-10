import "./StructuredCabling.css";

function StructuredCabling() {
  return (
    <article className="structured-cabling">
      <section className="structured-cabling__hero">
        <div className="structured-cabling__hero-overlay">
          <div className="container structured-cabling__hero-content">
            <p className="structured-cabling-hero__eyebrow">
              Structured Cabling
            </p>

            <h1>The Right Foundation For Your Network.</h1>

            <p className="structured-cabling-hero__text">
              Professionally designed and installed structured cabling systems
              that provide the reliable backbone your business depends on every
              day.
            </p>
          </div>
        </div>
      </section>

      <section className="structured-cabling__section structured-cabling__section--dark">
        <div className="container structured-cabling__section-content">
          <div className="structured-cabling__text">
            <p className="structured-cabling__eyebrow">
              Professional Installation
            </p>

            <h2>Network Infrastructure Built to Last</h2>

            <p>
              Dependable technology infrastructure starts with quality cabling.
              Heath Telephone &amp; Data installs structured cabling systems
              that provide organized, scalable infrastructure for voice, data,
              and network communications.
            </p>

            <p>
              Every installation is completed with careful planning, proper
              cable management, and attention to industry standards to ensure
              long-term reliability and performance.
            </p>
          </div>

          <div className="structured-cabling__image-wrapper">
            <img
              src="/src/assets/images/services/technician2.jpg"
              alt="Technician installing structured network cabling"
              className="structured-cabling__image"
            />
          </div>
        </div>
      </section>

      <section className="structured-cabling__section structured-cabling__section--gradient">
        <div className="container structured-cabling__section-content structured-cabling__section-content--reversed">
          <div className="structured-cabling__image-wrapper">
            <img
              src="/src/assets/images/services/cable2.jpg"
              alt="Structured cabling installed in a network rack"
              className="structured-cabling__image"
            />
          </div>

          <div className="structured-cabling__text">
            <p className="structured-cabling__eyebrow">
              Organized Infrastructure
            </p>

            <h2>Clean, Efficient Cable Management</h2>

            <p>
              Well-organized cabling makes systems easier to maintain,
              troubleshoot, and expand as your business grows.
            </p>

            <p>
              Heath designs installations that reduce clutter, improve airflow,
              simplify future upgrades, and provide a professional appearance
              inside network closets and equipment rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="structured-cabling__section structured-cabling__section--dark">
        <div className="container structured-cabling__section-content">
          <div className="structured-cabling__text">
            <p className="structured-cabling__eyebrow">Ready For The Future</p>

            <h2>Scalable Cabling for Growing Businesses</h2>

            <p>
              Your technology infrastructure should be able to grow with your
              business. Structured cabling provides the flexibility to add new
              workstations, devices, and technologies without rebuilding your
              infrastructure.
            </p>

            <p>
              Whether you're expanding your office, upgrading equipment, or
              preparing for faster network speeds, Heath installs systems built
              to support your future needs.
            </p>
          </div>

          <div className="structured-cabling__image-wrapper">
            <img
              src="/src/assets/images/services/cable1.jpg"
              alt="Network cable prepared for installation"
              className="structured-cabling__image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default StructuredCabling;
