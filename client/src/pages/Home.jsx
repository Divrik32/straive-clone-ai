import HeroBanner from "../components/HeroBanner";
import Capabilities from "../components/Capabilities";
import AgenticAI from "../components/AgenticAI";
import IndustriesGrid from "../components/IndustriesGrid";
import HyperscalerPartners from "../components/HyperscalerPartners";
import ImpactCases from "../components/ImpactCases";
import WeAreStraive from "../components/WeAreStraive";
import StatsSection from "../components/StatsSection";
import AwardsCarousel from "../components/AwardsCarousel";
import ThoughtLeadership from "../components/ThoughtLeadership";
import LifeAtStraive from "../components/LifeAtStraive";
import CTABanner from "../components/CTABanner";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Capabilities />
      <AgenticAI />
      <IndustriesGrid />
      <HyperscalerPartners />
      <ImpactCases />
      <WeAreStraive />
      <StatsSection />
      <AwardsCarousel />
      <ThoughtLeadership />
      <LifeAtStraive />
      <CTABanner />
      <ContactForm />
    </>
  );
}
