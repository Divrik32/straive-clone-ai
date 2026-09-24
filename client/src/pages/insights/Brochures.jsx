import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const BROCHURES = [
  {
    title: "AI Opportunity for Investment Managers",
    excerpt:
      "Explore how investment managers can use enterprise AI, analytics, and automation to support growth and better decision-making.",
    img: "/images/ar-card-1.webp",
  },
  {
    title: "Engineering the Future of AI-Driven Publishing",
    excerpt:
      "Explore AI-powered approaches for publishing, editorial workflows, accessibility, discovery, and customer support.",
    img: "/images/ar-card-2.webp",
  },
  {
    title: "The Next Era of Media Growth: AI-Driven",
    excerpt:
      "Explore how AI and data can support intelligent operations across broadcasting, streaming, media, and publishing.",
    img: "/images/ar-card-3.webp",
  },
  {
    title: "Improving Accessibility With Efficiency",
    excerpt:
      "Explore how AI-powered accessibility solutions can help organizations create more inclusive digital content and experiences.",
    img: "/images/ar-card-4.webp",
  },
  {
    title: "The Five Generations of AI Maturity in Publishing",
    excerpt:
      "Explore the progression of AI maturity in publishing and the journey toward increasingly autonomous intelligent workflows.",
    img: "/images/ar-card-5.webp",
  },
  {
    title: "Accelerating Publishing Excellence With Intelligent Automation",
    excerpt:
      "Explore how intelligent automation and next-generation AI can transform the submit-to-publish journey.",
    img: "/images/ar-card-6.webp",
  },
  {
    title: "From Cost Center to Value Center",
    excerpt:
      "Explore how organizations can use intelligent automation, AI, and modern operating models to create measurable business value.",
    img: "/images/ar-card-7.webp",
  },
  {
    title: "One-Stop Partner for Operationalizing AI Across Enterprises",
    excerpt:
      "Explore approaches for delivering scalable, secure, and responsible AI across enterprise workflows.",
    img: "/images/resource-ai-enabled-gcc.webp",
  },
  {
    title: "Future-Ready Risk Intelligence for Financial Leaders",
    excerpt:
      "Explore analytics and AI approaches that help financial leaders manage risk, improve visibility, and support informed decisions.",
    img: "/images/data-domain-strategy.webp",
  },
  {
    title: "Supply Chain & Logistics",
    excerpt:
      "Explore advanced analytics and data engineering capabilities for modern supply chain and logistics operations.",
    img: "/images/automation-digital-ops.webp",
  },
  {
    title: "AI-Native Pharma & Life Sciences",
    excerpt:
      "Explore how AI-native approaches can reimagine scientific workflows and modernize pharmaceutical and life sciences operations.",
    img: "/images/thought-leadership-clinical-data.webp",
  },
  {
    title: "Choosing the Right LLM for Pharma",
    excerpt:
      "Explore factors organizations can consider when selecting an LLM for pharmaceutical workflows, regulatory requirements, and business needs.",
    img: "/images/llms-struggle-with-unstructured-data.webp",
  },
  {
    title: "Driving Scalable AI and Analytics Across Industries",
    excerpt:
      "Explore how AI, analytics, and data engineering can be embedded into enterprise workflows across multiple industries.",
    img: "/images/msc-ai-image.webp",
  },
  {
    title: "AI-Driven Insights for Asset Managers",
    excerpt:
      "Explore how data analytics and AI can support decision-making across the investment and asset management value chain.",
    img: "/images/data-curation-digitized-operations.webp",
  },
  {
    title: "Collections Support: Transforming Accounts Receivable Operations",
    excerpt:
      "Explore how intelligent workflows and operational expertise can modernize accounts receivable collections processes.",
    img: "/images/cx-ops-ai-agents.webp",
  },
  {
    title: "Protecting the Integrity of Scholarly Content",
    excerpt:
      "Explore approaches for maintaining research integrity, publishing ethics, and content quality across scholarly workflows.",
    img: "/images/dm-case-author-database.webp",
  },
  {
    title: "Commercial Customer Onboarding Document Automation",
    excerpt:
      "Explore how document automation can simplify customer onboarding and improve information processing across financial workflows.",
    img: "/images/technology-platform-ops.webp",
  },
  {
    title: "End-to-End Accessibility Services",
    excerpt:
      "Explore how accessibility services can help organizations make digital content and services more inclusive and usable.",
    img: "/images/add-case-accessibility.webp",
  },
  {
    title: "Invoice Extraction Platform",
    excerpt:
      "Explore how automated invoice extraction can reduce manual data entry and create more consistent structured financial information.",
    img: "/images/add-case-learning-content.jpg",
  },
];

export default function Brochures() {
  return (
    <>
      <InsightsHero
        title="Brochures"
        img="/images/insights-hero-whitepapers.webp"
      />

      <InsightsCardGrid items={BROCHURES} />
    </>
  );
}