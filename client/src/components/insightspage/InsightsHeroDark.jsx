export default function InsightsHeroDark({ title, watermark }) {
  return (
    <section className="relative h-56 md:h-64 overflow-hidden bg-[#0A0E1F]">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1F] via-[#10162B] to-[#101B3D]" />

      {/* dot grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(241,89,31,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* glow accents */}
      <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />

      {/* faint watermark text */}
      {watermark && (
        <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-16 select-none pointer-events-none">
          <span className="text-6xl md:text-8xl font-bold text-white/5 tracking-widest uppercase whitespace-nowrap">
            {watermark}
          </span>
        </div>
      )}

      <div className="relative section-container h-full flex items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">{title}</h1>
      </div>
    </section>
  );
}
