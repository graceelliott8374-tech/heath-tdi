import "./WhoWeServe.css";
import {
  Buildings,
  FirstAidKit,
  GraduationCap,
  Factory,
  Storefront,
  Church,
} from "@phosphor-icons/react";

function WhoWeServe() {
  return (
    <main className="who-we-serve">
      {/* Hero */}
      <section className="who-we-serve__hero">
        <div className="container who-we-serve__hero-overlay">
          <div className="container">
            <div className="who-we-serve__hero-content">
              <p className="who-we-serve-hero__eyebrow">Who We Serve</p>

              <h1>Technology Solutions for Every Business</h1>

              <p className="who-we-serve-hero__text">
                Heath Telephone &amp; Data proudly supports organizations of all
                sizes with dependable technology solutions. From small offices
                to large facilities, we help businesses stay connected, secure,
                and productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="who-we-serve__section who-we-serve__section--dark">
        <div className="container who-we-serve__intro">
          <h2>Serving Businesses Across Every Industry</h2>

          <p>
            Every organization relies on technology to keep operations running
            efficiently. Whether you need structured cabling, managed IT,
            cybersecurity, cloud services, or business communications, our team
            delivers reliable solutions tailored to your environment.
          </p>
        </div>
      </section>

      <section className="who-we-serve__industries">
        <div className="container">
          <div className="who-we-serve__grid">
            <article className="industry-card">
              <Buildings
                className="industry-card__icon"
                size={48}
                weight="duotone"
                aria-hidden="true"
              />

              <h3>Professional Offices</h3>

              <p>
                Dependable technology support for law firms, accounting
                practices, insurance agencies, financial offices, and other
                professional environments.
              </p>
            </article>

            <article className="industry-card">
              <FirstAidKit
                className="industry-card__icon"
                size={48}
                weight="duotone"
                aria-hidden="true"
              />

              <h3>Healthcare</h3>

              <p>
                Reliable connectivity, communications, and IT infrastructure for
                medical practices, dental offices, veterinary clinics, and other
                healthcare providers.
              </p>
            </article>

            <article className="industry-card">
              <GraduationCap
                className="industry-card__icon"
                size={48}
                weight="duotone"
                aria-hidden="true"
              />

              <h3>Education</h3>

              <p>
                Scalable networks, communications, and technology support for
                schools, training centers, and educational organizations.
              </p>
            </article>

            <article className="industry-card">
              <Factory
                className="industry-card__icon"
                size={48}
                weight="duotone"
                aria-hidden="true"
              />

              <h3>Manufacturing &amp; Industrial</h3>

              <p>
                Durable technology infrastructure that supports warehouses,
                production facilities, distribution centers, and industrial
                operations.
              </p>
            </article>

            <article className="industry-card">
              <Storefront
                className="industry-card__icon"
                size={48}
                weight="duotone"
                aria-hidden="true"
              />

              <h3>Retail &amp; Hospitality</h3>

              <p>
                Business technology, phone systems, connectivity, and support
                for retailers, restaurants, hotels, and customer-focused
                businesses.
              </p>
            </article>

            <article className="industry-card">
              <Church
                className="industry-card__icon"
                size={48}
                weight="duotone"
                aria-hidden="true"
              />

              <h3>Nonprofits &amp; Faith-Based Organizations</h3>

              <p>
                Practical, dependable technology solutions designed around the
                needs and budgets of nonprofits, ministries, and community
                organizations.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhoWeServe;
