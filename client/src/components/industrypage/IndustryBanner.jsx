export default function IndustryBanner({ heading, text, bullets, buttonLabel }) {
  return (
    <section className="bg-brand-orange text-white py-10">
      <div className="section-container grid md:grid-cols-2 gap-6 items-center">
        <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
        <div>
          {text && <p className="text-sm text-white/90 leading-relaxed mb-3">{text}</p>}
          {bullets && (
            <ul className="space-y-1 mb-3">
              {bullets.map((b) => (
                <li key={b} className="text-sm text-white/90 flex gap-2">
                  <span>&#8226;</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {buttonLabel && (
            <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase mt-2">
              {buttonLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
