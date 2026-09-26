import "./VoIP.css";
import SEO from "../../../components/SEO/SEO";

import voipPhone4 from "../../../assets/images/services/VOIPphone4.jpg";
import voipPhone2 from "../../../assets/images/services/VOIPphone2.jpg";
import voipPhone3 from "../../../assets/images/services/VOIPphone3.jpg";

function VoIP() {
  return (
    <article className="voip">
      <SEO
        title="Business VoIP & Communication Systems | Heath Telephone & Data"
        description="Business VoIP, digital telephone, paging, installation, and communication system support from Heath Telephone & Data across the CSRA and surrounding areas."
        canonicalPath="/services/voip"
      />

      <section className="voip__hero">
        <div className="voip__hero-overlay">
          <div className="container voip__hero-content">
            <p className="voip-hero__eyebrow">Communications</p>

            <h1>Business Communications That Keep You Connected.</h1>

            <p className="voip-hero__text">
              Heath Telephone &amp; Data designs, installs, and supports
              business communication systems, including VoIP, digital telephone
              systems, paging, and the infrastructure that keeps them connected.
            </p>
          </div>
        </div>
      </section>

      {/* Business Communication Systems */}
      <section className="voip__section voip__section--dark">
        <div className="container voip__section-content">
          <div className="voip__text">
            <p className="voip__eyebrow">Business Communication Systems</p>

            <h2>Communication Solutions Built Around Your Business</h2>

            <p>
              Every organization communicates differently. Heath Telephone &amp;
              Data provides voice and paging solutions designed around your
              locations, users, workflows, and existing infrastructure.
            </p>

            <p>
              Whether you need a new phone system, an upgrade to existing
              equipment, or support for your current communications environment,
              we can help build a solution that fits the way your business
              operates.
            </p>
          </div>

          <div className="voip__image-wrapper">
            <img
              src={voipPhone4}
              alt="Business professional using a VoIP desk phone"
              className="voip__image"
            />
          </div>
        </div>
      </section>

      {/* VoIP */}
      <section className="voip__section voip__section--gradient">
        <div className="container voip__section-content voip__section-content--reversed">
          <div className="voip__image-wrapper">
            <img
              src={voipPhone2}
              alt="Employee dialing a modern VoIP business telephone"
              className="voip__image"
            />
          </div>

          <div className="voip__text">
            <p className="voip__eyebrow">VoIP &amp; Flexible Calling</p>

            <h2>Stay Connected In the Office and Beyond</h2>

            <p>
              VoIP gives businesses greater flexibility by allowing employees to
              stay connected across offices, remote work locations, and mobile
              devices using one integrated communication system.
            </p>

            <p>
              Features such as call forwarding, voicemail, auto attendants, and
              mobile integration can make it easier to manage incoming calls,
              connect employees, and provide customers with a consistent point
              of contact.
            </p>
          </div>
        </div>
      </section>

      {/* Installation & Support */}
      <section className="voip__section voip__section--dark">
        <div className="container voip__section-content">
          <div className="voip__text">
            <p className="voip__eyebrow">Installation &amp; Support</p>

            <h2>Professional Installation. Ongoing Support.</h2>

            <p>
              A communication system is only as dependable as the infrastructure
              and configuration behind it. Heath Telephone &amp; Data handles
              installation, configuration, upgrades, and troubleshooting for
              business voice and paging systems.
            </p>

            <p>
              As your organization grows or your communication needs change, our
              team can help maintain, modify, and support your system so it
              continues to serve your business effectively.
            </p>
          </div>

          <div className="voip__image-wrapper">
            <img
              src={voipPhone3}
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
