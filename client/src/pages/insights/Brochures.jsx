import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const BROCHURES = [
  { title: "AI Opportunity for Investment Managers", excerpt: "Investment managers can scale enterprise AI at scale, drive growth, enhanced decisioning, and unlock new value across the portfolio...", img: "/images/ar-card-1.webp" },
  { title: "Engineering the Future of AI-Driven Publishing", excerpt: "Purpose-built AI solutions that optimize publishing, editorial, accessibility, discovery, customer support, and more...", img: "/images/ar-card-2.webp" },
  { title: "The Next Era of Media Growth: AI-Driven", excerpt: "Straive partners with the world's leading broadcasters, streaming platforms, and publishers to embed intelligence at scale...", img: "/images/ar-card-3.webp" },
  { title: "Improving Accessibility With Efficiency", excerpt: "We believe accessibility should be seamless. SPACE is our AI-powered platform, leveraging Large Language Models...", img: "/images/ar-card-4.webp" },
  { title: "The 5 Generations Of AI Maturity In Publishing: Progression To Autonomy", excerpt: "Reengineering Publishing at Scale: Domain-Driven AI for Operational Reinvention.", img: "/images/ar-card-5.webp" },
  { title: "Accelerate Publishing Excellence With Intelligent Automation & Next-Gen AI", excerpt: "Transform the Submit-to-Publish Journey with the aiXra AI Platform.", img: "/images/ar-card-6.webp" },
  { title: "From Cost Center to Value Center", excerpt: "For GBS/GCC, Scale, and responsible AI adoption at every stage of the enterprise journey...", img: "/images/ar-card-7.webp" },
  { title: "One-Stop Partner For Operationalizing AI Across Global Enterprises", excerpt: "Delivering scalable, secure, and responsible AI at enterprise speed.", img: "/images/resource-ai-enabled-gcc.webp" },
  { title: "Future-Ready Risk Intelligence for Financial Leaders", excerpt: "Straive equips financial leaders with future-ready analytics to manage volatility, safeguard profitability, and grow.", img: "/images/data-domain-strategy.webp" },
  { title: "Supply Chain & Logistics", excerpt: "Advanced Analytics & Data Engineering capabilities for Logistics & Supply Chain Operations that deliver measurable outcomes...", img: "/images/automation-digital-ops.webp" },
  { title: "AI-Native Pharma & Life Sciences: Building the Future of Scientific Workflows", excerpt: "For Pharma & Life Sciences, true transformation starts with an AI-native approach — one that reimagines the workflow.", img: "/images/thought-leadership-clinical-data.webp" },
  { title: "Choosing the Right LLM for Pharma", excerpt: "Learn how we can select an LLM model that aligns with regulatory standards and budget limitations while producing accurate outcomes.", img: "/images/llms-struggle-with-unstructured-data.webp" },
  { title: "Straive at a Glance: Driving Scalable AI and Analytics Across Industries", excerpt: "Straive operationalizes AI and analytics for global enterprises — embedding intelligence into workflows to boost outcomes.", img: "/images/msc-ai-image.webp" },
  { title: "Enhance Operational Efficiency and AI-Driven Insights for Assets Manager", excerpt: "Straive's data analytics and AI solutions suite spans the entire investment value chain, enabling asset managers.", img: "/images/data-curation-digitized-operations.webp" },
  { title: "Straive Collections Support: Transforming Accounts Receivable Collections", excerpt: "At Straive, we bring over 15 years of operational excellence to collections support, backed by a successful track record.", img: "/images/cx-ops-ai-agents.webp" },
  { title: "Enabling Publishers to Protect the Integrity of Their Content", excerpt: "Maintaining research integrity and publishing ethics are critical focus areas in the scientific community.", img: "/images/dm-case-author-database.webp" },
  { title: "Straive's Commercial Customer Onboarding Document Automation Solution", excerpt: "Customer onboarding starts the journey between a bank and a client, setting the tone for the relationship.", img: "/images/technology-platform-ops.webp" },
  { title: "Straive End-to-End Accessibility Services Capabilities", excerpt: "Companies increasingly depend on digital content and services to drive growth and maintain competitiveness.", img: "/images/add-case-accessibility.webp" },
  { title: "Invoice Extraction Platform", excerpt: "Most enterprises invest a large amount of effort and time in extracting invoice data manually. The resulting data is often inconsistent.", img: "/images/add-case-learning-content.jpg" },
];

export default function Brochures() {
  return (
    <>
      <InsightsHero title="Brochures" img="/images/insights-hero-whitepapers.webp" />
      <InsightsCardGrid items={BROCHURES} />
    </>
  );
}
