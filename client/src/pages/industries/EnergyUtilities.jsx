import { Database, Drill, Wrench, ShieldCheck, Truck, Gauge } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import FAQAccordion from "../../components/servicepage/FAQAccordion";
import ContactForm from "../../components/ContactForm";

const CHALLENGES = [
  { img: "/images/oga-challenge-1.jpg", title: "Asset Optimization", text: "Analytics for oil and gas to reduce costs and enhance productivity. Straive's AI-powered predictive analytics, digital twins, and automated workflows optimize resource utilization and minimize downtime and improved margins." },
  { img: "/images/oga-challenge-2.jpg", title: "Strengthening Asset Integrity, Safety & Compliance", text: "The oil and gas industry is under constant pressure to reduce costs and enhance real-time reliable pipeline and asset monitoring for regulatory compliance." },
  { img: "/images/oga-challenge-3.jpg", title: "Data Silos & Decision-Making", text: "Companies generate vast volumes of siloed, unstructured data. Straive's AI-powered analytics unify structured and unstructured data, enabling faster, data-driven decisions." },
  { img: "/images/oga-challenge-4.jpg", title: "Driving Sustainability & ESG Excellence", text: "The oil and gas industry is under constant pressure to reduce costs and enhance efficiency. Straive's AI-powered predictive analytics, digital twins, and automated workflows streamline resource utilization and minimize inefficiencies." },
];

const DATA_SERVICES = [
  { icon: Database, title: "Data Management", text: "Unified and structured data across midstream, upstream, and downstream operations. Our solutions ensure clean, accessible, and governed data for improved decision-making." },
  { icon: Drill, title: "Exploration & Production Analytics", text: "Leverage advanced analytics and AI to enhance reservoir modeling, seismic interpretation, and drilling efficiency for improved reserves identification." },
  { icon: Wrench, title: "Predictive Maintenance & Asset Analytics", text: "Minimize downtime and extend equipment life with predictive maintenance solutions that anticipate failures before they impact production." },
  { icon: ShieldCheck, title: "Pipeline Integrity & Safety Analytics", text: "Real-time and reliable pipeline analytics detect anomalies and reduce maintenance and risk exposure across the network." },
  { icon: Truck, title: "Supply Chain & Logistics Analytics", text: "Optimize procurement, inventory, and distribution with data-driven insights that improve forecasting, route optimization, and reduce delays." },
  { icon: Gauge, title: "Real-Time Monitoring Dashboards", text: "Gain instant visibility into operations with interactive dashboards and real-time performance indicators, tracking key metrics and responding to issues proactively." },
];

const USE_CASES = [
  {
    name: "Upstream",
    description:
      "AI-driven seismic data analysis and reservoir modeling enhance exploration accuracy, reducing financial and environmental risks. Machine learning optimizes reservoir performance monitoring, enabling better asset planning, maximizing recovery rates, and minimizing drilling inefficiencies.",
    bulletsTitle: "Focus Areas:",
    bullets: [
      "Smarter Exploration & Reservoir Management",
      "Precision Drilling & Fracturing",
      "Safety & Regulatory Compliance",
      "Digital Transformation in Field Operations",
    ],
    img: "/images/upstream.webp",
  },

  {
    name: "Midstream",
    description:
      "Analytics-driven pipeline monitoring and logistics optimization reduce transportation losses and improve throughput across the midstream network.",
    bulletsTitle: "Focus Areas:",
    bullets: [
      "Pipeline flow optimization",
      "Predictive integrity monitoring",
      "Logistics and storage efficiency",
    ],
    img: "/images/midstream.webp",
  },

  {
    name: "Downstream",
    description:
      "AI-powered refinery analytics and demand forecasting improve yield optimization, pricing strategy, and distribution planning.",
    bulletsTitle: "Focus Areas:",
    bullets: [
      "Refinery yield optimization",
      "Dynamic fuel pricing intelligence",
      "Distribution network planning",
    ],
    img: "/images/downstream.webp",
  },
];

const SUCCESS = [
  { title: "Growth with Data Lake Architecture", img: "/images/oga-success-1.webp" },
  { title: "Fuel Pricing Intelligence Across 3,000+ Gas Stations Boosts Margin", img: "/images/oga-success-2.webp" },
  { title: "Predictive Maintenance in Oil & Gas: Preventing Equipment Failures Before They Happen", img: "/images/oga-success-3.webp" },
  { title: "AI-Powered Campaign Intelligence for a Global Oil & Gas Major", img: "/images/oga-success-4.webp" },
  { title: "AI-Driven Pipeline Power Optimization", img: "/images/oga-success-5.webp" },
];

const FAQS = [
  { q: "What is data analytics in oil and gas?", a: "Data analytics in oil and gas involves collecting, processing, and analyzing data from exploration, production, refining, and distribution. It transforms raw data into actionable insights, enabling companies to optimize operations, reduce costs, and increase efficiency across the entire energy value chain." },
  { q: "How can data analytics benefit oil and gas companies?", a: "It improves decision-making, reduces downtime through predictive maintenance, optimizes supply chains, and strengthens regulatory compliance." },
  { q: "How is AI-powered data analytics used in the oil & gas industry?", a: "AI models process seismic, sensor, and operational data to improve exploration accuracy, predictive maintenance, and real-time monitoring." },
  { q: "How does data analytics improve refinery performance?", a: "By optimizing yield, forecasting demand, and identifying inefficiencies across refining and distribution processes." },
  { q: "What role does real-time data play in oil and gas operations?", a: "Real-time data enables proactive response to equipment anomalies, safety risks, and operational bottlenecks before they escalate." },
];

export default function EnergyUtilities() {
  return (
    <>
      <IndustryHero
        title="AI-Powered Data Analytics Solutions for the Oil & Gas Industry"
        subtitle="Analytics to improve exploration, production, and efficiency across the oil and gas value chain."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <IconCardGrid heading="Solving Oil & Gas Challenges with AI and Analytics" items={CHALLENGES} columns={2} bg="bg-[#f7f7f9]" />

      <IconCardGrid heading="Data Analytics Services for the Oil & Gas Industry" items={DATA_SERVICES} columns={3} />

      <ToolkitTabs heading="Use Cases by Value Chain" tabs={USE_CASES} />

      <CaseStudyGrid heading="Proven Success with Leading Oil and Gas Companies" items={SUCCESS} columns={3} />

      <section className="bg-white pb-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-8">FAQs</h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
