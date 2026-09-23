import { useState } from "react";
import {
  CheckCircle2,
  Bot,
  Rocket,
  Users,
  TrendingDown,
  Globe2,
  ShieldCheck,
  Zap,
  Play,
  Download,
} from "lucide-react";
import ContactForm from "../../components/ContactForm";

const PROVEN_IMPACT = [
  { value: "20%+", label: "pricing accuracy achieved for a financial services firm through automation & AI benchmarking" },
  { value: "73", label: "KPIs defined, and 58 modernization opportunities identified through Straive's GCC operational audit" },
  { value: "6-8 Weeks", label: "to launch a fully operational AI-enabled GCC with SLA-backed governance" },
];

const BENEFITS = [
  { icon: Rocket, title: "Launch in 6-8 Weeks", text: "AI-enabled GCC setup with SLA-backed governance" },
  { icon: Users, title: "Remains on Core", text: "Straive runs operations, so leadership drives growth" },
  { icon: Zap, title: "Faster Time-to-Value", text: "Rapid hiring across India, the Philippines, Vietnam and Nicaragua" },
  { icon: Globe2, title: "Deep AI & Analytics Connect", text: "Access GenAI, ESG, DataOps, and CX CoEs" },
  { icon: ShieldCheck, title: "Reduced GCC Failure Risk", text: "A proven model ensures a smooth transition and stability" },
  { icon: TrendingDown, title: "Scalable Global Talent", text: "Rapid hiring across India, the Philippines, Vietnam and Nicaragua" },
  { icon: CheckCircle2, title: "Data-driven Decisions", text: "73 KPIs defined, 58 automation wins embedded" },
];

const BUILD_OPERATE = ["Launch in Weeks, Not Months", "AI + Domain Delivery Pods", "CoEs That Scale Impact", "Governance That Delivers"];

const CAPABILITIES = [
  { title: "Faster Onboarding", text: "Custom design in <4 weeks, with mapped functions, roles and KPIs." },
  { title: "40% Cost Reduction", text: "Optimized operations, first-year impact." },
  { title: "90-Day Global Go-Live", text: "3 continents, seamless expansion." },
  { title: "SLA Adherence", text: "Consistently exceeding performance, multi-country reliability." },
  { title: "500+ Automation Workflows", text: "Driving measurable efficiency." },
  { title: "7-Language CX in 90 Days", text: "Global customer engagement, accelerated delivery." },
];

const OUTCOMES = ["Faster market moves", "Self-funding growth", "Innovation on tap", "Resilient operations", "Borderless expertise", "Data-driven decisions"];

const CASE_TABS = [
  {
    name: "Financial Services - Risk Analytics Firm",
    img: "/images/gcc-risk-analytics.webp",
    bullets: [
      "Grew from 10 to 60+ FTEs since 2019.",
      "Deep expertise in risk modeling and analytics.",
      "40% faster go-to-market for new products.",
    ],
  },
  {
    name: "Financial Services - Private Equity Firm",
    img: "/images/gcc-private-equity.jpg",
    bullets: [
      "Built a dedicated deal-support GCC.",
      "Reduced diligence turnaround by 35%.",
      "Scaled from 5 to 40+ FTEs in 18 months.",
    ],
  },
  {
    name: "Logistics - Parcel & Logistics Provider",
    img: "/images/gcc-logistics.jpg",
    bullets: [
      "Automated exception handling workflows.",
      "Reduced manual processing time by 50%.",
      "24/7 multi-region operations support.",
    ],
  },
  {
    name: "EdTech",
    img: "/images/gcc-edtech.jpg",
    bullets: [
      "Tech CoE with App Dev, Data Engineering, QA, GenAI.",
      "40% faster go-to-market, LLM CoE established for reusable AI use cases.",
    ],
  },
  {
    name: "Language Learning Platform",
    img: "/images/gcc-language-learning.png",
    bullets: [
      "Built a content operations CoE.",
      "Scaled localization across 7+ languages.",
      "Reduced content turnaround time by 45%.",
    ],
  },
  {
    name: "Chemical Information Provider",
    img: "/images/gcc-chemical-information.jpeg",
    bullets: [
      "Established a data curation CoE.",
      "Improved data accuracy to 99.5%.",
      "Reduced processing costs by 30%.",
    ],
  },
  {
    name: "Scientific Information Provider",
    img: "/images/gcc-scientific-information.png",
    bullets: [
      "Set up a research operations GCC.",
      "Accelerated peer-review support workflows.",
      "Scaled team 3x within a year.",
    ],
  },
];

const RESOURCES = [
  {
    title: "Operationalization for Full-Cycle PE",
    img: "/images/resource-full-cycle-pe.jpg",
  },
  {
    title: "Straive Wins GCC Veterinary at Cypher's Minsky Awards",
    img: "/images/resource-gcc-veterinary.webp",
  },
  {
    title: "Re[Al]ive Value Creation - Faster with AI-Enabled GCCs",
    img: "/images/resource-ai-enabled-gcc.webp",
  },
];

