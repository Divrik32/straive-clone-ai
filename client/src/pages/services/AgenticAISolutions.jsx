import { useState } from "react";
import {
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

const TOOLKIT_TABS = [
  {
    name: "Document AI Agents",
    description:
      "AI agents can work with large volumes of business documents to classify information, extract relevant details, summarize content, and support document-heavy workflows. Work Science combines AI models with intelligent processing to turn unstructured information into useful business actions.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Process and classify large volumes of business documents.",
      "Extract entities, topics, and relevant business information.",
      "Generate summaries and insights from unstructured content.",
    ],
    img: "/images/toolkit-docexplore.webp",
    alt: "Document AI agents toolkit",
  },
  {
    name: "Conversational AI Agents",
    description:
      "Conversational AI agents allow users to interact with business information and applications using natural language. They can answer questions, perform supported tasks, and hand over complex requests when human involvement is required.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Natural-language conversations with business users.",
      "Context-aware responses across multi-turn conversations.",
      "Human handoff for tasks that require review or approval.",
    ],
    img: "/images/toolkit-conversational-search.webp",
    alt: "Conversational AI agents toolkit",
  },
  {
    name: "AI Agent Workspace",
    description:
      "Create, test, and refine AI agent workflows around specific business requirements. Teams can experiment with agent instructions, tools, workflows, and model configurations before integrating them into production applications.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Design AI agent workflows for specific business processes.",
      "Test agent behavior and refine instructions and workflows.",
      "Connect agents with applications, data, and business tools.",
    ],
    img: "/images/toolkit-llm-foundry.jpg",
    alt: "AI agent workspace",
  },
  {
    name: "AI Workflow Builder",
    description:
      "Build intelligent workflows by combining AI agents, business rules, data sources, and software integrations. This enables organizations to automate multi-step processes while keeping human oversight where it is needed.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Combine AI agents with business workflows and applications.",
      "Automate multi-step operational processes.",
      "Support human-in-the-loop approvals and decision points.",
    ],
    img: "/images/toolkit-app-maker.jpg",
    alt: "AI workflow builder",
  },
];

const USE_CASE_TABS = [
  {
    name: "Financial Services",
    description:
      "Agentic AI can support financial workflows by automating information processing, customer interactions, document handling, and operational tasks while keeping appropriate human review in place.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Automate repetitive financial operations.",
      "Support customer and employee service workflows.",
      "Process documents and information for operational teams.",
    ],
    img: "/images/usecase-financial-services.webp",
    alt: "Financial services AI agent use case",
  },
  {
    name: "Logistics & Supply Chain",
    description:
      "AI agents can coordinate information across logistics workflows, helping teams process vendor information, monitor operational events, and manage routine exceptions.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Process vendor and operational information.",
      "Support shipment and workflow monitoring.",
      "Assist teams with routine exception-handling tasks.",
    ],
    img: "/images/usecase-logistics-supply-chain.png",
    alt: "Logistics and supply chain AI agent use case",
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "AI agents can assist information-heavy healthcare and life sciences workflows by organizing documents, extracting relevant information, and supporting research and operational processes.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Extract information from complex documents.",
      "Support research and knowledge workflows.",
      "Assist teams with structured information processing.",
    ],
    img: "/images/usecase-pharma-life-sciences.jpg",
    alt: "Healthcare and life sciences AI agent use case",
  },
  {
    name: "Science & Research",
    description:
      "Research teams can use AI agents to organize literature, summarize information, identify relevant sources, and support data-intensive research workflows.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Assist with literature search and summarization.",
      "Organize and classify research information.",
      "Support faster access to relevant knowledge.",
    ],
    img: "/images/usecase-science-research.jpg",
    alt: "Science and research AI agent use case",
  },
  {
    name: "Education",
    description:
      "AI agents can support educational platforms and teams through conversational assistance, information retrieval, content processing, and administrative workflow automation.",
    bulletsTitle: "What It Does:",
    bullets: [
      "Provide AI-assisted learner and staff support.",
      "Process and organize educational content.",
      "Automate routine support and administrative workflows.",
    ],
    img: "/images/usecase-edtech.png",
    alt: "Education AI agent use case",
  },
];

