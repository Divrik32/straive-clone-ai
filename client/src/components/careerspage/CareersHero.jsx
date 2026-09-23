import { ChevronRight } from "lucide-react";

export default function CareersHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(120deg, #0a0e1f 0%, #171029 45%, #2a1a3d 75%, #1a2340 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_75%_25%,rgba(249,115,22,0.35),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative section-container py-20 md:py-28">
        <h1 className="text-3xl md:text-5xl font-semibold mb-3">Careers</h1>
        <p className="text-sm md:text-base text-white/70 mb-8">Come, be part of our team</p>
        <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase inline-flex items-center gap-1">
          Apply for a Job <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}
