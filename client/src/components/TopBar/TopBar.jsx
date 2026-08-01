import { Phone, EnvelopeSimple } from "@phosphor-icons/react";

import "./TopBar.css";

function TopBar() {
  return (
    <div className="top-bar">
            <div className="container top-bar__content">
              <div className="top-bar__left">
                <a href="tel:+17068681975">
                  <Phone size={16} weight="fill" aria-hidden="true" />
                  <span>(706) 868-1975</span>
                </a>
    
                <a href="mailto:support@heathtdi.com">
                  <EnvelopeSimple size={16} weight="fill" aria-hidden="true" />
                  <span>support@heathtdi.com</span>
                </a>
              </div>
    
              <div className="top-bar__right">
                <span>24/7 Support</span>
                <span>Veteran-Owned. Local. Trusted.</span>
              </div>
            </div>
          </div>
  );
}

export default TopBar;