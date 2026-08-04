import "./VoIP.css";

function VoIP() {
  return (
    <article className="voip">
      <section className="voip__hero">
        <div className="voip__hero-overlay">
          <div className="container voip__hero-content">
            <p className="voip-hero__eyebrow">VoIP Phone Systems</p>

            <h1>
              Modern Business
              <br />
              Communication.
            </h1>

            <p className="voip-hero__text">
              Reliable VoIP phone solutions that keep your business connected
              with crystal-clear calling, advanced features, and the flexibility
              to communicate from anywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="voip__section voip__section--dark">
        <div className="container voip__section-content">
          <div className="voip__text">
            <p className="voip__eyebrow">Business Phone Solutions</p>

            <h2>Professional Communication for Every Business</h2>

            <p>
              Modern VoIP systems provide far more than a traditional telephone.
              Features like voicemail-to-email, call forwarding, auto
              attendants, and mobile integration help your team stay connected
              wherever work takes them.
            </p>

            <p>
              Heath Telephone &amp; Data designs and installs dependable phone
              systems tailored to your organization's communication needs.
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
            <p className="voip__eyebrow">Advanced Features</p>

            <h2>Flexible Calling Wherever You Work</h2>

            <p>
              Whether your employees are in the office, working remotely, or
              traveling, VoIP technology keeps everyone connected using the same
              business phone system.
            </p>

            <p>
              Advanced call management features improve customer service while
              simplifying day-to-day communication throughout your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="voip__section voip__section--dark">
        <div className="container voip__section-content">
          <div className="voip__text">
            <p className="voip__eyebrow">Reliable Infrastructure</p>

            <h2>Built on a Stable Network Foundation</h2>

            <p>
              A dependable phone system starts with dependable infrastructure.
              Heath ensures your VoIP deployment is properly configured to
              deliver consistent performance and excellent call quality.
            </p>

            <p>
              From new installations to upgrades and ongoing support, we help
              businesses maintain communication they can rely on every day.
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
