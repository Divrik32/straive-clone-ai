import ServiceHero from "../../components/servicepage/ServiceHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import ImpactCards from "../../components/servicepage/ImpactCards";
import CapabilitiesList from "../../components/servicepage/CapabilitiesList";
import IndustryTabs from "../../components/servicepage/IndustryTabs";
import OfferingHighlights from "../../components/servicepage/OfferingHighlights";
import ThoughtLeadership from "../../components/ThoughtLeadership";
import CTABanner from "../../components/CTABanner";

const TABS = ["Insights & Analytics", "AI Design & Deployment", "Product Engg. & Ops"];

const CASE_CARDS = [
  {
    title: "Developed learning content to empower learners in real-time.",
    text: "Built AI-enhanced conversational learning content for 25+ science and engineering subjects for a leading EdTech provider.",
    bg: "bg-pink-100",
    img: "/images/add-case-learning-content.jpg",
  },
  {
    title: "Enabled accessibility enhancements across diverse educational materials.",
    text: "Generated 2.3 million+ image descriptions and remediated 50,000+ pages and slides to drive higher accessibility for students.",
    bg: "bg-emerald-100",
    img: "/images/add-case-accessibility.webp",
  },
];

const CAPABILITIES = ["AI Infrastructure Setup", "AI Training", "AI Development & Training", "AI Deployment"];

const INDUSTRIES = [
  { name: "Science & Research", text: "The exponential growth of complex research data, siloed knowledge across institutions, and the increasing pressure to accelerate breakthrough discoveries are some of the key challenges faced by businesses in this domain." },
  { name: "Financial & Information Services", text: "By integrating AI-powered solutions into research workflows, your organization can significantly enhance its ability to process and analyze vast datasets, identify patterns, and generate new hypotheses." },
  { name: "Pharma & Life Sciences", text: "Through operationalizing AI, you can accelerate scientific discovery, reduce costs, and drive impactful innovations faster." },
  { name: "Retail Tech, Entertainment & Media", text: "AI-driven personalization and content intelligence help media and retail platforms engage audiences at scale." },
];

const HIGHLIGHTS = [
  { title: "Enterprise-Grade AI Platforms", text: "Deploy AI systems with the reliability and governance a scalable, future-proof enterprise demands.", bg: "bg-emerald-50" },
  { title: "Faster, Reliable AI Deployment", text: "Seamlessly integrate AI into robust production environments for consistent, measurable performance.", bg: "bg-amber-50" },
];

export default function AIDesignDeployment() {
  return (
    <>
      <ServiceHero
        title="AI Design & Deployment"
        subtitle="Accelerate your journey to becoming an AI-first company."
        tabs={TABS}
        activeTab={1}
      />
      <ServiceIntro
        heading="Operationalize AI into every business function"
        body="Transform your organization's capabilities by identifying high-impact use cases, developing custom AI solutions, and operationalizing them across your enterprise-grade security and scalability. Accelerate transformation while minimizing risk, resources, and achieving measurable business outcomes with our expertise paving the path for your growth."
      />
      <ImpactCards heading="Delivering impact with our services" cards={CASE_CARDS} />
      <CapabilitiesList heading="Services that augment your AI capabilities" items={CAPABILITIES} />
      <IndustryTabs industries={INDUSTRIES} />
      <OfferingHighlights highlights={HIGHLIGHTS} />
      <ThoughtLeadership />
      <CTABanner />
    </>
  );
}
