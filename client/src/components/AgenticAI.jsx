import { } from "lucide-react";

const LEVERS = [
  {
    label: "AI Strategy",
    text: "Identify practical AI opportunities aligned with business goals",
  },
  {
    label: "Generative AI",
    text: "Create intelligent applications powered by modern foundation models",
  },
  {
    label: "AI Automation",
    text: "Automate repetitive workflows and accelerate everyday operations",
  },
  {
    label: "Enterprise Integration",
    text: "Connect AI solutions with existing business applications and data",
  },
  {
    label: "Responsible AI",
    text: "Build secure, governed, transparent, and business-ready AI systems",
  },
];

export default function AgenticAI() {
  return (
    <section className="bg-white py-16">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-4">
            AI That Moves Business Forward
          </h2>

          <p className="text-sm text-[#4a4a5a] leading-relaxed mb-6">
            Work Science helps organizations turn artificial intelligence into
            practical business solutions. From generative AI and intelligent
            automation to enterprise AI applications, we design solutions that
            fit real business workflows and deliver measurable operational value.
          </p>

          <h3 className="text-sm font-semibold text-[#10162B] mb-3">
            Our AI Approach
          </h3>

          <ul className="space-y-2 mb-8">
            {LEVERS.map((l) => (
              <li
                key={l.label}
                className="text-[13px] text-[#4a4a5a] flex gap-1.5"
              >
                <span className="text-brand-orange mt-0.5">&#10003;</span>

                <span>
                  <span className="font-semibold text-[#10162B]">
                    {l.label}
                  </span>{" "}
                  – {l.text}
                </span>
              </li>
            ))}
          </ul>

          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">
            Explore AI Solutions
          </button>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-[#0A0E1F] aspect-video shadow-xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Lqah1tGx8UM"
            title="AI Innovation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}