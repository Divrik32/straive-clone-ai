import ServiceHero from "../../components/servicepage/ServiceHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import ImpactCards from "../../components/servicepage/ImpactCards";
import CapabilitiesList from "../../components/servicepage/CapabilitiesList";
import AcceleratorsRow from "../../components/servicepage/AcceleratorsRow";
import IndustryTabs from "../../components/servicepage/IndustryTabs";
import OfferingHighlights from "../../components/servicepage/OfferingHighlights";
import ThoughtLeadership from "../../components/ThoughtLeadership";
import CTABanner from "../../components/CTABanner";

const TABS = ["Data Management", "Insights & Analytics", "AI Design & Deployment", "Product Engg. & Ops"];

const CASE_CARDS = [
  {
    title: "Generated high-quality author database and insights",
    text: "Straive built a scalable pipeline that enriched and structured author data, powering discoverability and analytics for a global publisher.",
    bg: "bg-pink-100",
    img: "/images/dm-case-author-database.webp",
  },
  {
    title: "Streamlined data extraction from complex documents",
    text: "Our AI-driven extraction engine standardized unstructured data from thousands of complex documents into clean, usable formats.",
    bg: "bg-emerald-100",
    img: "/images/dm-case-data-extraction.jpg",
  },
];

const CAPABILITIES = ["Data Curation & Summarisation", "Data Architecture & Engineering", "Data Strategy & Governance", "Data Quality"];

const ACCELERATORS = [
  { name: "Sparta AI", sub: "IDP Platform", img: "/images/accelerator-sparta-ai.jpg" },
  { name: "LLM Foundry", sub: "Data Playground", img: "/images/accelerator-llm-foundry.jpg" },
  { name: "Gramener", sub: "Data Manage", img: "/images/accelerator-gramener.webp" },
];

const TECH_LOGOS = [
  { name: "AWS", img: "/images/logo-aws.png" },
  { name: "Databricks", img: "/images/logo-databricks.png" },
  { name: "Google Cloud", img: "/images/logo-google-cloud.jpg" },
  { name: "Microsoft", img: "/images/logo-microsoft.jpg" },
  { name: "Snowflake", img: "/images/logo-snowflake.png" },
];

const INDUSTRIES = [
  { name: "Science & Research", text: "Accelerate discovery with AI-curated research data pipelines that reduce manual review time and surface insights faster." },
  { name: "Logistics & Supply Chain", text: "Unify fragmented logistics data into a single governed layer that powers real-time visibility and planning." },
  { name: "EdTech", text: "Structure and enrich learning content data to personalize experiences and improve content discoverability." },
  { name: "Financial & Information Services", text: "Ensure accurate, compliant, and audit-ready data across financial reporting and information products." },
  { name: "Pharma & Life Sciences", text: "Manage clinical and research data with the rigor and traceability regulated industries demand." },
];

const HIGHLIGHTS = [
  { title: "Unparalleled Data Accuracy and Integrity", text: "99.9% data accuracy achieved through automated validation and AI-assisted quality checks.", bg: "bg-emerald-50" },
  { title: "Seamless Scalability Across Data Environments", text: "100% compatibility with structured, semi-structured, and unstructured data ecosystems.", bg: "bg-amber-50" },
];

export default function DataManagement() {
  return (
    <>
      <ServiceHero title="Data Management" subtitle="Experience data in action." tabs={TABS} activeTab={0} />
      <ServiceIntro
        heading="Turn your data assets into a strategic advantage"
        body="Data is the key to establishing market differentiation, but many organizations still struggle to fully unlock its value. Our approach makes managing data assets an achievable strategic priority, delivering seamless efficiency across your enterprise."
      />
      <ImpactCards heading="Delivering impact with our services" cards={CASE_CARDS} />
      <CapabilitiesList heading="Services that augment your data management capabilities" items={CAPABILITIES} />
      <AcceleratorsRow
        heading="Accelerate your journey to value with pre-built accelerators"
        accelerators={ACCELERATORS}
        techLogos={TECH_LOGOS}
      />
      <IndustryTabs industries={INDUSTRIES} />
      <OfferingHighlights highlights={HIGHLIGHTS} />
      <ThoughtLeadership />
      <CTABanner />
    </>
  );
}
