import "./Support.css";
import Button from "../../components/Button/Button";
import RingoTruck from "../../assets/images/ringo/Ringo_Truck.jpg";

function Support() {
  return (
    <main className="support">
      {/* Hero */}

      <section className="support__hero">
        <div className="support__hero-overlay">
          <div className="container">
            <div className="support__hero-content">
              <p className="support__hero-eyebrow">Technical Support</p>

              <h1>Need Help?</h1>

              <p className="support__hero-text">
                If you're experiencing a technical issue or need assistance with
                your technology, submit a support request below. Our team will
                review your request and respond as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Support */}

      <section className="support__request">
        <div className="container">
          <div className="support__request-card">
            <div className="support__request-header">
              <p className="support__eyebrow">Support Request</p>

              <h2>Tell Us How We Can Help</h2>

              <p>
                Complete the form below with as much detail as possible.
                Providing accurate information helps us respond more quickly and
                route your request to the appropriate technician.
              </p>
            </div>

            <form className="support-form">
              <div className="support-form__grid">
                <div className="support-form__group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" type="text" placeholder="John Smith" />
                </div>

                <div className="support-form__group">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="ABC Company" />
                </div>

                <div className="support-form__group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="support-form__group">
                  <label htmlFor="phone">Phone *</label>
                  <input id="phone" type="tel" placeholder="(706) 555-1234" />
                </div>
              </div>

              <fieldset className="support-form__fieldset">
                <legend>Issue Type *</legend>

                <label>
                  <input type="radio" name="issueType" />
                  New Issue
                </label>

                <label>
                  <input type="radio" name="issueType" />
                  Existing Issue
                </label>

                <label>
                  <input type="radio" name="issueType" />
                  Service Request
                </label>

                <label>
                  <input type="radio" name="issueType" />
                  Project Request
                </label>
              </fieldset>

              <fieldset className="support-form__fieldset">
                <legend>Priority *</legend>

                <label>
                  <input type="radio" name="priority" />
                  Low
                </label>

                <label>
                  <input type="radio" name="priority" />
                  Normal
                </label>

                <label>
                  <input type="radio" name="priority" />
                  High
                </label>

                <label>
                  <input type="radio" name="priority" />
                  Critical
                </label>

                <label>
                  <input type="radio" name="priority" />
                  Emergency
                </label>
              </fieldset>

              <fieldset className="support-form__fieldset">
                <legend>Services Needed</legend>

                <label>
                  <input type="checkbox" />
                  Managed IT
                </label>

                <label>
                  <input type="checkbox" />
                  Structured Cabling
                </label>

                <label>
                  <input type="checkbox" />
                  Fiber Optics
                </label>

                <label>
                  <input type="checkbox" />
                  VoIP
                </label>

                <label>
                  <input type="checkbox" />
                  Cybersecurity
                </label>

                <label>
                  <input type="checkbox" />
                  Cloud Solutions
                </label>

                <label>
                  <input type="checkbox" />
                  Other
                </label>
              </fieldset>

              <div className="support-form__group">
                <label htmlFor="subject">Subject *</label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Brief description of the issue"
                />
              </div>

              <div className="support-form__group">
                <label htmlFor="description">Description *</label>

                <textarea
                  id="description"
                  rows="8"
                  placeholder="Please describe the issue, including any error messages, affected users, equipment involved, and when the issue began."
                />
              </div>

              <Button type="submit" className="button button--primary">
                Submit Support Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="support__ringo">
        <div className="container">
          <div className="support__ringo-card">
            <div className="support__ringo-image">
              <img
                src={RingoTruck}
                alt="Ringo looking out of a company truck window."
              />
            </div>

            <div className="support__ringo-content">
              <p className="support__eyebrow">
                Head of Client Relations (Canine Division)
              </p>

              <h2>Want Ringo to Join the Visit?</h2>

              <p>
                Ringo is available for <strong>on-site consultations</strong>{" "}
                and
                <strong> scheduled support visits</strong> whenever his schedule
                allows. If you'd enjoy having him accompany one of our
                technicians, simply let us know.
              </p>

              <p>
                He specializes in greeting clients, boosting morale, and
                reminding everyone that technology problems are easier to solve
                with a friendly face nearby.
              </p>

              <div className="support__ringo-option">
                <label className="support__checkbox">
                  <input type="checkbox" name="requestRingo" />

                  <span>
                    I'd love Ringo to join our scheduled on-site consultation or
                    support visit if he's available.
                  </span>
                </label>

                
              </div>

              <p className="support__ringo-note">
                *Ringo's appearances depend on his availability and the nature
                of the service appointment.
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

export default Support;
