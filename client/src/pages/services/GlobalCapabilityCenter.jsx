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
  Download,
} from "lucide-react";
import ContactForm from "../../components/ContactForm";

const PROVEN_IMPACT = [
  {
    value: "AI-First",
    label: "Business operations designed around intelligent automation and AI capabilities",
  },
  {
    value: "End-to-End",
    label: "Support across technology, data, AI, automation, and operational workflows",
  },
  {
    value: "Scalable",
    label: "Flexible delivery models designed to grow with changing business requirements",
  },
];

const BENEFITS = [
  {
    icon: Rocket,
    title: "Faster Setup",
    text: "Establish dedicated technology and AI capabilities around clearly defined business requirements",
  },
  {
    icon: Users,
    title: "Specialized Teams",
    text: "Bring together engineering, AI, data, and domain-focused delivery capabilities",
  },
  {
    icon: Zap,
    title: "Faster Time-to-Value",
    text: "Move from business requirements to working technology solutions through focused delivery teams",
  },
  {
    icon: Globe2,
    title: "Flexible Delivery",
    text: "Support distributed teams and technology operations across different business environments",
  },
  {
    icon: ShieldCheck,
    title: "Structured Governance",
    text: "Establish clear processes, ownership, security practices, and operational visibility",
  },
  {
    icon: TrendingDown,
    title: "Operational Efficiency",
    text: "Use automation and AI to reduce repetitive work and improve the efficiency of business processes",
  },
  {
    icon: CheckCircle2,
    title: "Data-Driven Operations",
    text: "Connect business data, analytics, and AI capabilities to support better operational decisions",
  },
];

const BUILD_OPERATE = [
  "Technology Teams That Scale",
  "AI + Engineering Delivery",
  "Data & Analytics Capabilities",
  "Structured Governance",
];

const CAPABILITIES = [
  {
    title: "Technology Team Setup",
    text: "Build dedicated engineering and technology teams around your business requirements, workflows, and growth plans.",
  },
  {
    title: "AI & Automation",
    text: "Introduce generative AI, intelligent automation, AI agents, and workflow automation into business operations.",
  },
  {
    title: "Data & Analytics",
    text: "Create reliable data pipelines, analytics workflows, dashboards, and AI-ready data foundations.",
  },
  {
    title: "Product Engineering",
    text: "Design, develop, integrate, and maintain modern web applications and enterprise software solutions.",
  },
  {
    title: "Cloud & Infrastructure",
    text: "Build scalable application infrastructure and deployment workflows for modern digital products.",
  },
  {
    title: "Continuous Optimization",
    text: "Monitor business and technology workflows to identify opportunities for automation, improvement, and scale.",
  },
];

const OUTCOMES = [
  "Faster technology delivery",
  "Scalable operations",
  "AI-enabled workflows",
  "Improved productivity",
  "Connected business systems",
  "Data-driven decisions",
];

const CASE_TABS = [
  {
    name: "AI & Automation",
    img: "/images/gcc-risk-analytics.webp",
    bullets: [
      "Automated repetitive business workflows using AI and intelligent processing.",
      "Connected AI capabilities with existing business applications.",
      "Created reusable workflows for future automation initiatives.",
    ],
  },
  {
    name: "Product Engineering",
    img: "/images/gcc-private-equity.jpg",
    bullets: [
      "Built modern web applications around specific business requirements.",
      "Integrated frontend, backend, APIs, databases, and cloud infrastructure.",
      "Supported continuous product improvements and feature delivery.",
    ],
  },
  {
    name: "Data & Analytics",
    img: "/images/gcc-logistics.jpg",
    bullets: [
      "Connected data from multiple operational systems.",
      "Automated data processing and reporting workflows.",
      "Created analytics foundations for better business visibility.",
    ],
  },
  {
    name: "Enterprise AI",
    img: "/images/gcc-edtech.jpg",
    bullets: [
      "Developed AI assistants for internal business workflows.",
      "Connected enterprise knowledge with conversational interfaces.",
      "Designed practical AI use cases around real business processes.",
    ],
  },
  {
    name: "Customer Experience",
    img: "/images/gcc-language-learning.png",
    bullets: [
      "Built conversational AI experiences for customer-facing workflows.",
      "Automated common support and information-retrieval tasks.",
      "Connected customer interactions with business systems.",
    ],
  },
  {
    name: "Business Process Automation",
    img: "/images/gcc-chemical-information.jpeg",
    bullets: [
      "Identified repetitive processes suitable for automation.",
      "Combined APIs, software workflows, and AI capabilities.",
      "Reduced manual intervention across operational processes.",
    ],
  },
  {
    name: "Digital Operations",
    img: "/images/gcc-scientific-information.png",
    bullets: [
      "Supported technology operations through dedicated delivery capabilities.",
      "Improved visibility across application and data workflows.",
      "Created scalable processes for ongoing digital operations.",
    ],
  },
];

