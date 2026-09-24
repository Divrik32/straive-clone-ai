import AboutPageHero from "../../components/aboutuspage/AboutPageHero";
import WhatDefinesUs from "../../components/aboutuspage/WhatDefinesUs";
import LeadershipGrid from "../../components/aboutuspage/LeadershipGrid";
import GlobalHeadlines from "../../components/aboutuspage/GlobalHeadlines";
import CTABanner from "../../components/CTABanner";

export default function AboutUs() {
  return (
    <>
      <AboutPageHero
        theme="gold"
        eyebrow="About Work Science"
        title="We Help Organizations Operationalize Data, Analytics & AI"
        subtitle="A technology and AI services company focused on turning data, analytics, and AI capabilities into practical business solutions."
      />

      <WhatDefinesUs />
      <LeadershipGrid />
      <GlobalHeadlines />
      <CTABanner />
    </>
  );
}