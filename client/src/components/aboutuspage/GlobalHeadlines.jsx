const HEADLINES = [
  {
    img: "/images/accelerator-gramener.webp",
    title: "Straive Acquires Gramener to Enhance Data, Analytics, and AI Capabilities",
    text: "Straive, a leader in helping organizations operationalize the data-to-insights-to-knowledge-to-value chain, announced the acquisition of Gramener, an award-winning, design-led data science company.",
  },
  {
    img: "/images/logo-snowflake.png",
    title: "Straive Strengthens AI Operationalization with the Addition of SG Analytics",
    text: "Straive has always believed in transforming data into decisions. Today, we're thrilled to announce that SG Analytics, an analytics powerhouse, has joined our family.",
  },
  {
    img: "/images/menu-about-us.jpg",
    title: "Straive Appoints New Chief Executive Officer to Lead Next Phase of Growth",
    text: "Straive appoints an experienced technology and information leader as its new CEO, as the company continues to expand its data, analytics, and AI offerings.",
  },
];

export default function GlobalHeadlines() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-10">
          Making Global Headlines
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {HEADLINES.map(({ img, title, text }) => (
            <article key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
              <div className="h-36 bg-[#0A0E1F] flex items-center justify-center overflow-hidden">
                <img src={img} alt={title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-[#10162B] mb-2 leading-snug">{title}</h3>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-4 flex-1">{text}</p>
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
