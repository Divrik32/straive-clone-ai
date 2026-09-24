import { ChevronRight } from "lucide-react";

const INSIGHTS = [
  {
    tag: "Technology",
    img: "/images/thought-leadership-banking-ai.png",
    title: "Building a Career in Data, AI and Technology",
    desc: "Explore the skills, mindset, and continuous learning that can help technology professionals grow in a changing digital environment.",
  },
  {
    tag: "Culture",
    img: "/images/thought-leadership-aim-research-award.webp",
    title: "Learning Through Collaboration",
    desc: "Discover how knowledge sharing and teamwork can create opportunities for people to learn from projects and from each other.",
  },
  {
    tag: "People",
    img: "/images/thought-leadership-clinical-data.webp",
    title: "People Behind the Technology",
    desc: "Technology is built by people. Explore the ideas, experiences, and perspectives that contribute to meaningful digital solutions.",
  },
];

export default function CareerInsights() {
  const safeInsights = Array.isArray(INSIGHTS) ? INSIGHTS : [];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-10">
          Career Insights
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {safeInsights.map(({ tag, img, title, desc }) => (
            <article
              key={title}
              className="border border-black/10 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative h-36">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover"
                />

                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wide bg-brand-orange text-white px-2 py-1 rounded">
                  {tag}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-[#10162B] mb-2 leading-snug">
                  {title}
                </h3>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-5 flex-1">
                  {desc}
                </p>

                <button className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex items-center gap-1 w-fit">
                  Read More
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}