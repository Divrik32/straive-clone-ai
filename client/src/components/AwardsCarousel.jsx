import { ChevronLeft, ChevronRight } from "lucide-react";

const AWARDS = [
  { img: "/images/award-rising-star.svg", title: "Rising Star Awards 2023 Europe", sub: "Rising Star (Europe) Product Challenger (US) IDP Services Study" },
  { img: "/images/award-edison.svg", title: "Edison Award", sub: "Bronze for an Innovative Geospatial Solution" },
  { img: "/images/award-20years.svg", title: "20 Years", sub: "Best Firms for Women in Tech" },
  { img: "/images/award-aiconic.svg", title: "AIconic Awards", sub: "2026 by Financial Express" },
];

export default function AwardsCarousel() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
          We Are Recognized for Impactful Results
        </h2>

        <div className="flex items-center gap-4">
          <button className="shrink-0 text-[#10162B]/40 hover:text-brand-orange">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
            {AWARDS.map(({ img, title, sub }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#10162B]">{title}</p>
                  <p className="text-[10px] text-[#7a7a8a] mt-1">{sub}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="shrink-0 text-[#10162B]/40 hover:text-brand-orange">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
