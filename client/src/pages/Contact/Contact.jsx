import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="contact">
      {/* Hero */}

      <section className="contact__hero">
        <div className="contact__hero-overlay">
          <div className="container">
            <div className="contact__hero-content">
              <p className="contact__hero-eyebrow">
                Contact Heath Telephone &amp; Data
              </p>

              <h1>Let&apos;s Start the Conversation</h1>

              <p className="contact__hero-text">
                Whether you&apos;re planning a new installation, upgrading your
                existing systems, or looking for a dependable technology
                partner, our team is ready to help. Reach out today and
                let&apos;s discuss the right solution for your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Callout */}

      <section className="contact__support-callout">
        <div className="container contact__support-callout-inner">
          <div>
            <p className="contact__support-eyebrow">Existing Clients</p>
            <h2>Need Technical Support?</h2>
            <p>
              If you&apos;re experiencing a technical issue or need assistance
              with an existing service, visit our Get Support page.
            </p>
          </div>

          <Link to="/support" className="contact__support-link">
            Get Support
          </Link>
        </div>
      </section>

      {/* Map */}

      <section
        className="contact__map-section"
        aria-labelledby="contact-location-title"
      >
        <div className="container">
          <div className="contact__map-heading">
            <p className="contact__map-eyebrow">Our Location</p>

            <h2 id="contact-location-title">
              Visit Heath Telephone &amp; Data
            </h2>

            <p>
              4810 Technology Drive, Suite 4
              <br />
              Martinez, GA 30907
            </p>
          </div>

          <div className="contact__map-wrapper">
            <iframe
              src="https://www.google.com/maps?q=4810+Technology+Drive+Suite+4+Martinez+GA+30907&output=embed"
              title="Map showing Heath Telephone and Data at 4810 Technology Drive, Suite 4, Martinez, Georgia"
              className="contact__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* General Contact Form */}

      <section className="contact__form-section">
        <div className="container">
          <div className="contact__form-card">
            <div className="contact__form-heading">
              <p className="contact__form-eyebrow">Send Us a Message</p>

              <h2>Tell Us About Your Technology Needs</h2>

              <p>
                Select the services you are interested in and provide a few
                details about your project, organization, or general technology
                needs.
              </p>
            </div>

            <form className="contact__form">
              <div className="contact__form-grid">
                <div className="contact__field">
                  <label htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <fieldset className="contact__services">
                <legend>Services You&apos;re Interested In</legend>

                <div className="contact__services-grid">
                  <label className="contact__checkbox">
                    <input type="checkbox" name="services" value="managed-it" />
                    <span>Managed IT Services</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="network-solutions"
                    />
                    <span>Network Solutions</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="structured-cabling"
                    />
                    <span>Structured Cabling</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="fiber-optics"
                    />
                    <span>Fiber Optics</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="communications"
                    />
                    <span>Communications</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="wifi-wireless"
                    />
                    <span>WiFi &amp; Wireless</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="cybersecurity"
                    />
                    <span>Cybersecurity</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="cloud-solutions"
                    />
                    <span>Cloud Solutions</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="security-surveillance"
                    />
                    <span>Security &amp; Surveillance</span>
                  </label>

                  <label className="contact__checkbox">
                    <input
                      type="checkbox"
                      name="services"
                      value="consultation"
                    />
                    <span>Not Sure / Consultation</span>
                  </label>
                </div>
              </fieldset>

              <div className="contact__field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="7"
                  required
                />
              </div>

              <button type="submit" className="contact__submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
