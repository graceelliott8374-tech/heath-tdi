import "./VoIP.css";

function VoIP() {
  return (
    <article className="voip">
      <section className="voip__hero">
        <div className="voip__hero-overlay">
          <div className="container voip__hero-content">
            <p className="voip-hero__eyebrow">Communications</p>

            <h1>Reliable Communication. Wherever You Work.</h1>

            <p className="voip-hero__text">
              Heath Telephone &amp; Data provides reliable business
              communication solutions, from modern VoIP systems to traditional
              voice infrastructure, paging, and communication system support.
            </p>
          </div>
        </div>
      </section>

      <section className="voip__section voip__section--dark">
        <div className="container voip__section-content">
          <div className="voip__text">
            <p className="voip__eyebrow">Business Communication Systems</p>

            <h2>Voice and Paging Built for Business</h2>

            <p>
              Heath Telephone &amp; Data provides communication systems designed
              around the needs of each organization, including VoIP, digital
              telephone systems, and paging solutions.
            </p>

            <p>
              From new installations and system upgrades to configuration and
              ongoing support, we help businesses maintain clear, dependable
              communication across their teams and locations.
            </p>
          </div>

          <div className="voip__image-wrapper">
            <img
              src="/src/assets/images/services/VOIPphone4.jpg"
              alt="Business professional using a VoIP desk phone"
              className="voip__image"
            />
          </div>
        </div>
      </section>

      <section className="voip__section voip__section--gradient">
        <div className="container voip__section-content voip__section-content--reversed">
          <div className="voip__image-wrapper">
            <img
              src="/src/assets/images/services/VOIPphone2.jpg"
              alt="Employee dialing a modern VoIP business telephone"
              className="voip__image"
            />
          </div>

          <div className="voip__text">
            <p className="voip__eyebrow">VoIP &amp; Flexible Calling</p>

            <h2>Communication Wherever Business Takes You</h2>

            <p>
              VoIP systems give employees the flexibility to stay connected
              whether they're in the office, working remotely, or moving between
              locations.
            </p>

            <p>
              Features such as call forwarding, voicemail, auto attendants, and
              mobile integration help businesses manage calls efficiently while
              maintaining a consistent experience for customers.
            </p>
          </div>
        </div>
      </section>

      <section className="voip__section voip__section--dark">
        <div className="container voip__section-content">
          <div className="voip__text">
            <p className="voip__eyebrow">Installation &amp; Support</p>

            <h2>Communication Systems Built to Last</h2>

            <p>
              Reliable communication depends on properly designed and installed
              infrastructure. Heath Telephone &amp; Data installs and configures
              communication systems for dependable day-to-day performance.
            </p>

            <p>
              Ongoing service includes upgrades, troubleshooting, maintenance,
              and support to help keep voice and paging systems operating
              reliably as your organization's needs change.
            </p>
          </div>

          <div className="voip__image-wrapper">
            <img
              src="/src/assets/images/services/VOIPphone3.jpg"
              alt="Network equipment supporting VoIP communications"
              className="voip__image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default VoIP;
