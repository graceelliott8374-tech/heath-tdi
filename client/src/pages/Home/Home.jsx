import Hero from "../../components/Hero/Hero";
import ServicesOverview from "../../components/ServicesOverview/ServicesOverview";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import CallToAction from "../../components/CallToAction/CallToAction";
import FreeAssessment from "../../components/FreeAssessment/FreeAssessment";
import SEO from "../../components/SEO/SEO";

import "./Home.css";

function Home() {
  return (
    <>
      <SEO
        title="Heath Telephone & Data | Managed IT Services"
        description="Heath Telephone & Data provides managed IT, networking, structured cabling, fiber optics, VoIP, cybersecurity, cloud, and technology solutions for businesses in the CSRA and surrounding areas."
        canonicalPath="/"
      />

      <section className="home">
        <Hero />
        <ServicesOverview />
        <FreeAssessment />
        <WhyChoose />
        <CallToAction />
      </section>
    </>
  );
}

export default Home;
