export default function ImpactCards({ heading, cards }) {
  return (
    <section className="bg-white pb-14">
      <div className="section-container">
        {heading && (
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            {heading}
          </h2>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map(({ title, text, bg, img }) => (
            <div
              key={title}
              className={`flex flex-col sm:flex-row rounded-lg overflow-hidden ${bg}`}
            >
              <div className="flex-1 p-6">
                <h3 className="text-sm font-semibold text-[#10162B] mb-2 leading-snug">
                  {title}
                </h3>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-5">
                  {text}
                </p>

                <button className="btn-pill btn-dark text-[10px] px-4 py-2 uppercase">
                  Learn More
                </button>
              </div>

              <div className="w-full sm:w-1/5 h-28 sm:h-auto overflow-hidden">
  {img && (
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover"
    />
  )}
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}