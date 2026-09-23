import {
  Play,
  ShieldCheck,
  Cpu,
  Lightbulb,
  Handshake,
  TrendingUp,
  Network,
  ServerCog,
  Bot,
  Gauge,
} from "lucide-react";
import ContactForm from "../../components/ContactForm";

const CHALLENGES = [
  "High volume of repetitive tickets straining support teams",
  "Unpredictable IT infrastructure spend and resource utilization",
  "Evolving cybersecurity threats with limited real-time visibility",
  "Fragmented data across disparate tools hindering decision-making",
];

const SOLUTIONS = [
  { title: "AI-Powered Service Desk & Chat Assistant", bullets: ["24x7 intelligent ticket triage and resolution", "Faster resolution times with predictive routing"] },
  { title: "Governed, Proactive IT Operations", bullets: ["Real-time infrastructure health monitoring", "Predictive alerts before issues escalate"] },
];

const DIFFERENTIATORS = [
  { icon: TrendingUp, title: "Data-Driven Decision Making" },
  { icon: Lightbulb, title: "Industry Expertise" },
  { icon: Cpu, title: "Automation & Efficiency" },
  { icon: Bot, title: "Innovation at the Core" },
  { icon: Handshake, title: "Seamless Collaboration" },
  { icon: Gauge, title: "Business Value" },
];

const IMPACT_STATS = [
  { value: "40,000+", label: "IT operations & escalations managed annually" },
  { value: "35%", label: "Improvement in mean time-to-resolution" },
  { value: "22-45%", label: "Cost reduction across managed IT workflows" },
  { value: "24x7", label: "Global operations coverage across time zones" },
  { value: "500+", label: "Automation workflows deployed" },
  { value: "99.9%", label: "SLA adherence across engagements" },
];

const INFRASTRUCTURE = [
  { icon: ShieldCheck, title: "Zero Trust Security & Least-Cost Cyber Defense" },
  { icon: ServerCog, title: "Infrastructure at Scale (AI-Optimized Reliability)" },
  { icon: Network, title: "Vendor-Neutral, Interoperable IT" },
  { icon: Gauge, title: "AI-Powered Predictive Analytics for Proactive IT Management" },
  { icon: Bot, title: "Copilot-Driven-as-a-Service (24x7) for Business Continuity" },
];

const SUCCESS_STORIES = [
  {
    title: "Scaling Customer Support with Technology-Driven Operations for a Leading Scientific Publisher",
    img: "/images/success-scientific-publisher.jpg",
  },
  {
    title: "Enhancing Information Security Compliance for a Fintech Firm",
    img: "/images/success-fintech-compliance.jpg",
  },
  {
    title: "Transforming IT Helpdesk Operations for a Retail Brand",
    img: "/images/success-retail-helpdesk.webp",
  },
];

export default function ITTechOps() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(120deg, #06111f 0%, #0a2338 55%, #0a3a4a 100%)" }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.35),transparent_55%)]" />
        <div className="relative section-container py-16 md:py-20">
          <h1 className="text-2xl md:text-4xl font-semibold mb-3 max-w-xl">
            Empower Your IT Operations with Straive&rsquo;s Tech Ops Enablement
          </h1>
          <p className="text-sm text-white/70 mb-6 max-w-md">
            Future-Proof Your IT with Data-Driven Insights and AI Solutions
          </p>
          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">Talk to an Expert</button>
        </div>
      </section>

      {/* Video card */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl font-semibold text-[#10162B] text-center mb-8">
            Scale Business Transformation with Intelligent Operations
          </h2>
          <div className="max-w-2xl mx-auto relative h-56 rounded-lg overflow-hidden flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/YCtWpfjD5eY"
              poster="/images/it-techops-video-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
            />
            <span className="absolute bottom-3 left-3 text-white/60 text-[11px]">Scalable DevOps</span>
          </div>
        </div>
      </section>

      {/* Overcoming challenges */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/it-challenges.jpg"
            alt="Overcoming key IT challenges"
            className="h-56 w-full rounded-lg object-cover order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold text-[#10162B] mb-5">Overcoming Key IT Challenges with Straive</h3>
            <ul className="space-y-3">
              {CHALLENGES.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-[#4a4a5a]">
                  <span className="text-brand-orange">&#8226;</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comprehensive IT enablement solutions */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] text-center mb-8">Our Comprehensive IT Enablement Solutions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((s) => (
              <div key={s.title} className="grid grid-cols-[auto_1fr] rounded-lg overflow-hidden">
                <div className="bg-brand-orange text-white p-5 w-40 flex flex-col justify-center">
                  <p className="text-sm font-semibold leading-snug">{s.title}</p>
                </div>
                <div className="bg-black/5 p-5 flex flex-col justify-center gap-2">
                  {s.bullets.map((b) => (
                    <p key={b} className="text-[12px] text-[#4a4a5a] flex gap-2">
                      <span className="text-brand-orange">&#10003;</span>
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Straive Advantage */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">The Straive Advantage: Why We Stand Out</h3>
          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-2xl mb-10">
            At Straive, we don&rsquo;t just manage IT operations &mdash; we transform them. Our blend of automation,
            domain expertise, and AI-first thinking helps enterprises operate leaner, respond faster, and scale
            with confidence.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {DIFFERENTIATORS.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-sm text-[#2a2a3a]">{title}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/it-advantage-1.jpg"
                alt="Straive IT advantage"
                className="h-40 w-full rounded-lg object-cover"
              />
              <img
                src="/images/it-advantage-2.webp"
                alt="Straive IT advantage secondary"
                className="h-40 w-full rounded-lg object-cover mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">Delivering Measurable Business Impact</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {IMPACT_STATS.map((s) => (
              <div key={s.label} className="border border-black/10 rounded-lg p-5 text-center">
                <p className="text-2xl font-bold text-brand-orange mb-1">{s.value}</p>
                <p className="text-[12px] text-[#4a4a5a]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future-ready infra */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-3">Future-Ready, Scalable IT Infrastructure</h3>
          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-2xl mb-8">
            Straive helps enterprises design an IT foundation built for what comes next &mdash; secure,
            interoperable, and ready to scale without adding operational risk.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {INFRASTRUCTURE.map(({ icon: Icon, title }) => (
              <div key={title} className="bg-white rounded-lg p-4 flex items-start gap-3 border border-black/5">
                <Icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-[12px] font-medium text-[#2a2a3a]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] text-center mb-8">Our Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map(({ title, img }) => (
              <div key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
                <img src={img} alt={title} className="h-28 w-full object-cover" />
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[12px] font-medium text-[#10162B] leading-snug mb-3 flex-1">{title}</p>
                  <a href="#" className="text-[11px] font-semibold text-brand-orange">Learn More &rsaquo;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}