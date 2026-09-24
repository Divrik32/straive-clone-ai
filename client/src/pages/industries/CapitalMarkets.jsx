import { Wallet, Building2, ShieldCheck } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import IndustryBanner from "../../components/industrypage/IndustryBanner";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import ContactForm from "../../components/ContactForm";

const SEGMENTS = [
  {
    icon: Wallet,
    title: "Wealth Management",
    text: "Use AI, analytics, and automation to improve portfolio operations, client reporting, research workflows, and advisor productivity.",
  },
  {
    icon: Building2,
    title: "Private Equity & Private Credit",
    text: "Apply data-driven analytics and intelligent workflows to support investment analysis, portfolio monitoring, risk assessment, and reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Investment & Risk Management",
    text: "Use data, AI, and automation to improve investment operations, risk monitoring, compliance workflows, and decision support.",
  },
];

const USE_CASES = [
  {
    name: "Client Reporting Automation",
    img: "/images/cm-toolkit-1.webp",
    alt: "Client reporting automation",
    description:
      "Automate data collection, validation, reconciliation, and report generation across investment and client reporting workflows.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Automated data processing",
      "Consistent reporting workflows",
      "Reduced repetitive manual work",
    ],
  },
  {
    name: "RFP & DDQ Automation",
    img: "/images/cm-toolkit-2.webp",
    alt: "RFP and DDQ automation",
    description:
      "Use AI to help teams search governed knowledge, draft responses, and organize information for RFPs and due-diligence questionnaires.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Faster information retrieval",
      "Consistent AI-assisted responses",
      "Reusable knowledge workflows",
    ],
  },
  {
    name: "Data Reconciliation",
    img: "/images/cm-toolkit-3.webp",
    alt: "Investment data reconciliation",
    description:
      "Automate reconciliation across business systems and identify data discrepancies that require review.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Automated reconciliation workflows",
      "Improved data visibility",
      "Faster exception identification",
    ],
  },
  {
    name: "Entity Resolution",
    img: "/images/cm-toolkit-4.webp",
    alt: "Entity resolution",
    description:
      "Use intelligent matching to connect fragmented client, company, and counterparty records across multiple systems.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Connected business records",
      "Improved data quality",
      "More efficient information management",
    ],
  },
  {
    name: "Research Intelligence",
    img: "/images/cm-toolkit-5.webp",
    alt: "Investment research intelligence",
    description:
      "Use AI to search, summarize, classify, and organize research and market information for investment and business teams.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Faster research workflows",
      "AI-assisted information discovery",
      "Structured knowledge access",
    ],
  },
];

const INSIGHTS = [
  {
    title: "AI-Powered Financial Data Processing",
    img: "/images/cm-insight-1.webp",
    label: "Insight",
  },
  {
    title: "Intelligent Data Reconciliation for Investment Operations",
    img: "/images/cm-insight-2.webp",
    label: "Insight",
  },
  {
    title: "Using AI to Improve Financial Research Workflows",
    img: "/images/cm-insight-3.webp",
    label: "Insight",
  },
];

export default function CapitalMarkets() {
  return (
    <>
      <IndustryHero
        title="AI-Powered Solutions for Capital Markets"
        subtitle="Use AI, analytics, and intelligent automation to modernize investment management workflows."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <IndustryBanner
        heading="Modernize Investment Operations with Data and AI"
        text="Work Science helps investment and financial organizations use data, AI, analytics, and automation to improve information processing, reporting, research, and operational workflows."
        bullets={[
          "Intelligent data processing",
          "Automated business workflows",
          "AI-assisted decision support",
        ]}
      />

      <section id="solutions-section" className="scroll-mt-24">
        <IconCardGrid
          heading="Segments We Support"
          items={SEGMENTS}
          columns={3}
        />
      </section>

      <ToolkitTabs
        heading="AI & Data Use Cases for Investment Management"
        tabs={USE_CASES}
      />

      <IndustryBanner
        heading="Build Smarter Investment Operations"
        text="Connect financial data, AI capabilities, analytics, and business workflows to create more efficient and connected investment operations."
        buttonLabel="Talk to Our Experts"
      />

      <CaseStudyGrid
        heading="Insights for Financial Services"
        items={INSIGHTS}
        tag
      />

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}