import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container">
        <h2>Why Choose Heath TDI?</h2>

        <section className="why-choose__item">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Local Experience You Can Trust</h3>

            <p>
              Heath Telephone & Data serves customers throughout the Central
              Savannah River Area with dependable communications, technology,
              and infrastructure backed by responsive service and long-term
              relationships.
            </p>
          </div>
        </section>

        <section className="why-choose__item why-choose__item--reverse">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Complete Technology Solutions</h3>

            <p>
              From managed IT and network infrastructure to communications,
              cybersecurity, cloud services, cabling, fiber optics, and
              surveillance, Heath provides one reliable source for your
              technology and infrastructure needs.
            </p>
          </div>
        </section>

        <section className="why-choose__item">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Experienced Infrastructure Specialists</h3>

            <p>
              Our team brings extensive hands-on experience in telephone
              systems, voice and data cabling, network infrastructure, fiber
              optics, and surveillance installation, with careful attention to
              safety, workmanship, and long-term reliability.
            </p>
          </div>
        </section>

        <section className="why-choose__item why-choose__item--reverse">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Service Is Our Most Important Product</h3>

            <p>
              Heath takes a client-centered approach to every project and
              support request. We communicate clearly, respond promptly, and
              work to deliver dependable solutions that keep your systems
              connected, secure, and operating as intended.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default WhyChoose;
