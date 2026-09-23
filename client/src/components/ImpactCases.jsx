import { ChevronRight } from "lucide-react";

const USE_CASES = [
  {
    bg: "bg-blue-100",
    img: "/images/case-onboarding-reduction.svg",
    title: "Intelligent Customer Support",
    text: "AI assistants can help organizations automate routine customer interactions, surface relevant information, and provide faster support across digital channels.",
  },
  {
    bg: "bg-amber-100",
    img: "/images/case-fraud-detection.svg",
    title: "AI-Powered Risk Detection",
    text: "Machine learning and intelligent analytics can help businesses identify unusual patterns, support risk teams, and improve monitoring workflows.",
  },
  {
    bg: "bg-violet-100",
    img: "/images/case-receivables-collection.svg",
    title: "Intelligent Document Processing",
    text: "AI-powered document solutions can extract information, classify business documents, and reduce manual effort across operational processes.",
  },
];

export default function ImpactCases() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
          Practical AI Use Cases
          <br />
          For Modern Businesses
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {USE_CASES.map(({ bg, img, title, text }) => (
            <div
              key={title}
              className={`flex flex-col sm:flex-row rounded-lg overflow-hidden ${bg}`}
            >
              <div className="flex-1 p-6">
                <h3 className="text-base font-semibold text-[#10162B] mb-2 leading-snug">
                  {title}
                </h3>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-5">
                  {text}
                </p>

                <button className="btn-pill btn-dark text-[10px] px-4 py-2 uppercase inline-flex items-center gap-1">
                  Explore
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              <div className="w-full sm:w-40 h-32 sm:h-auto overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}