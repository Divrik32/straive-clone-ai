import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const TEAM = [
  { name: "Jishnu Gupta", role: "Client Partner, Head of Europe & APAC", img: "/images/jishnu-gupta.svg" },
  { name: "Simran Wadhwa", role: "Partner & Chief Customer Success Officer", img: "/images/simran-wadhwa.svg" },
  { name: "Amarava Roy", role: "Associate Vice President", img: "/images/amarava-roy.svg" },
  { name: "Soumitro Mukherjee", role: "Director, Sales Strategy & Solutions", img: "/images/soumitro-mukherjee.svg" },
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
      {/* light streak accents */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
        <polyline points="0,600 250,480 500,520 750,400 1000,440 1200,300" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.6" />
        <polyline points="100,600 350,500 600,540 850,420 1100,460" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>

      <div className="relative section-container h-full flex flex-col justify-center py-10 gap-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Investment Operations, Rewired for the AI Era.</h1>
          <div className="flex items-center gap-3 mt-3">
            <span className="h-px w-16 bg-white/30" />
            <span className="text-lg md:text-xl text-white/80">InvestOps Europe 2026</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Team org-chart style grid */}
          <div>
            <p className="text-center text-xs uppercase tracking-wide text-white/70 mb-2">Meet Our Team</p>
            <div className="h-3 border-t border-l border-r border-pink-300/40 w-2/3 mx-auto rounded-t-md" />
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-2">
              {TEAM.map((p) => (
                <div key={p.name} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden bg-indigo-300 border-t-4 border-pink-300/50 mb-2">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-semibold">{p.name}</p>
                  <p className="text-[10px] text-white/60 leading-tight max-w-[130px]">{p.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Event details */}
          <div className="flex flex-col gap-4 md:pl-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-white/60 mt-1 shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/60">September</p>
                <p className="text-xl font-bold text-violet-300">
                  16&ndash;17<sup className="text-xs">th</sup>
                </p>
                <p className="text-sm text-white/70">2026</p>
              </div>
              <div className="ml-6">
                <p className="text-sm text-white/80">
                  Meet Straive at <span className="font-bold text-white">Booth #43</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white/60 shrink-0" />
              <p className="text-sm text-white/70">Hilton London Metropole, London, UK</p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <button className="btn-pill btn-orange text-xs px-6 py-3 uppercase">Meet Us at InvestOps</button>
              <span className="w-9 h-9 rounded-full bg-brand-orange/70 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
