import { Play } from "lucide-react";

const LEVERS = [
  { label: "LLM Foundry", text: "80% faster cycles, 7-day PoC creation" },
  { label: "Enterprise Security", text: "Governed, compliant, bias-free AI" },
  { label: "Seamless Integration", text: "Future-proof across ERP, CRM & cloud" },
  { label: "Multi-Model Agents", text: "Text, audio, video, image & documents" },
  { label: "Reusable Accelerators", text: "Industry agents & solution libraries" },
];

export default function AgenticAI() {
  return (
    <section className="bg-white py-16">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-4">
            Agentic AI for Scalable Intelligence
          </h2>
          <p className="text-sm text-[#4a4a5a] leading-relaxed mb-6">
            Straive&rsquo;s Agentic AI turns complex data into autonomous, intelligent
            actions&mdash;driving measurable ROI across industries. With 80+ enterprise
            engagements, 5K+ AI experts, and 8K+ domain specialists, we combine
            scale with deep specialization to operationalize AI at speed.
            Recognized as{" "}
            <span className="text-brand-orange font-medium">LLM Platform of the Year</span>,
            Straive&rsquo;s agents don&rsquo;t just assist; they operationalize AI into
            autonomous, governed workflows.
          </p>

          <h3 className="text-sm font-semibold text-[#10162B] mb-3">Our Core Levers</h3>
          <ul className="space-y-2 mb-8">
            {LEVERS.map((l) => (
              <li key={l.label} className="text-[13px] text-[#4a4a5a] flex gap-1.5">
                <span className="text-brand-orange mt-0.5">&#10003;</span>
                <span>
                  <span className="font-semibold text-[#10162B]">{l.label}</span> &ndash; {l.text}
                </span>
              </li>
            ))}
          </ul>

          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">Learn More</button>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-[#0A0E1F] aspect-video shadow-xl">
          <img
            src="/images/video-llm-foundry-playground.svg"
            alt="LLM Foundry Playground"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              aria-label="Play video"
              className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </button>
          </div>
          <span className="absolute top-3 left-3 text-white/70 text-[11px]">LLM Foundry Playground</span>
        </div>
      </div>
    </section>
  );
}
