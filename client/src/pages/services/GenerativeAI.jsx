import { Search, FileText, Tags, Sparkles, PenLine, Layers, ScanSearch, Play, Boxes, ShieldCheck, Layers3, BrainCircuit, Atom, Ship, GraduationCap, Landmark, Pill, Tv } from "lucide-react";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ContactForm from "../../components/ContactForm";

const CAPABILITIES = [
  { icon: Search, title: "Search", text: "Quickly find relevant information from vast datasets." },
  { icon: FileText, title: "Summarize", text: "Condense lengthy content into clear, concise insights." },
  { icon: Tags, title: "Classify", text: "Categorize data accurately based on patterns and context." },
  { icon: Sparkles, title: "Generate", text: "Create high-quality text, code, or content on demand." },
  { icon: PenLine, title: "Rewrite", text: "Refine, rephrase, or enhance text for clarity and impact." },
  { icon: Layers, title: "Cluster", text: "Group similar data points to uncover meaningful patterns." },
  { icon: ScanSearch, title: "Extract", text: "Identify and pull key details from unstructured data." },
];

const TOOLKIT_TABS = [
  {
    name: "DocExplore",
    description:
      "Unstructured documents contain valuable insights, but extracting them is often slow and inefficient. DocExplore leverages NLP for intelligent classification, ML and LLMs to automate analysis, and Semantic Search & Graph Analytics for deep contextual insights. Our clients have reduced manual effort by up to 80% and enable faster, data-driven decisions. Whether analyzing contracts, ESG reports, or research papers, DocExplore uncovers hidden patterns and delivers actionable intelligence at scale.",
    bulletsTitle: "What It Does:",
    bullets: [
      "AI-driven document processing \u2014 Ingest, classify, and analyze large volumes of text.",
      "Topic & entity extraction \u2014 Identify key themes, people, and organizations.",
      "Contextual search & visualization \u2014 Go beyond keywords with AI-powered insights.",
    ],
    img: "/images/toolkit-docexplore.jpg",
    alt: "DocExplore toolkit preview",
  },
  {
    name: "Conversational Search/Chat",
    description:
      "Turn static knowledge bases into interactive, conversational experiences. Our conversational search layer lets users ask natural-language questions and get precise, cited answers instantly, reducing time-to-insight across support, research, and internal knowledge workflows.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Natural-language Q&A over enterprise documents and data.",
      "Source-grounded answers with citations for trust and auditability.",
      "Multi-turn context retention for complex research threads.",
    ],
    img: "/images/toolkit-conversational-search.webp",
    alt: "Conversational Search and Chat toolkit preview",
  },
  {
    name: "LLM Foundry",
    description:
      "LLM Foundry is Straive's model-agnostic playground for rapid prototyping, fine-tuning, and deploying large language models. Teams can experiment with multiple model providers, benchmark performance, and move from proof-of-concept to production in days, not months.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Rapid prototyping across OpenAI, Anthropic, Gemini, and custom models.",
      "Built-in evaluation and benchmarking tooling.",
      "One-click deployment into governed production environments.",
    ],
    img: "/images/toolkit-llm-foundry.jpg",
    alt: "LLM Foundry toolkit preview",
  },
  {
    name: "App Maker",
    description:
      "App Maker enables business teams to compose AI-powered applications from reusable, pre-built components, without writing code. From internal tools to customer-facing assistants, ideas move from concept to working app in a fraction of the usual development time.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Drag-and-drop composition of AI-powered workflows.",
      "Reusable component library across document, data, and chat use cases.",
      "Enterprise-grade security and access controls built in.",
    ],
    img: "/images/toolkit-app-maker.jpg",
    alt: "App Maker toolkit preview",
  },
];

const WHY_FOUNDRY = [
  { icon: Boxes, title: "Proprietary Accelerators", text: "Battle-tested Gen AI toolkits cut development time by 70%." },
  { icon: ShieldCheck, title: "Enterprise-Ready", text: "Scalable, secure, and compliant with industry standards (HIPAA, GDPR, SOC2)." },
  { icon: Layers3, title: "Tech Stack Flexibility", text: "Mix and match modules for document, data, or app use." },
  { icon: BrainCircuit, title: "Model Agnostic", text: "Leverage OpenAI, Anthropic, Gemini, or your custom models seamlessly." },
];

const INDUSTRIES = [
  { icon: Atom, title: "Science & Research" },
  { icon: Ship, title: "Logistics, Supply Chain & Manufacturing" },
  { icon: GraduationCap, title: "EdTech" },
  { icon: Landmark, title: "Financial & Information Services" },
  { icon: Pill, title: "Pharma and Life Sciences" },
  { icon: Tv, title: "Retail Tech, Entertainment and Media" },
];

export default function GenerativeAI() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(120deg, #0a0e1f 0%, #141428 50%, #1a1a30 100%)" }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.3),transparent_55%)]" />
        <div className="relative section-container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              AI Accelerator Toolkit That Doesn&rsquo;t Box You In
            </h1>
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">Explore Toolkits</button>
              <button className="btn-pill bg-white/10 border border-white/30 text-white text-[11px] px-6 py-3 uppercase">
                Talk to an Expert
              </button>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Enterprises are investing heavily in AI, but scaling from experimentation to adoption remains
            challenging. Straive bridges this gap with pre-built, modular GenAI toolkits that automate workflows
            and deploy AI at scale, without all the mess. With Model Agnostic architecture and enterprise-grade
            security, move faster, reduce AI development cycles by months, and drive measurable ROI.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/genai-search-enhanced-capabilities.png"
            alt="Search enhanced LLM-powered capabilities"
            className="h-64 w-full rounded-lg object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-[#10162B] mb-6">Search Enhanced LLM-Powered Capabilities</h2>
            <div className="space-y-4">
              {CAPABILITIES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
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

      {/* Video */}
      <section className="bg-white pb-14">
        <div className="section-container max-w-2xl mx-auto">
          <div className="relative h-56 rounded-lg overflow-hidden flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/_pEEJu-2KKM"
              poster="/images/genai-llm-foundry-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
            />
            <span className="absolute top-3 left-3 text-white/60 text-[11px]">LLM Foundry Playground</span>
          </div>
        </div>
      </section>

      <ToolkitTabs heading="Our Modular GenAI Toolkits" tabs={TOOLKIT_TABS} />

      <IconCardGrid heading="Why Straive AI Foundry?" items={WHY_FOUNDRY} columns={4} bg="bg-[#f7f7f9]" />

      <IconCardGrid heading="Advancing Outcomes Across Industries" items={INDUSTRIES} columns={3} />

      <ContactForm />
    </>
  );
}