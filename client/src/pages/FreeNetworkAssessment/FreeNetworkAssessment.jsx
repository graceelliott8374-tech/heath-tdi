import "./FreeNetworkAssessment.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { submitAssessmentForm } from "../../api/forms";

function FreeNetworkAssessment() {
  const formStartedAt = useRef(Date.now());

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    concerns: "",
    preferredContact: "email",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

 async function handleSubmit(event) {
   event.preventDefault();

   if (isSubmitting) {
     return;
   }

   if (formData.website.trim()) {
     return;
   }

   if (Date.now() - formStartedAt.current < 3000) {
     toast.error("Please wait a moment and try again.");
     return;
   }

   if (formData.preferredContact === "phone" && !formData.phone.trim()) {
     toast.error(
       "Please enter a phone number if you prefer to be contacted by phone.",
     );
     return;
   }

   const submission = {
     ...formData,
     formStartedAt: formStartedAt.current,
   };

   setIsSubmitting(true);

   const toastId = toast.loading("Sending your assessment request...");

   try {
     const data = await submitAssessmentForm(submission);

     toast.update(toastId, {
       render:
         data.message ||
         "Your free network assessment request has been submitted successfully.",
       type: "success",
       isLoading: false,
       autoClose: 4000,
       closeOnClick: true,
     });

     setFormData({
       name: "",
       company: "",
       email: "",
       phone: "",
       concerns: "",
       preferredContact: "email",
       website: "",
     });

     formStartedAt.current = Date.now();
   } catch (error) {
     const message =
       error.response?.data?.message ||
       "We could not send your assessment request. Please try again.";

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
 }

  return (
    <main className="assessment-page">
      <section className="assessment-page__hero">
        <div className="container assessment-page__hero-content">
          <p className="assessment-page__eyebrow">Free Network Assessment</p>

          <h1>Get a Clearer Picture of Your Network.</h1>

          <p>
            Tell us a little about your business and technology environment.
            Heath Telephone &amp; Data will review your request and contact you
            to discuss your network, concerns, and opportunities for
            improvement.
          </p>
        </div>
      </section>

      <section className="assessment-page__form-section">
        <div className="container assessment-page__layout">
          <div className="assessment-page__intro">
            <p className="assessment-page__eyebrow">Request Your Assessment</p>

            <h2>Let's Take a Look at Your Network.</h2>

            <p>
              Complete the form and a member of the Heath Telephone &amp; Data
              team will follow up with you about your free network assessment.
            </p>

            <p>
              You do not need to know every technical detail. Just tell us what
              you know and what concerns you have.
            </p>
          </div>

          <form className="assessment-form" onSubmit={handleSubmit}>
            <div className="assessment-form__field">
              <label htmlFor="assessment-name">
                Name <span aria-hidden="true">*</span>
              </label>

              <input
                id="assessment-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="assessment-form__field">
              <label htmlFor="assessment-company">
                Company <span aria-hidden="true">*</span>
              </label>

              <input
                id="assessment-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                required
              />
            </div>

            <div className="assessment-form__field">
              <label htmlFor="assessment-email">
                Email <span aria-hidden="true">*</span>
              </label>

              <input
                id="assessment-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="assessment-form__field">
              <label htmlFor="assessment-phone">Phone</label>

              <input
                id="assessment-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="assessment-form__field assessment-form__field--full">
              <label htmlFor="assessment-concerns">
                Tell us about your network or IT concerns
              </label>

              <textarea
                id="assessment-concerns"
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                rows="6"
                placeholder="Slow network performance, unreliable Wi-Fi, aging equipment, security concerns, upcoming expansion, or anything else you'd like us to review."
              />
            </div>

            <fieldset className="assessment-form__contact">
              <legend>Preferred contact method</legend>

              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={handleChange}
                />
                Email
              </label>

              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={handleChange}
                />
                Phone
              </label>
            </fieldset>

            {/* Honeypot - hidden from legitimate users */}
            <div className="assessment-form__honeypot" aria-hidden="true">
              <label htmlFor="assessment-website">Website</label>

              <input
                id="assessment-website"
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="assessment-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Request Free Assessment"}
            </button>

            <p className="assessment-form__required">
              <span aria-hidden="true">*</span> Required fields
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default FreeNetworkAssessment;
