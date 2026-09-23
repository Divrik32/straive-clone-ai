import { Landmark, Rocket } from "lucide-react";
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
    title: "Revolutionized Michigan's education data system, saving $56M annually",
    text: "A unified, AI-powered analytics platform replaced fragmented reporting systems, cutting costs and improving data-driven decision-making statewide.",
    bg: "bg-pink-100",
    icon: Landmark,
    img: "/images/impact-education.jpg",
  },
  {
    title: "Improved targeted user engagements",
    text: "Behavioral analytics and predictive modeling helped a media platform increase engagement through precisely targeted content recommendations.",
    bg: "bg-emerald-100",
    icon: Rocket,
    img: "/images/impact-user-engagement.jpg",
  },
];

const CAPABILITIES = ["BI Reporting & Visualization", "Advanced Analytics & Modeling", "Text & Data Mining", "Domain-Specific Accelerators"];

const ACCELERATORS = [
  { name: "Spark AI", sub: "IDP Platform", color: "#3b82f6" },
  { name: "LLM Foundry", sub: "Data Playground", color: "#f59e0b" },
  { name: "Gramener", sub: "Data Manage", color: "#8b5cf6" },
];

const INDUSTRIES = [
  { name: "Science & Research", text: "The exponential growth of complex research data, siloed knowledge across institutions, and the increasing pressure to accelerate breakthrough discoveries are some of the key challenges faced by businesses in this domain." },
  { name: "Logistics & Supply Chain", text: "Transform fragmented operational data into a single source of truth that powers real-time visibility and predictive planning." },
  { name: "EdTech", text: "Turn learning behavior data into actionable insights that improve outcomes and personalize the learning journey." },
  { name: "Financial & Information Services", text: "Deliver accurate, compliant, and audit-ready reporting across financial and information products." },
  { name: "Pharma & Life Sciences", text: "Accelerate research and regulatory decisions with analytics-ready, governed clinical data." },
  { name: "Retail Tech, Entertainment & Media", text: "Unlock audience and consumer insight at scale to power personalization and growth." },
];

const HIGHLIGHTS = [
  { title: "Insights as Stories", text: "200+ global clients experiencing decision-making analytics that resonate with every stakeholder.", bg: "bg-emerald-50" },
  { title: "Visual Analytics for Actionable Insights", text: "1,400+ analytics applications built, empowering data interpretation, improved efficiency.", bg: "bg-amber-50" },
];

export default function InsightsAndAnalytics() {
  return (
    <>
      <ServiceHero title="Insights & Analytics" subtitle="Transform data into actionable insights." tabs={TABS} activeTab={1} />
      <ServiceIntro
        heading="Bridge the gap between data and value"
        body="Your business is inundated with data, but insights making sense of it remain elusive. At Straive, we make it easy to unlock the true, actionable potential of your data by transforming complex datasets into clear, contextual, and decision-ready insights across your value chain, by ensuring you extract the right resolution for the risks that lie ahead of your business."
      />
      <ImpactCards heading="Delivering impact with our services" cards={CASE_CARDS} />
      <CapabilitiesList heading="Services that augment your data analytics capabilities" items={CAPABILITIES} />
      <AcceleratorsRow heading="Accelerate your journey to value with pre-built accelerators" accelerators={ACCELERATORS} />
      <IndustryTabs industries={INDUSTRIES} />
      <OfferingHighlights highlights={HIGHLIGHTS} />
      <ThoughtLeadership />
      <CTABanner />
    </>
  );
}