export default function GlobalCapabilityCenter() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(120deg, #1a1a1a 0%, #2a2a2a 50%, #3a3a3a 100%)" }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.35),transparent_55%)]" />
        <div className="relative section-container py-16 md:py-20">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 max-w-2xl">
            AI-Enabled GCCs for PE Portfolio Companies and Mid-Market Enterprises
          </h1>
          <p className="text-sm text-white/70 mb-8 max-w-xl">
            Private Equity Portfolio Companies and Mid-Market Enterprises to scale faster with AI-enabled GCCs in 6&ndash;8 weeks.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">Talk to Experts</button>
            <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase inline-flex items-center gap-2">
              Download Playbook <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Orange banner */}
      <section className="bg-brand-orange text-white py-10">
        <div className="section-container grid md:grid-cols-2 gap-6 items-center">
          <h2 className="text-xl md:text-2xl font-semibold">Your PortCos Need an AI-Enabled GCC</h2>
          <p className="text-sm text-white/90 leading-relaxed">
            Private Equity portfolios don&rsquo;t have the luxury of long ramp-up periods. Value creation must
            begin immediately post-acquisition. An AI-enabled GCC transforms operations into a value and
            innovation engine, embedding AI, analytics, and automation across core functions.
          </p>
        </div>
      </section>

      {/* Proven impact */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl font-semibold text-[#10162B] text-center mb-10">Proven Impact</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {PROVEN_IMPACT.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-brand-orange mb-2">{s.value}</p>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is an AI-enabled GCC */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-56 rounded-lg bg-gradient-to-br from-[#101B3D] to-[#0A0E1F] flex items-center justify-center">
            <iframe
              className="w-full h-full rounded-full"
              src="https://www.youtube.com/embed/RAU7pwebifs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span className="absolute bottom-3 left-3 text-white/60 text-[11px]">Watch on YouTube</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#10162B] mb-4">What Is an AI-Enabled GCC?</h3>
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              An AI-enabled Global Capability Center combines your critical business functions with AI
              operationalization from day one &mdash; embedding intelligence, automation, and analytics into every
              workflow. It&rsquo;s not just a delivery hub; it&rsquo;s a value engine that scales, adapts, and
              delivers measurable outcomes faster.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits with mascot */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            Benefits of Setting Up Your AI-Enabled GCC with Straive
          </h3>
          <div className="grid md:grid-cols-[200px_1fr] gap-10 items-center">
            <div className="flex justify-center">
              <Bot className="w-32 h-32 text-brand-orange" strokeWidth={1} />
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {BENEFITS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#10162B]">{title}</p>
                    <p className="text-[12px] text-[#4a4a5a]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Build-Operate model */}
      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-5">
              Build-Operate Model for Scalable, Efficient GCCs
            </h3>
            <p className="text-sm text-[#4a4a5a] leading-relaxed mb-6">
              Straive's AI, domain depth, and SLA-backed delivery turn setup into a measurable growth engine.
            </p>
            <ul className="space-y-3">
              {BUILD_OPERATE.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#2a2a3a]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-56 rounded-lg overflow-hidden">
  <img
    src="/images/gcc-build-operate.png"
    alt="Build-Operate Model for Scalable GCCs"
    className="w-full h-full object-cover"
  />
</div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            Straive Capabilities: From Onboarding to Optimization
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="bg-white rounded-lg p-5 border border-black/5">
                <p className="text-sm font-semibold text-[#10162B] mb-1">{c.title}</p>
                <p className="text-[12px] text-[#4a4a5a]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="h-56 rounded-lg overflow-hidden order-2 md:order-1">
  <img
    src="/images/gcc-outcomes.webp"
    alt="AI-Led GCC Outcomes"
    className="w-full h-full object-cover"
  />
</div>
          <div className="order-1 md:order-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-5">Your AI-Led GCC, Your Outcomes</h3>
            <ul className="grid grid-cols-2 gap-3">
              {OUTCOMES.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#2a2a3a]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Readiness framework banner */}
      <section className="bg-brand-orange text-white py-10">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg md:text-xl font-semibold max-w-xl">
            A step-by-step readiness framework to operationalize AI through your GCCs.
          </p>
          <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase shrink-0">
            Download Playbook
          </button>
        </div>
      </section>

      {/* Case study tabs */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            From Zero to AI-Led Scale in GCC Journeys with Straive
          </h3>
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            <div className="flex flex-col gap-2">
              {CASE_TABS.map((tab, i) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveCase(i)}
                  className={`text-left text-[13px] px-4 py-3 rounded-md border transition-colors ${
                    i === activeCase
                      ? "border-brand-orange bg-orange-50 text-brand-orange font-medium"
                      : "border-black/10 text-[#3a3a4a] hover:border-brand-orange/50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div>
              <div className="h-56 rounded-lg overflow-hidden mb-5">
  <img
    src={CASE_TABS[activeCase].img}
    alt={CASE_TABS[activeCase].name}
    className="w-full h-full object-cover"
  />
</div>
              <h4 className="text-sm font-semibold text-[#10162B] mb-3">{CASE_TABS[activeCase].name}</h4>
              <ul className="space-y-2">
                {CASE_TABS[activeCase].bullets.map((b) => (
                  <li key={b} className="text-[13px] text-[#4a4a5a] flex gap-2">
                    <span className="text-brand-orange">&#8226;</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] mb-8">Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
{RESOURCES.map((resource) => (
  <div
    key={resource.title}
    className="bg-white rounded-lg overflow-hidden border border-black/5 flex flex-col"
  >
    <div className="h-28 overflow-hidden">
      <img
        src={resource.img}
        alt={resource.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-4 flex flex-col flex-1">
      <p className="text-[12px] font-medium text-[#10162B] leading-snug mb-3 flex-1">
        {resource.title}
      </p>

      <a
        href="#"
        className="text-[11px] font-semibold text-brand-orange"
      >
        Learn More &rsaquo;
      </a>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* Build your next-gen GCC + contact form */}
      <section className="bg-white pt-14">
        <div className="section-container text-center max-w-2xl">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">
            Build Your Next-Gen AI-Enabled GCC with Straive
          </h3>
          <p className="text-sm text-[#4a4a5a] leading-relaxed">
            Accelerate with a custom roadmap built for faster outcomes, lower risk, and sustained growth. If
            you&rsquo;re launching a new GCC or scaling an existing one, Straive brings the platforms, talent, and
            AI-first expertise to make it a success &mdash; securely, intelligently, and at speed.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
