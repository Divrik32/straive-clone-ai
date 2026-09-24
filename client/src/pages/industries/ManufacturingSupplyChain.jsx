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
    description:
      "Optimize warehouse performance with AI-driven demand and capacity planning, intelligent scheduling, automated task allocation, and smart warehouse zoning.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Demand & Capacity Planning",
      "Intelligent Scheduling",
      "Automated Task Allocation",
      "Warehouse Zoning",
    ],
  },
  {
    name: "Fleet & Transportation",
    img: "/images/msc-usecase-image2.webp",
    description:
      "AI-powered route optimization and predictive fleet analytics can support transportation planning and delivery operations.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Dynamic route optimization",
      "Predictive fleet maintenance scheduling",
      "Real-time delivery tracking and exception management",
    ],
  },
  {
    name: "Supply Chain Planning",
    img: "/images/msc-usecase-image3.webp",
    description:
      "Demand sensing and multi-tier supplier visibility can support planning, inventory management, and supply continuity.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "AI-assisted demand forecasting",
      "Multi-tier supplier risk visibility",
      "Inventory optimization across the network",
    ],
  },
  {
    name: "Manufacturing",
    img: "/images/msc-usecase-image4.webp",
    description:
      "Digital twins, computer vision, and analytics can support production quality, throughput, and equipment monitoring.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Real-time production monitoring",
      "AI-assisted quality inspection",
      "Predictive equipment maintenance",
    ],
  },
  {
    name: "Process Optimization",
    img: "/images/msc-usecase-image5.webp",
    description:
      "Process mining and analytics can uncover inefficiencies and identify opportunities for workflow automation.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Process mining and bottleneck detection",
      "Automated corrective workflows",
      "Continuous improvement dashboards",
    ],
  },
];

const TECH_ENABLERS = [
  {
    icon: Boxes,
    title: "Physical Assets to the Digital",
    text: "Digitize high-velocity operational data from machinery and physical assets to improve visibility.",
  },
  {
    icon: ScanEye,
    title: "Digital Twin",
    text: "Create virtual representations of supply chain and manufacturing environments to analyze scenarios and support planning.",
  },
  {
    icon: TrendingUp,
    title: "Computer Vision",
    text: "Use AI-powered visual inspection and monitoring for suitable quality, safety, and operational workflows.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    text: "Use generative AI for reporting, knowledge access, insight synthesis, and natural-language interaction with business data.",
  },
];

const CASES = [
  {
    title: "Manufacturing Operations Intelligence",
    img: "/images/msc-case-1.webp",
    label: "Manufacturing",
  },
  {
    title: "Production & Process Analytics",
    img: "/images/msc-case-2.webp",
    label: "Operations",
  },
  {
    title: "Predictive Analytics for Manufacturing",
    img: "/images/msc-case-3.webp",
    label: "Analytics",
  },
];

const FAQS = [
  {
    q: "What is logistics and supply chain analytics?",
    a: "Logistics and supply chain analytics uses data and quantitative methods to support decisions across the movement of goods from raw materials to final delivery.",
  },
  {
    q: "How does data analytics improve manufacturing operations?",
    a: "Analytics provides visibility into production, quality, equipment, and operational patterns, helping teams make more informed decisions.",
  },
  {
    q: "What are the benefits of AI-driven analytics in supply chain management?",
    a: "AI can support demand forecasting, inventory planning, supplier analysis, transportation planning, and faster response to operational changes.",
  },
  {
    q: "Why is real-time visibility important in logistics operations?",
    a: "Real-time visibility helps teams identify operational exceptions and respond before issues become larger disruptions.",
  },
  {
    q: "How can predictive analytics help manufacturing and logistics companies?",
    a: "Predictive analytics can help identify patterns associated with equipment issues, demand changes, transportation delays, and other operational events.",
  },
  {
    q: "What should companies look for in a supply chain analytics solution?",
    a: "Important considerations include scalability, integration with existing systems, data quality, security, real-time capabilities, and suitability for the organization's workflows.",
  },
];

export default function ManufacturingSupplyChain() {
  return (
    <>
      <IndustryHero
        title="Data-Driven Analytics from Factory Floor to Last Mile"
        subtitle="Access AI and data analytics for supply chain and manufacturing, helping teams improve visibility and operational decision-making."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <ServiceIntro
        heading="Operationalize AI with Data Analytics for Manufacturing and Supply Chain"
        body="Work Science combines operational data, analytics, AI, and automation to help manufacturing and supply chain teams move from fragmented information toward connected and actionable intelligence."
      />

      <section id="solutions-section" className="scroll-mt-24">
        <ToolkitTabs
          heading="AI-Powered Data Analytics for Supply Chain and Manufacturing"
          tabs={USE_CASES}
        />

        <IconCardGrid
          heading="Technology Enablers Streamline Implementation"
          items={TECH_ENABLERS}
          columns={4}
          bg="bg-[#f7f7f9]"
        />

        <ServiceIntro
          heading="Supporting Manufacturing & Supply Chain Operations"
          body="From industrial operations and warehouse workflows to transportation and production environments, connected data and analytics can provide better visibility into operational performance and support informed decision-making."
        />

        <section className="bg-white pb-14">
          <div className="section-container grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-6">
                A Practical Approach to Operational Intelligence
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Integrated",
                    text: "Work with existing enterprise systems, operational applications, and data sources.",
                  },
                  {
                    title: "Flexible",
                    text: "Select analytics and AI capabilities according to the organization's specific workflows and requirements.",
                  },
                  {
                    title: "Outcome-Focused",
                    text: "Start with practical use cases and expand successful workflows as requirements evolve.",
                  },
                  {
                    title: "Human-Guided",
                    text: "Keep operational experts involved where domain knowledge and judgment are important.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-black/5 pb-3"
                  >
                    <p className="text-sm font-semibold text-[#10162B]">
                      {item.title}
                    </p>

                    <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="/images/msc-ai-image.webp"
                alt="AI-Powered Data Analytics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <CaseStudyGrid
          heading="AI & Data Applications in Manufacturing"
          items={CASES}
          columns={3}
        />

        <section className="bg-white pb-16">
          <div className="section-container">
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-8">
              FAQs
            </h2>

            <FAQAccordion faqs={FAQS} />
          </div>
        </section>
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}