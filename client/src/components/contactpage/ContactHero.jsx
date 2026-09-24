export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(120deg, #0a0e1f 0%, #10162B 45%, #16223f 75%, #1a2340 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_75%_25%,rgba(249,115,22,0.35),transparent_55%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative section-container py-20 md:py-28">
        <span className="text-[11px] uppercase tracking-widest text-white/60">
          Work Science
        </span>

        <h1 className="text-3xl md:text-5xl font-semibold mb-3 mt-3">
          Let&apos;s Connect
        </h1>

        <p className="text-sm md:text-base text-white/70 max-w-xl">
          Have a technology challenge, business requirement, or idea you want
          to explore? Talk to our team and let&apos;s find a practical way
          forward.
        </p>
      </div>
    </section>
  );
}