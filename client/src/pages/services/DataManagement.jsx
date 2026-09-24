import ServiceHero from "../../components/servicepage/ServiceHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import ImpactCards from "../../components/servicepage/ImpactCards";
import CapabilitiesList from "../../components/servicepage/CapabilitiesList";
import AcceleratorsRow from "../../components/servicepage/AcceleratorsRow";
import IndustryTabs from "../../components/servicepage/IndustryTabs";
import OfferingHighlights from "../../components/servicepage/OfferingHighlights";
import ThoughtLeadership from "../../components/ThoughtLeadership";
import CTABanner from "../../components/CTABanner";

const TABS = [
  "AI Engineering",
  "Generative AI",
  "AI Automation",
  "Data & Analytics",
];

const CASE_CARDS = [
  {
    title: "Automated business data processing with AI",
    text: "Work Science helps organizations automate repetitive data workflows, transform unstructured information, and turn operational data into actionable business insights.",
    bg: "bg-blue-100",
    img: "/images/dm-case-author-database.webp",
  },
  {
    title: "Intelligent document understanding",
    text: "AI-powered document processing can extract relevant information from invoices, forms, reports, and other business documents while reducing manual processing effort.",
    bg: "bg-emerald-100",
    img: "/images/dm-case-data-extraction.jpg",
  },
];

const CAPABILITIES = [
  "Data Engineering & Integration",
  "AI-Powered Data Processing",
  "Data Quality & Validation",
  "Business Intelligence & Analytics",
  "Document Intelligence",
  "Data Automation",
];

const ACCELERATORS = [
  {
    name: "AI Workflow Engine",
    sub: "Intelligent Automation",
    img: "/images/accelerator-sparta-ai.jpg",
  },
  {
    name: "Document AI",
    sub: "Intelligent Extraction",
    img: "/images/accelerator-llm-foundry.jpg",
  },
  {
    name: "Analytics Hub",
    sub: "Business Intelligence",
    img: "/images/accelerator-gramener.webp",
  },
];

const TECH_LOGOS = [
  { name: "AWS", img: "/images/logo-aws.png" },
  { name: "Microsoft Azure", img: "/images/logo-microsoft.jpg" },
  { name: "Google Cloud", img: "/images/logo-google-cloud.jpg" },
  { name: "Databricks", img: "/images/logo-databricks.png" },
  { name: "Snowflake", img: "/images/logo-snowflake.png" },
];

const INDUSTRIES = [
  {
    name: "Banking & Finance",
    text: "Automate financial data processing, reporting, document workflows, and analytics while improving operational visibility.",
  },
  {
    name: "Healthcare",
    text: "Structure and process complex healthcare information to support efficient workflows, reporting, and data-driven operations.",
  },
  {
    name: "Retail & E-commerce",
    text: "Connect customer, product, and transaction data to improve analytics, personalization, and operational decision-making.",
  },
  {
    name: "Education",
    text: "Organize learning and administrative data to create smarter workflows, analytics, and digital experiences.",
  },
  {
    name: "Professional Services",
    text: "Automate information-heavy business processes and transform operational data into useful insights for teams and decision-makers.",
  },
];

const HIGHLIGHTS = [
  {
    title: "Smarter Data Operations",
    text: "Use automation and AI-assisted processing to reduce repetitive manual data tasks and improve workflow efficiency.",
    bg: "bg-blue-50",
  },
  {
    title: "Connected Business Insights",
    text: "Bring data from multiple business systems together to create clearer reporting and more informed operational decisions.",
    bg: "bg-amber-50",
  },
];

export default function DataManagement() {
  return (
    <>
      <ServiceHero
        title="Data & Analytics"
        subtitle="Turn business data into actionable intelligence."
        tabs={TABS}
        activeTab={0}
      />

      <ServiceIntro
        heading="Build a smarter foundation for your AI-driven business"
        body="Modern businesses generate large volumes of information across applications, documents, and operational systems. Work Science helps organize, integrate, process, and analyze that data so organizations can automate workflows and make better use of their information."
      />

      <ImpactCards
        heading="Transforming data into business value"
        cards={CASE_CARDS}
      />

      <CapabilitiesList
        heading="Data capabilities built for modern businesses"
        items={CAPABILITIES}
      />

      <AcceleratorsRow
        heading="Accelerate your data and AI initiatives"
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