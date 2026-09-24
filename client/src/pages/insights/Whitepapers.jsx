import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const WHITEPAPERS = [
  {
    title: "Transforming Legacy Content Into Compliant Digital Assets",
    excerpt:
      "Explore how modern digital publishing workflows can transform legacy content into accessible and compliant digital assets.",
    img: "/images/wp-1.webp",
  },
  {
    title: "How AI Is Transforming Banking Operations",
    excerpt:
      "Discover how AI-driven intelligent automation can modernize banking operations and support context-aware decision-making.",
    img: "/images/wp-2.webp",
  },
  {
    title: "Cash Flow Integrity Report",
    excerpt:
      "Explore how data, analytics, and AI can improve financial oversight, cash flow visibility, and operational integrity.",
    img: "/images/wp-3.webp",
  },
  {
    title: "Accelerating Business Velocity in Life Sciences",
    excerpt:
      "Explore how life sciences organizations can use AI and modern data capabilities to accelerate research and commercial operations.",
    img: "/images/wp-4.webp",
  },
  {
    title: "Building a Scalable, Intelligent Backbone for Pharma",
    excerpt:
      "Explore the data and AI foundations pharmaceutical organizations need to build reliable and scalable operations.",
    img: "/images/wp-5.webp",
  },
  {
    title: "Modern Workforce and Payroll Operations",
    excerpt:
      "Explore the operational challenges facing payroll and staffing organizations and how technology can improve employee experiences.",
    img: "/images/wp-6.webp",
  },
  {
    title: "AI Governance: Towards a Legal Framework",
    excerpt:
      "Explore emerging approaches to AI governance, legal frameworks, risk management, and responsible enterprise AI adoption.",
    img: "/images/wp-7.webp",
  },
  {
    title: "ESG Data & Reporting Trends",
    excerpt:
      "Explore how automated ESG data platforms can improve sustainability reporting, data quality, and enterprise visibility.",
    img: "/images/wp-8.webp",
  },
  {
    title: "Modernizing Healthcare Data Pipelines",
    excerpt:
      "Explore how healthcare organizations can modernize data pipelines to improve data quality, accessibility, and analytical insights.",
    img: "/images/wp-9.webp",
  },
];

export default function Whitepapers() {
  return (
    <>
      <InsightsHero
        title="Whitepapers"
        img="/images/insights-hero-whitepapers.webp"
      />

      <InsightsCardGrid items={WHITEPAPERS} />
    </>
  );
}