import "./CloudSolutions.css";


import cloudInfrastructure from "../../../assets/images/services/cloud4.jpg";
import cloudConnectivity from "../../../assets/images/services/cloud2.jpg";
import cloudApplications from "../../../assets/images/services/cloud3.jpg";

function CloudSolutions() {
  return (
    <main className="cloud-solutions">
      {/* Hero */}
      <section className="cloud-solutions__hero">
        <div className="container cloud-solutions__hero-overlay">
          <div className="cloud-solutions__hero-content">
            <p className="cloud-solutions-hero__eyebrow">
              Cloud &amp; Hybrid Infrastructure
            </p>

            <h1>Infrastructure That Fits Your Business.</h1>

            <p className="cloud-solutions-hero__text">
              Heath Telephone &amp; Data designs cloud, local, and hybrid
              infrastructure solutions based on how your business actually
              works. From secure cloud services to physical servers and local
              storage, we help build reliable systems that fit your operational
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="cloud-solutions__section cloud-solutions__section--dark">
        <div className="container cloud-solutions__section-content">
          <div className="cloud-solutions__text">
            <h2>Cloud, Local &amp; Hybrid Infrastructure</h2>

            <p>
              Not every business belongs entirely in the cloud. Some
              applications, workloads, and data are better suited to local
              infrastructure, while others benefit from the flexibility and
              scalability of cloud services.
            </p>

            <p>
              We help design the right combination of cloud services, physical
              servers, local storage, and connected infrastructure based on your
              operational requirements, security needs, and budget.
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
            <h2>Secure Access Wherever You Work</h2>

            <p>
              Give your team reliable access to the applications, files, and
              systems they need whether they're working in the office, remotely,
              or across multiple locations.
            </p>

            <p>
              We help connect cloud and local resources so your employees can
              work efficiently without sacrificing security, reliability, or
              control.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="cloud-solutions__section cloud-solutions__section--dark">
        <div className="container cloud-solutions__section-content">
          <div className="cloud-solutions__text">
            <h2>Business Applications &amp; Collaboration</h2>

            <p>
              Keep your team connected with the productivity tools, email, file
              sharing, and collaboration platforms your business relies on every
              day.
            </p>

            <p>
              We help integrate these services with your existing technology
              environment so users can access the tools and information they
              need securely and reliably.
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
