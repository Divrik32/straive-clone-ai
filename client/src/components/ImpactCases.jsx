import { ChevronRight } from "lucide-react";

const CASES = [
  {
    bg: "bg-pink-100",
    img: "/images/case-onboarding-reduction.svg",
    title: "Reduced customer onboarding time by 20% for a Tier 1 bank.",
    text: "Our automation and AI models enabled one of the top 10 commercial banks in the US to achieve a 20%+ reduction in commercial customer onboarding time.",
  },
  {
    bg: "bg-amber-100",
    img: "/images/case-fraud-detection.svg",
    title: "AI fraud detection achieves 99.5% accuracy for this regional bank",
    text: "By ensuring a 99.5% accuracy in identifying fraudulent checks with AI models, we helped one of the regional banks in the US drive highly resilient operations.",
  },
  {
    bg: "bg-violet-100",
    img: "/images/case-receivables-collection.svg",
    title: "Successful collection of \u20ac20 million in overdue receivables for an open-access publisher",
    text: "A dedicated team of experts implemented to streamline payment collections with a comprehensive, data-driven strategy to clear over 25,000 invoices within a year.",
  },
];

export default function ImpactCases() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
          Driving Impact With Our Data Analytics
          <br />& AI Capabilities
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {CASES.map(({ bg, img, title, text }) => (
            <div key={title} className={`flex flex-col sm:flex-row rounded-lg overflow-hidden ${bg}`}>
              <div className="flex-1 p-6">
                <h3 className="text-base font-semibold text-[#10162B] mb-2 leading-snug">{title}</h3>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-5">{text}</p>
                <button className="btn-pill btn-dark text-[10px] px-4 py-2 uppercase inline-flex items-center gap-1">
                  Learn More <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="w-full sm:w-40 h-32 sm:h-auto overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
