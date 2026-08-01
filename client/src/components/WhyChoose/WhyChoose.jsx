import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container">
        <h2>Why Choose Heath?</h2>

        <section className="why-choose__item">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Local CSRA Expertise</h3>

            <p>
              Heath Telephone &amp; Data has proudly served businesses
              throughout the Central Savannah River Area with dependable
              technology and communications solutions.
            </p>
          </div>
        </section>

        <section className="why-choose__item why-choose__item--reverse">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Complete Technology Solutions</h3>

            <p>
              From managed IT and cybersecurity to structured cabling, fiber
              optics, VoIP, and cloud services, Heath provides one reliable
              source for your business technology needs.
            </p>
          </div>
        </section>

        <section className="why-choose__item">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Experienced Infrastructure Specialists</h3>

            <p>
              From structured cabling and fiber optic installation to business
              communications and network infrastructure, Heath delivers
              dependable solutions backed by years of hands-on industry
              experience.
            </p>
          </div>
        </section>

        <section className="why-choose__item why-choose__item--reverse">
          <div className="why-choose__graphic"></div>

          <div className="why-choose__content">
            <h3>Responsive, Reliable Support</h3>

            <p>
              Technology issues can disrupt your business. Heath provides
              responsive, dependable support with a proactive approach to keep
              your systems running smoothly and your team productive.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default WhyChoose;