const BUILDING_BLOCKS = [
  {
    icon: Target,
    title: "AI Strategy",
    text: "Identify practical business processes where AI agents and automation can create useful operational value.",
  },
  {
    icon: BoxesIcon,
    title: "Platform Design & Engineering",
    text: "Design the architecture required to connect AI models, applications, data, tools, and business workflows.",
  },
  {
    icon: Bot,
    title: "Agent Development",
    text: "Create specialized AI agents designed around specific business tasks, workflows, and user interactions.",
  },
  {
    icon: UserCog,
    title: "Human-in-the-Loop",
    text: "Keep people involved in important decisions, approvals, exceptions, and workflows that require human judgment.",
  },
  {
    icon: Lock,
    title: "Governance & Safeguards",
    text: "Build appropriate access controls, monitoring, validation, and governance into AI-enabled workflows.",
  },
  {
    icon: RefreshCw,
    title: "Integration & Modernization",
    text: "Connect AI agents with existing applications and modernize workflows where intelligent automation can improve operations.",
  },
];

const CLIENT_JOURNEYS = [
  {
    icon: Headset,
    title: "AI Customer Support",
    bullets: [
      "Assist support teams with repetitive customer requests.",
      "Provide conversational access to relevant business information.",
      "Route complex requests to the appropriate human team.",
    ],
  },
  {
    icon: Stethoscope,
    title: "Document Processing",
    bullets: [
      "Extract relevant information from business documents.",
      "Classify and organize incoming information automatically.",
      "Support teams with faster access to structured data.",
    ],
  },
  {
    icon: Bot,
    title: "Research Assistant",
    bullets: [
      "Help teams search and summarize large information sources.",
      "Organize relevant research material.",
      "Support knowledge-intensive business workflows.",
    ],
  },
  {
    icon: Truck,
    title: "Vendor Intelligence",
    bullets: [
      "Process information from different vendor documents.",
      "Organize vendor-related data for operational teams.",
      "Support faster analysis and information retrieval.",
    ],
  },
  {
    icon: Ticket,
    title: "IT Service Desk Assistant",
    bullets: [
      "Assist with common IT support requests.",
      "Classify and route incoming service tickets.",
      "Help support teams resolve repetitive issues efficiently.",
    ],
  },
];

export default function AgenticAISolutions() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(120deg, #0a0e1f 0%, #191033 50%, #241040 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.3),transparent_55%)]" />

        <div className="relative section-container py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-3">
              Build Intelligent AI Agents for Real Business Workflows
            </h1>

            <p className="text-sm text-white/70 leading-relaxed">
              Design AI agents that can understand information, use business
              tools, automate tasks, and work alongside people across
              enterprise workflows.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-6 text-[#1a1a1a] space-y-3"
          >
            <p className="text-sm font-semibold mb-1">
              Interested in Agentic AI solutions?
            </p>

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

            <button
              type="submit"
              className="btn-pill btn-orange text-[11px] px-6 py-2.5 uppercase"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Agentic AI overview */}
      <section className="bg-white py-14">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">
              From AI Assistants to Intelligent Autonomous Workflows
            </h2>

            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              Agentic AI can go beyond generating responses by helping
              organizations execute multi-step tasks. Work Science designs
              agent-based solutions that connect AI models with business
              information, applications, tools, and human workflows.
            </p>
          </div>
        </div>
      </section>

      <ToolkitTabs
        heading="Our Agentic AI Solution Toolkit"
        tabs={TOOLKIT_TABS}
      />

      <ToolkitTabs
        heading="Agentic AI Use Cases Across Industries"
        tabs={USE_CASE_TABS}
      />

      {/* Building blocks */}
      <section className="bg-[#f7f7f9] pb-14 pt-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            Building Blocks of Agentic AI Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUILDING_BLOCKS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white border border-black/10 rounded-lg p-5"
              >
                <Icon className="w-7 h-7 text-brand-orange mb-3" />

                <p className="text-sm font-semibold text-[#10162B] mb-1">
                  {title}
                </p>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            Agentic AI in Action
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_JOURNEYS.map(({ icon: Icon, title, bullets }) => (
              <div
                key={title}
                className="border border-black/10 rounded-lg p-5"
              >
                <Icon className="w-7 h-7 text-brand-orange mb-3" />

                <p className="text-sm font-semibold text-[#10162B] mb-2">
                  {title}
                </p>

                <ul className="space-y-1.5">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[11px] text-[#4a4a5a] flex gap-1.5"
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

      <HyperscalerPartners />

      {/* CTA */}
      <section className="bg-white pb-16">
        <div className="section-container">
          <div className="bg-brand-orange rounded-2xl text-center py-14 px-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 max-w-xl mx-auto">
              Build AI Agents Around Your Business Workflows
            </h2>

            <p className="text-sm text-white/90 max-w-2xl mx-auto mb-6">
              Explore how AI agents can support customer service, document
              processing, research, IT operations, and other knowledge-heavy
              business processes.
            </p>

            <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </section>
    </>
  );
}