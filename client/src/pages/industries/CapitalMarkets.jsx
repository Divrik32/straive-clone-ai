import { Wallet, Building2, ShieldCheck } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import IndustryBanner from "../../components/industrypage/IndustryBanner";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import ContactForm from "../../components/ContactForm";

const SEGMENTS = [
  { icon: Wallet, title: "Wealth Management", text: "Empowered solutions that optimize performance, risk, and advisor productivity across the ever-evolving wealth landscape." },
  { icon: Building2, title: "Private Equity and Private Credit", text: "We empower private equity and credit firms with data-driven analytics to enhance decision-making, assess risk, and boost returns across alternative investments." },
  { icon: ShieldCheck, title: "Insurance Investment Management", text: "Leveraging AI and analytics, we help insurance firms optimize asset allocation and improve investment strategies while ensuring regulatory compliance." },
];

const USE_CASES = [
  {
    name: "Client Reporting Automation",
    img: "/images/cm-toolkit-1.webp",
    alt: "Client Reporting Automation",
    description:
      "For a $500 Billion AUM Asset Manager, we created a data processing framework with Alteryx and SQL to automate workflows. Automated reconciliation enhanced data accuracy, customized reporting, and streamlined report generation. This integration of CRM, reporting, and finance systems reduced manual effort and improved efficiency, enabling the client to make informed strategic decisions.",
    bulletsTitle: "Impact:",
    bullets: [
      "95% accuracy",
      "70% reduction in manual effort",
    ],
  },

  {
    name: "RFP/DDQ Automation",
    img: "/images/cm-toolkit-2.webp",
    alt: "RFP and DDQ Automation",
    description:
      "AI-assisted response generation for RFPs and due-diligence questionnaires, drawing from a governed knowledge base to cut turnaround time significantly.",
    bulletsTitle: "Impact:",
    bullets: [
      "60% faster RFP turnaround",
      "Consistent, audit-ready responses",
    ],
  },

  {
    name: "AI/CRM/BCM Reconciliation",
    img: "/images/cm-toolkit-3.webp",
    alt: "AI CRM BCM Reconciliation",
    description:
      "Automated reconciliation across CRM and book-of-record systems, flagging discrepancies in real time and reducing manual reviewer effort.",
    bulletsTitle: "Impact:",
    bullets: [
      "Reduced reconciliation cycle time",
      "Improved data integrity",
    ],
  },

  {
    name: "Entity Resolution",
    img: "/images/cm-toolkit-4.webp",
    alt: "Entity Resolution",
    description:
      "AI-driven entity matching unifies fragmented client and counterparty records across systems, improving KYC and reporting accuracy.",
    bulletsTitle: "Impact:",
    bullets: [
      "Unified golden-source records",
      "Faster KYC processing",
    ],
  },

  {
    name: "Research Synthesis",
    img: "/images/cm-toolkit-5.webp",
    alt: "Research Synthesis",
    description:
      "LLM-powered synthesis condenses analyst research and market data into concise, decision-ready briefs for portfolio teams.",
    bulletsTitle: "Impact:",
    bullets: [
      "Faster research turnaround",
      "Consistent research quality",
    ],
  },
];

const INSIGHTS = [
  { title: "AML Response for Speed & Accuracy", img: "/images/cm-insight-1.webp", label: "Case Study" },
  { title: "Unveiling Price Anomalies in Investment Management", img: "/images/cm-insight-2.webp", label: "Whitepaper" },
  { title: "Automated Data Extraction and Reconciliation", img: "/images/cm-insight-3.webp", label: "Case Study" },
];

export default function CapitalMarkets() {
  return (
    <>
      <IndustryHero
        title="Data-Driven & AI-Powered Investment Management"
        subtitle="Capital Markets solutions built on analytics and AI."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <IndustryBanner
        heading="Analytics and AI Solutions Empower the World's Leading Investment Management Firms"
        text="Straive recognizes key challenges across the investment value chain and provides cutting-edge advanced analytics solutions that drive real business impact."
        bullets={["Improved revenue growth", "Increased operational efficiency", "Enhanced client experience"]}
      />

      <IconCardGrid heading="Segments We Support" items={SEGMENTS} columns={3} />

      <ToolkitTabs heading="Straive Drives Business Impact for Investment Managers" tabs={USE_CASES} />

      <IndustryBanner
        heading="Drive Operational Efficiency and AI-Driven ROI for Asset Managers"
        text="Straive's investment management solutions blend deep domain expertise with AI operationalization to help asset managers move faster, reduce cost, and stay compliant."
        buttonLabel="Download Brochure"
      />

      <CaseStudyGrid heading="Explore Our Latest Insights" items={INSIGHTS} tag />

      <ContactForm />
    </>
  );
}
