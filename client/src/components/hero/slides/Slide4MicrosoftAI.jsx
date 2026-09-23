import {
  ArrowRight,
  Brain,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "Generative AI",
    text: "Build intelligent applications that understand, create, and assist.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    text: "Connect AI with business workflows to reduce repetitive effort.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    text: "Design secure and governed AI experiences for enterprise use.",
  },
];

export default function Slide4MicrosoftAI() {
  return (
    <section
      className="relative w-full h-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #0a1030 0%, #131b4a 45%, #1c2a6b 75%, #253a8f 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_40%)]" />

      <Sparkles className="absolute top-10 left-8 w-20 h-20 text-white/5" />
      <Sparkles className="absolute bottom-10 right-8 w-28 h-28 text-white/5" />

      <div className="relative section-container h-full flex items-center py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center w-full">
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl text-white/70 mb-2">
              Work Science AI
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
              Build Smarter
              <br />
              With{" "}
              <span className="text-sky-300">
                Enterprise AI
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
              From Idea to Intelligent Solution
            </h2>

            <p className="text-sm md:text-base text-white/80 mb-8 max-w-xl">
              Work Science helps organizations adopt AI through practical,
              secure, and scalable solutions designed around real business
              processes.
            </p>

            <button className="btn-pill btn-orange text-xs px-6 py-3 uppercase inline-flex items-center gap-2">
              Explore AI Services

              <span className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          <div className="space-y-4">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <Icon className="w-6 h-6 text-sky-300 mb-3" />

                <h3 className="text-sm font-semibold mb-1">
                  {title}
                </h3>

                <p className="text-[11px] text-white/60 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}