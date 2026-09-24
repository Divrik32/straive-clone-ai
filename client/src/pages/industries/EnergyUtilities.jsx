import {
  Database,
  Drill,
  Wrench,
  ShieldCheck,
  Truck,
  Gauge,
} from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import FAQAccordion from "../../components/servicepage/FAQAccordion";
import ContactForm from "../../components/ContactForm";

const CHALLENGES = [
  {
    img: "/images/oga-challenge-1.jpg",
    title: "Asset Optimization",
    text: "Use analytics and AI-assisted monitoring to improve asset utilization, identify operational patterns, and support more efficient resource management.",
  },
  {
    img: "/images/oga-challenge-2.jpg",
    title: "Asset Integrity & Safety",
    text: "Combine operational data, monitoring, and intelligent analytics to identify potential issues and support asset integrity and safety workflows.",
  },
  {
    img: "/images/oga-challenge-3.jpg",
    title: "Data Silos & Decision-Making",
    text: "Connect structured and unstructured operational data to create a clearer view of business and field operations.",
  },
  {
    img: "/images/oga-challenge-4.jpg",
    title: "Sustainability & Operational Efficiency",
    text: "Use data and analytics to monitor operational performance, identify inefficiencies, and support more informed sustainability initiatives.",
  },
];

const DATA_SERVICES = [
  {
    icon: Database,
    title: "Data Management",
    text: "Organize and integrate operational data across upstream, midstream, and downstream environments to create reliable data foundations.",
  },
  {
    icon: Drill,
    title: "Exploration & Production Analytics",
    text: "Use analytics and AI-assisted models to support exploration, production planning, operational analysis, and field decision-making.",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    text: "Analyze equipment and operational data to identify potential maintenance needs and support proactive asset management.",
  },
  {
    icon: ShieldCheck,
    title: "Pipeline Integrity & Safety",
    text: "Use monitoring and analytics to identify anomalies and support pipeline integrity, maintenance, and safety processes.",
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    text: "Improve procurement, inventory, transportation, and distribution workflows with data-driven analytics.",
  },
  {
    icon: Gauge,
    title: "Real-Time Monitoring",
    text: "Create dashboards and monitoring solutions that provide visibility into operational performance and important business indicators.",
  },
];

const USE_CASES = [
  {
    name: "Upstream",
    description:
      "Apply AI and analytics to exploration, reservoir information, drilling operations, production monitoring, and field workflows.",
    bulletsTitle: "Focus Areas:",
    bullets: [
      "Exploration analytics",
      "Reservoir data analysis",
      "Production monitoring",
      "Field operations",
    ],
    img: "/images/upstream.webp",
  },
  {
    name: "Midstream",
    description:
      "Use analytics to improve pipeline monitoring, transportation, storage, and operational visibility across midstream networks.",
    bulletsTitle: "Focus Areas:",
    bullets: [
      "Pipeline monitoring",
      "Operational analytics",
      "Transportation visibility",
      "Storage optimization",
    ],
    img: "/images/midstream.webp",
  },
  {
    name: "Downstream",
    description:
      "Use data and AI-assisted analytics to support refinery operations, demand planning, distribution, and performance monitoring.",
    bulletsTitle: "Focus Areas:",
    bullets: [
      "Refinery analytics",
      "Demand forecasting",
      "Distribution planning",
      "Operational performance",
    ],
    img: "/images/downstream.webp",
  },
];

const SUCCESS = [
  {
    title: "Building a Data Foundation for Energy Operations",
    img: "/images/oga-success-1.webp",
  },
  {
    title: "Using Analytics for Fuel and Energy Market Intelligence",
    img: "/images/oga-success-2.webp",
  },
  {
    title: "Predictive Analytics for Equipment Maintenance",
    img: "/images/oga-success-3.webp",
  },
  {
    title: "AI-Powered Operational Intelligence",
    img: "/images/oga-success-4.webp",
  },
  {
    title: "Intelligent Monitoring for Energy Infrastructure",
    img: "/images/oga-success-5.webp",
  },
];

const FAQS = [
  {
    q: "What is data analytics in oil and gas?",
    a: "Data analytics in oil and gas involves collecting, processing, and analyzing information from exploration, production, assets, logistics, and other operational systems to support better decisions.",
  },
  {
    q: "How can analytics help oil and gas companies?",
    a: "Analytics can help organizations understand operational performance, identify patterns, monitor assets, improve planning, and make better use of existing business data.",
  },
  {
    q: "How is AI used in the oil and gas industry?",
    a: "AI can be applied to areas such as document processing, predictive analytics, anomaly detection, operational monitoring, forecasting, and intelligent workflow automation.",
  },
  {
    q: "How can predictive maintenance support energy operations?",
    a: "Predictive maintenance uses equipment and operational data to identify patterns associated with potential failures, helping teams prioritize inspections and maintenance activities.",
  },
  {
    q: "Why is real-time operational data important?",
    a: "Real-time data can give teams faster visibility into operational conditions, helping them identify anomalies and respond to issues more quickly.",
  },
];

export default function EnergyUtilities() {
  return (
    <>
      <IndustryHero
        title="AI & Data Analytics Solutions for the Energy Industry"
        subtitle="Use data, AI, and intelligent analytics to improve operations across the energy value chain."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <IconCardGrid
        heading="Addressing Energy Industry Challenges with AI & Analytics"
        items={CHALLENGES}
        columns={2}
        bg="bg-[#f7f7f9]"
      />

      <section id="solutions-section" className="scroll-mt-24">
        <IconCardGrid
          heading="Data Analytics Services for Energy Operations"
          items={DATA_SERVICES}
          columns={3}
        />
      </section>

      <ToolkitTabs
        heading="Use Cases Across the Energy Value Chain"
        tabs={USE_CASES}
      />

      <CaseStudyGrid
        heading="AI & Analytics Use Cases in Energy"
        items={SUCCESS}
        columns={3}
      />

      <section className="bg-white pb-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}