import {
  FlaskConical,
  Factory,
  ClipboardCheck,
  LineChart,
} from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import CaseStudyGrid from "../../components/servicepage/CaseStudyGrid";
import FAQAccordion from "../../components/servicepage/FAQAccordion";
import ContactForm from "../../components/ContactForm";

const OFFERINGS = [
  {
    name: "Data & Domain Strategy",
    description:
      "Build a structured data foundation across research, clinical, regulatory, manufacturing, and commercial processes to support analytics and AI initiatives.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Connected data strategy",
      "Governed and analytics-ready data",
    ],
    img: "/images/data-domain-strategy.webp",
  },
  {
    name: "Advanced & Generative AI",
    description:
      "Apply generative AI and intelligent automation to information-heavy pharmaceutical workflows such as research, documentation, knowledge access, and business operations.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "AI-assisted knowledge workflows",
      "Faster information processing",
    ],
    img: "/images/advanced-generative-ai.webp",
  },
  {
    name: "Data Curation & Digital Operations",
    description:
      "Clean, organize, structure, and digitize pharmaceutical data to create reliable information for analytics, reporting, and business workflows.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Structured and reliable datasets",
      "Digitized business processes",
    ],
    img: "/images/data-curation-digitized-operations.webp",
  },
  {
    name: "Automation & Digital Operations",
    description:
      "Automate repetitive regulatory, quality, commercial, and operational processes while keeping appropriate human review within important workflows.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Reduced repetitive processing",
      "Consistent operational workflows",
    ],
    img: "/images/automation-digital-ops.webp",
  },
];

const VALUE_CHAIN = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    text: "Use AI, analytics, and data processing to support research information management, scientific workflows, and knowledge discovery.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply Chain",
    text: "Apply analytics and automation to manufacturing information, supply planning, operational monitoring, and supply chain workflows.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Operations",
    text: "Use intelligent document processing and automation to organize regulatory information and support document-heavy workflows.",
  },
  {
    icon: LineChart,
    title: "Commercial & Market Intelligence",
    text: "Transform commercial and market data into useful insights for reporting, planning, customer understanding, and decision support.",
  },
];

const CASE_STUDIES = [
  {
    title: "Modernizing Pharmaceutical Data and Document Workflows",
    img: "/images/pharma-case-1.webp",
  },
  {
    title: "Using Analytics to Improve Pharmaceutical Supply Operations",
    img: "/images/pharma-case-2.webp",
  },
  {
    title: "AI-Assisted Document Intelligence for Life Sciences",
    img: "/images/pharma-case-3.webp",
  },
];

const FAQS = [
  {
    q: "How can AI and analytics support pharmaceutical companies?",
    a: "AI and analytics can help pharmaceutical organizations process information, automate repetitive workflows, organize research and regulatory data, and create better visibility across business operations.",
  },
  {
    q: "Where can generative AI be used in life sciences?",
    a: "Generative AI can support knowledge search, document summarization, content generation, information extraction, research assistance, and other information-heavy workflows.",
  },
  {
    q: "How does data curation help pharmaceutical organizations?",
    a: "Data curation helps clean, organize, standardize, and structure information so that it can be used more reliably for analytics, reporting, and AI applications.",
  },
  {
    q: "Can AI solutions be integrated with existing pharmaceutical systems?",
    a: "AI solutions can be designed to integrate with existing applications, databases, documents, APIs, and business workflows depending on the organization's technical environment and requirements.",
  },
  {
    q: "How can automation improve pharmaceutical operations?",
    a: "Automation can reduce repetitive manual processing, connect business systems, improve information flow, and allow teams to focus more on tasks that require human expertise and review.",
  },
];

export default function PharmaLifeSciences() {
  return (
    <>
      <IndustryHero
        title="AI & Data Solutions for Pharma and Life Sciences"
        subtitle="Use AI, analytics, automation, and intelligent data workflows across the life sciences value chain."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <ServiceIntro
        heading="Modernize Pharma and Life Sciences with AI"
        body="Pharmaceutical and life sciences organizations manage complex information across research, clinical, regulatory, manufacturing, and commercial operations. Work Science helps transform these information-heavy processes with data engineering, AI, analytics, intelligent automation, and digital workflows."
      />

      <section className="bg-white pb-14">
        <div className="section-container max-w-2xl mx-auto">
          <div className="relative h-56 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QoUlq5Jino4"
              title="AI and Data Solutions for Life Sciences"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="solutions-section" className="scroll-mt-24">
        <ToolkitTabs
          heading="Our Pharma & Life Sciences Solutions"
          tabs={OFFERINGS}
        />
      </section>

      <IconCardGrid
        heading="Solutions Across the Life Sciences Value Chain"
        items={VALUE_CHAIN}
        columns={4}
        bg="bg-[#f7f7f9]"
      />

      <CaseStudyGrid
        heading="AI & Data Use Cases in Life Sciences"
        items={CASE_STUDIES}
        columns={3}
      />

      <section className="bg-white pb-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}