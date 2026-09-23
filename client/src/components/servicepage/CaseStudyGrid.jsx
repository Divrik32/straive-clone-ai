export default function CaseStudyGrid({ heading, items, columns = 3, tag = false }) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-white pb-14">
      <div className="section-container">
        {heading && <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">{heading}</h2>}
        <div className={`grid ${colClass} gap-6`}>
          {items.map(({ title, img, label }) => (
            <div key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
              <div className="h-32 relative overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover" />
                {tag && label && (
                  <span className="absolute top-2 left-2 text-[9px] uppercase bg-brand-orange text-white px-2 py-0.5 rounded">
                    {label}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[12px] font-medium text-[#10162B] leading-snug mb-3 flex-1">{title}</p>
                <a href="#" className="text-[11px] font-semibold text-brand-orange">Learn More &rsaquo;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
