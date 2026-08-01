import { NavLink } from "react-router-dom";

import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="container call-to-action__content">
        <h2>Ready to Modernize Your Business Technology?</h2>

        <p>
          Whether you need managed IT services, structured cabling, fiber
          optics, VoIP, cybersecurity, or cloud solutions, Heath is ready to
          help you build a reliable technology foundation.
        </p>

        <div className="call-to-action__buttons">
          <NavLink
            to="/contact"
            className="call-to-action__button call-to-action__button--primary"
          >
            Request a Consultation
          </NavLink>

          <NavLink
            to="/support"
            className="call-to-action__button call-to-action__button--secondary"
          >
            Get Support
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
