import "./ManagedIT.css";

import serverRack from "../../../assets/images/services/serverRack.jpg";
import rack2 from "../../../assets/images/services/rack2.jpg";
import code1 from "../../../assets/images/services/code1.jpg";

function ManagedIT() {
  return (
    <article className="managed-it">
      <section className="managed-it__hero">
        <div className="managed-it__hero-overlay">
          <div className="container managed-it__hero-content">
            <p className="managed-it-hero__eyebrow">Managed IT Services</p>

            <h1>
              Reliable Technology.
              <br />
              Proactive Support.
            </h1>

            <p className="managed-it-hero__text">
              Keep your business productive with ongoing monitoring,
              maintenance, planning, and technical support from Heath Telephone
              &amp; Data.
            </p>
          </div>
        </div>
      </section>

      <section className="managed-it__section managed-it__section--dark">
        <div className="container managed-it__section-content">
          <div className="managed-it__text">
            <p className="managed-it__eyebrow">Complete IT Management</p>

            <h2>Technology Support Built Around Your Business</h2>

            <p>
              Managing business technology requires more than reacting when
              something breaks. Heath Telephone &amp; Data provides ongoing
              support designed to keep your systems reliable, secure, and ready
              for daily operations.
            </p>

            <p>
              From routine maintenance and system updates to technology planning
              and troubleshooting, we help reduce disruption while giving your
              team the dependable tools they need to work effectively.
            </p>
          </div>

          <div className="managed-it__image-wrapper">
            <img
              src={serverRack}
              alt="Server racks supporting managed IT infrastructure"
              className="managed-it__image"
            />
          </div>
        </div>
      </section>

      <section className="managed-it__section managed-it__section--gradient">
        <div className="container managed-it__section-content managed-it__section-content--reversed">
          <div className="managed-it__image-wrapper">
            <img
              src={rack2}
              alt="Network servers monitored for performance and reliability"
              className="managed-it__image"
            />
          </div>

          <div className="managed-it__text">
            <p className="managed-it__eyebrow">Proactive Monitoring</p>

            <h2>Find Problems Before They Disrupt Your Business</h2>

            <p>
              Proactive monitoring helps identify performance issues, system
              failures, and potential risks before they become larger
              disruptions.
            </p>

            <p>
              By monitoring the health of your technology and addressing
              concerns early, Heath helps improve reliability, reduce avoidable
              downtime, and keep your systems operating smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="managed-it__section managed-it__section--dark">
        <div className="container managed-it__section-content">
          <div className="managed-it__text">
            <p className="managed-it__eyebrow">24/7 Support</p>

            <h2>Help When Your Business Needs It</h2>

            <p>
              Technology problems do not always happen during convenient
              business hours. Heath provides around-the-clock support for issues
              that require timely attention.
            </p>

            <p>
              Whether your team needs troubleshooting, remote assistance, or
              help responding to a critical system issue, dependable support is
              available to help minimize disruption and restore productivity.
            </p>
          </div>

          <div className="managed-it__image-wrapper">
            <img
              src={code1}
              alt="Software and systems monitored through managed IT support"
              className="managed-it__image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default ManagedIT;
