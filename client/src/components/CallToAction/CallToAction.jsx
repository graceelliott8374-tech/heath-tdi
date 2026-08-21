import { NavLink } from "react-router-dom";

import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="container call-to-action__content">
        <h2>Ready to Strengthen Your Technology?</h2>

        <p>
          Whether you're upgrading existing systems, planning new
          infrastructure, or looking for dependable ongoing support, Heath can
          help build the technology foundation your business needs.
        </p>

        <div className="call-to-action__buttons">
          <NavLink
            to="/contact"
            className="call-to-action__button call-to-action__button--primary"
          >
            Contact Us
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
