import { ChevronRight } from "lucide-react";

const INSIGHTS = [
  {
    tag: "Life",
    img: "/images/thought-leadership-banking-ai.png",
    title: "Behind the Scenes at Straive",
    desc: "A peek into the everyday moments, big wins, and small celebrations that make up life at Straive.",
  },
  {
    tag: "Culture",
    img: "/images/thought-leadership-aim-research-award.webp",
    title: "Growing Together, Every Step of the Way",
    desc: "How our teams collaborate across geographies to build careers, not just jobs.",
  },
  {
    tag: "People",
    img: "/images/thought-leadership-clinical-data.webp",
    title: "Meet the People Behind Straive",
    desc: "Stories from the people driving Straive's mission of making data and AI actionable.",
  },
];

export default function CareerInsights() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-10">Insights</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {INSIGHTS.map(({ tag, img, title, desc }) => (
            <article key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-36">
                <img src={img} alt={title} className="h-full w-full object-cover" />
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wide bg-brand-orange text-white px-2 py-1 rounded">
                  {tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-[#10162B] mb-2 leading-snug">{title}</h3>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-5 flex-1">{desc}</p>
                <button className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex items-center gap-1 w-fit">
                  Read More <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
