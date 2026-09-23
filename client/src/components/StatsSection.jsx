const PROMISE = [
  { value: "3-5x", label: "ROI" },
  { value: "7 Days", label: "Prototype Development" },
];
const DIFFERENTIATORS = [
  { value: "18,000+", label: "Associates" },
  { value: "6,000+", label: "Associates (SMEs)" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-10 max-w-xl">
          We Translate Experience and Expertise Into Business Outcomes
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-[#7a7a8a] border-b border-black/10 pb-2 mb-4">
              Our Promise
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {PROMISE.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-brand-orange">{s.value}</p>
                  <p className="text-[11px] text-[#7a7a8a] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-[#7a7a8a] border-b border-black/10 pb-2 mb-4">
              Our Differentiators
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {DIFFERENTIATORS.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-brand-orange">{s.value}</p>
                  <p className="text-[11px] text-[#7a7a8a] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
