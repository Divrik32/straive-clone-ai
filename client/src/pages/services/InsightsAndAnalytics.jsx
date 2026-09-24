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
  "Data Management",
  "Insights & Analytics",
  "AI Design & Deployment",
  "Product Engg. & Ops",
];

const CASE_CARDS = [
  {
    title: "Turn complex business data into actionable insights",
    text: "Work Science helps organizations bring data together, identify meaningful patterns, and create analytics solutions that support faster and better business decisions.",
    bg: "bg-pink-100",
    img: "/images/impact-education.jpg",
  },
  {
    title: "Improve customer and operational intelligence",
    text: "Analytics, dashboards, and predictive models help teams understand customer behavior, monitor operations, and identify opportunities for improvement.",
    bg: "bg-emerald-100",
    img: "/images/impact-user-engagement.jpg",
  },
];

const CAPABILITIES = [
  "Business Intelligence & Reporting",
  "Data Visualization & Dashboards",
  "Advanced Analytics & Modeling",
  "Predictive Analytics",
  "Data Mining & Pattern Analysis",
  "AI-Powered Decision Support",
];

const ACCELERATORS = [
  {
    name: "Analytics Engine",
    sub: "Business Intelligence",
    color: "#3b82f6",
  },
  {
    name: "AI Insights",
    sub: "Intelligent Analytics",
    color: "#f59e0b",
  },
  {
    name: "Data Intelligence",
    sub: "Data & Analytics",
    color: "#8b5cf6",
  },
];

const INDUSTRIES = [
  {
    name: "Banking & Finance",
    text: "Use business intelligence, predictive analytics, and data visualization to improve financial reporting, customer insights, operational monitoring, and decision-making.",
  },
  {
    name: "Logistics & Supply Chain",
    text: "Transform operational data into real-time visibility, performance insights, demand forecasting, and predictive planning.",
  },
  {
    name: "Education",
    text: "Analyze learning and operational data to understand learner behavior, improve engagement, and support data-driven educational decisions.",
  },
  {
    name: "Healthcare & Life Sciences",
    text: "Bring together complex operational and research data to support reporting, analytics, workflow optimization, and informed decision-making.",
  },
  {
    name: "Retail & E-commerce",
    text: "Understand customer behavior, product performance, and business trends through analytics and actionable customer insights.",
  },
  {
    name: "Technology & Professional Services",
    text: "Use analytics to monitor business performance, understand operational trends, and identify opportunities for automation and process improvement.",
  },
];

const HIGHLIGHTS = [
  {
    title: "Insights That Drive Decisions",
    text: "Transform complex datasets into clear dashboards, reports, and insights that business teams can use in their everyday decision-making.",
    bg: "bg-emerald-50",
  },
  {
    title: "AI-Powered Analytics",
    text: "Combine analytics, automation, and AI capabilities to identify patterns, surface useful information, and support faster business decisions.",
    bg: "bg-amber-50",
  },
];

export default function InsightsAndAnalytics() {
  return (
    <>
      <ServiceHero
        title="Insights & Analytics"
        subtitle="Transform business data into actionable insights."
        tabs={TABS}
        activeTab={1}
      />

      <ServiceIntro
        heading="Turn data into clear, actionable business intelligence"
        body="Organizations generate data across applications, customers, operations, and business processes. Work Science helps transform that data into meaningful insights through business intelligence, visualization, advanced analytics, predictive modeling, and AI-powered decision support."
      />

      <ImpactCards
        heading="Delivering value through data and analytics"
        cards={CASE_CARDS}
      />

      <CapabilitiesList
        heading="Analytics capabilities for modern businesses"
        items={CAPABILITIES}
      />

      <AcceleratorsRow
        heading="Accelerate your analytics journey"
        accelerators={ACCELERATORS}
      />

      <IndustryTabs industries={INDUSTRIES} />

      <OfferingHighlights highlights={HIGHLIGHTS} />

      <ThoughtLeadership />

      <CTABanner />
    </>
  );
}