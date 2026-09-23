import { Zap, ArrowRight } from "lucide-react";

export default function Slide3NextGenInvent() {
  const dots = [
    { x: "6%", y: "70%", color: "#f97316", size: 10 },
    { x: "9%", y: "76%", color: "#fca5a5", size: 16 },
    { x: "88%", y: "78%", color: "#f97316", size: 22 },
    { x: "65%", y: "12%", color: "#38bdf8", size: 10 },
    { x: "34%", y: "88%", color: "#94a3b8", size: 8 },
  ];

  return (
    <section className="relative w-full h-full overflow-hidden bg-white">
      {/* faint low-poly network pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 600" fill="none">
        {[...Array(24)].map((_, i) => {
          const x1 = (i * 137) % 1200;
          const y1 = (i * 91) % 600;
          const x2 = ((i + 3) * 97) % 1200;
          const y2 = ((i + 5) * 63) % 600;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c9ccd6" strokeWidth="1" />;
        })}
        {[...Array(24)].map((_, i) => (
          <circle key={i} cx={(i * 137) % 1200} cy={(i * 91) % 600} r="2.5" fill="#c9ccd6" />
        ))}
      </svg>

      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{ left: d.x, top: d.y, width: d.size, height: d.size, backgroundColor: d.color, opacity: 0.5 }}
        />
      ))}

      <div className="relative section-container h-full flex flex-col items-center justify-center text-center gap-6">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-2xl font-bold text-[#1a1a2e]">
            <Zap className="w-7 h-7 text-brand-orange fill-brand-orange" strokeWidth={2.5} />
            Str<span className="text-brand-orange">ai</span>ve
          </span>
          <span className="text-2xl text-[#2a2a3a]">+</span>
          <span className="text-xl font-extrabold text-[#0a1a3a] tracking-tight">
            NextGen
            <span className="block text-[10px] bg-[#0a1a3a] text-cyan-300 tracking-[0.3em] px-1 -mt-1">INVENT</span>
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1a3a]">NextGen Invent</h1>

        <div className="flex items-center gap-4">
          <span className="h-px w-16 md:w-28 bg-brand-orange" />
          <span className="text-lg md:text-xl text-[#5a5a6a]">is now part of</span>
          <span className="h-px w-16 md:w-28 bg-brand-orange" />
        </div>

        <p className="text-3xl md:text-5xl font-extrabold text-brand-orange">Straive</p>

        <button className="btn-pill btn-orange text-sm px-6 py-3 mt-2 inline-flex items-center gap-2">
          Read More
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </section>
  );
}
