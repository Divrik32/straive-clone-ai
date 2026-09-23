import { Brain, Database, Zap } from "lucide-react";

export default function Slide1AIFinancial() {
  return (
    <section
      className="relative w-full h-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(115deg, #150a3d 0%, #0a0e2e 30%, #0a1730 58%, #0a2f2c 80%, #0f3d33 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_10%_15%,rgba(99,60,255,0.35),transparent_45%)]" />
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_90%_10%,rgba(52,211,153,0.3),transparent_50%)]" />

      <svg
        className="absolute bottom-0 left-0 w-[420px] h-[260px] opacity-40"
        viewBox="0 0 420 260"
        fill="none"
      >
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={0}
            y1={260 - i * 30}
            x2={420 - i * 40}
            y2={260}
            stroke="#3b82f6"
            strokeWidth="1"
          />
        ))}

        {[...Array(10)].map((_, i) => (
          <circle
            key={i}
            cx={(i * 43) % 420}
            cy={260 - ((i * 61) % 240)}
            r="2"
            fill="#60a5fa"
          />
        ))}
      </svg>

      <svg
        className="absolute top-10 right-0 w-[380px] h-[260px] opacity-70"
        viewBox="0 0 380 260"
        fill="none"
      >
        <polyline
          points="0,220 40,190 80,205 120,150 160,165 200,110 240,120 280,60 320,75 380,10"
          stroke="#34d399"
          strokeWidth="2"
          fill="none"
        />

        {[30, 70, 110, 150, 190, 230, 270, 310, 350].map((x, i) => (
          <rect
            key={x}
            x={x}
            y={200 - i * 18}
            width="6"
            height={18 + (i % 3) * 8}
            fill={i % 2 === 0 ? "#34d399" : "#f97316"}
            opacity="0.8"
          />
        ))}
      </svg>

      <div className="relative section-container h-full flex items-center py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300 mb-4">
              Work Science AI
            </p>

            <h1 className="text-3xl md:text-[2.6rem] font-bold leading-tight mb-6">
              Intelligent AI Solutions
              <br />
              for{" "}
              <span className="text-emerald-400">
                Modern Businesses
              </span>
            </h1>

            <div className="inline-block border border-white/25 rounded-xl px-5 py-4 mb-8 bg-white/5 backdrop-blur-sm">
              <p className="text-sm md:text-base font-medium leading-snug">
                From intelligent automation
                <br />
                to enterprise AI applications
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-300" />
                <span className="text-sm text-white/80">
                  Generative AI
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-sky-300" />
                <span className="text-sm text-white/80">
                  AI Data Solutions
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-300" />
                <span className="text-sm text-white/80">
                  Automation
                </span>
              </div>
            </div>

            <button
              className="relative text-white text-xs font-semibold uppercase pl-5 pr-8 py-3 bg-gradient-to-r from-brand-orange to-brand-orange/20"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
              }}
            >
              Explore AI Solutions
            </button>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="relative w-[390px] h-[330px]">
              <div className="absolute top-8 right-10 w-44 h-44 rounded-full border border-emerald-300/30 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-emerald-400/10 border border-emerald-300/30 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-emerald-300" />
                </div>
              </div>

              <div className="absolute bottom-6 left-5 bg-white/5 border border-white/10 rounded-xl px-5 py-4 backdrop-blur-sm">
                <p className="text-xs text-white/50 uppercase">
                  AI Focus
                </p>
                <p className="text-lg font-semibold">
                  Build. Automate. Scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}