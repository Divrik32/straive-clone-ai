const STORIES = [
  {
    img: "/images/menu-partnership.jpg",
    title: "Improving Business Decisions with Data-Driven Insights",
  },
  {
    img: "/images/cm-tech-dashboard.jpg",
    title: "Streamlined Reporting for Better Business Performance",
  },
  {
    img: "/images/msc-case-3.webp",
    title: "Enhancing Operational Efficiency with Advanced Data Engineering",
  },
];

export default function CustomerSuccessStories() {
  const safeStories = Array.isArray(STORIES) ? STORIES : [];

  return (
    <section className="bg-[#f6f6f8] py-14 md:py-20">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
          Customer Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {safeStories.map(({ img, title }) => (
            <article
              key={title}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-[#10162B] mb-3 leading-snug">
                  {title}
                </h3>

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