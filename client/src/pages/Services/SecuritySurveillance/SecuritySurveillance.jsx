import "./SecuritySurveillance.css";
import SEO from "../../../components/SEO/SEO";

import CameraTwo from "../../../assets/images/other/camera2.jpg";
import CameraFive from "../../../assets/images/other/camera5.jpg";
import CameraThree from "../../../assets/images/other/camera3.jpg";

function SecuritySurveillance() {
  return (
    <article className="security-surveillance">
      <SEO
        title="Business Security & Surveillance | Heath Telephone & Data"
        description="Business security camera and surveillance system design and installation from Heath Telephone & Data across the CSRA and surrounding areas."
        canonicalPath="/services/security-surveillance"
      />

      <section className="security-surveillance__hero">
        <div className="security-surveillance__hero-overlay">
          <div className="container security-surveillance__hero-content">
            <p className="security-surveillance-hero__eyebrow">
              Security &amp; Surveillance
            </p>

            <h1>Protect What Matters Most.</h1>

            <p className="security-surveillance-hero__text">
              Heath Telephone &amp; Data designs and installs dependable
              security camera and surveillance systems for businesses,
              facilities, and properties of all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="security-surveillance__section security-surveillance__section--dark">
        <div className="container security-surveillance__section-content">
          <div className="security-surveillance__text">
            <p className="security-surveillance__eyebrow">
              Reliable Visibility
            </p>

            <h2>Modern Surveillance Solutions</h2>

            <p>
              A dependable surveillance system provides more than recorded
              video. It provides greater visibility and access to the
              information you need when something unexpected happens.
            </p>

            <p>
              Heath Telephone &amp; Data designs systems around the property,
              coverage requirements, network infrastructure, and long-term needs
              of each client.
            </p>
          </div>

          <div className="security-surveillance__image-wrapper">
            <img
              src={CameraFive}
              alt="Close-up of an outdoor security camera"
              className="security-surveillance__image"
            />
          </div>
        </div>
      </section>

      <section className="security-surveillance__section security-surveillance__section--gradient">
        <div className="container security-surveillance__section-content security-surveillance__section-content--reversed">
          <div className="security-surveillance__image-wrapper">
            <img
              src={CameraTwo}
              alt="Outdoor surveillance cameras installed with protected conduit"
              className="security-surveillance__image"
            />
          </div>

          <div className="security-surveillance__text">
            <p className="security-surveillance__eyebrow">
              Surveillance Services
            </p>

            <h2>Security Systems Designed Around Your Property</h2>

            <p>
              Heath Telephone &amp; Data can design systems that include IP
              cameras, indoor and outdoor coverage, video recording, remote
              viewing, and flexible expansion as your needs change.
            </p>

            <p>
              Every installation is planned to provide useful coverage, reliable
              recording, and convenient access without creating an unnecessarily
              complicated system.
            </p>
          </div>
        </div>
      </section>

      <section className="security-surveillance__section security-surveillance__section--dark">
        <div className="container security-surveillance__section-content">
          <div className="security-surveillance__text">
            <p className="security-surveillance__eyebrow">
              Professional Installation
            </p>

            <h2>Careful Planning From Start to Finish</h2>

            <p>
              The effectiveness of a surveillance system depends on more than
              the cameras themselves. Camera placement, viewing angles, cable
              routing, recording capacity, network configuration, and future
              expansion all need to be considered.
            </p>

            <p>
              Our team approaches each installation with careful attention to
              coverage, reliability, clean workmanship, and long-term system
              performance.
            </p>
          </div>

          <div className="security-surveillance__image-wrapper">
            <img
              src={CameraThree}
              alt="Security camera installed in a commercial environment"
              className="security-surveillance__image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default SecuritySurveillance;
