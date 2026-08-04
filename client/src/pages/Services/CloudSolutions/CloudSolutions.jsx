import "./CloudSolutions.css";

import cloudHero from "../../../assets/images/services/Cloud.jpg";
import cloudInfrastructure from "../../../assets/images/services/cloud4.jpg";
import cloudConnectivity from "../../../assets/images/services/cloud2.jpg";
import cloudApplications from "../../../assets/images/services/cloud3.jpg";

function CloudSolutions() {
  return (
    <main className="cloud-solutions">
      {/* Hero */}
      <section
        className="cloud-solutions__hero"
       
      >
        <div className="container cloud-solutions__hero-overlay">
          <div className="cloud-solutions__hero-content">
            <p className="cloud-solutions-hero__eyebrow">Cloud Solutions</p>

            <h1>Secure, Flexible Cloud Services</h1>

            <p className="cloud-solutions-hero__text">
              Modern cloud technology gives your business the flexibility to
              work from anywhere while keeping your data secure, accessible, and
              protected. Heath Telephone & Data delivers reliable cloud
              solutions that grow with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="cloud-solutions__section cloud-solutions__section--dark">
        <div className="container cloud-solutions__section-content">
          <div className="cloud-solutions__text">
            <h2>Cloud Infrastructure</h2>

            <p>
              Move critical business systems to secure cloud environments that
              provide improved reliability, scalability, and performance.
            </p>

            <p>
              Whether you're migrating existing workloads or building a new
              environment, we help design solutions that fit your business and
              your budget.
            </p>
          </div>

          <div className="cloud-solutions__image-wrapper">
            <img
              src={cloudInfrastructure}
              alt="Cloud infrastructure"
              className="cloud-solutions__image"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="cloud-solutions__section cloud-solutions__section--gradient">
        <div className="container cloud-solutions__section-content cloud-solutions__section-content--reversed">
          <div className="cloud-solutions__image-wrapper">
            <img
              src={cloudConnectivity}
              alt="Cloud connectivity"
              className="cloud-solutions__image"
            />
          </div>

          <div className="cloud-solutions__text">
            <h2>Connect From Anywhere</h2>

            <p>
              Enable employees to securely access business applications and data
              whether they're in the office, working remotely, or traveling.
            </p>

            <p>
              Reliable connectivity and secure cloud access help your team stay
              productive wherever business takes them.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="cloud-solutions__section cloud-solutions__section--dark">
        <div className="container cloud-solutions__section-content">
          <div className="cloud-solutions__text">
            <h2>Cloud Applications & Collaboration</h2>

            <p>
              Improve communication and teamwork with cloud-based productivity
              tools, file sharing, email, and collaboration platforms.
            </p>

            <p>
              We help businesses adopt cloud technologies that simplify daily
              operations while supporting future growth.
            </p>
          </div>

          <div className="cloud-solutions__image-wrapper">
            <img
              src={cloudApplications}
              alt="Cloud applications"
              className="cloud-solutions__image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CloudSolutions;
