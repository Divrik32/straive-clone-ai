const THEMES = {
  gold: {
    bg: "linear-gradient(120deg, #2a2118 0%, #6b4a1f 35%, #a8791f 65%, #d9a83a 100%)",
    glow: "radial-gradient(circle_at_75%_30%,rgba(251,191,36,0.45),transparent_55%)",
  },
  green: {
    bg: "linear-gradient(120deg, #0d2b1f 0%, #1c4d34 40%, #2f7a4f 70%, #4caf6f 100%)",
    glow: "radial-gradient(circle_at_75%_30%,rgba(76,175,111,0.4),transparent_55%)",
  },
  navy: {
    bg: "linear-gradient(120deg, #060812 0%, #0A0E1F 40%, #10162B 70%, #1a2340 100%)",
    glow: "radial-gradient(circle_at_75%_30%,rgba(241,89,31,0.35),transparent_55%)",
  },
};

export default function AboutPageHero({
  theme = "gold",
  eyebrow,
  title,
  subtitle,
  cta,
}) {
  const t = THEMES[theme] || THEMES.gold;

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: t.bg }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: t.glow.replace(/_/g, " "),
        }}
      />

      <div className="absolute inset-0 opacity-20">
        <span
          className="absolute rounded-full bg-white/10"
          style={{
            width: 180,
            height: 180,
            top: "5%",
            right: "2%",
          }}
        />

        <span
          className="absolute rounded-full bg-white/10"
          style={{
            width: 250,
            height: 250,
            top: "23%",
            right: "14%",
          }}
        />

        <span
          className="absolute rounded-full bg-white/10"
          style={{
            width: 320,
            height: 320,
            top: "41%",
            right: "26%",
          }}
        />
      </div>

      <div className="relative section-container py-20 md:py-28">
        {eyebrow && (
          <span className="inline-block text-[11px] uppercase tracking-widest text-white/70 mb-3">
            {eyebrow}
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-tight mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm md:text-base text-white/75 max-w-xl mb-8">
            {subtitle}
          </p>
        )}

        {cta && (
          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">
            {cta}
          </button>
        )}
      </div>
    </section>
  );
}