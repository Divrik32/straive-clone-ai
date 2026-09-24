const HEADLINES = [
  {
    img: "/images/accelerator-gramener.webp",
    title: "Expanding Data, Analytics, and AI Capabilities",
    text: "Our continued investment in data, analytics, and AI capabilities strengthens our ability to help organizations turn complex data into practical business solutions.",
  },
  {
    img: "/images/logo-snowflake.png",
    title: "Strengthening AI Operationalization Through Technology Partnerships",
    text: "We work with leading technology ecosystems to help organizations build scalable data platforms, analytics solutions, and AI-enabled workflows.",
  },
  {
    img: "/images/menu-about-us.jpg",
    title: "Building the Next Generation of Data and AI Solutions",
    text: "Our teams continue to expand capabilities across data engineering, analytics, AI, automation, and enterprise technology to support evolving business needs.",
  },
];

export default function GlobalHeadlines() {
  const safeHeadlines = Array.isArray(HEADLINES) ? HEADLINES : [];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-10">
          In The Spotlight
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {safeHeadlines.map(({ img, title, text }) => (
            <article
              key={title}
              className="border border-black/10 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="h-36 bg-[#0A0E1F] flex items-center justify-center overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-[#10162B] mb-2 leading-snug">
                  {title}
                </h3>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-4 flex-1">
                  {text}
                </p>

                <a
                  href="#"
                  className="text-[11px] font-semibold text-brand-orange"
                >
                  Learn More &rsaquo;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}