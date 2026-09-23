import {
  Bot,
  Brain,
  Database,
  Workflow,
} from "lucide-react";

const SOLUTIONS = [
  {
    icon: Bot,
    title: "AI Assistants",
    text: "Intelligent digital assistants for teams and customers",
  },
  {
    icon: Brain,
    title: "Decision Intelligence",
    text: "AI-powered insights for faster business decisions",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    text: "Turn enterprise data into useful business knowledge",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Automate repetitive processes with intelligent systems",
  },
];

export default function Slide2InvestOps() {
  return (
    <section
      className="relative w-full h-full overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at 8% 85%, #7a2a6e 0%, #4a1f5c 22%, #1c1240 45%, #0a0e1f 70%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <polyline
          points="0,600 250,480 500,520 750,400 1000,440 1200,300"
          stroke="#f97316"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />

        <polyline
          points="100,600 350,500 600,540 850,420 1100,460"
          stroke="#38bdf8"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>

      <div className="relative section-container h-full flex flex-col justify-center py-10 gap-10">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-pink-300 mb-3">
            Work Science
          </p>

          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Business Operations,
            <br />
            Reimagined With AI.
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="h-px w-16 bg-white/30" />
            <span className="text-lg md:text-xl text-white/80">
              Intelligent solutions for the enterprise
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOLUTIONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm"
            >
              <Icon className="w-7 h-7 text-pink-300 mb-5" />

              <h3 className="text-sm font-semibold mb-2">
                {title}
              </h3>

              <p className="text-[11px] text-white/60 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        <button className="btn-pill btn-orange text-xs px-6 py-3 uppercase w-fit">
          Discover Our AI Services
        </button>
      </div>
    </section>
  );
}