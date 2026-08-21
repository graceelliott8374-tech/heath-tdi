import { useState } from "react";
import { toast } from "react-toastify";

import Button from "../../components/Button/Button";
import { submitSupportForm } from "../../api/forms";
import RingoTruck from "../../assets/images/ringo/Ringo_Truck.jpg";
import "./Support.css";

function Support() {
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const website = String(formData.get("website") ?? "").trim();
    const startedAt = Number(formData.get("formStartedAt"));

    const completedTooQuickly =
      !Number.isFinite(startedAt) ||
      startedAt <= 0 ||
      Date.now() - startedAt < 3000;

    if (website) {
      return;
    }

    if (completedTooQuickly) {
      toast.error("Please wait a moment and try again.");
      return;
    }

    const submission = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      issueType: String(formData.get("issueType") ?? ""),
      priority: String(formData.get("priority") ?? ""),
      services: formData.getAll("services").map(String),
      subject: String(formData.get("subject") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
      requestRingo: formData.get("requestRingo") === "yes",
      website,
      formStartedAt: startedAt,
    };

    setIsSubmitting(true);

    const toastId = toast.loading("Submitting your support request...");

    try {
      const data = await submitSupportForm(submission);

      toast.update(toastId, {
        render:
          data.message ||
          "Your support request has been submitted successfully.",
        type: "success",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
      });

      form.reset();
      setFormStartedAt(Date.now());
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "We could not submit your support request. Please try again.";

      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                If you&apos;re experiencing a technical issue or need assistance
                with your systems, submit a support request below. Our team will
                review your request and respond as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Request */}

      <section className="support__request">
        <div className="container">
          <div className="support__request-header">
            <p className="support__eyebrow">Support Request</p>

            <h2>Tell Us How We Can Help</h2>

            <p>
              Provide as much detail as possible so we can assess your request
              and route it to the appropriate technician.
            </p>
          </div>

          <div className="support__request-layout">
            {/* Compact Ringo Card */}

            <aside className="support__ringo-card">
              <div className="support__ringo-image">
                <img
                  src={RingoTruck}
                  alt="Ringo looking out of a Heath Telephone and Data truck window"
                />
              </div>

              <div className="support__ringo-content">
                <p className="support__ringo-eyebrow">
                  Head of Client Relations
                </p>

                <h3>Want Ringo to Join the Visit?</h3>

                <p>
                  Ringo may accompany our technicians on scheduled on-site
                  visits when his schedule and the appointment allow.
                </p>

                <p className="support__ringo-note">
                  You can request him directly in the support form.
                </p>
              </div>
            </aside>

            {/* Support Form */}

            <div className="support__request-card">
              <form className="support-form" onSubmit={handleSubmit}>
                <div className="support-form__grid">
                  <div className="support-form__group">
                    <label htmlFor="support-name">Full Name *</label>
                    <input
                      id="support-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="support-form__group">
                    <label htmlFor="support-company">Company</label>
                    <input
                      id="support-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="support-form__group">
                    <label htmlFor="support-email">Email *</label>
                    <input
                      id="support-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="support-form__group">
                    <label htmlFor="support-phone">Phone *</label>
                    <input
                      id="support-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                {/* Honeypot */}

                <div className="support-form__website" aria-hidden="true">
                  <label htmlFor="support-website">
                    Leave this field empty
                  </label>

                  <input
                    id="support-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <input
                  name="formStartedAt"
                  type="hidden"
                  value={formStartedAt}
                  readOnly
                />

                <div className="support-form__options-grid">
                  <fieldset className="support-form__fieldset">
                    <legend>Request Type *</legend>

                    <div className="support-form__choices">
                      <label>
                        <input
                          type="radio"
                          name="issueType"
                          value="technical-issue"
                          required
                        />
                        <span>Technical Issue</span>
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
                          value="project-installation"
                        />
                        <span>Project or Installation</span>
                      </label>
                    </div>
                  </fieldset>

                  <fieldset className="support-form__fieldset">
                    <legend>Priority *</legend>

                    <div className="support-form__choices">
                      <label>
                        <input
                          type="radio"
                          name="priority"
                          value="low"
                          required
                        />
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
                    </div>
                  </fieldset>
                </div>

                <fieldset className="support-form__fieldset">
                  <legend>Affected Service or System</legend>

                  <div className="support-form__services">
                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="managed-it"
                      />
                      <span>Managed IT Services</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="network-solutions"
                      />
                      <span>Network Solutions</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="structured-cabling"
                      />
                      <span>Structured Cabling</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="fiber-optics"
                      />
                      <span>Fiber Optics</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="communications"
                      />
                      <span>Communications</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="cybersecurity"
                      />
                      <span>Cybersecurity</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="cloud-solutions"
                      />
                      <span>Cloud Solutions</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="security-surveillance"
                      />
                      <span>Security &amp; Surveillance</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="services"
                        value="wifi-wireless"
                      />
                      <span>WiFi &amp; Wireless</span>
                    </label>

                    <label>
                      <input type="checkbox" name="services" value="other" />
                      <span>Other / Not Sure</span>
                    </label>
                  </div>
                </fieldset>

                <div className="support-form__group">
                  <label htmlFor="support-subject">Subject *</label>

                  <input
                    id="support-subject"
                    name="subject"
                    type="text"
                    placeholder="Brief description of the issue"
                    required
                  />
                </div>

                <div className="support-form__group">
                  <label htmlFor="support-description">Description *</label>

                  <textarea
                    id="support-description"
                    name="description"
                    rows="8"
                    placeholder="Describe the issue, including any error messages, affected users, equipment involved, and when the issue began."
                    required
                  />
                </div>

                {/* Ringo Request */}

                <fieldset className="support-form__ringo-request">
                  <legend>Scheduled On-Site Visit</legend>

                  <label className="support-form__ringo-checkbox">
                    <input type="checkbox" name="requestRingo" value="yes" />

                    <span>
                      I&apos;d love Ringo to join our scheduled on-site visit if
                      he&apos;s available.
                    </span>
                  </label>

                  <p>
                    Ringo&apos;s appearances depend on his availability and the
                    nature of the service appointment.
                  </p>
                </fieldset>

                <Button
                  type="submit"
                  className="button button--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Support Request"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}

      <section
        className="support__next-steps"
        aria-labelledby="support-next-steps-title"
      >
        <div className="container">
          <div className="support__next-steps-header">
            <p className="support__eyebrow">What Happens Next</p>

            <h2 id="support-next-steps-title">From Request to Resolution</h2>

            <p>
              After you submit your request, our team will review the details
              and determine the best next step.
            </p>
          </div>

          <ol className="support__steps-list">
            <li className="support__step-card">
              <span className="support__step-number" aria-hidden="true">
                01
              </span>

              <h3>We Receive Your Request</h3>

              <p>
                Your support request is submitted to our team with the contact,
                service, and issue details you provided.
              </p>
            </li>

            <li className="support__step-card">
              <span className="support__step-number" aria-hidden="true">
                02
              </span>

              <h3>Our Team Reviews It</h3>

              <p>
                We assess the issue, its priority, and the affected systems so
                it can be routed to the appropriate technician.
              </p>
            </li>

            <li className="support__step-card">
              <span className="support__step-number" aria-hidden="true">
                03
              </span>

              <h3>A Technician Contacts You</h3>

              <p>
                A technician may request additional information, provide initial
                guidance, or arrange an on-site visit when needed.
              </p>
            </li>

            <li className="support__step-card">
              <span className="support__step-number" aria-hidden="true">
                04
              </span>

              <h3>We Work Toward Resolution</h3>

              <p>
                We diagnose and address the issue while keeping you informed
                throughout the support process.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Frequently Asked Questions */}

      <section className="support__faq" aria-labelledby="support-faq-title">
        <div className="container support__faq-container">
          <div className="support__faq-header">
            <p className="support__eyebrow">Frequently Asked Questions</p>

            <h2 id="support-faq-title">Support Request Questions</h2>

            <p>
              Find answers about submitting requests and receiving technical
              assistance.
            </p>
          </div>

          <div className="support__faq-list">
            <details className="support__faq-item">
              <summary>Who can submit a support request?</summary>

              <div className="support__faq-answer">
                <p>
                  Existing clients can submit requests for technical issues,
                  ongoing service needs, and planned projects or installations.
                  If you are not currently a client and have a general question,
                  please use our Contact page.
                </p>
              </div>
            </details>

            <details className="support__faq-item">
              <summary>What information should I include?</summary>

              <div className="support__faq-answer">
                <p>
                  Include when the problem began, the people or equipment
                  affected, any error messages you received, and any
                  troubleshooting already attempted. Clear details help our team
                  evaluate the request more efficiently.
                </p>
              </div>
            </details>

            <details className="support__faq-item">
              <summary>How quickly will someone respond?</summary>

              <div className="support__faq-answer">
                <p>
                  Requests are reviewed according to their urgency, business
                  impact, and any applicable service agreement. A technician
                  will follow up after the request has been reviewed and
                  assigned.
                </p>
              </div>
            </details>

            <details className="support__faq-item">
              <summary>What should I do during a critical outage?</summary>

              <div className="support__faq-answer">
                <p>
                  Select Critical as the priority and provide as much
                  information as possible about the outage, including the number
                  of users, locations, or systems affected. Follow any emergency
                  contact procedures included in your company&apos;s service
                  agreement.
                </p>
              </div>
            </details>

            <details className="support__faq-item">
              <summary>How will I receive updates about my request?</summary>

              <div className="support__faq-answer">
                <p>
                  A technician will contact you using the email address or phone
                  number provided with your request. Keep an eye on your email
                  and voicemail in case additional information is needed.
                </p>
              </div>
            </details>

            <details className="support__faq-item">
              <summary>Can my issue be handled remotely?</summary>

              <div className="support__faq-answer">
                <p>
                  Many technical issues can be diagnosed or resolved remotely.
                  If the request requires physical access to equipment or
                  infrastructure, our team will coordinate an on-site visit.
                </p>
              </div>
            </details>

            <details className="support__faq-item">
              <summary>
                Should I open another request if the problem changes?
              </summary>

              <div className="support__faq-answer">
                <p>
                  If the new information relates to the same issue, reply to the
                  most recent message from our team or contact us directly. This
                  keeps the details together and helps prevent duplicate
                  requests.
                </p>
              </div>
            </details>

            <details className="support__faq-item">
              <summary>Can I request Ringo for an on-site visit?</summary>

              <div className="support__faq-answer">
                <p>
                  Yes. You can request Ringo when submitting the support form.
                  His attendance depends on his availability, the type of
                  appointment, and whether the service environment is safe and
                  appropriate for him.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Support;
