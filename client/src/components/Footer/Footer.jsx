import { Link } from "react-router-dom";
import { Phone, EnvelopeSimple } from "@phosphor-icons/react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__contact">
          <a href="tel:+17068681975">
            <Phone size={18} weight="fill" />
            <span>(706) 868-1975</span>
          </a>

          <a href="mailto:support@heathtdi.com">
            <EnvelopeSimple size={18} weight="fill" />
            <span>support@heathtdi.com</span>
          </a>
        </div>

        <div className="footer__legal">
          <p className="footer__copyright">
            © 2026 Heath Telephone &amp; Data. All Rights Reserved.
          </p>

          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
