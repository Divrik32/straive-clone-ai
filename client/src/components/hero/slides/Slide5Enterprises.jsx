import {
  ChevronRight,
  Bot,
  Database,
  Brain,
  Workflow,
} from "lucide-react";

export default function Slide5Enterprises() {
  return (
    <section className="relative w-full h-full overflow-hidden bg-[#f0f0f0]">
      <div className="relative section-container h-full grid md:grid-cols-2 items-center gap-8 py-10">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-brand-orange mb-4">
            Work Science
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-8">
            Build
            <br />
            Intelligent
            <br />
            Digital Solutions
            <br />
            With AI.
          </h1>

          <p className="text-sm text-[#555] max-w-md mb-8 leading-relaxed">
            We help businesses turn ideas into practical AI-powered products,
            automation workflows, and intelligent digital experiences.
          </p>

          <div className="flex items-center gap-3">
            <button className="btn-pill btn-orange text-sm px-7 py-3 uppercase">
              Start a Conversation
            </button>

            <span className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white" />
            </span>
          </div>
        </div>

        <div className="relative w-full h-full hidden md:block">
          <svg
            viewBox="0 0 500 400"
            className="w-full h-full"
            fill="none"
          >
            <defs>
              <linearGradient
                id="tube"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0" stopColor="#e5e5e0" />
                <stop offset="1" stopColor="#c8c8c0" />
              </linearGradient>
            </defs>

            <path
              d="M20 340 C120 340 120 260 220 260 C320 260 320 180 420 180"
              stroke="url(#tube)"
              strokeWidth="34"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M60 60 C160 60 160 140 260 140 C360 140 360 220 460 220"
              stroke="url(#tube)"
              strokeWidth="34"
              strokeLinecap="round"
              fill="none"
            />

            {[
              {
                cx: 90,
                cy: 320,
                r: 18,
                icon: Bot,
              },
              {
                cx: 200,
                cy: 270,
                r: 16,
                icon: Database,
              },
              {
                cx: 300,
                cy: 230,
                r: 17,
                icon: Brain,
              },
              {
                cx: 390,
                cy: 190,
                r: 15,
                icon: Workflow,
              },
            ].map((item, i) => (
              <circle
                key={i}
                cx={item.cx}
                cy={item.cy}
                r={item.r}
                fill={
                  i % 2 === 0
                    ? "#f97316"
                    : "#38bdf8"
                }
              />
            ))}
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-2xl shadow-xl px-6 py-5">
            <p className="text-[10px] uppercase tracking-widest text-[#888] mb-2">
              AI Solutions
            </p>

            <p className="text-xl font-bold text-[#10162B]">
              Think → Build → Scale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}