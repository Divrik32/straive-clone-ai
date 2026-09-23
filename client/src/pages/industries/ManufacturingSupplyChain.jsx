import { Boxes, ScanEye, TrendingUp, Sparkles } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import FAQAccordion from "../../components/servicepage/FAQAccordion";
import ContactForm from "../../components/ContactForm";

const USE_CASES = [
  {
    name: "Warehouse Operations",
    img: "/images/msc-usecase-image1.webp",
    description: "Optimize warehouse performance with AI-driven demand and capacity planning, intelligent scheduling, automated task allocation, and smart warehouse zoning to improve operational efficiency, resource utilization, and throughput.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Demand & Capacity Planning: Maximize your footprint. Accurately predict space requirements and balance inventory loads before bottlenecks happen.",
      "Intelligent Scheduling: Eliminate downtime. Dynamically align labor shifts and dock appointments with real-time inbound and outbound flows.",
      "Automated Task Allocation: Put the right task in the right hands. Automatically dispatch workflows to floor staff based on priority, location, and equipment.",
      "Warehouse Zoning: Optimize your layout. Structurally organize inventory placement by velocity and product affinity to slash travel time.",
    ],
  },
  {
    name: "Fleet & Transportation",
    img: "/images/msc-usecase-image2.webp",
    description: "AI-powered route optimization and predictive fleet maintenance reduce transportation costs and improve delivery reliability.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Dynamic route optimization", "Predictive fleet maintenance scheduling", "Real-time delivery tracking and exception management"],
  },
  {
    name: "Supply Chain Planning",
    img: "/images/msc-usecase-image3.webp",
    description: "Demand sensing and multi-tier supplier visibility improve forecast accuracy and reduce stockouts.",
    bulletsTitle: "What It Delivers:",
    bullets: ["AI-driven demand forecasting", "Multi-tier supplier risk visibility", "Inventory optimization across the network"],
  },
  {
    name: "Manufacturing",
    img: "/images/msc-usecase-image4.webp",
    description: "Digital twins and computer vision improve production quality, throughput, and equipment uptime on the factory floor.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Real-time production monitoring", "AI-driven quality inspection", "Predictive equipment maintenance"],
  },
  {
    name: "Process Optimization",
    img: "/images/msc-usecase-image5.webp",
    description: "Continuous process mining and analytics uncover inefficiencies and automate corrective workflows across operations.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Process mining and bottleneck detection", "Automated corrective workflows", "Continuous improvement dashboards"],
  },
];

const TECH_ENABLERS = [
  { icon: Boxes, title: "Physical Assets to the Digital", text: "Digitize high-velocity data from machinery to enable real-time control." },
  { icon: ScanEye, title: "Digital Twin", text: "Create virtual replicas of your supply chain and factory floor to simulate scenarios, test optimizations, and predict outcomes without operational risk." },
  { icon: TrendingUp, title: "Computer Vision", text: "Deploy automated visual inspection and safety monitoring using AI-powered cameras that detect defects and hazards with superhuman precision and speed." },
  { icon: Sparkles, title: "Generative AI", text: "Leverage LLMs to automate complex reporting, synthesize supply chain insights, and create natural language interfaces for querying complex manufacturing datasets." },
];

const CASES = [
  { title: "A leading global manufacturing company was able to reduce carbon emissions by 85%", img: "/images/msc-case-1.webp" },
  { title: "A leading food manufacturer reduced downtime leading to 20% increase in production efficiency", img: "/images/msc-case-2.webp" },
  { title: "Drug Manufacturer increased manufacturing yield by 15% through predictive analytics", img: "/images/msc-case-3.webp" },
];

const FAQS = [
  { q: "What is logistics and supply chain analytics?", a: "Logistics and supply chain analytics is the process of using data and quantitative methods to improve decision-making across the movement of goods from raw materials to final delivery." },
  { q: "How does data analytics improve manufacturing operations?", a: "By providing real-time visibility into production, quality, and equipment health, enabling proactive rather than reactive decision-making." },
  { q: "What are the benefits of AI-driven analytics in supply chain management?", a: "Improved forecast accuracy, reduced inventory costs, better supplier risk visibility, and faster response to disruptions." },
  { q: "Why is real-time visibility important in logistics operations?", a: "It allows teams to detect and resolve exceptions before they escalate into costly delays or service failures." },
  { q: "How can predictive analytics help manufacturing and logistics companies?", a: "By anticipating equipment failures, demand shifts, and transportation delays before they occur, reducing downtime and cost." },
  { q: "What should companies look for in a supply chain analytics solution?", a: "Scalability, integration with existing systems, real-time capabilities, and a proven track record of measurable outcomes." },
];

export default function ManufacturingSupplyChain() {
  return (
    <>
      <IndustryHero
        title="Data-Driven Analytics from Factory Floor to Last Mile"
        subtitle="Access enterprise-grade AI and data analytics for supply chain and manufacturing, empowering your teams with the data intelligence to achieve operational excellence."
        buttons={["Case Studies", "Request a Demo"]}
      />

      <ServiceIntro
        heading="Operationalize AI with Data Analytics for Manufacturing and Supply Chain Solutions"
        body="In today's industrial landscape, raw data is your most valuable unused resource from the factory floor to the final mile. Our AI-powered data analytics for manufacturing and supply chain bridges the gap between operations and actionable intelligence. By unifying data with real-time shop floor metrics, Straive's solutions eliminate silos, minimize downtime, and transform your entire value chain into a responsive, predictive ecosystem."
      />

      <ToolkitTabs heading="AI-Powered Data Analytics for Supply Chain and Manufacturing" tabs={USE_CASES} />

      <IconCardGrid heading="Technology Enablers Streamline Implementation" items={TECH_ENABLERS} columns={4} bg="bg-[#f7f7f9]" />

      <ServiceIntro
        heading="Clients We Serve"
        body="From heavy engineering firms to global manufacturers, we help clients gain a competitive edge. We help heavy engineering firms monitor asset health in real time, minimize costly unplanned downtime, and extend equipment life. Our data analytics solutions monitor critical process variables in real time, reducing raw material waste, optimizing throughput, and driving operational efficiency across the value chain."
      />

      {/* Why Clients Choose Straive */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-6">Why Clients Choose Straive</h2>
            <div className="space-y-4">
              {[
                { title: "Fast", text: "14 days from idea to working Data/AI PoC; 6-10 weeks to deployed Data/AI solution and initial outcomes." },
                { title: "Agnostic", text: "No new platform or product to integrate. Solutions are built behind your firewall and integrated with your existing tech, allowing you to avoid complex, multi-year tech transformations." },
                { title: "Committed to Operationalized Outcomes", text: "The initial phase / PoC is an investment dedicated to proving feasibility and delivering concrete outcomes." },
                { title: "18,000+ Ready-to-Deploy Global Resources", text: "Acting as experts-in-the-loop to ensure hybrid AI-human operations run seamlessly and continuously improve within the client environment." },
              ].map((item) => (
                <div key={item.title} className="border-b border-black/5 pb-3">
                  <p className="text-sm font-semibold text-[#10162B]">{item.title}</p>
                  <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64 rounded-lg overflow-hidden">
            <img src="/images/msc-ai-image.webp" alt="AI-Powered Data Analytics" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <CaseStudyGrid heading="Driven Impact: Real Results for Leading Manufacturers" items={CASES} columns={3} />

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
