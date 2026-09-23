import { Play, FlaskConical, Factory, ClipboardCheck, LineChart } from "lucide-react";
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
      "We deliver tailored data strategies that align with your pharma goals, maximizing data potential across R&D, clinical trials, and market access. Our pharma expertise ensures you identify key data assets, creating robust frameworks for data governance and AI-driven insights to drive growth, innovation, and competitive advantage.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Aligned data strategy across R&D and commercial",
      "Governed, AI-ready data foundations",
    ],
    img: "/images/data-domain-strategy.webp",
  },

  {
    name: "Advanced & Generative AI",
    description:
      "GenAI-powered models accelerate drug discovery, regulatory document generation, and market intelligence with domain-tuned language models.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Faster discovery and document cycles",
      "Domain-specific, compliant AI outputs",
    ],
    img: "/images/advanced-generative-ai.webp",
  },

  {
    name: "Data Curation & Digitized Operations",
    description:
      "We curate, clean, and digitize pharma data across clinical, regulatory, and commercial operations to enable trustworthy, analytics-ready datasets.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Clean, audit-ready datasets",
      "Digitized end-to-end operations",
    ],
    img: "/images/data-curation-digitized-operations.webp",
  },

  {
    name: "Automation & Digital Ops",
    description:
      "Intelligent automation streamlines repetitive regulatory, quality, and commercial operations workflows, freeing teams for higher-value work.",
    bulletsTitle: "What It Delivers:",
    bullets: [
      "Reduced manual processing time",
      "Consistent, compliant workflows",
    ],
    img: "/images/automation-digital-ops.webp",
  },
];


const VALUE_CHAIN = [
  { icon: FlaskConical, title: "Research and Development", text: "Accelerate drug discovery, clinical trial design, and research data curation with AI-powered pipelines." },
  { icon: Factory, title: "Manufacturing & Supply Chain", text: "Digital twins, yield improvement strategies, and predictive supply chain management." },
  { icon: ClipboardCheck, title: "Regulatory Affairs Services", text: "AI-assisted solutions for regulatory affairs, document management, and labeling service enhancements." },
  { icon: LineChart, title: "Commercial and Market Strategy", text: "Tools for market adaptability, pricing automation, and personalized sales and marketing strategies." },
];

const CASE_STUDIES = [
  { title: "Accuracy by 95%: Modernizing Monograph for Global Pharmaceuticals", img: "/images/pharma-case-1.webp" },
  { title: "Cutting Costs by 6.5% While Shrinking Carbon Footprint: A Pharma Success in EMEA Distribution", img: "/images/pharma-case-2.webp" },
  { title: "Saving $5.2M Annually: Advanced NLP Revolutionized Drug Labeling for Regulatory Affairs", img: "/images/pharma-case-3.webp" },
];

const FAQS = [
  { q: "How does Straive's Pharma Analytics enhance decision-making in the pharmaceutical industry?", a: "Straive leverages advanced analytics, AI, and Machine Learning to transform complex pharmaceutical data into actionable insights. This empowers decision-makers with more timely, data-driven intelligence, leading to more informed strategic choices across the pharma value chain." },
  { q: "What benefits can pharma companies expect from adopting Straive's AI-driven solutions?", a: "Faster time-to-insight, reduced manual effort, improved regulatory compliance, and measurable cost savings across R&D, manufacturing, and commercial operations." },
  { q: "How does Straive help in reducing operational costs for pharmaceutical companies?", a: "Through automation of repetitive workflows, curated and digitized data operations, and AI-driven process optimization across the value chain." },
  { q: "Can Straive's solutions be scaled to adapt to changing business needs in the pharma industry?", a: "Yes, our modular data and AI architecture is designed to scale across new therapeutic areas, markets, and regulatory environments." },
  { q: "How does Straive ensure compliance with industry regulations through its pharma analytics solutions?", a: "We embed regulatory and quality requirements directly into our data governance and AI validation frameworks from the outset." },
];

export default function PharmaLifeSciences() {
  return (
    <>
      <IndustryHero
        title="Scale your Pharma Value Chain with GenAI-Powered Insights and Automation"
        buttons={["Case Studies", "Book a Demo"]}
      />

      <ServiceIntro
        heading="Bridge the GenAI Divide with End-to-End AI Operationalization"
        body="While AI has the power to redefine pharma - accelerating discovery, transforming operations, and raising the bar on impact - a full divide between early pilots and enterprise-scale impact lags the GenAI Divide: stalled initiatives, fragmented 'build vs. buy' projects, and ROI that never materializes. Straive bridges that divide. As a full-stack partner in AI Operationalization, we bring together advisory, design, deployment, and product engineering to embed GenAI across the pharma value chain - from research and clinical development to manufacturing, and commercial strategy. The outcome: accelerated innovation, measurable ROI, and durable transformation across the enterprise."
      />

      <section className="bg-white pb-14">
        <div className="section-container max-w-2xl mx-auto">
          <div className="relative h-56 rounded-lg overflow-hidden">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/QoUlq5Jino4" title="Manufacturing, Sales & Marketing, Distribution & Operations" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
          </div>
        </div>
      </section>

      <ToolkitTabs heading="Our Core Pharma Offerings" tabs={OFFERINGS} />

      <IconCardGrid heading="Key Solutions Across the Pharma Value Chain" items={VALUE_CHAIN} columns={4} bg="bg-[#f7f7f9]" />

      <CaseStudyGrid heading="Case Studies" items={CASE_STUDIES} columns={3} />

      <section className="bg-white pb-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-8">Frequently Asked Questions (FAQs)</h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <ContactForm />
    </>
  );
}
