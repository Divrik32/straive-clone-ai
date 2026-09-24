import ServiceHero from "../../components/servicepage/ServiceHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import ImpactCards from "../../components/servicepage/ImpactCards";
import CapabilitiesList from "../../components/servicepage/CapabilitiesList";
import IndustryTabs from "../../components/servicepage/IndustryTabs";
import OfferingHighlights from "../../components/servicepage/OfferingHighlights";
import ThoughtLeadership from "../../components/ThoughtLeadership";
import CTABanner from "../../components/CTABanner";

const TABS = [
  "AI Engineering",
  "Generative AI",
  "AI Automation",
];

const CASE_CARDS = [
  {
    title: "Built intelligent AI assistants for business workflows",
    text: "Designed AI-powered assistants that help teams access information, automate repetitive tasks, and interact with business data through natural language.",
    bg: "bg-blue-100",
    img: "/images/add-case-learning-content.jpg",
  },
  {
    title: "Automated document-heavy business processes",
    text: "Applied AI and intelligent document processing to extract information, classify content, and reduce manual effort across operational workflows.",
    bg: "bg-emerald-100",
    img: "/images/add-case-accessibility.webp",
  },
];

const CAPABILITIES = [
  "AI Solution Architecture",
  "Generative AI Development",
  "AI Model Integration",
  "AI Agent Development",
  "AI Deployment & Integration",
  "AI Monitoring & Optimization",
];

const INDUSTRIES = [
  {
    name: "Banking & Finance",
    text: "Build AI solutions for document processing, customer support, financial workflows, risk analysis, and internal knowledge management.",
  },
  {
    name: "Healthcare",
    text: "Apply AI to information-heavy workflows, document understanding, knowledge access, and operational automation while keeping business requirements in focus.",
  },
  {
    name: "Retail & E-commerce",
    text: "Use AI-powered assistants, recommendations, content intelligence, and automation to improve digital customer experiences and business operations.",
  },
  {
    name: "Education",
    text: "Create intelligent learning assistants, content processing workflows, and AI-powered platforms that make educational information easier to access and manage.",
  },
  {
    name: "Professional Services",
    text: "Automate knowledge-intensive processes, build internal AI assistants, and connect enterprise information with intelligent workflows.",
  },
];

const HIGHLIGHTS = [
  {
    title: "Production-Ready AI Solutions",
    text: "Design and integrate AI applications with the architecture, security, scalability, and reliability required for real-world business environments.",
    bg: "bg-emerald-50",
  },
  {
    title: "From AI Prototype to Production",
    text: "Move AI ideas beyond experimentation by connecting models, applications, data, and business workflows into practical solutions.",
    bg: "bg-amber-50",
  },
];

export default function AIDesignDeployment() {
  return (
    <>
      <ServiceHero
        title="AI Design & Deployment"
        subtitle="Build and deploy practical AI solutions for modern businesses."
        tabs={TABS}
        activeTab={0}
      />

      <ServiceIntro
        heading="Turn AI ideas into production-ready solutions"
        body="Work Science helps organizations move from AI concepts and prototypes to practical business applications. From solution architecture and generative AI development to deployment and integration, we build AI systems designed around real business workflows and measurable outcomes."
      />

      <ImpactCards
        heading="Creating practical impact with AI"
        cards={CASE_CARDS}
      />

      <CapabilitiesList
        heading="Services that accelerate your AI journey"
        items={CAPABILITIES}
      />

      <IndustryTabs industries={INDUSTRIES} />

      <OfferingHighlights highlights={HIGHLIGHTS} />

      <ThoughtLeadership />

      <CTABanner />
    </>
  );
}