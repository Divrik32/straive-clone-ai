import { ChevronRight } from "lucide-react";

export default function CareersHero() {
  const handleApply = () => {
    document
      .getElementById("career-application")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(120deg, #0a0e1f 0%, #171029 45%, #2a1a3d 75%, #1a2340 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_75%_25%,rgba(249,115,22,0.35),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative section-container py-20 md:py-28">
        <span className="text-[11px] uppercase tracking-widest text-white/60">
          Careers at Work Science
        </span>

        <h1 className="text-3xl md:text-5xl font-semibold mb-3 mt-3">
          Build Your Future With Technology
        </h1>

        <p className="text-sm md:text-base text-white/70 mb-8 max-w-xl">
          Join a team of developers, engineers, analysts, designers, and
          technology professionals building practical solutions with data,
          cloud, AI, and modern software.
        </p>

        <button
          onClick={handleApply}
          className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase inline-flex items-center gap-1"
        >
          Explore Opportunities
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}