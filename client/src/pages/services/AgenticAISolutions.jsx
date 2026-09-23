import { useState } from "react";
import {
  Award,
  Trophy,
  ShieldCheck,
  Target,
  Boxes as BoxesIcon,
  Bot,
  UserCog,
  Lock,
  RefreshCw,
  Headset,
  Stethoscope,
  Truck,
  Ticket,
} from "lucide-react";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import HyperscalerPartners from "../../components/HyperscalerPartners";

const AWARDS = [
  { icon: Trophy, title: "AI Breakthrough Award", sub: "Recognized for Agentic AI Breakthrough" },
  { icon: Award, title: "Leader in 2025 PEMa Quadrant", sub: "Agentic AI Service Providers, AIM Research" },
  { icon: ShieldCheck, title: "Responsible AI Recognition", sub: "Nasscom AI Game Changer Awards" },
];

const TOOLKIT_TABS = [
  {
    name: "DocExplore",
    description:
      "Unstructured documents contain valuable insights, but extracting them is often slow and inefficient. DocExplore leverages NLP for intelligent classification, ML and LLMs to automate analysis, and Semantic Search & Graph Analytics for deep contextual insights across agentic workflows.",
    bulletsTitle: "What It Does:",
    bullets: [
      "AI-driven document processing \u2014 Ingest, classify, and analyze large volumes of text.",
      "Topic & entity extraction \u2014 Identify key themes, people, and organizations.",
      "Contextual search & visualization \u2014 Go beyond keywords with AI-powered insights.",
    ],
    img: "/images/toolkit-docexplore.webp",
    alt: "DocExplore toolkit preview",
  },
  {
    name: "Conversational Search/Chat",
    description:
      "Autonomous agents that understand natural-language requests and resolve them end-to-end, escalating to humans only when judgment or approval is required.",
    bulletsTitle: "What It Does:",
    bullets: ["Natural-language task routing and resolution.", "Context-aware, multi-turn conversations.", "Seamless human-in-the-loop handoff."],
    img: "/images/toolkit-conversational-search.webp",
    alt: "Conversational Search and Chat toolkit preview",
  },
  {
    name: "LLM Foundry",
    description:
      "The model-agnostic backbone powering every Straive agent \u2014 rapid prototyping, evaluation, and governed deployment across model providers.",
    bulletsTitle: "What It Does:",
    bullets: ["Rapid prototyping across leading model providers.", "Built-in evaluation and benchmarking.", "One-click deployment into governed environments."],
    img: "/images/toolkit-llm-foundry.jpg",
    alt: "LLM Foundry toolkit preview",
  },
  {
    name: "App Maker",
    description:
      "Compose multi-agent applications from reusable building blocks, without writing code, so business teams can move from idea to autonomous workflow in days.",
    bulletsTitle: "What It Does:",
    bullets: ["Drag-and-drop agent composition.", "Reusable component library across use cases.", "Enterprise-grade governance built in."],
    img: "/images/toolkit-app-maker.jpg",
    alt: "App Maker toolkit preview",
  },
];

const USE_CASE_TABS = [
  {
    name: "Financial Services",
    description:
      "Agentic AI brings automation and resilience across financial fraud, ensuring compliance, and reducing risk with reduced false positives.",
    bulletsTitle: "What It Does:",
    bullets: ["Automated fraud monitoring at scale.", "Reduced false positives across risk workflows.", "Faster, compliant decisioning."],
    img: "/images/usecase-financial-services.webp",
    alt: "Financial Services agentic AI use case",
  },
  {
    name: "Logistics & Supply Chain",
    description: "Autonomous agents streamline vendor management, shipment tracking, and exception handling across complex logistics networks.",
    bulletsTitle: "What It Does:",
    bullets: ["Multi-format vendor data processing.", "Automated shortlisting and qualification for tenders.", "Faster, reliable insights for managers."],
    img: "/images/usecase-logistics-supply-chain.png",
    alt: "Logistics and Supply Chain agentic AI use case",
  },
  {
    name: "Pharma & Life Sciences",
    description: "Agents accelerate adverse event detection and regulatory reporting while maintaining full auditability across clinical workflows.",
    bulletsTitle: "What It Does:",
    bullets: ["Automated detection of adverse events from trial data.", "Multi-agent LLM workflow validation.", "Pharmacovigilance-ready reports for regulators."],
    img: "/images/usecase-pharma-life-sciences.jpg",
    alt: "Pharma and Life Sciences agentic AI use case",
  },
  {
    name: "Science & Research",
    description: "Research teams use agentic workflows to accelerate literature review, hypothesis generation, and data synthesis.",
    bulletsTitle: "What It Does:",
    bullets: ["Automated literature synthesis.", "Pattern discovery across large datasets.", "Faster time-to-insight for research teams."],
    img: "/images/usecase-science-research.jpg",
    alt: "Science and Research agentic AI use case",
  },
  {
    name: "EdTech",
    description: "Agents personalize learning journeys and automate support ticket resolution for global education platforms.",
    bulletsTitle: "What It Does:",
    bullets: ["Personalized learner support at scale.", "Automated content classification and routing.", "Faster resolution for support tickets."],
    img: "/images/usecase-edtech.png",
    alt: "EdTech agentic AI use case",
  },
];

