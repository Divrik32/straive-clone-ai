import { Landmark, FlaskConical, Trophy } from "lucide-react";

const ARTICLES = [
  {
    tag: "Whitepaper",
    img: "/images/thought-leadership-banking-ai.png",
    alt: "How AI is transforming banking operations",
    title: "How AI is transforming banking operations?",
    excerpt:
      "This whitepaper explores how AI-driven intelligent automation is transforming banking operations, enabling context-aware decision-making, reducing costs, and improving efficiency across customer service, compliance, and risk management.",
  },
  {
    tag: "Blog",
    img: "/images/thought-leadership-clinical-data.webp",
    alt: "Improving clinical data quality with intelligent automation",
    title: "Improving Clinical Data Quality: From Manual Reporting to Intelligent Automation",
    excerpt:
      "Clinical research is rapidly moving toward a future in which data quality must be continuously evaluated rather than reviewed after problems arise.",
  },
  {
    tag: "Industry Recognition",
    img: "/images/thought-leadership-aim-research-award.webp",
    alt: "Straive recognized as a leader in AIM Research's PMe Quadrant",
    title: "Straive Recognized as a Leader in AIM Research's PMe Quadrant for Agentic AI Service Providers 2025",
    excerpt:
      "Straive has been recognized as a Leader in AIM Research's PMe Quadrant for Agentic AI Service Providers 2025.",
  },
];

export default function ThoughtLeadership() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-10">
          We Provide Industry-Leading
          <br />
          Thought Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map(({ tag, img, alt, title, excerpt }) => (
            <article key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-36">
                <img src={img} alt={alt || title} className="h-full w-full object-cover" />
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wide bg-brand-orange text-white px-2 py-1 rounded">
                  {tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-[#10162B] mb-2 leading-snug">{title}</h3>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-4 flex-1">{excerpt}</p>
                <a href="#" className="text-[11px] font-semibold text-brand-orange">
                  Dive Deeper &rsaquo;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}