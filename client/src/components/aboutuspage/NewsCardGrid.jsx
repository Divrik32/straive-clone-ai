export default function NewsCardGrid({ items }) {
  return (
    <section className="bg-white py-14">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, excerpt, img, date }) => (
            <article key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-36 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-wide text-brand-orange font-semibold mb-2">{date}</span>
                <h3 className="text-[13px] font-semibold text-[#10162B] leading-snug mb-2">{title}</h3>
                {excerpt && <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-4 flex-1">{excerpt}</p>}
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
