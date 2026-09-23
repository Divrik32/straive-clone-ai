import { Smile, PenLine, ChevronRight } from "lucide-react";

export default function GPTWBanner() {
  const icons = new Array(6).fill(0);
  return (
    <section
      className="relative overflow-hidden py-8"
      style={{ background: "linear-gradient(90deg, #4f8fa8 0%, #d9925a 100%)" }}
    >
      <div className="absolute inset-0 flex items-center justify-between px-6 opacity-25">
        {icons.map((_, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <Smile className="w-10 h-10 text-white" strokeWidth={1.5} />
            <PenLine className="w-8 h-8 text-white" strokeWidth={1.5} />
          </span>
        ))}
      </div>
      <div className="relative section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-semibold text-sm md:text-base text-center md:text-left">
          Straive India (including LearningMate India) is now Great Place To Work&reg; Certified&trade;
        </p>
        <button className="btn-pill btn-orange text-[11px] px-5 py-2.5 uppercase inline-flex items-center gap-1 shrink-0">
          Learn More <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}
