import "./Cybersecurity.css";


import cybersecurityAnalyst from "../../../assets/images/services/cybersecurity3.jpg";
import cybersecurityLock from "../../../assets/images/services/cybersecurity4.jpg";
import secureChip from "../../../assets/images/services/secureChip.jpg";

function Cybersecurity() {
  return (
    <main className="cybersecurity">
      {/* Hero */}

      <section className="cybersecurity__hero">
        <div className="container cybersecurity__hero-overlay">
          <div className="cybersecurity__hero-content">
            <p className="cybersecurity-hero__eyebrow">Cybersecurity</p>

            <h1>Protect Your Business From Modern Threats.</h1>

            <p className="cybersecurity-hero__text">
              Cyberattacks are constantly evolving. Heath Telephone &amp; Data
              delivers proactive cybersecurity solutions that help safeguard
              your network, devices, users, and critical business data.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 */}

      <section className="cybersecurity__section cybersecurity__section--dark">
        <div className="container cybersecurity__section-content">
          <div className="cybersecurity__text">
            <p className="cybersecurity-hero__eyebrow">Threat Detection</p>

            <h2>Stay One Step Ahead of Cyber Threats</h2>

            <p>
              Today's businesses face ransomware, phishing attacks, malware, and
              increasingly sophisticated cyber threats. A proactive security
              strategy helps identify risks before they disrupt your operations.
            </p>

            <p>
              Heath Telephone &amp; Data helps businesses strengthen their
              defenses through continuous monitoring, security best practices,
              and layered protection designed to reduce vulnerabilities.
            </p>
          </div>

          <div className="cybersecurity__image-wrapper">
            <img
              src={cybersecurityAnalyst}
              alt="Cybersecurity analyst monitoring network activity"
              className="cybersecurity__image"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}

      <section className="cybersecurity__section cybersecurity__section--gradient">
        <div className="container cybersecurity__section-content cybersecurity__section-content--reversed">
          <div className="cybersecurity__image-wrapper">
            <img
              src={cybersecurityLock}
              alt="Digital security protecting business systems"
              className="cybersecurity__image"
            />
          </div>

          <div className="cybersecurity__text">
            <p className="cybersecurity-hero__eyebrow">Data Protection</p>

            <h2>Protect Your Critical Business Data</h2>

            <p>
              Your data is one of your organization's most valuable resources.
              Protecting customer information, financial records, and business
              operations requires more than a firewall.
            </p>

            <p>
              We help implement security practices that strengthen access
              control, improve endpoint security, and reduce the risk of data
              loss or unauthorized access.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="cybersecurity__section cybersecurity__section--dark">
        <div className="container cybersecurity__section-content">
          <div className="cybersecurity__text">
            <p className="cybersecurity-hero__eyebrow">Proactive Security</p>

            <h2>Security Built for Long-Term Confidence</h2>

            <p>
              Effective cybersecurity is an ongoing process, not a one-time
              installation. Regular assessments, system updates, and employee
              awareness all play an important role in protecting your business.
            </p>

            <p>
              Heath Telephone &amp; Data provides practical security solutions
              that help businesses operate with greater confidence in an
              increasingly connected world.
            </p>
          </div>

          <div className="cybersecurity__image-wrapper">
            <img
              src={secureChip}
              alt="Secure computer hardware representing advanced cybersecurity"
              className="cybersecurity__image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cybersecurity;
