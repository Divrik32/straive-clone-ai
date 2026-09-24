export default function IndustryHero({
  title,
  subtitle,
  buttons = ["Book a Demo"],
  gradient,
}) {
  const handleButtonClick = (button) => {
    if (button === "Explore Solutions") {
      document
        .getElementById("solutions-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (button === "Book a Demo") {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          gradient ||
          "linear-gradient(120deg, #0a0e1f 0%, #0f1f2e 50%, #0a2a2e 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.3),transparent_55%)]" />

      <div className="relative section-container py-16 md:py-20">
        <h1 className="text-2xl md:text-4xl font-semibold mb-3 max-w-xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm text-white/70 mb-8 max-w-lg">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          {buttons.map((b) => (
            <button
              key={b}
              onClick={() => handleButtonClick(b)}
              className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}