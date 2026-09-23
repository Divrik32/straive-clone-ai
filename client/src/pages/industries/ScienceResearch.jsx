import { ShieldCheck, Rocket, Users, Sparkles, TrendingDown, LineChart, FileCheck2, BookOpen, Send, ArrowRight } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import IndustryBanner from "../../components/industrypage/IndustryBanner";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import ContactForm from "../../components/ContactForm";

const SOLUTIONS = [
  { icon: ShieldCheck, title: "Research Integrity", text: "Systems and helpdesk tools to identify and address image manipulation, paper mill submissions, and credibility risks." },
  { icon: Rocket, title: "Accelerating Time-to-Publish", text: "Redesigned workflows powered by automation and AI to cut down submit-to-decision and accept-to-publish cycles." },
  { icon: Users, title: "Empowering Authors", text: "Author 360 and helpdesk tools create seamless, tech-enabled experiences at every touchpoint, from disambiguation to profiling and personalization roles within the publishing ecosystem." },
  { icon: Sparkles, title: "Launching New Publishing Models", text: "Expert support for transformative publishing, licensing structures, and content-centric mandates." },
  { icon: TrendingDown, title: "Driving Cost & Operational Efficiency", text: "Achieving transformational ROI with cutting-edge AI capabilities and platform-centric delivery." },
  { icon: LineChart, title: "Future-Proofing with AI & Analytics", text: "Next-gen solutions that evolve with your organization's data-centric landscape and tech disruption." },
];

const VALUE_CHAIN = [
  {
    title: "Submission to Acceptance",
    icon: FileCheck2,
    bullets: ["Creating strong Author pipelines and informed editorial decisions with AI-led editorial workflows", "Research Integrity Engine \u2014 AI-led content validation", "Smart Transfer Strategies \u2014 Seamlessly guide submissions to the most appropriate journal or publication based on scope, fit, and editorial programs"],
  },
  {
    title: "Acceptance to Publication",
    icon: BookOpen,
    bullets: ["Production, compliance, and content excellence at scale", "aiKira GenX Production Platform \u2014 Modular, intelligent automation", "Accessibility Audits & Fixes (including WCAG 2.2, Section 508, EN 301 549 compliance)", "SPACE Platform \u2014 AI-powered tool for fast, high-quality XML output", "Process Analytics & Reporting Dashboards"],
  },
  {
    title: "Post-Publication to Consumption",
    icon: Send,
    bullets: ["Maximizing discoverability, usability, and reader experience", "Metadata Enrichment", "Content Loading & Quality Testing", "Consumption Analytics & Reporting", "Conversational Search Solutions"],
  },
];

const ENABLERS = [
  {
    name: "Sales & Marketing Operation",
    description:
      "Enabling data-driven audience engagement and campaign execution through customer segmentation, targeting, and engagement tools.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Campaign planning, execution & optimization",
      "Marketing analytics & performance dashboards",
      "Engagement tracking & lead intelligence",
      "GenAI-assisted creation of marketing assets - banners, infographics, videos",
    ],
    img: "/images/sales-marketing-operation.webp",
  },

  {
    name: "Open Access Enablement",
    description:
      "End-to-end support for open access transitions, compliance tracking, and funder mandate management.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "OA compliance tracking",
      "Funder mandate management",
      "Transformative agreement support",
    ],
    img: "/images/open-access-enablement.webp",
  },

  {
    name: "Order Management & Financial Operations",
    description:
      "Streamlined order-to-cash workflows and financial reconciliation tailored to publishing revenue models.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Automated order-to-cash workflows",
      "Subscription and licensing reconciliation",
    ],
    img: "/images/order-management-financial-operations.webp",
  },

  {
    name: "Innovation Cell",
    description:
      "A dedicated team piloting emerging AI and data capabilities to keep publishing operations future-ready.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Rapid prototyping of new capabilities",
      "Emerging technology scouting",
    ],
    img: "/images/innovation-cell.webp",
  },

  {
    name: "Technology & Platform Ops",
    description:
      "Reliable platform operations and technology management that keep publishing infrastructure secure and performant.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Platform uptime and performance management",
      "Secure, scalable technology operations",
    ],
    img: "/images/technology-platform-ops.webp",
  },
];

const OUTCOMES = [
  { value: "50%", label: "Faster time-to-publish across editorial workflows" },
  { value: "40%+", label: "Improvement in operational efficiency and cost" },
];

const CASE_STUDIES = [
  { title: "Compliance Excellence for a Leading Publisher's Taylor & Francis Project", img: "/images/sr-case-1.webp" },
  { title: "AI-Driven Transformation of Collections Support for eBook Publishing", img: "/images/sr-case-2.webp" },
  { title: "Trusted Scientific Practices of Research Integrity", img: "/images/sr-case-3.webp" },
];

export default function ScienceResearch() {
  return (
    <>
      <IndustryHero
        title="Reimagining Science & Research Publishing Operations with Data & AI"
        buttons={["Request a Demo"]}
      />

      <ServiceIntro
        heading="Transforming the Science & Research Publishing Ecosystem"
        body="In an era where the speed, integrity, and impact of research matter more than ever, Straive empowers Science & Research publishers to transcend traditional workflows. We bring together domain expertise, cutting-edge AI, and global platforms to drive measurable transformation across the value chain."
      />

      <IconCardGrid heading="Solutions Built for the Realities of Modern Research Publishing" items={SOLUTIONS} columns={3} bg="bg-[#f7f7f9]" />

      {/* Value chain 3-column */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-3">
            End-to-End Capabilities Across the Publishing Value Chain
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {VALUE_CHAIN.map(({ title, icon: Icon, bullets }) => (
              <div key={title} className="border border-black/10 rounded-lg p-5">
                <Icon className="w-7 h-7 text-brand-orange mb-3" />
                <h3 className="text-sm font-semibold text-[#10162B] mb-3">{title}</h3>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="text-[12px] text-[#4a4a5a] flex gap-1.5">
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

      <ToolkitTabs heading="Beyond Publishing: Strategic Enablers" tabs={ENABLERS} />

      {/* aiKira workflow */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-4">
            aiKira: AI-Powered Content Transformation Engine
          </h2>
          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-2xl mx-auto text-center mb-10">
            At the core of our platform strategy is aiKira &mdash; Straive's proprietary AI ecosystem. Built on a
            modular, service-oriented architecture, machine learning, natural language processing, and process
            automation across editorial, production, and post-publication workflows. Designed for scalability,
            security, and agility, it enables seamless deployment of AI capabilities across the publishing value
            chain. aiKira doesn't just support workflows &mdash; it transforms them, enabling future-ready
            publishing at scale.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            {["Submit to Accept", "Accept to Publish", "Publish to Consumption"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="bg-white border border-black/10 rounded-lg px-5 py-4 text-sm font-medium text-[#10162B] shadow-sm">
                  {step}
                </div>
                {i < 2 && <ArrowRight className="w-4 h-4 text-brand-orange shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">Outcomes</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl font-bold text-brand-orange mb-2">{o.value}</p>
                <p className="text-[12px] text-[#4a4a5a]">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustryBanner
        heading="Pioneering Publishing at Scale: Domain-Driven AI for Institutional Reinvention"
        text="Straive combines deep publishing domain expertise with enterprise-grade AI to help institutions reinvent how research reaches the world."
        buttonLabel="Download Whitepaper"
      />

      <CaseStudyGrid heading="Featured Case Studies" items={CASE_STUDIES} columns={3} />

      <ContactForm />
    </>
  );
}
