export default function IconCardGrid({ heading, items, columns = 3, bg = "bg-white" }) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`${bg} pb-14`}>
      <div className="section-container">
        {heading && <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">{heading}</h2>}
        <div className={`grid ${colClass} gap-6`}>
          {items.map(({ icon: Icon, img, title, text }) => (
            <div key={title} className="border border-black/10 rounded-lg overflow-hidden bg-white">
              {img && (
                <div className="h-28 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                {Icon && <Icon className="w-8 h-8 text-brand-orange mb-3" strokeWidth={1.5} />}
                <p className="text-sm font-semibold text-[#10162B] mb-1">{title}</p>
                {text && <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{text}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
