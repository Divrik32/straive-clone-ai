export default function CapabilitiesList({ heading, items }) {
  return (
    <section className="bg-white pb-14">
      <div className="section-container grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <svg viewBox="0 0 220 220" className="w-48 h-48 md:w-56 md:h-56">
            <ellipse cx="110" cy="185" rx="70" ry="12" fill="#00000010" />
            <circle cx="70" cy="120" r="42" fill="#3b82f6" />
            <rect x="95" y="90" width="70" height="50" rx="10" fill="#f97316" />
            <circle cx="150" cy="60" r="34" fill="#ec4899" />
          </svg>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-6">{heading}</h2>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="text-sm font-medium text-[#2a2a3a] border-b border-black/5 pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
