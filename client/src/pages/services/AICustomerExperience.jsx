import { Star, Headset } from "lucide-react";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import FAQAccordion from "../../components/servicepage/FAQAccordion";
import ContactForm from "../../components/ContactForm";

const CX_SERVICES = ["Omnichannel Support", "Conversational AI & Chatbots", "Agent Assist Tools", "Voice & IVR Modernization", "CX Analytics & QA"];

const INDUSTRIES = [
  { name: "Banking & Financial Services", img: "/images/industry-banking.jpg" },
  { name: "Education", img: "/images/industry-education.jpg" },
  { name: "Logistics & Supply Chain", img: "/images/industry-logistics.jpg" },
  { name: "Pharma & Life Sciences", img: "/images/industry-pharma.webp" },
  { name: "Retail, Entertainment & Media", img: "/images/industry-retail-media.jpg" },
  { name: "Retail & E-commerce", img: "/images/industry-ecommerce.webp" },
];

const CASE_STUDIES = [
  { title: "Transforming Faculty Support and Lead Qualification for a Leading Learning Digital Platform Publisher", img: "/images/cx-case-1.webp" },
  { title: "Streamlining Front-Office Support for a Leading Education Publisher", img: "/images/cx-case-2.webp" },
  { title: "Scaling Economical Lead Qualification and Customer Support for an Insurance Provider", img: "/images/cx-case-3.webp" },
];

const INSIGHTS = [
  { title: "How Omni-Channel Analytics Elevate Customer Experience in 2026", tag: "Whitepaper", img: "/images/cx-insight-1.webp" },
  { title: "4 Ways AI Copilots Are Transforming Customer Support", tag: "Blog", img: "/images/cx-insight-2.webp" },
  { title: "The Rise of Agentic AI in Customer Experience Engagement", tag: "Report", img: "/images/cx-insight-3.webp" },
];

const FAQS = [
  { q: "What are Customer Experience Solutions?", a: "Customer Experience Solutions are an integrated suite of analytics, automation, and AI-powered tools designed to enhance every touchpoint of the customer journey, personalized, efficient, and consistent." },
  { q: "What industries benefit most from CX Solutions?", a: "Banking, education, logistics, pharma, retail, and media organizations see significant gains from omnichannel and AI-driven CX solutions." },
  { q: "What does your CX Consulting Service typically involve?", a: "Our consulting engagement covers current-state assessment, target operating model design, technology selection, and phased implementation with measurable KPIs." },
  { q: "Do you provide dedicated Global Customer Support solutions?", a: "Yes, we provide 24/7 multilingual support delivered through a blended team of AI agents and trained human specialists." },
  { q: "How do you ensure the success of Customer Experience Engagement?", a: "We combine continuous QA, real-time analytics, and iterative agent training to ensure consistent, high-quality customer engagement." },
];

export default function AICustomerExperience() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(120deg, #060b1f 0%, #0c1a3d 50%, #0a2f4a 100%)" }}
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.35),transparent_55%)]" />
        <div className="relative section-container py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-2">
              Customer Experience
              <br />
              Solutions and Services
            </h1>
            <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase mt-6">Talk to an Expert</button>
          </div>

          <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-4 w-full max-w-xs border border-white/15 overflow-hidden">
            <img src="/images/cx-hero-mockup.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Headset className="w-4 h-4" />
              </span>
              <div className="flex-1 h-2 rounded bg-white/20" />
            </div>
            <div className="relative flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceIntro
        heading="Why Customer Experience Matters to Modern Businesses"
        body="Customers expect fast, personalized, and consistent support across every channel. Businesses that fail to deliver risk losing loyalty and revenue, while those that invest in intelligent, AI-powered CX solutions unlock stronger retention, higher satisfaction, and measurable growth."
      />

      {/* Our CX Services */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl font-semibold text-[#10162B] mb-5">Our Customer Experience Services</h2>
            <ul className="space-y-3">
              {CX_SERVICES.map((s) => (
                <li key={s} className="text-sm text-[#3a3a4a] border-b border-black/5 pb-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-56 rounded-lg overflow-hidden">
            <img src="/images/cx-services-image.jpg" alt="Customer Experience Services" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Ops + AI agents dark card */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <div className="relative rounded-lg overflow-hidden p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <img src="/images/cx-ops-ai-agents.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <h3 className="relative text-lg md:text-xl font-semibold max-w-md">When Ops and AI Agents Work Together</h3>
          </div>
        </div>
      </section>

      {/* AI-Powered Omnichannel CX */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <div className="bg-orange-50 rounded-xl p-8 max-w-2xl">
            <h3 className="text-lg font-semibold text-[#10162B] mb-2">AI-Powered Omnichannel CX</h3>
            <p className="text-sm text-[#4a4a5a] leading-relaxed mb-5">
              A single, unified customer view across chat, voice, email, and social &mdash; powered by AI that routes,
              resolves, and personalizes every interaction in real time.
            </p>
            <button className="btn-pill btn-orange text-[10px] px-4 py-2 uppercase">Learn More</button>
          </div>
        </div>
      </section>

      {/* Support tiers */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden">
          <div className="bg-brand-orange text-white p-8 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-3">AI-Powered Support Across Every Query Tier</h3>
            <p className="text-[13px] text-white/90 leading-relaxed">
              From simple FAQs to complex escalations, our tiered support model blends AI agents and expert
              specialists so every query reaches the right resolution path, fast.
            </p>
          </div>
          <div className="h-56 md:h-auto">
            <img src="/images/cx-support-tiers.png" alt="Support across every query tier" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* One connected ecosystem */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="h-56 rounded-lg overflow-hidden">
            <img src="/images/cx-connected-ecosystem.webp" alt="One Connected Support Ecosystem" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#10162B] mb-4">One Connected Support Ecosystem</h3>
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              We integrate your CRM, helpdesk, and communication channels into a single ecosystem, giving agents
              full context and customers a seamless, connected experience across every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] text-center mb-8">Industries We Serve &ndash; CX Services & Solutions</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {INDUSTRIES.map(({ name, img }) => (
              <div key={name} className="border border-black/10 rounded-lg overflow-hidden flex flex-col items-center text-center">
                <img src={img} alt={name} className="w-full h-24 object-cover" />
                <p className="text-[12px] font-medium text-[#2a2a3a] p-3">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] text-center mb-8">Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map(({ title, img }) => (
              <div key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
                <div className="h-28 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[12px] font-medium text-[#10162B] leading-snug mb-3 flex-1">{title}</p>
                  <a href="#" className="text-[11px] font-semibold text-brand-orange">Learn More &rsaquo;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] mb-8">Customer Experience Insights & Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {INSIGHTS.map(({ title, tag, img }) => (
              <div key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
                <div className="h-24 relative overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-[9px] uppercase bg-brand-orange text-white px-2 py-0.5 rounded">{tag}</span>
                </div>
                <div className="p-4">
                  <p className="text-[12px] font-medium text-[#10162B] leading-snug mb-2">{title}</p>
                  <a href="#" className="text-[11px] font-semibold text-brand-orange">Dive Deeper &rsaquo;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <div className="bg-brand-orange rounded-2xl text-center py-14 px-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
            <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase">Contact Us</button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white pb-16">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] text-center mb-8">FAQs</h3>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
