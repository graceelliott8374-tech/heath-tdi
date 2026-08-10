import "./Contact.css";
import Button from "../../components/Button/Button";
import RingoTruck from "../../assets/images/ringo/Ringo_Truck.jpg";

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
                technology, or need dependable IT support, our team is ready to
                help. Reach out today and let&apos;s discuss the right solution
                for your organization.
              </p>
            </div>
          </div>
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
                    <span>Fiber Optic Installation</span>
                  </label>

                  <label className="contact__checkbox">
                    <input type="checkbox" name="services" value="voip" />
                    <span>VoIP Phone Systems</span>
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

      {/* Technical Support Request */}

      <section className="contact__support">
        <div className="container">
          <div className="contact__portal-notice">
            <div>
              <p className="contact__portal-eyebrow">Existing Clients</p>

              <h3>Already Have an Open Service Request?</h3>

              <p>
                Sign in to the Client Support Portal to view ticket updates, add
                information, and communicate directly with our technicians.
              </p>
            </div>

            <Button to="/client-portal" className="button button--secondary">
              Client Support Portal
            </Button>
          </div>

          <div className="contact__support-card">
            <div className="contact__support-header">
              <p className="contact__eyebrow">Technical Support</p>

              <h2>Need Help?</h2>

              <p>
                If you&apos;re experiencing a technical issue or need assistance
                with your technology, submit a support request below. Our team
                will review your request and respond as quickly as possible.
              </p>
            </div>

            <form className="contact-support-form">
              <div className="contact-support-form__grid">
                <div className="contact-support-form__group">
                  <label htmlFor="support-name">Full Name *</label>
                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-support-form__group">
                  <label htmlFor="support-company">Company</label>
                  <input
                    id="support-company"
                    name="company"
                    type="text"
                    placeholder="ABC Company"
                    autoComplete="organization"
                  />
                </div>

                <div className="contact-support-form__group">
                  <label htmlFor="support-email">Email *</label>
                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="contact-support-form__group">
                  <label htmlFor="support-phone">Phone *</label>
                  <input
                    id="support-phone"
                    name="phone"
                    type="tel"
                    placeholder="(706) 555-1234"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <fieldset className="contact-support-form__fieldset">
                <legend>Issue Type *</legend>

                <div className="contact-support-form__options">
                  <label>
                    <input
                      type="radio"
                      name="issueType"
                      value="new-issue"
                      required
                    />
                    <span>New Issue</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="issueType"
                      value="existing-issue"
                    />
                    <span>Existing Issue</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="issueType"
                      value="service-request"
                    />
                    <span>Service Request</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="issueType"
                      value="project-request"
                    />
                    <span>Project Request</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className="contact-support-form__fieldset">
                <legend>Priority *</legend>

                <div className="contact-support-form__options">
                  <label>
                    <input type="radio" name="priority" value="low" required />
                    <span>Low</span>
                  </label>

                  <label>
                    <input type="radio" name="priority" value="normal" />
                    <span>Normal</span>
                  </label>

                  <label>
                    <input type="radio" name="priority" value="high" />
                    <span>High</span>
                  </label>

                  <label>
                    <input type="radio" name="priority" value="critical" />
                    <span>Critical</span>
                  </label>

                  <label>
                    <input type="radio" name="priority" value="emergency" />
                    <span>Emergency</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className="contact-support-form__fieldset">
                <legend>Services Needed</legend>

                <div className="contact-support-form__options">
                  <label>
                    <input
                      type="checkbox"
                      name="supportServices"
                      value="managed-it"
                    />
                    <span>Managed IT</span>
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="supportServices"
                      value="structured-cabling"
                    />
                    <span>Structured Cabling</span>
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="supportServices"
                      value="fiber-optics"
                    />
                    <span>Fiber Optics</span>
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="supportServices"
                      value="voip"
                    />
                    <span>VoIP</span>
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="supportServices"
                      value="cybersecurity"
                    />
                    <span>Cybersecurity</span>
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="supportServices"
                      value="cloud-solutions"
                    />
                    <span>Cloud Solutions</span>
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="supportServices"
                      value="other"
                    />
                    <span>Other</span>
                  </label>
                </div>
              </fieldset>

              <div className="contact-support-form__group">
                <label htmlFor="support-subject">Subject *</label>

                <input
                  id="support-subject"
                  name="subject"
                  type="text"
                  placeholder="Brief description of the issue"
                  required
                />
              </div>

              <div className="contact-support-form__group">
                <label htmlFor="support-description">Description *</label>

                <textarea
                  id="support-description"
                  name="description"
                  rows="8"
                  placeholder="Please describe the issue, including any error messages, affected users, equipment involved, and when the issue began."
                  required
                />
              </div>

              <Button type="submit" className="button button--primary">
                Submit Support Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Ringo */}

      <section className="contact__ringo">
        <div className="container">
          <div className="contact__ringo-card">
            <div className="contact__ringo-image">
              <img
                src={RingoTruck}
                alt="Ringo looking out of a Heath Telephone and Data company truck window"
              />
            </div>

            <div className="contact__ringo-content">
              <p className="contact__eyebrow">
                Head of Client Relations (Canine Division)
              </p>

              <h2>Want Ringo to Join the Visit?</h2>

              <p>
                Ringo is available for <strong>on-site consultations</strong>{" "}
                and <strong>scheduled support visits</strong> whenever his
                schedule allows. If you&apos;d enjoy having him accompany one of
                our technicians, simply let us know.
              </p>

              <p>
                He specializes in greeting clients, boosting morale, and
                reminding everyone that technology problems are easier to solve
                with a friendly face nearby.
              </p>

              <div className="contact__ringo-option">
                <label className="contact__checkbox">
                  <input type="checkbox" name="requestRingo" />

                  <span>
                    I&apos;d love Ringo to join our scheduled on-site
                    consultation or support visit if he&apos;s available.
                  </span>
                </label>
              </div>

              <p className="contact__ringo-note">
                *Ringo&apos;s appearances depend on his availability and the
                nature of the service appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}

      {/* Frequently Asked Questions */}
    </main>
  );
}

export default Contact;
