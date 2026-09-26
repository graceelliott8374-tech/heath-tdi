import "./WhoWeServe.css";
import SEO from "../../components/SEO/SEO";
import CallToAction from "../../components/CallToAction/CallToAction";

import {
  BuildingsIcon,
  FirstAidKitIcon,
  GraduationCapIcon,
  FactoryIcon,
  StorefrontIcon,
  ChurchIcon,
  TreeStructureIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

function WhoWeServe() {
  return (
    <main className="who-we-serve">
      <SEO
        title="Industries We Serve | Heath Telephone & Data"
        description="Heath Telephone & Data provides IT, networking, communications, cybersecurity, and infrastructure solutions for organizations across the CSRA and surrounding areas."
        canonicalPath="/who-we-serve"
      />

      <section className="who-we-serve__hero">
        <div className="container who-we-serve__hero-overlay">
          <div className="container">
            <div className="who-we-serve__hero-content">
              <p className="who-we-serve-hero__eyebrow">Who We Serve</p>

              <h1>Technology for Every Organization</h1>

              <p className="who-we-serve-hero__text">
                Heath Telephone &amp; Data supports organizations of all sizes
                with dependable technology solutions. From small offices to
                large facilities, we help businesses stay connected, secure, and
                productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="who-we-serve__section who-we-serve__section--dark">
        <div className="container who-we-serve__intro">
          <h2>Serving Businesses Across Industries</h2>

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
              <BuildingsIcon
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
              <FirstAidKitIcon
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
              <GraduationCapIcon
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
              <FactoryIcon
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
              <StorefrontIcon
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
              <ChurchIcon
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

      {/* How We Adapt */}

      <section className="who-we-serve__section">
        <div className="container">
          <div className="who-we-serve__section-content">
            <div className="who-we-serve__image-wrapper">
              <TreeStructureIcon
                className="who-we-serve__feature-icon"
                size={320}
                weight="duotone"
                aria-hidden="true"
              />
            </div>

            <div className="who-we-serve__text">
              <h2>Technology That Fits Your Business</h2>

              <p>
                Every organization has unique technology requirements. A medical
                practice has different priorities than a manufacturing facility,
                and a nonprofit has different needs than a retail business. We
                design solutions around the way you work, delivering technology
                that fits your organization instead of forcing a
                one-size-fits-all approach.
              </p>

              <p>
                Heath Telephone &amp; Data takes the time to understand your
                workflow, budget, and long-term goals before recommending a
                solution. We believe technology should support the way you work,
                not force you to change how you do business.
              </p>

              <p>
                Whether you're opening a new location, upgrading your
                infrastructure, or planning for future growth, we design
                dependable solutions that scale with your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Technology Solutions */}

      <section className="who-we-serve__section who-we-serve__section--gradient">
        <div className="container">
          <div className="who-we-serve__services-card">
            <div className="who-we-serve__services">
              <h2>Complete Technology Solutions</h2>

              <p className="who-we-serve__services-intro">
                No matter your industry, Heath Telephone &amp; Data provides
                dependable technology services that keep organizations
                connected, secure, and productive.
              </p>

              <div className="who-we-serve__services-grid">
                <ul>
                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Managed IT
                  </li>

                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Network Solutions
                  </li>

                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    WiFi &amp; Wireless
                  </li>
                </ul>

                <ul>
                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Structured Cabling
                  </li>

                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Fiber Optics
                  </li>

                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Communications
                  </li>
                </ul>

                <ul>
                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Security &amp; Surveillance
                  </li>

                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Cybersecurity
                  </li>

                  <li>
                    <CheckCircleIcon
                      className="who-we-serve__check"
                      size={22}
                      weight="fill"
                    />
                    Cloud &amp; Hybrid Infrastructure
                  </li>
                </ul>
              </div>

              <p className="who-we-serve__services-footer">
                From new construction and office relocations to infrastructure
                upgrades and ongoing support, our team delivers technology
                solutions designed to grow with your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}

export default WhoWeServe;
