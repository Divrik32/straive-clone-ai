import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1AIFinancial from "./slides/Slide1AIFinancial";
import Slide2InvestOps from "./slides/Slide2InvestOps";
import Slide3NextGenInvent from "./slides/Slide3NextGenInvent";
import Slide4MicrosoftAI from "./slides/Slide4MicrosoftAI";
import Slide5Enterprises from "./slides/Slide5Enterprises";

const SLIDES = [Slide1AIFinancial, Slide2InvestOps, Slide3NextGenInvent, Slide4MicrosoftAI, Slide5Enterprises];

const AUTOPLAY_MS = 7000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const ActiveSlide = SLIDES[index];

  return (
    <div className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
      <ActiveSlide />

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-brand-orange hover:opacity-70 transition-opacity"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-brand-orange hover:opacity-70 transition-opacity"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-sky-400 scale-110" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
