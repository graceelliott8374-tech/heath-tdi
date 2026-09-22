import "./WiFiWireless.css";

import wifi1 from "../../../assets/images/services/wifi1.jpg";
import wifi2 from "../../../assets/images/services/wifi2.jpg";
import guestWifi from "../../../assets/images/services/guestWifi.jpg";

function WiFiWireless() {
  return (
    <article className="wifi-wireless">
      <section className="wifi-wireless__hero">
        <div className="wifi-wireless__hero-overlay">
          <div className="container wifi-wireless__hero-content">
            <p className="wifi-wireless-hero__eyebrow">WiFi &amp; Wireless</p>

            <h1>Wireless Networks Built for Business</h1>

            <p className="wifi-wireless-hero__text">
              Reliable wireless connectivity starts with the right
              infrastructure. Heath Telephone &amp; Data designs and deploys
              business Wi-Fi solutions built for coverage, performance,
              security, and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="wifi-wireless__section wifi-wireless__section--dark">
        <div className="container wifi-wireless__section-content">
          <div className="wifi-wireless__text">
            <p className="wifi-wireless__eyebrow">
              Business Wireless Solutions
            </p>

            <h2>More Than Adding Access Points</h2>

            <p>
              A dependable wireless network requires more than installing a few
              access points and hoping for good coverage. Building materials,
              interference, device density, network traffic, and the underlying
              wired infrastructure all affect wireless performance.
            </p>

            <p>
              Heath Telephone &amp; Data approaches Wi-Fi as part of the
              complete network. We help businesses create wireless environments
              that support employees, customers, mobile devices, and connected
              equipment without sacrificing reliability or security.
            </p>
          </div>

          <div className="wifi-wireless__image-wrapper">
            <img
              src={wifi1}
              alt="Business wireless networking equipment"
              className="wifi-wireless__image"
            />
          </div>
        </div>
      </section>

      <section className="wifi-wireless__section wifi-wireless__section--gradient">
        <div className="container wifi-wireless__section-content wifi-wireless__section-content--reversed">
          <div className="wifi-wireless__image-wrapper">
            <img
              src={wifi2}
              alt="Wireless access point supporting business Wi-Fi coverage"
              className="wifi-wireless__image"
            />
          </div>

          <div className="wifi-wireless__text">
            <p className="wifi-wireless__eyebrow">Coverage &amp; Performance</p>

            <h2>Wi-Fi Designed Around Your Environment</h2>

            <p>
              Every building presents different wireless challenges. Walls,
              equipment, interference, user density, and the number of connected
              devices can all affect coverage and performance.
            </p>

            <p>
              Proper access point placement and network configuration help
              reduce dead zones, improve roaming, and provide more consistent
              connectivity throughout the areas where your team depends on
              wireless access.
            </p>
          </div>
        </div>
      </section>

      <section className="wifi-wireless__section wifi-wireless__section--dark">
        <div className="container wifi-wireless__section-content">
          <div className="wifi-wireless__text">
            <p className="wifi-wireless__eyebrow">Secure Wireless Access</p>

            <h2>Keep Business and Guest Traffic Separate</h2>

            <p>
              Wireless access should make it easy for authorized users to
              connect without unnecessarily exposing business systems and
              internal network resources.
            </p>

            <p>
              Heath can help configure wireless networks that support secure
              employee access, guest connectivity, and appropriate separation
              between users, devices, and critical business systems.
            </p>
          </div>

          <div className="wifi-wireless__image-wrapper">
            <img
              src={guestWifi}
              alt="Network hardware supporting secure business wireless connectivity"
              className="wifi-wireless__image"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default WiFiWireless;
