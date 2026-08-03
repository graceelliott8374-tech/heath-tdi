import "./About.css";

import {
  ClipboardText,
  Wrench,
  Headset,
  Handshake,
} from "@phosphor-icons/react";

function About() {
  return (
    <section className="about">
      <section className="about-hero">
        <div className="about-hero__overlay">
          <div className="container about-hero__content">
            <p className="about-hero__eyebrow">About Heath TDI</p>

            <h1>Keeping The CSRA Connected.</h1>

            <p className="about-hero__text">
              Heath Telephone &amp; Data provides dependable communications,
              infrastructure, and managed technology solutions for businesses
              throughout the CSRA.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story__content">
          <div className="about-story__text">
            <p className="about-story__eyebrow">Our Story</p>

            <h2>Who We Are</h2>

            <p>
              Heath Telephone &amp; Data has served businesses throughout the
              CSRA with dependable communications and infrastructure solutions
              for years.
            </p>

            <p>
              As technology has changed, Heath has continued to expand its
              services while keeping the same focus on practical solutions,
              responsive support, and long-term customer relationships.
            </p>
          </div>

          <div className="about-story__image-wrapper">
            <img
              src="/src/assets/images/other/technician.jpg"
              alt="Technician working on networking equipment"
              className="about-story__image"
            />
          </div>
        </div>
      </section>

      <section className="how-we-work">
        <div className="container">
          <p className="how-we-work__eyebrow">HOW WE WORK</p>

          <h2 className="how-we-work__title">Simple. Reliable. Responsive.</h2>

          <p className="how-we-work__intro">
            Every project is approached with careful planning, clear
            communication, and dependable service from start to finish.
          </p>

          <div className="how-we-work__grid">
            <div className="work-card">
              <div className="work-card__icon">
                <ClipboardText size={36} weight="duotone" aria-hidden="true" />
              </div>

              <h3>Planning First</h3>

              <p>
                Every project begins with understanding your business, your
                goals, and your existing technology before recommending a
                solution.
              </p>
            </div>

            <div className="work-card">
              <div className="work-card__icon">
                <Wrench size={36} weight="duotone" aria-hidden="true" />
              </div>

              <h3>Professional Installation</h3>

              <p>
                Systems and infrastructure are installed with careful attention
                to detail, performance, and long-term reliability.
              </p>
            </div>

            <div className="work-card">
              <div className="work-card__icon">
                <Headset size={36} weight="duotone" aria-hidden="true" />
              </div>

              <h3>Responsive Support</h3>

              <p>
                When problems arise, Heath provides dependable assistance
                focused on minimizing disruption and keeping your business
                moving.
              </p>
            </div>

            <div className="work-card">
              <div className="work-card__icon">
                <Handshake size={36} weight="duotone" aria-hidden="true" />
              </div>

              <h3>Long-Term Partnership</h3>

              <p>
                We build lasting relationships and help businesses adapt as
                their needs and technology continue to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ringo">
        <div className="container ringo__content">
          <div className="ringo__image-wrapper">
            <img
              src="/src/assets/images/ringo/Ringo_Sweater.png"
              alt="Ringo, Heath Telephone & Data's Chief Morale Officer"
              className="ringo__image"
            />
          </div>

          <div className="ringo__text">
            <h2>Meet Ringo.</h2>

            <h3>Chief Morale Officer</h3>

            <p>
              Every office has someone who keeps spirits high. At Heath
              Telephone &amp; Data, that's Ringo.
            </p>

            <p>
              While he leaves structured cabling, fiber optics, managed IT, and
              cybersecurity to the experts, Ringo takes customer greetings and
              office morale very seriously. Whether he's welcoming visitors,
              supervising the office, or simply making someone's day a little
              brighter, he's an important part of the Heath Telephone &amp; Data
              family.
            </p>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="container about-closing__content">
          <h2>Proudly Serving the CSRA.</h2>

          <p>
            Heath Telephone &amp; Data is committed to providing dependable
            communications, networking, and technology solutions that help
            businesses stay connected, secure, and prepared for the future.
          </p>
        </div>
      </section>
      
    </section>
  );
}

export default About;
