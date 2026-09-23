export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(120deg, #0a0e1f 0%, #10162B 45%, #16223f 75%, #1a2340 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_75%_25%,rgba(249,115,22,0.35),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative section-container py-20 md:py-28">
        <h1 className="text-3xl md:text-5xl font-semibold mb-3">Contact Us</h1>
        <p className="text-sm md:text-base text-white/70">We want to hear from you</p>
      </div>
    </section>
  );
}