const BUILDING_BLOCKS = [
  { icon: Target, title: "Strategy", text: "AI augmentation, blending human-in-the-loop expertise." },
  { icon: BoxesIcon, title: "Platform Design & Engineering", text: "Straive builds multi-agent orchestration through LLM Foundry." },
  { icon: Bot, title: "Agent Development & Specialization", text: "Our teams create custom multifunctional AI agents for reasoning and automation." },
  { icon: UserCog, title: "Personalization (Agent-Aware)", text: "Personalize end-to-end with continuous, real-time monitoring and ROI tracking." },
  { icon: Lock, title: "Governance & Safeguards", text: "Straive embeds risk mitigation, auditability, and compliance with GDPR, ISO, and SOX standards." },
  { icon: RefreshCw, title: "Modernization & Integration", text: "We assess AI maturity, modernize legacy systems, and integrate emerging frameworks for future readiness." },
];

const CLIENT_JOURNEYS = [
  { icon: Headset, title: "Hardship Collections Agent", bullets: ["Streamlined scalable financial support automation using conversational AI.", "Provided real-time dashboards for customer insights and payment plans.", "Reduced call center load while improving customer experience."] },
  { icon: Stethoscope, title: "Adverse Event Detection", bullets: ["Improved clinical trial safety and compliance with a multi-agent LLM workflow.", "Automated detection of adverse events from trial data.", "Delivered pharmacovigilance-ready reports for regulators."] },
  { icon: Bot, title: "Research Assistant Agent", bullets: ["Accelerated literature review and resilience across research workflows.", "Automated shortlisting and qualification of relevant sources.", "Delivered faster, reliable insights for research teams."] },
  { icon: Truck, title: "Vendor Intelligence", bullets: ["Optimized vendor management with AI-led data processing.", "Analyzed multi-format vendor data (Excel, PDFs, Docs).", "Delivered faster, reliable vendor insights for managers."] },
  { icon: Ticket, title: "Ticket AI Assist", bullets: ["Streamlined ticket lifecycle and management for global airlines.", "Automated classification of loyalty/rebookable queries.", "Boosted workflow accuracy resolving frequently asked queries."] },
];

export default function AgenticAISolutions() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <>
      {/* Hero + inline signup */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(120deg, #0a0e1f 0%, #191033 50%, #241040 100%)" }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.3),transparent_55%)]" />
        <div className="relative section-container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-3">High-Impact AI Solutions in Days &mdash; Not Months</h1>
            <p className="text-sm text-white/70">Deploy Agentic AI solutions with LLM Foundry, a platform that gets things done faster.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 text-[#1a1a1a] space-y-3">
            <p className="text-sm font-semibold mb-1">Interested in Agentic AI solutions? Sign up!</p>
            <div className="grid grid-cols-2 gap-3">
              <input
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                required
                className="border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
              />
              <input
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                required
                className="border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Work Email*"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
            />
            <textarea
              name="message"
              placeholder="Message*"
              rows={2}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange resize-none"
            />
            <button type="submit" className="btn-pill btn-orange text-[11px] px-6 py-2.5 uppercase">Submit</button>
          </form>
        </div>
      </section>

      {/* Recognized for impactful results */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">We are Recognized for Impactful Results</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {AWARDS.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3 border border-black/10 rounded-lg p-6">
                <Icon className="w-9 h-9 text-brand-orange" />
                <p className="text-sm font-semibold text-[#10162B]">{title}</p>
                <p className="text-[11px] text-[#7a7a8a]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToolkitTabs heading="Our Modular Agentic AI Toolkits" tabs={TOOLKIT_TABS} />

      <ToolkitTabs heading="Our Agentic AI Use Cases Across Industries" tabs={USE_CASE_TABS} />

      <section className="bg-[#f7f7f9] pb-14 pt-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">The Building Blocks of Straive&rsquo;s Agentic AI</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUILDING_BLOCKS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white border border-black/10 rounded-lg p-5">
                <Icon className="w-7 h-7 text-brand-orange mb-3" />
                <p className="text-sm font-semibold text-[#10162B] mb-1">{title}</p>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client journeys */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            When Agentic AI Gets to Work: Real Client Journeys
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_JOURNEYS.map(({ icon: Icon, title, bullets }) => (
              <div key={title} className="border border-black/10 rounded-lg p-5">
                <Icon className="w-7 h-7 text-brand-orange mb-3" />
                <p className="text-sm font-semibold text-[#10162B] mb-2">{title}</p>
                <ul className="space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="text-[11px] text-[#4a4a5a] flex gap-1.5">
                      <span className="text-brand-orange">&#8226;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HyperscalerPartners />

      {/* CTA */}
      <section className="bg-white pb-16">
        <div className="section-container">
          <div className="bg-brand-orange rounded-2xl text-center py-14 px-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 max-w-xl mx-auto">
              Ready to transform your enterprise with autonomous AI agents?
            </h2>
            <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase">Book a Demo</button>
          </div>
        </div>
      </section>
    </>
  );
}