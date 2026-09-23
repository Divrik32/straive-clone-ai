import { useState } from "react";

export default function IndustryTabs({ industries }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white pb-14">
      <div className="section-container">
        <div className="bg-pink-50 rounded-xl p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-[#10162B] mb-5">Enhancing outcomes for your industry</h2>
            <ul className="space-y-3">
              {industries.map((ind, i) => (
                <li key={ind.name}>
                  <button
                    onClick={() => setActive(i)}
                    className={`text-sm text-left border-b pb-2 w-full transition-colors ${
                      i === active
                        ? "text-brand-orange border-brand-orange font-semibold"
                        : "text-[#4a4a5a] border-black/10 hover:text-brand-orange"
                    }`}
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-[#4a4a5a] leading-relaxed mb-6">{industries[active].text}</p>
            <button className="btn-pill btn-orange text-[10px] px-4 py-2 uppercase w-fit">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
