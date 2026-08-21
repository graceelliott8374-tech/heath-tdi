import "./NetworkSolutions.css";


function NetworkSolutions() {
  return (
    <main className="network-solutions">
      <section className="network-solutions__hero">
        <div className="network-solutions__hero-overlay">
          <div className="container">
            <div className="network-solutions__hero-content">
              <p className="network-solutions-hero__eyebrow">
                Network Solutions
              </p>

              <h1>
                Reliable Networks Built
              
                for Business.
              </h1>

              <p className="network-solutions-hero__text">
                Heath Telephone &amp; Data designs, installs, and supports
                dependable business networks built around your organization,
                locations, users, and technology requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="network-solutions__section network-solutions__section--dark">
        <div className="container network-solutions__section-content">
          <div className="network-solutions__text">
            <p className="network-solutions__eyebrow">
              Network Design &amp; Deployment
            </p>

            <h2>Networks Built Around Your Business</h2>

            <p>
              A reliable network starts with the right design. Heath Telephone
              &amp; Data plans and installs network infrastructure based on your
              users, devices, applications, locations, and performance needs.
            </p>

            <p>
              From new installations to upgrades and expansions, we build
              dependable network infrastructure designed to support day-to-day
              operations and future growth
            </p>
          </div>

          <div className="network-solutions__image-wrapper">
            <img
              src="/src/assets/images/services/routerSwitch.jpg"
              alt="Business network router and switch equipment"
              className="network-solutions__image"
            />
          </div>
        </div>
      </section>

      <section className="network-solutions__section network-solutions__section--gradient">
        <div className="container network-solutions__section-content network-solutions__section-content--reversed">
          <div className="network-solutions__image-wrapper">
            <img
              src="/src/assets/images/services/switch1.jpg"
              alt="Network switch with connected Ethernet cables"
              className="network-solutions__image"
            />
          </div>

          <div className="network-solutions__text">
            <p className="network-solutions__eyebrow">
              Switching, Routing &amp; Security
            </p>

            <h2>Reliable Connectivity Across Your Network</h2>

            <p>
              Heath Telephone &amp; Data installs and configures the network
              equipment that keeps your systems communicating reliably,
              including switches, routers, and firewalls.
            </p>

            <p>
              Proper configuration helps improve performance, strengthen
              security, and ensure devices, users, and locations can connect to
              the resources they need.
            </p>
          </div>
        </div>
      </section>

      <section className="network-solutions__section network-solutions__section--dark">
        <div className="container network-solutions__section-content">
          <div className="network-solutions__text">
            <p className="network-solutions__eyebrow">
              Maintenance &amp; Upgrades
            </p>

            <h2>Keep Your Network Performing Reliably</h2>

            <p>
              Business networks change as organizations add users, devices,
              applications, and locations. Heath Telephone & Data provides
              troubleshooting, maintenance, upgrades, and network improvements
              to keep your infrastructure stable and efficient.
            </p>

            <p>
              Whether you're resolving connectivity problems, replacing aging
              equipment, or preparing for future growth, we can evaluate your
              existing network and help determine the right path forward.
            </p>
          </div>

          <div className="network-solutions__image-wrapper">
            <img
              src="/src/assets/images/services/technician3.jpg"
              alt="Technician servicing network infrastructure"
              className="network-solutions__image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NetworkSolutions;
