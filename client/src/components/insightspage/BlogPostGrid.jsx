export default function BlogPostGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {items.map(({ title, excerpt, img, date }) => (
        <article key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
          <div className="h-36 overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-[13px] font-semibold text-brand-orange leading-snug mb-2">{title}</h3>
            {excerpt && <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-3 flex-1">{excerpt}</p>}
            <a href="#" className="text-[11px] font-semibold text-[#10162B] mb-2 inline-block">
              Read More &rsaquo;
            </a>
            {date && <p className="text-[11px] text-[#9a9aaa]">{date}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}
