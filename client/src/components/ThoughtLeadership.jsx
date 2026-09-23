const ARTICLES = [
  {
    tag: "AI Insights",
    img: "/images/thought-leadership-banking-ai.png",
    alt: "AI in business operations",
    title: "How AI Is Transforming Business Operations",
    excerpt:
      "Explore how intelligent automation and AI-powered applications can improve productivity, streamline workflows, and support better business decisions.",
  },
  {
    tag: "Generative AI",
    img: "/images/thought-leadership-clinical-data.webp",
    alt: "Generative AI for enterprises",
    title: "Building Practical Generative AI Solutions for Enterprises",
    excerpt:
      "Organizations are moving beyond AI experimentation and exploring secure, scalable ways to bring generative AI into everyday business processes.",
  },
  {
    tag: "Automation",
    img: "/images/thought-leadership-aim-research-award.webp",
    alt: "Intelligent business automation",
    title: "From Manual Processes to Intelligent Automation",
    excerpt:
      "Discover how AI-powered automation can reduce repetitive work, connect business systems, and create more efficient digital workflows.",
  },
];

export default function ThoughtLeadership() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-10">
          AI Insights &
          <br />
          Business Perspectives
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map(({ tag, img, alt, title, excerpt }) => (
            <article
              key={title}
              className="border border-black/10 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative h-36">
                <img
                  src={img}
                  alt={alt || title}
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

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-4 flex-1">
                  {excerpt}
                </p>

                <a
                  href="#"
                  className="text-[11px] font-semibold text-brand-orange"
                >
                  Read More &rsaquo;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}