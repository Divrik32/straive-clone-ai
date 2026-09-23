import { Landmark, Building2, HandCoins, Cpu, Wallet, Network } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import IndustryBanner from "../../components/industrypage/IndustryBanner";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import ContactForm from "../../components/ContactForm";

const SOLUTIONS = [
  { img: "/images/bf-solution-1.jpeg", title: "Insights & Analytics", text: "Unlock advanced analytics and AI through data to drive smarter decision-making and business success." },
  { img: "/images/bf-solution-2.webp", title: "Product Engg. & Expert-in-Loop Ops", text: "Redesign workflows and interfaces with data and AI-powered operations to optimize human roles and efficiency." },
  { img: "/images/bf-solution-3.jpg", title: "AI Design & Deployment", text: "Build a strong AI foundation with LLM models, data pipelines, and fine-tuning solutions to optimize performance." },
  { img: "/images/bf-solution-4.jpg", title: "Advisory", text: "Identify advanced analytics and data opportunities with diagnostics and business case prioritization to drive decisions." },
];

const USE_CASES = [
  {
    name: "Fraud, AML & Security",
    img: "/images/bfs-usecase-1.webp",
    alt: "Fraud, AML and Security",
    description:
      "AI-driven anomaly detection and network analysis identify fraud and AML risks in real time, reducing false positives while maintaining regulatory compliance.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Real-time fraud and AML monitoring",
      "Reduced false-positive rates",
      "Faster investigation cycles",
    ],
  },

  {
    name: "Marketing Analytics",
    img: "/images/bfs-usecase-2.webp",
    alt: "Marketing Analytics",
    description:
      "Segment, refine segmentation, and assess retention. Identify cross-sell and upsell opportunities with AI-powered personalized engagement.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Precision customer segmentation",
      "AI-driven cross-sell/upsell targeting",
      "Improved campaign ROI",
    ],
  },

  {
    name: "Collections & Remediations",
    img: "/images/bfs-usecase-3.webp",
    alt: "Collections and Remediations",
    description:
      "Predictive models prioritize collections outreach and remediation workflows, improving recovery rates while maintaining a compliant customer experience.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Prioritized collections queues",
      "Improved recovery rates",
      "Compliant remediation workflows",
    ],
  },

  {
    name: "Care Center & Operations",
    img: "/images/bfs-usecase-4.webp",
    alt: "Care Center and Operations",
    description:
      "AI copilots and automation streamline contact center operations, reducing handling time and improving customer satisfaction.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Reduced average handling time",
      "Higher first-contact resolution",
      "Consistent service quality",
    ],
  },

  {
    name: "Regulatory Risk",
    img: "/images/bfs-usecase-5.webp",
    alt: "Regulatory Risk",
    description:
      "Automated regulatory monitoring and reporting reduce compliance burden while improving audit readiness across jurisdictions.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Automated regulatory reporting",
      "Improved audit readiness",
      "Reduced compliance overhead",
    ],
  },

  {
    name: "Model Risk Management",
    img: "/images/bfs-usecase-6.webp",
    alt: "Model Risk Management",
    description:
      "Governed model validation and monitoring frameworks ensure AI and analytical models remain accurate, fair, and compliant over time.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Continuous model monitoring",
      "Bias and drift detection",
      "Audit-ready model documentation",
    ],
  },
];

const CLIENTS = [
  { icon: Landmark, title: "Banks", text: "Retail and small banks unlock AI and data analytics to optimize operations and drive smarter decision-making." },
  { icon: Building2, title: "Commercial Banks", text: "We empower commercial banks with advanced analytics solutions to optimize credit risk assessment and drive data-driven decision-making." },
  { icon: HandCoins, title: "Alternate Lenders", text: "We provide alternative lenders with data-driven risk modeling to enhance credit risk approval processes and automate compliance checks." },
  { icon: Cpu, title: "FinTech Companies", text: "FinTech companies leverage our analytics to streamline operations, enhance customer insights, and drive real-time decisions." },
  { icon: Wallet, title: "Asset Management", text: "We enable asset management firms to harness the power of data-driven insights for improved portfolio optimization and predictive market insights." },
  { icon: Network, title: "Payment Processors & Networks", text: "We assist payment processors and networks by utilizing advanced analytics to optimize fraud detection and improve compliance management." },
];

export default function BankingFinancialServices() {
  return (
    <>
      <IndustryHero
        title="Transform Business with AI and Advanced Analytics"
        subtitle="Banking and Financial Services"
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <IndustryBanner
        heading="At Straive, we help banking and financial services organizations harness data and AI"
        text="Our scalable solutions ensure compliance, mitigate risks, and deliver measurable business impact through decision-making, automation, and efficiency."
      />

      <IconCardGrid heading="Straive's BFS Industry Solutions" items={SOLUTIONS} columns={4} />

      <ToolkitTabs heading="Use Cases" tabs={USE_CASES} />

      <IconCardGrid heading="Clients We Serve" items={CLIENTS} columns={3} bg="bg-[#f7f7f9]" />

      <ContactForm />
    </>
  );
}
