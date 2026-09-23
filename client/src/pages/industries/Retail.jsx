import { Sparkles, Target, Cpu, Repeat, Network, Star } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ContactForm from "../../components/ContactForm";

const SOLUTIONS = [
  {
    name: "Merchandising & Pricing",
    img: "/images/retail-solutions-image1.webp",
    description: "AI-driven price optimization and assortment planning help retailers boost margins while staying competitive across channels.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Dynamic pricing and markdown optimization", "AI-driven assortment planning", "Competitive price monitoring"],
  },
  {
    name: "Digital & Omnichannel Intelligence",
    img: "/images/retail-solutions-image2.webp",
    description: "Unified customer data across channels enables personalized experiences and consistent messaging everywhere shoppers engage.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Unified customer 360 profiles", "Personalized recommendations at scale", "Cross-channel campaign orchestration"],
  },
  {
    name: "Supply Chain & Store Operations Fulfillment",
    img: "/images/retail-solutions-image3.webp",
    description: "AI-powered demand forecasting and fulfillment optimization keep shelves stocked while minimizing excess inventory.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Demand forecasting by store and SKU", "Fulfillment and inventory optimization", "Store operations automation"],
  },
  {
    name: "Sustainability & ESG Reporting",
    img: "/images/retail-solutions-image4.webp",
    description: "Automated ESG data collection and reporting help retailers meet sustainability targets and regulatory requirements.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Automated ESG data collection", "Sustainability performance dashboards", "Regulatory-ready reporting"],
  },
  {
    name: "Risk & Compliance",
    img: "/images/retail-solutions-image5.webp",
    description: "AI-driven fraud detection and compliance monitoring reduce shrinkage and protect margins across the retail network.",
    bulletsTitle: "What It Delivers:",
    bullets: ["Fraud and shrinkage detection", "Automated compliance monitoring", "Risk-scored transaction review"],
  },
];

const IMPACT = [
  { title: "Profitability", text: "8-12% boost in gross margin" },
  { title: "Efficiency", text: "Up to 50% improvement in inventory turnover" },
  { title: "Customer Metrics", text: "Increase in NPS by double-digit points" },
  { title: "Conversion", text: "Noticeable uplift in online conversions" },
  { title: "Speed", text: "Accelerated time-to-insight and deployment" },
  { title: "Automation", text: "95%+ precision in recommendation" },
];

const SUCCESS_STORIES = [
  { title: "Optimization for a retailer", img: "/images/retail-case-1.jpg" },
  { title: "Market mix optimization for a grocery chain", img: "/images/retail-case-2.jpg" },
  { title: "Real-time price intel for a Brazilian food retailer", img: "/images/retail-case-3.webp" },
  { title: "Supply chain optimization for storage giant", img: "/images/retail-case-4.jpg" },
  { title: "Planogram compliance for global retailer", img: "/images/retail-case-5.webp" },
  { title: "Food wastage reduction for fast-food chain", img: "/images/retail-case-6.jpg" },
];

const HOW_WE_DO_IT = [
  { icon: Sparkles, title: "GenAI-Driven Foresight", text: "Forecast demand and trends before they happen with generative AI models." },
  { icon: Target, title: "Instant, Actionable Intelligence", text: "Turn raw retail data into decisions your teams can act on immediately." },
  { icon: Repeat, title: "Continuous Model Optimization", text: "Models that learn and improve continuously as new data flows in." },
  { icon: Network, title: "Seamless Omnichannel Orchestration", text: "Coordinate pricing, inventory, and messaging across every channel." },
  { icon: Cpu, title: "AI-Native Architecture", text: "Built on a modern, model-agnostic AI stack designed to scale." },
  { icon: Star, title: "Customer Satisfaction 5.0", text: "Consistently high satisfaction scores across deployed engagements." },
];

export default function Retail() {
  return (
    <>
      <IndustryHero
        title="Retail Runs Better with AI and Real-Time Insights"
        buttons={["Learn More"]}
      />

      {/* Retail operations intro */}
      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">Retail Operations with Real-Time AI-Driven Insights</h2>
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              Straive's Retail AI & Analytics solutions transform how retailers manage inventory, forecast demand,
              personalize experiences, and drive conversions across channels, in real time.
            </p>
          </div>
          <div className="h-56 rounded-lg overflow-hidden">
            <img src="/images/retail-ops-image.webp" alt="Retail Operations" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <ToolkitTabs heading="Our Solutions" tabs={SOLUTIONS} />

      {/* Impact stats */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">The Impact We Delivered</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMPACT.map((s) => (
              <div key={s.title} className="bg-white border border-black/10 rounded-lg p-5 text-center">
                <p className="text-sm font-semibold text-[#10162B] mb-1">{s.title}</p>
                <p className="text-[12px] text-[#4a4a5a]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyGrid heading="Our Success Stories" items={SUCCESS_STORIES} columns={3} />

      {/* How Do We Do It - dark section */}
      <section className="bg-[#0A0E1F] text-white py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-12">How Do We Do It?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_WE_DO_IT.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <Icon className="w-8 h-8 text-brand-orange mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-sm font-semibold mb-1">{title}</p>
                <p className="text-[12px] text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-4 pt-14">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B]">Ready to Transform Your Retail Game?</h2>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
