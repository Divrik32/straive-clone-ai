import { Play } from "lucide-react";

export default function ServiceHero({ title, subtitle, tabs, activeTab }) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(120deg, #2a2118 0%, #4a3324 35%, #6b4a2f 65%, #8a5f38 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_75%_30%,rgba(251,191,36,0.35),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: 180 + i * 60,
              height: 180 + i * 60,
              top: `${10 + i * 15}%`,
              right: `${5 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative section-container py-14 md:py-20">
        <h1 className="text-2xl md:text-4xl font-semibold mb-2">{title}</h1>
        <p className="text-sm md:text-base text-white/70 mb-8">{subtitle}</p>

        <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs">
          {tabs.map((tab, i) => (
            <span key={tab} className="flex items-center gap-2">
              <span
                className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 ${
                  i === activeTab ? "bg-brand-orange text-white" : "text-white/70"
                }`}
              >
                {i === activeTab && <Play className="w-2.5 h-2.5 fill-white" />}
                {tab}
              </span>
              {i < tabs.length - 1 && <span className="text-white/30">&#9656;</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
