import { ChevronRight } from "lucide-react";

export default function Slide5Enterprises() {
  return (
    <section className="relative w-full h-full overflow-hidden bg-[#f0f0f0]">
      <div className="relative section-container h-full grid md:grid-cols-2 items-center gap-8 py-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-8">
            We Operationalize
            <br />
            Data Analytics &amp;
            <br />
            AI For Global
            <br />
            Enterprises.
          </h1>
          <div className="flex items-center gap-3">
            <button className="btn-pill btn-orange text-sm px-7 py-3 uppercase">Book a Demo</button>
            <span className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white" />
            </span>
          </div>
        </div>

        {/* abstract 3D tube / marble track illustration */}
        <div className="relative w-full h-full hidden md:block">
          <svg viewBox="0 0 500 400" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="tube" x1="0" y1="0" x2="1" y2="1">
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
              { cx: 90, cy: 320, r: 12, fill: "#f97316" },
              { cx: 200, cy: 270, r: 10, fill: "#38bdf8" },
              { cx: 300, cy: 230, r: 11, fill: "#a78bfa" },
              { cx: 390, cy: 190, r: 9, fill: "#f97316" },
              { cx: 130, cy: 80, r: 10, fill: "#94a3b8" },
              { cx: 230, cy: 120, r: 12, fill: "#38bdf8" },
              { cx: 330, cy: 170, r: 9, fill: "#f97316" },
              { cx: 430, cy: 210, r: 11, fill: "#a78bfa" },
            ].map((c, i) => (
              <circle key={i} {...c} />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
