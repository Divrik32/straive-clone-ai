import HeroBanner from "../components/HeroBanner";
import Capabilities from "../components/Capabilities";
import AgenticAI from "../components/AgenticAI";
import IndustriesGrid from "../components/IndustriesGrid";
import HyperscalerPartners from "../components/HyperscalerPartners";
import ImpactCases from "../components/ImpactCases";
import WeAreWorkScience from "../components/WeAreWorkScience";
import StatsSection from "../components/StatsSection";
import ThoughtLeadership from "../components/ThoughtLeadership";
import LifeAtWorkScience from "../components/LifeAtWorkScience";
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
      <WeAreWorkScience />
      <StatsSection />
      <ThoughtLeadership />
      <LifeAtWorkScience />
      <CTABanner />
      <ContactForm />
    </>
  );
}