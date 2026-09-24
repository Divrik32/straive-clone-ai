import { CheckCircle2 } from "lucide-react";

import IndustryHero from "../../components/industrypage/IndustryHero";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import ContactForm from "../../components/ContactForm";

const OUTCOME_BULLETS = [
  "Connect consumer, product, sales, and operational data.",
  "Use analytics to understand changing consumer and market patterns.",
  "Automate repetitive business and information workflows.",
  "Support better planning with connected data and decision intelligence.",
  "Create AI-assisted workflows for teams across the organization.",
];

const CASES = [
  {
    title: "Manufacturing Operations Simulation for a Global Beverage Business",
    img: "/images/cpg-case-1.webp",
    label: "Manufacturing",
  },
  {
    title: "Portfolio Brand Performance Analytics",
    img: "/images/cpg-case-2.webp",
    label: "Brand Analytics",
  },
  {
    title: "Marketing Creative Performance Insights",
    img: "/images/cpg-case-3.webp",
    label: "Marketing Analytics",
  },
];

const CHALLENGES = [
  {
    name: "Demand Planning",
    img: "/images/cpg-challenges-image1.webp",
    description:
      "Fragmented demand signals across retail partners can make it difficult to plan production and inventory with confidence.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Collaborative supply planning",
      "Supply network visibility",
      "Analytics for supply chain risk and exceptions",
    ],
  },
  {
    name: "Product Development",
    img: "/images/cpg-challenges-image2.webp",
    description:
      "AI-assisted trend analysis and consumer insight can support the path from concept to product development.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Trend and consumer sentiment analysis",
      "Concept testing and analysis",
      "Product development insights",
    ],
  },
  {
    name: "Manufacturing & Packaging",
    img: "/images/cpg-challenges-image3.webp",
    description:
      "Predictive quality and packaging analytics can support production efficiency and waste reduction.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Predictive quality monitoring",
      "Packaging material analytics",
      "Production line efficiency analytics",
    ],
  },
  {
    name: "Distribution",
    img: "/images/cpg-challenges-image4.webp",
    description:
      "Distribution visibility and analytics can support inventory availability and logistics planning.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Distribution visibility",
      "Route and logistics analytics",
      "Availability monitoring",
    ],
  },
  {
    name: "Marketing & Sales",
    img: "/images/cpg-challenges-image5.webp",
    description:
      "Marketing and sales analytics can help teams understand creative performance, promotions, and commercial activity.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Marketing creative performance analytics",
      "Trade promotion analytics",
      "Sales forecasting and territory planning",
    ],
  },
  {
    name: "Customer Service & Engagement",
    img: "/images/cpg-challenges-image6.webp",
    description:
      "Conversational AI and sentiment analysis can support consumer engagement and service workflows.",
    bulletsTitle: "How We Help:",
    bullets: [
      "AI-assisted consumer support",
      "Sentiment and feedback analysis",
      "Issue resolution workflows",
    ],
  },
];

const CAPABILITIES = [
  {
    title: "Reusable AI Components",
    text: "Use modular AI and automation capabilities that can be adapted to different CPG workflows.",
  },
  {
    title: "Domain-Driven Data Operations",
    text: "Build workflows around consumer, product, sales, marketing, and operational data.",
  },
  {
    title: "Speed + Sustainability",
    text: "Use automation and analytics to support more efficient business processes and resource planning.",
  },
  {
    title: "Seamless Integrations",
    text: "Connect AI and analytics capabilities with existing enterprise platforms and data sources.",
  },
  {
    title: "Outcome-Focused Delivery",
    text: "Start with practical use cases and expand solutions according to business requirements.",
  },
];

export default function CPG() {
  return (
    <>
      <IndustryHero
        title="Operationalizing AI for the Future of CPG"
        subtitle="Empower smarter, faster, and sustainable decisions by putting consumers, data, and intelligence at the core of your operations."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 h-56 rounded-lg overflow-hidden">
            <img
              src="/images/cpg-outcomes-image.webp"
              alt="Embed Intelligence. Unlock Outcomes."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">
              Embed Intelligence. Unlock Outcomes.
            </h2>

            <ul className="space-y-2">
              {OUTCOME_BULLETS.map((b) => (
                <li
                  key={b}
                  className="text-sm text-[#2a2a3a] flex gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/cpg-growth-image-1.webp"
              alt=""
              className="rounded-lg h-40 w-full object-cover"
            />

            <img
              src="/images/cpg-growth-image-2.webp"
              alt=""
              className="rounded-lg h-40 w-full object-cover mt-6"
            />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-orange mb-4">
              Accelerate CPG Growth with AI-Driven Precision
            </h2>

            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              AI and analytics are becoming important capabilities across the
              CPG value chain. Work Science helps consumer packaged goods
              organizations connect data engineering, analytics, AI, and
              workflow automation to support smarter decisions and more
              responsive operations.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions-section" className="scroll-mt-24">
        <CaseStudyGrid
          heading="Our CPG AI & Data Applications"
          items={CASES}
          columns={3}
        />

        <ToolkitTabs
          heading="Common CPG Challenges. Practical Solutions"
          tabs={CHALLENGES}
        />

        <section className="bg-white pb-14">
          <div className="section-container grid md:grid-cols-2 gap-10 items-center">
            <div className="h-64 rounded-lg overflow-hidden">
              <img
                src="/images/cpg-why-straive-image.webp"
                alt="CPG AI and Data Solutions"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-5">
                Why Use AI & Data for CPG?
              </h2>

              <ul className="space-y-3">
                {CAPABILITIES.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />

                    <div>
                      <p className="text-sm font-semibold text-[#10162B]">
                        {item.title}
                      </p>

                      <p className="text-[12px] text-[#4a4a5a]">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section className="bg-[#f7f7f9] pt-14">
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-2">
            Operationalize AI for Your CPG Operations
          </h2>

          <p className="text-sm text-[#4a4a5a]">
            Explore consumer goods data, analytics, AI, and automation
            solutions.
          </p>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}