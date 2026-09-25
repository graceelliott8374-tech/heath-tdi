import Hero from "../../components/Hero/Hero";
import ServicesOverview from "../../components/ServicesOverview/ServicesOverview";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import CallToAction from "../../components/CallToAction/CallToAction";
import FreeAssessment from "../../components/FreeAssessment/FreeAssessment";

import "./Home.css";

function Home() {
  return (
    <section className="home">
      <Hero />

      <ServicesOverview />
      <FreeAssessment />
      <WhyChoose />

      <CallToAction />
    </section>
  );
}

export default Home;