const RESOURCES = [
  {
    title: "Building an AI-Ready Business Operation",
    img: "/images/resource-full-cycle-pe.jpg",
  },
  {
    title: "From AI Experiments to Production Solutions",
    img: "/images/resource-gcc-veterinary.webp",
  },
  {
    title: "How AI-Enabled Operations Improve Business Efficiency",
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
        style={{
          background:
            "linear-gradient(120deg, #1a1a1a 0%, #2a2a2a 50%, #3a3a3a 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.35),transparent_55%)]" />

        <div className="relative section-container py-16 md:py-20">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 max-w-2xl">
            AI-Enabled Global Capability Centers for Modern Businesses
          </h1>

          <p className="text-sm text-white/70 mb-8 max-w-xl">
            Build scalable technology, AI, data, and operational capabilities
            with a delivery model designed around your business goals.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">
              Talk to Experts
            </button>

            <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase inline-flex items-center gap-2">
              Explore AI Solutions
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Orange banner */}
      <section className="bg-brand-orange text-white py-10">
        <div className="section-container grid md:grid-cols-2 gap-6 items-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            Build an AI-Enabled Capability Center
          </h2>

          <p className="text-sm text-white/90 leading-relaxed">
            Modern organizations need technology capabilities that can adapt
            quickly. An AI-enabled capability center brings together
            engineering, data, automation, and AI to create a scalable
            foundation for digital operations and innovation.
          </p>
        </div>
      </section>

      {/* Proven impact */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl font-semibold text-[#10162B] text-center mb-10">
            Building Capabilities for AI-Driven Operations
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {PROVEN_IMPACT.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-bold text-brand-orange mb-2">
                  {item.value}
                </p>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is an AI-enabled GCC */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-56 rounded-lg bg-gradient-to-br from-[#101B3D] to-[#0A0E1F] overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/MN08zagVQTo"
              title="AI-Enabled Capability Center"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#10162B] mb-4">
              What Is an AI-Enabled Capability Center?
            </h3>

            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              An AI-enabled Global Capability Center brings together
              technology, engineering, data, automation, and AI capabilities
              within a structured operating model. Instead of treating AI as
              an isolated initiative, businesses can integrate intelligent
              capabilities directly into their products, processes, and
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            Benefits of an AI-Enabled Capability Center
          </h3>

          <div className="grid md:grid-cols-[200px_1fr] gap-10 items-center">
            <div className="flex justify-center">
              <Bot
                className="w-32 h-32 text-brand-orange"
                strokeWidth={1}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {BENEFITS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />

                  <div>
                    <p className="text-sm font-semibold text-[#10162B]">
                      {title}
                    </p>

                    <p className="text-[12px] text-[#4a4a5a]">
                      {text}
                    </p>
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
              Build-Operate Model for Scalable Digital Operations
            </h3>

            <p className="text-sm text-[#4a4a5a] leading-relaxed mb-6">
              Create a dedicated capability model that combines technology
              expertise, AI capabilities, data operations, and structured
              delivery processes to support long-term business growth.
            </p>

            <ul className="space-y-3">
              {BUILD_OPERATE.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#2a2a3a]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-56 rounded-lg overflow-hidden">
            <img
              src="/images/gcc-build-operate.png"
              alt="Build-Operate Model for Scalable Digital Operations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            Capabilities Across the Digital Operations Lifecycle
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability) => (
              <div
                key={capability.title}
                className="bg-white rounded-lg p-5 border border-black/5"
              >
                <p className="text-sm font-semibold text-[#10162B] mb-1">
                  {capability.title}
                </p>

                <p className="text-[12px] text-[#4a4a5a]">
                  {capability.text}
                </p>
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
              alt="AI-Enabled Capability Center Outcomes"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-5">
              Outcomes From an AI-Enabled Capability Center
            </h3>

            <ul className="grid grid-cols-2 gap-3">
              {OUTCOMES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#2a2a3a]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Readiness framework */}
      <section className="bg-brand-orange text-white py-10">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg md:text-xl font-semibold max-w-xl">
            A practical framework for building and scaling AI-enabled
            business capabilities.
          </p>

          <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase shrink-0">
            Explore Our Approach
          </button>
        </div>
      </section>

      {/* Case study tabs */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            AI-Enabled Capability Use Cases
          </h3>

          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            <div className="flex flex-col gap-2">
              {CASE_TABS.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveCase(index)}
                  className={`text-left text-[13px] px-4 py-3 rounded-md border transition-colors ${
                    index === activeCase
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

              <h4 className="text-sm font-semibold text-[#10162B] mb-3">
                {CASE_TABS[activeCase].name}
              </h4>

              <ul className="space-y-2">
                {CASE_TABS[activeCase].bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-[13px] text-[#4a4a5a] flex gap-2"
                  >
                    <span className="text-brand-orange">&#8226;</span>
                    {bullet}
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
          <h3 className="text-xl font-semibold text-[#10162B] mb-8">
            Resources
          </h3>

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

      {/* CTA + Contact */}
      <section className="bg-white pt-14">
        <div className="section-container text-center max-w-2xl">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">
            Build Your Next-Generation AI Capability Center
          </h3>

          <p className="text-sm text-[#4a4a5a] leading-relaxed">
            Build a technology and AI operating model designed around your
            business requirements. From engineering and data to AI and
            automation, Work Science can help create the capabilities needed
            to support modern digital operations.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}