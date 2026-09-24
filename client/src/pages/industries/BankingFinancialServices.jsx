import {
  Landmark,
  Building2,
  HandCoins,
  Cpu,
  Wallet,
  Network,
} from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import IndustryBanner from "../../components/industrypage/IndustryBanner";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import ContactForm from "../../components/ContactForm";

const SOLUTIONS = [
  {
    img: "/images/bf-solution-1.jpeg",
    title: "Insights & Analytics",
    text: "Transform financial and operational data into dashboards, analytics, and actionable insights for better business decisions.",
  },
  {
    img: "/images/bf-solution-2.webp",
    title: "AI-Powered Operations",
    text: "Redesign repetitive workflows with AI and automation to improve operational efficiency and support teams with intelligent tools.",
  },
  {
    img: "/images/bf-solution-3.jpg",
    title: "AI Design & Deployment",
    text: "Build practical AI applications by connecting models, data, applications, and business workflows.",
  },
  {
    img: "/images/bf-solution-4.jpg",
    title: "Data & AI Advisory",
    text: "Identify practical opportunities for analytics, automation, and AI through structured discovery and use-case prioritization.",
  },
];

const USE_CASES = [
  {
    name: "Fraud & Risk Intelligence",
    img: "/images/bfs-usecase-1.webp",
    alt: "Fraud and risk intelligence",
    description:
      "Use analytics and AI-assisted monitoring to identify unusual patterns and support fraud, risk, and compliance teams.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Intelligent anomaly detection",
      "Risk monitoring workflows",
      "Faster investigation support",
    ],
  },
  {
    name: "Customer Analytics",
    img: "/images/bfs-usecase-2.webp",
    alt: "Customer analytics",
    description:
      "Analyze customer behavior and business data to improve segmentation, engagement, retention, and service experiences.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Customer segmentation",
      "Behavioral insights",
      "Personalized engagement opportunities",
    ],
  },
  {
    name: "Collections & Remediation",
    img: "/images/bfs-usecase-3.webp",
    alt: "Collections and remediation",
    description:
      "Use predictive analytics and workflow automation to organize collection activities and support remediation processes.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Prioritized workflows",
      "Data-driven decision support",
      "Automated process management",
    ],
  },
  {
    name: "Customer Service & Operations",
    img: "/images/bfs-usecase-4.webp",
    alt: "Customer service and operations",
    description:
      "AI assistants and workflow automation can support service teams with information retrieval, request handling, and repetitive operational tasks.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "AI-assisted customer support",
      "Faster information access",
      "Automated service workflows",
    ],
  },
  {
    name: "Regulatory Operations",
    img: "/images/bfs-usecase-5.webp",
    alt: "Regulatory operations",
    description:
      "Organize regulatory information, reporting workflows, and compliance-related processes using data and intelligent automation.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Structured regulatory workflows",
      "Automated information processing",
      "Improved reporting visibility",
    ],
  },
  {
    name: "Model Monitoring",
    img: "/images/bfs-usecase-6.webp",
    alt: "AI model monitoring",
    description:
      "Support the ongoing monitoring and documentation of analytical and AI models across business environments.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Model performance monitoring",
      "Data and model validation workflows",
      "Structured model documentation",
    ],
  },
];

const CLIENTS = [
  {
    icon: Landmark,
    title: "Banks",
    text: "Use AI, analytics, and automation to improve customer experiences, operations, risk management, and decision-making.",
  },
  {
    icon: Building2,
    title: "Commercial Banking",
    text: "Apply data-driven solutions to support credit, customer analytics, operational workflows, and financial decision-making.",
  },
  {
    icon: HandCoins,
    title: "Lenders",
    text: "Use analytics and intelligent workflows to support credit assessment, document processing, and operational processes.",
  },
  {
    icon: Cpu,
    title: "FinTech Companies",
    text: "Build AI-enabled products and data solutions that support digital financial experiences and scalable operations.",
  },
  {
    icon: Wallet,
    title: "Asset Management",
    text: "Use data and analytics to support investment operations, research, reporting, and portfolio-related workflows.",
  },
  {
    icon: Network,
    title: "Payments",
    text: "Apply intelligent analytics and automation to payment operations, transaction monitoring, customer support, and risk workflows.",
  },
];

export default function BankingFinancialServices() {
  return (
    <>
      <IndustryHero
        title="AI & Data Solutions for Banking and Financial Services"
        subtitle="Modernize financial operations with analytics, automation, and practical AI solutions."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <IndustryBanner
        heading="Build Smarter Financial Services with AI and Data"
        text="Work Science helps banking and financial services organizations transform data into useful intelligence while improving operational workflows through AI, analytics, and automation."
      />

      <section id="solutions-section" className="scroll-mt-24">
        <IconCardGrid
          heading="Banking & Financial Services Solutions"
          items={SOLUTIONS}
          columns={4}
        />
      </section>

      <ToolkitTabs
        heading="AI & Analytics Use Cases"
        tabs={USE_CASES}
      />

      <IconCardGrid
        heading="Organizations We Support"
        items={CLIENTS}
        columns={3}
        bg="bg-[#f7f7f9]"
      />

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}