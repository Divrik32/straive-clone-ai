export default function OfferingHighlights({ highlights }) {
  return (
    <section className="bg-white pb-14">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-8">Offering Highlights</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map(({ title, text, bg }) => (
            <div key={title} className={`rounded-lg p-6 ${bg}`}>
              <h3 className="text-sm font-semibold text-[#10162B] mb-2">{title}</h3>
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
