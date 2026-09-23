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
        eyebrow="About Straive"
        title="We Partner to Operationalize Analytics & AI for Global Enterprises"
        subtitle="An AI operationalization company built by people who believe in doing, not just telling."
      />
      <WhatDefinesUs />
      <LeadershipGrid />
      <GlobalHeadlines />
      <CTABanner />
    </>
  );
}
