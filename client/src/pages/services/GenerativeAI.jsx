import {
  Search,
  FileText,
  Tags,
  Sparkles,
  PenLine,
  Layers,
  ScanSearch,
  Boxes,
  ShieldCheck,
  Layers3,
  BrainCircuit,
  Atom,
  Ship,
  GraduationCap,
  Landmark,
  Pill,
  Tv,
} from "lucide-react";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ContactForm from "../../components/ContactForm";

const CAPABILITIES = [
  {
    icon: Search,
    title: "Search",
    text: "Find relevant information across business documents, knowledge bases, and enterprise data.",
  },
  {
    icon: FileText,
    title: "Summarize",
    text: "Convert lengthy documents and business information into concise, useful summaries.",
  },
  {
    icon: Tags,
    title: "Classify",
    text: "Automatically categorize documents, requests, and business information using AI.",
  },
  {
    icon: Sparkles,
    title: "Generate",
    text: "Create business content, responses, documentation, and other AI-assisted outputs.",
  },
  {
    icon: PenLine,
    title: "Rewrite",
    text: "Improve, rephrase, and adapt content for different business requirements.",
  },
  {
    icon: Layers,
    title: "Cluster",
    text: "Group similar information to identify patterns, topics, and business trends.",
  },
  {
    icon: ScanSearch,
    title: "Extract",
    text: "Extract relevant information from documents and other unstructured data sources.",
  },
];

const TOOLKIT_TABS = [
  {
    name: "Document Intelligence",
    description:
      "Business documents contain valuable information, but extracting and understanding that information manually can be time-consuming. Work Science uses AI, natural language processing, and intelligent document processing to help organizations classify documents, extract information, and discover useful insights from unstructured content.",
    bulletsTitle: "What It Does:",
    bullets: [
      "AI-powered document processing for large volumes of business content.",
      "Entity, topic, and information extraction from unstructured documents.",
      "Intelligent classification and organization of business information.",
    ],
    img: "/images/toolkit-docexplore.jpg",
    alt: "AI document intelligence toolkit",
  },
  {
    name: "Conversational AI",
    description:
      "Turn enterprise knowledge and business information into interactive conversational experiences. Employees and customers can ask questions using natural language and receive relevant answers based on connected business information.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Natural-language questions over enterprise documents and knowledge bases.",
      "Context-aware responses grounded in available business information.",
      "Conversational interfaces for internal and customer-facing workflows.",
    ],
    img: "/images/toolkit-conversational-search.webp",
    alt: "Conversational AI toolkit",
  },
  {
    name: "AI Model Workspace",
    description:
      "Create a flexible environment for experimenting with generative AI models, prompts, workflows, and business use cases. Teams can evaluate different approaches before integrating AI capabilities into production applications.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Experiment with different AI models and generative AI workflows.",
      "Evaluate prompts and AI outputs against business requirements.",
      "Move validated AI use cases toward application integration.",
    ],
    img: "/images/toolkit-llm-foundry.jpg",
    alt: "Generative AI model workspace",
  },
  {
    name: "AI Application Builder",
    description:
      "Build practical AI-powered applications by combining reusable components, business data, AI models, and workflow automation. This helps teams turn AI concepts into useful business applications.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Create AI-powered workflows and business applications.",
      "Connect AI models with documents, data, and enterprise systems.",
      "Build reusable components for different AI use cases.",
    ],
    img: "/images/toolkit-app-maker.jpg",
    alt: "AI application builder toolkit",
  },
];

const WHY_FOUNDRY = [
  {
    icon: Boxes,
    title: "Reusable AI Components",
    text: "Use reusable components and workflows to accelerate the development of practical AI applications.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Focused",
    text: "Design AI solutions around security, access control, governance, and business requirements.",
  },
  {
    icon: Layers3,
    title: "Flexible Architecture",
    text: "Combine AI models, business data, applications, and workflows according to the use case.",
  },
  {
    icon: BrainCircuit,
    title: "Model Flexibility",
    text: "Select and integrate suitable AI models based on application requirements and business needs.",
  },
];

const INDUSTRIES = [
  {
    icon: Atom,
    title: "Science & Research",
  },
  {
    icon: Ship,
    title: "Logistics, Supply Chain & Manufacturing",
  },
  {
    icon: GraduationCap,
    title: "Education",
  },
  {
    icon: Landmark,
    title: "Banking & Financial Services",
  },
  {
    icon: Pill,
    title: "Healthcare & Life Sciences",
  },
  {
    icon: Tv,
    title: "Retail, Entertainment & Media",
  },
];

export default function GenerativeAI() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(120deg, #0a0e1f 0%, #141428 50%, #1a1a30 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.3),transparent_55%)]" />

        <div className="relative section-container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Generative AI Solutions Built for Real Business Use Cases
            </h1>

            <div className="flex flex-wrap gap-3 mt-6">
              <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">
                Explore AI Solutions
              </button>

              <button className="btn-pill bg-white/10 border border-white/30 text-white text-[11px] px-6 py-3 uppercase">
                Talk to an Expert
              </button>
            </div>
          </div>

          <p className="text-sm text-white/70 leading-relaxed">
            Generative AI can transform how organizations work with
            information, applications, and business processes. Work Science
            helps businesses move from AI experimentation to practical
            solutions through conversational AI, document intelligence,
            AI-powered applications, and intelligent workflows.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/genai-search-enhanced-capabilities.png"
            alt="Generative AI capabilities"
            className="h-64 w-full rounded-lg object-cover"
          />

          <div>
            <h2 className="text-xl font-semibold text-[#10162B] mb-6">
              AI-Powered Capabilities for Business
            </h2>

            <div className="space-y-4">
              {CAPABILITIES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />

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

      {/* Video */}
      <section className="bg-white pb-14">
        <div className="section-container max-w-2xl mx-auto">
          <div className="relative h-56 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/_pEEJu-2KKM"
              title="Generative AI Solutions"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <ToolkitTabs
        heading="Our Generative AI Solution Toolkit"
        tabs={TOOLKIT_TABS}
      />

      <IconCardGrid
        heading="Why Choose Work Science for Generative AI?"
        items={WHY_FOUNDRY}
        columns={4}
        bg="bg-[#f7f7f9]"
      />

      <IconCardGrid
        heading="Generative AI Across Industries"
        items={INDUSTRIES}
        columns={3}
      />

      <ContactForm />
    </>
  );
}