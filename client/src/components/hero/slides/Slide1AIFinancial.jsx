import { Calendar, MapPin } from "lucide-react";

const LEADERS = [
  { name: "Ankor Rai", role: "CEO, Straive", img: "/images/ankor-rai.svg" },
  { name: "Jishnu Gupta", role: "CTO and Client Partner - Head, Europe & APAC", img: "/images/jishnu-gupta.svg" },
];

export default function Slide1AIFinancial() {
  return (
    <section
      className="relative w-full h-full overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(115deg, #150a3d 0%, #0a0e2e 28%, #0a1730 55%, #0a2f2c 78%, #0f3d33 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_10%_15%,rgba(99,60,255,0.35),transparent_45%)]" />
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_90%_10%,rgba(52,211,153,0.3),transparent_50%)]" />

      <svg className="absolute bottom-0 left-0 w-[420px] h-[260px] opacity-40" viewBox="0 0 420 260" fill="none">
        {[...Array(6)].map((_, i) => (
          <line key={i} x1={0} y1={260 - i * 30} x2={420 - i * 40} y2={260} stroke="#3b82f6" strokeWidth="1" />
        ))}
        {[...Array(10)].map((_, i) => (
          <circle key={i} cx={(i * 43) % 420} cy={260 - ((i * 61) % 240)} r="2" fill="#60a5fa" />
        ))}
      </svg>

      <svg className="absolute top-10 right-0 w-[380px] h-[260px] opacity-70" viewBox="0 0 380 260" fill="none">
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
            <h1 className="text-3xl md:text-[2.6rem] font-bold leading-tight mb-6">
              AI Is Changing the Equation
              <br />
              for <span className="text-emerald-400">Financial Services</span>
            </h1>

            <div className="inline-block border border-white/25 rounded-xl px-5 py-4 mb-8 bg-white/5 backdrop-blur-sm">
              <p className="text-sm md:text-base font-medium leading-snug">
                8th Annual Artificial Intelligence in
                <br />
                Financial Services Conference 2026
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-white/70 shrink-0" />
              <p className="text-base">
                September <span className="font-bold text-xl">8&ndash;9</span>
                <sup className="text-xs">th</sup>
                <br />
                <span className="font-bold text-xl">2026</span>
              </p>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-5 h-5 text-white/70 shrink-0" />
              <p className="text-sm text-white/80">155 Bishopsgate, London</p>
            </div>

            <button
              className="relative text-white text-xs font-semibold uppercase pl-5 pr-8 py-3 bg-gradient-to-r from-brand-orange to-brand-orange/20"
              style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
            >
              Meet Us at Booth #22
            </button>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-end">
              <span className="h-px w-10 bg-white/40" />
              <h3 className="text-lg font-medium">Our Leadership Team</h3>
              <span className="h-px w-10 bg-white/40" />
            </div>
            <div className="flex gap-5 justify-center md:justify-end">
              {LEADERS.map((leader) => (
                <div key={leader.name} className="relative w-[150px] md:w-[170px]">
                  <div className="w-full h-[190px] md:h-[210px] rounded-t-[85px] bg-gradient-to-b from-emerald-200 to-emerald-500/50 overflow-hidden">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#241a5c]/90 px-3 py-2">
                    <p className="text-white text-sm font-semibold leading-tight">{leader.name}</p>
                    <p className="text-white/60 text-[10px] leading-tight mt-0.5">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
