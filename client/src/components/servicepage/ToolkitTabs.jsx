import { useState } from "react";

export default function ToolkitTabs({ heading, tabs }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="bg-white pb-14">
      <div className="section-container">
        {heading && <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">{heading}</h2>}
        <div className="grid md:grid-cols-[220px_1fr] gap-8">
          <div className="flex flex-col gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`text-left text-[13px] px-4 py-3 rounded-md border transition-colors ${
                  i === active
                    ? "border-brand-orange bg-brand-orange text-white font-medium"
                    : "border-black/10 text-[#3a3a4a] hover:border-brand-orange/50"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <img
              src={tab.img}
              alt={tab.alt || tab.name}
              className="h-56 w-full rounded-lg object-cover"
            />
            <div>
              <p className="text-sm text-[#4a4a5a] leading-relaxed mb-4">{tab.description}</p>
              {tab.bullets && (
                <>
                  {tab.bulletsTitle && <p className="text-sm font-semibold text-[#10162B] mb-2">{tab.bulletsTitle}</p>}
                  <ul className="space-y-2">
                    {tab.bullets.map((b) => (
                      <li key={b} className="text-[13px] text-[#4a4a5a] flex gap-2">
                        <span className="text-brand-orange">&#8226;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}