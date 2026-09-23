import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const RECOGNITIONS = [
  {
    title: "Straive Recognized as a Leader in AIM Research's PeMa Quadrant for Agentic AI Service Providers 2025",
    excerpt: "Straive has been recognized as a Leader in AIM Research's PeMa Quadrant for Agentic AI Service Providers 2025.",
    img: "/images/ar-card-1.webp",
    badge: "AIM Research",
  },
  {
    title: "Straive Recognized as a Star Performer in Everest Group's Data & AI Services Specialists \u2014 North America PEAK Matrix\u00ae Assessment 2025",
    excerpt: "Straive has been recognized as a Star Performer in Everest Group's Data & AI Services Specialists \u2014 North America PEAK Matrix\u00ae Assessment 2025.",
    img: "/images/ar-card-2.webp",
    badge: "Everest Group",
  },
  {
    title: "Straive Recognized as a Leader in AIM Research's PeMa Quadrant for Data Engineering Service Providers 2025",
    excerpt: "Straive has been recognized as a Leader in AIM Research's PeMa Quadrant for Data Engineering Service Providers 2025.",
    img: "/images/ar-card-3.webp",
    badge: "AIM Research",
  },
  {
    title: "Straive's Intelligent Document Processing (IDP) Capabilities Featured in ISG's Provider Lens\u2122 Intelligent Automation \u2013 Solution and Services Report 2022",
    excerpt: "We have been recognized for its strong vision, clear-cut development roadmap, innovative and advanced...",
    img: "/images/ar-card-4.webp",
    badge: "ISG",
  },
  {
    title: "Straive Recognized as a Product Challenger in AI & Analytics in ISG Provider Lens\u2122 Contact Center \u2014 Customer Experience Services 2022 Global Study",
    excerpt: "We have been recognized as a Product Challenger in AI & Analytics in ISG Provider Lens\u2122 Contact Center...",
    img: "/images/ar-card-5.webp",
    badge: "ISG",
  },
  {
    title: "Straive's Intelligent Document Processing (IDP) Capabilities Featured in ISG's Provider Lens\u2122 Intelligent Automation \u2014 Solutions & Services US Report 2021",
    excerpt: "ISG's latest research report on Intelligent Automation has highlighted Straive's document processing...",
    img: "/images/ar-card-6.webp",
    badge: "ISG",
  },
  {
    title: "Straive Featured in ISG Provider Lens\u2122 Contact Center \u2014 Customer Experience Services Report 2021",
    excerpt: "ISG's report has recognized Straive's experience, knowledge, deep domain expertise, advanced delivery centers...",
    img: "/images/ar-card-7.webp",
    badge: "ISG",
  },
];

export default function AnalystRecognitions() {
  return (
    <>
      <InsightsHero title="Analyst Recognitions" img="/images/insights-hero-analyst.webp" />
      <InsightsCardGrid items={RECOGNITIONS} />
    </>
  );
}
