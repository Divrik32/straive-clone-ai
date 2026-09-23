import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const WHITEPAPERS = [
  { title: "Transforming Legacy Content Into Compliant Digital Assets Through Apple ePub 3 and Fixed Layout", excerpt: "This whitepaper explores how Straive's Accessibility team combined workflows to deliver fully compliant...", img: "/images/wp-1.webp" },
  { title: "How AI Is Transforming Banking Operations", excerpt: "Discover how AI-driven intelligent automation is modernizing banking operations, enabling context-aware...", img: "/images/wp-2.webp" },
  { title: "Cash Flow Integrity Report", excerpt: "In depth financial oversight matters more than ever. This report explores how AI improves cash flow integrity...", img: "/images/wp-3.webp" },
  { title: "Accelerating Business Velocity in Life Sciences", excerpt: "This whitepaper explores how life sciences organizations accelerate research and commercial timelines with AI...", img: "/images/wp-4.webp" },
  { title: "Building a Scalable, Intelligent Backbone for Pharma", excerpt: "This whitepaper explores the data and AI foundation pharma companies need to scale operations reliably...", img: "/images/wp-5.webp" },
  { title: "Why 25% of All Payroll Staffing Providers Can't Keep Pace with Employee Demands", excerpt: "This whitepaper examines the operational gaps holding payroll staffing providers back from employee...", img: "/images/wp-6.webp" },
  { title: "AI Governance: Towards a Legal Framework", excerpt: "As AI adoption accelerates, this whitepaper examines the emerging legal and regulatory frameworks organizations...", img: "/images/wp-7.webp" },
  { title: "ESG Data & Reporting Trends", excerpt: "This whitepaper examines how automated ESG data platforms are reshaping sustainability reporting for enterprises...", img: "/images/wp-8.webp" },
  { title: "Modernizing Healthcare Data Pipelines", excerpt: "This whitepaper explores how healthcare organizations modernize data pipelines to unlock faster, more accurate...", img: "/images/wp-9.webp" },
];

export default function Whitepapers() {
  return (
    <>
      <InsightsHero title="Whitepapers" img="/images/insights-hero-whitepapers.webp" />
      <InsightsCardGrid items={WHITEPAPERS} />
    </>
  );
}
