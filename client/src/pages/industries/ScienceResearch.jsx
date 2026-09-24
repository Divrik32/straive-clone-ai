import {
  ShieldCheck,
  Rocket,
  Users,
  Sparkles,
  TrendingDown,
  LineChart,
  FileCheck2,
  BookOpen,
  Send,
  ArrowRight,
} from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import ContactForm from "../../components/ContactForm";

const SOLUTIONS = [
  {
    icon: ShieldCheck,
    title: "Research Integrity",
    text: "Use intelligent content processing and AI-assisted workflows to support research quality, content validation, and information management.",
  },
  {
    icon: Rocket,
    title: "Faster Publishing Workflows",
    text: "Automate repetitive editorial and publishing processes to help teams manage information and content more efficiently.",
  },
  {
    icon: Users,
    title: "Author & User Experience",
    text: "Create digital workflows and AI-assisted experiences that make information access, content submission, and support more efficient.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Publishing",
    text: "Use generative AI and intelligent automation to support content creation, transformation, discovery, and publishing workflows.",
  },
  {
    icon: TrendingDown,
    title: "Operational Efficiency",
    text: "Identify repetitive processes and apply automation, analytics, and AI to improve operational workflows.",
  },
  {
    icon: LineChart,
    title: "Analytics & Intelligence",
    text: "Transform publishing and research data into insights that support operational monitoring and informed decision-making.",
  },
];

const VALUE_CHAIN = [
  {
    title: "Submission to Acceptance",
    icon: FileCheck2,
    bullets: [
      "AI-assisted editorial workflows",
      "Content classification and validation",
      "Intelligent submission routing",
    ],
  },
  {
    title: "Acceptance to Publication",
    icon: BookOpen,
    bullets: [
      "Content transformation and processing",
      "Automated quality checks",
      "Digital publishing workflows",
    ],
  },
  {
    title: "Publication to Consumption",
    icon: Send,
    bullets: [
      "Metadata enrichment",
      "Content discovery and search",
      "Usage analytics and reporting",
    ],
  },
];

const ENABLERS = [
  {
    name: "Sales & Marketing Operations",
    description:
      "Use data, analytics, AI, and automation to support audience engagement, campaign workflows, and marketing operations.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Audience segmentation and analytics",
      "Marketing workflow automation",
      "AI-assisted content creation",
    ],
    img: "/images/sales-marketing-operation.webp",
  },
  {
    name: "Open Access Enablement",
    description:
      "Support open access workflows through structured information management, compliance tracking, and process automation.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Open access workflow management",
      "Compliance information tracking",
      "Structured publishing processes",
    ],
    img: "/images/open-access-enablement.webp",
  },
  {
    name: "Order & Financial Operations",
    description:
      "Automate information-heavy order, billing, subscription, and financial reconciliation processes.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Automated financial workflows",
      "Order and subscription processing",
    ],
    img: "/images/order-management-financial-operations.webp",
  },
  {
    name: "Innovation & AI",
    description:
      "Explore practical applications of emerging AI, automation, analytics, and digital technologies for publishing workflows.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "AI use-case exploration",
      "Rapid workflow prototyping",
    ],
    img: "/images/innovation-cell.webp",
  },
  {
    name: "Technology & Platform Operations",
    description:
      "Support reliable, secure, and scalable technology operations for digital publishing platforms and business applications.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Platform monitoring and optimization",
      "Scalable technology operations",
    ],
    img: "/images/technology-platform-ops.webp",
  },
];

const CASE_STUDIES = [
  {
    title: "AI-Assisted Content and Publishing Workflows",
    img: "/images/sr-case-1.webp",
  },
  {
    title: "Intelligent Automation for Publishing Operations",
    img: "/images/sr-case-2.webp",
  },
  {
    title: "Using AI to Support Research Information Management",
    img: "/images/sr-case-3.webp",
  },
];

export default function ScienceResearch() {
  return (
    <>
      <IndustryHero
        title="AI & Data Solutions for Science and Research"
        subtitle="Modernize research and publishing workflows with AI, analytics, automation, and intelligent information management."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <ServiceIntro
        heading="Transforming Science & Research Workflows with AI"
        body="Research and publishing organizations manage large volumes of complex content, structured data, documents, and metadata. Work Science helps modernize these workflows through AI, automation, analytics, and digital engineering across the research and publishing lifecycle."
      />

      <section id="solutions-section" className="scroll-mt-24">
        <IconCardGrid
          heading="Solutions for Modern Research & Publishing"
          items={SOLUTIONS}
          columns={3}
          bg="bg-[#f7f7f9]"
        />
      </section>

      <section className="bg-white pb-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-3">
            Capabilities Across the Publishing Value Chain
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {VALUE_CHAIN.map(({ title, icon: Icon, bullets }) => (
              <div
                key={title}
                className="border border-black/10 rounded-lg p-5"
              >
                <Icon className="w-7 h-7 text-brand-orange mb-3" />

                <h3 className="text-sm font-semibold text-[#10162B] mb-3">
                  {title}
                </h3>

                <ul className="space-y-2">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[12px] text-[#4a4a5a] flex gap-1.5"
                    >
                      <span className="text-brand-orange">&#8226;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToolkitTabs
        heading="Strategic Enablers for Research & Publishing"
        tabs={ENABLERS}
      />

      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-4">
            Intelligent Publishing Workflows
          </h2>

          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-2xl mx-auto text-center mb-10">
            Connect AI, automation, data, and digital applications across the
            publishing lifecycle to create more connected and efficient
            workflows.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            {[
              "Submit to Accept",
              "Accept to Publish",
              "Publish to Consumption",
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="bg-white border border-black/10 rounded-lg px-5 py-4 text-sm font-medium text-[#10162B] shadow-sm">
                  {step}
                </div>

                {index < 2 && (
                  <ArrowRight className="w-4 h-4 text-brand-orange shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyGrid
        heading="AI & Data Use Cases for Research and Publishing"
        items={CASE_STUDIES}
        columns={3}
      />

      <section className="bg-brand-orange text-white py-12">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Modernize Your Research & Publishing Operations
          </h2>

          <p className="text-sm text-white/90 max-w-2xl mx-auto">
            Bring AI, data, automation, and digital engineering together to
            build smarter research and publishing workflows.
          </p>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}