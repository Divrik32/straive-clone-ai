export default function InsightsCardGrid({ items, columns = 3 }) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-white py-14">
      <div className="section-container">
        <div className={`grid ${colClass} gap-6`}>
          {items.map(({ title, excerpt, img, badge }) => (
            <article key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-32 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover" />
                {badge && (
                  <span className="absolute top-2 left-2 text-[9px] uppercase tracking-wide bg-brand-orange text-white px-2 py-0.5 rounded">
                    {badge}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[13px] font-semibold text-[#10162B] leading-snug mb-2">{title}</h3>
                {excerpt && <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-3 flex-1">{excerpt}</p>}
                <a href="#" className="text-[11px] font-semibold text-brand-orange">
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
