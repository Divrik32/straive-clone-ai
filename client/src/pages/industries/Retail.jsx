import {
  Sparkles,
  Target,
  Cpu,
  Repeat,
  Network,
  Star,
} from "lucide-react";

import IndustryHero from "../../components/industrypage/IndustryHero";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ContactForm from "../../components/ContactForm";

const SOLUTIONS = [
  {
    name: "Merchandising & Pricing",
    img: "/images/retail-solutions-image1.webp",
    description:
      "AI-assisted price optimization and assortment analytics can support merchandising and pricing decisions across channels.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Dynamic pricing and markdown analytics",
      "AI-assisted assortment planning",
      "Competitive price monitoring",
    ],
  },
  {
    name: "Digital & Omnichannel Intelligence",
    img: "/images/retail-solutions-image2.webp",
    description:
      "Unified customer data across channels can support personalized experiences and consistent customer journeys.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Unified customer profiles",
      "Personalized recommendations",
      "Cross-channel campaign intelligence",
    ],
  },
  {
    name: "Supply Chain & Store Operations Fulfillment",
    img: "/images/retail-solutions-image3.webp",
    description:
      "Demand forecasting and fulfillment analytics can support inventory availability and store operations.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Demand forecasting by store and SKU",
      "Fulfillment and inventory analytics",
      "Store operations automation",
    ],
  },
  {
    name: "Sustainability & ESG Reporting",
    img: "/images/retail-solutions-image4.webp",
    description:
      "Structured ESG data collection and analytics can support sustainability reporting and operational planning.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Automated ESG data collection",
      "Sustainability performance dashboards",
      "Reporting workflows",
    ],
  },
  {
    name: "Risk & Compliance",
    img: "/images/retail-solutions-image5.webp",
    description:
      "Analytics and automation can support retail risk monitoring, compliance processes, and transaction review.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Fraud and shrinkage analysis",
      "Automated compliance monitoring",
      "Risk-based transaction review",
    ],
  },
];

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "AI & Automation",
    text: "Apply AI to suitable retail workflows and create intelligent operational assistance.",
  },
  {
    icon: Target,
    title: "Customer Intelligence",
    text: "Analyze customer behavior and interactions to support informed retail decisions.",
  },
  {
    icon: Cpu,
    title: "Data Platforms",
    text: "Connect data from retail systems into reliable foundations for analytics and AI.",
  },
  {
    icon: Repeat,
    title: "Process Optimization",
    text: "Identify opportunities to simplify and automate repetitive retail processes.",
  },
  {
    icon: Network,
    title: "Connected Operations",
    text: "Connect stores, digital channels, supply chain, and enterprise systems.",
  },
  {
    icon: Star,
    title: "Decision Intelligence",
    text: "Turn retail data into useful dashboards, reports, and decision-support insights.",
  },
];

const SUCCESS_STORIES = [
  {
    title: "Optimization for a Retailer",
    img: "/images/retail-case-1.jpg",
    label: "Retail Analytics",
  },
  {
    title: "Market Mix Optimization for a Grocery Chain",
    img: "/images/retail-case-2.jpg",
    label: "Market Analytics",
  },
  {
    title: "Real-Time Price Intelligence for a Food Retailer",
    img: "/images/retail-case-3.webp",
    label: "Pricing",
  },
  {
    title: "Supply Chain Optimization",
    img: "/images/retail-case-4.jpg",
    label: "Supply Chain",
  },
  {
    title: "Planogram Compliance",
    img: "/images/retail-case-5.webp",
    label: "Store Operations",
  },
  {
    title: "Food Waste Reduction",
    img: "/images/retail-case-6.jpg",
    label: "Sustainability",
  },
];

const HOW_WE_DO_IT = [
  {
    icon: Sparkles,
    title: "AI-Driven Foresight",
    text: "Use AI and analytics to identify patterns and support demand and trend analysis.",
  },
  {
    icon: Target,
    title: "Actionable Intelligence",
    text: "Turn retail data into insights that teams can use in everyday decisions.",
  },
  {
    icon: Repeat,
    title: "Continuous Improvement",
    text: "Refine analytics and AI workflows as new data and business requirements emerge.",
  },
  {
    icon: Network,
    title: "Omnichannel Intelligence",
    text: "Connect pricing, inventory, customer, and messaging data across channels.",
  },
  {
    icon: Cpu,
    title: "Modern AI Architecture",
    text: "Build flexible AI and analytics capabilities around existing technology environments.",
  },
  {
    icon: Star,
    title: "Human-Centered AI",
    text: "Keep retail experts involved where business context and judgment are important.",
  },
];

export default function Retail() {
  return (
    <>
      <IndustryHero
        title="Retail Runs Better with AI and Real-Time Insights"
        subtitle="Connect customer, operational, and supply chain data to support smarter retail decisions."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">
              Retail Operations with Real-Time AI-Driven Insights
            </h2>

            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              Work Science combines retail data, analytics, AI, and automation
              to support inventory, demand planning, customer intelligence,
              store operations, and omnichannel decision-making.
            </p>
          </div>

          <div className="h-56 rounded-lg overflow-hidden">
            <img
              src="/images/retail-ops-image.webp"
              alt="Retail Operations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="solutions-section" className="scroll-mt-24">
        <ToolkitTabs
          heading="Our Solutions"
          tabs={SOLUTIONS}
        />

        <IconCardGrid
          heading="Retail AI & Data Capabilities"
          items={CAPABILITIES}
          columns={3}
          bg="bg-[#f7f7f9]"
        />
      </section>

      <CaseStudyGrid
        heading="Retail AI & Data Applications"
        items={SUCCESS_STORIES}
        columns={3}
      />

      <section className="bg-[#0A0E1F] text-white py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-12">
            How Do We Do It?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_WE_DO_IT.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center"
              >
                <Icon
                  className="w-8 h-8 text-brand-orange mx-auto mb-3"
                  strokeWidth={1.5}
                />

                <p className="text-sm font-semibold mb-1">{title}</p>

                <p className="text-[12px] text-white/60 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-4 pt-14">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B]">
            Ready to Transform Your Retail Operations?
          </h2>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}