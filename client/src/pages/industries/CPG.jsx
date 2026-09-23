import { CheckCircle2 } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import ContactForm from "../../components/ContactForm";

const OUTCOME_BULLETS = [
  "20% increase in production efficiency",
  "95% increase in demand forecast accuracy",
  "2% bottom-line impact through inventory price forecasting",
];

const CASES = [
  { title: "Global Beverage Bottling Firm reduced manufacturing cost by simulating operational levers", img: "/images/cpg-case-1.webp" },
  { title: "Portfolio Brand Performance in the SEA market for a global CPG Company", img: "/images/cpg-case-2.webp" },
  { title: "Global food, snack, and beverage company enhanced marketing creatives' RoI through improved performance insights", img: "/images/cpg-case-3.webp" },
];

const CHALLENGES = [
  {
    name: "Demand Planning",
    img: "/images/cpg-challenges-image1.webp",
    description: "Fragmented demand signals across retail partners make it difficult to plan production and inventory with confidence.",
    bulletsTitle: "How We Help:",
    bullets: ["Collaborative Supply Planning: Enable seamless planning with co-manufacturers and suppliers to reduce lead times.", "Supply Network Resilience: Identify and mitigate supply chain bottlenecks across multi-tier suppliers to ensure cost control, continuity, and compliance.", "Fraud Detection and Prevention: Use analytics to detect and prevent fraudulent activities in the supply chain and sales channels."],
  },
  {
    name: "Product Development",
    img: "/images/cpg-challenges-image2.webp",
    description: "AI-assisted trend analysis and consumer insight accelerate the path from concept to shelf.",
    bulletsTitle: "How We Help:",
    bullets: ["Trend and consumer sentiment analysis", "Rapid concept testing with synthetic data", "Faster time-to-market for new products"],
  },
  {
    name: "Manufacturing & Packaging",
    img: "/images/cpg-challenges-image3.webp",
    description: "Predictive quality and packaging optimization reduce waste and improve line efficiency.",
    bulletsTitle: "How We Help:",
    bullets: ["Predictive quality monitoring", "Packaging material optimization", "Production line efficiency analytics"],
  },
  {
    name: "Distribution",
    img: "/images/cpg-challenges-image4.webp",
    description: "Real-time distribution visibility reduces stockouts and improves on-shelf availability.",
    bulletsTitle: "How We Help:",
    bullets: ["Real-time distribution visibility", "Route and logistics optimization", "On-shelf availability monitoring"],
  },
  {
    name: "Marketing & Sales",
    img: "/images/cpg-challenges-image5.webp",
    description: "AI-driven creative performance insights and trade promotion optimization improve marketing RoI.",
    bulletsTitle: "How We Help:",
    bullets: ["Marketing creative performance analytics", "Trade promotion optimization", "Sales forecasting and territory planning"],
  },
  {
    name: "Customer Service & Engagement",
    img: "/images/cpg-challenges-image6.webp",
    description: "Conversational AI and sentiment analysis improve consumer engagement and issue resolution speed.",
    bulletsTitle: "How We Help:",
    bullets: ["AI-powered consumer support", "Sentiment and feedback analysis", "Faster issue resolution workflows"],
  },
];

const WHY_STRAIVE = [
  { title: "Reusable AI Components", text: "Reduce time-to-value with modular, scalable AI and automation tools." },
  { title: "Domain-Driven Data Ops", text: "Deep Consumer Packaged Goods expertise baked into workflows - from product data to retail analytics." },
  { title: "Speed + Sustainability", text: "Accelerate insights while reducing operational waste through automation." },
  { title: "Seamless Integrations", text: "Plug-and-play with leading platforms." },
  { title: "Outcome-Focused Delivery", text: "From pilots to enterprise rollouts - measured impact at our core." },
];

export default function CPG() {
  return (
    <>
      <IndustryHero
        title="Operationalizing AI for the Future of CPG"
        subtitle="Empower smarter, faster, and sustainable decisions by putting consumers, data, and intelligence at the core of your operations."
        buttons={["View Case Studies", "Talk to CPG Experts"]}
      />

      {/* Embed Intelligence. Unlock Outcomes */}
      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 h-56 rounded-lg overflow-hidden">
            <img src="/images/cpg-outcomes-image.webp" alt="Embed Intelligence. Unlock Outcomes." className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">Embed Intelligence. Unlock Outcomes.</h2>
            <ul className="space-y-2">
              {OUTCOME_BULLETS.map((b) => (
                <li key={b} className="text-sm text-[#2a2a3a] flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accelerate CPG Growth */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/cpg-growth-image-1.webp" alt="" className="rounded-lg h-40 w-full object-cover" />
            <img src="/images/cpg-growth-image-2.webp" alt="" className="rounded-lg h-40 w-full object-cover mt-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-orange mb-4">Accelerate CPG Growth with AI-Driven Precision</h2>
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              The shift is palpable. AI and analytics in the CPG industry are evolving from isolated transformation
              initiatives to core strategic enablers. They now underpin organizational capabilities, driving
              smarter decisions, faster execution, and sustained competitive advantage. Straive is leading this
              change. We are enabling consumer packaged goods brands to move from reactive operations to
              predictive, insight-led decision-making - by providing end-to-end domain knowledge with AI, data
              engineering, and CPG services that drive speed, precision, and responsiveness.
            </p>
          </div>
        </div>
      </section>

      <CaseStudyGrid heading="Our Work with CPG Majors" items={CASES} columns={3} />

      <ToolkitTabs heading="Common CPG Challenges. Extraordinary Solutions" tabs={CHALLENGES} />

      {/* Why Leading CPG Brands Choose Straive */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="h-64 rounded-lg overflow-hidden">
            <img src="/images/cpg-why-straive-image.webp" alt="Why Leading CPG Brands Choose Straive" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-5">Why Leading CPG Brands Choose Straive</h2>
            <ul className="space-y-3">
              {WHY_STRAIVE.map((w) => (
                <li key={w.title} className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#10162B]">{w.title}</p>
                    <p className="text-[12px] text-[#4a4a5a]">{w.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Operationalize AI CTA + form */}
      <section className="bg-[#f7f7f9] pt-14">
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-2">Operationalize AI for your CPG operations.</h2>
          <p className="text-sm text-[#4a4a5a]">Explore our consumer goods services &amp; solutions</p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
