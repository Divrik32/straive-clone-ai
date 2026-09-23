const INDUSTRIES = [
  { name: "Science and Research", img: "/images/industry-science-research.svg" },
  { name: "Logistics, Supply Chain & Manufacturing", img: "/images/industry-logistics.svg" },
  { name: "Education", img: "/images/industry-education.svg" },
  { name: "Banking & Financial Services", img: "/images/industry-banking.svg" },
  { name: "Pharma and Life Sciences", img: "/images/industry-pharma.svg" },
  { name: "Retail Tech, Entertainment and Media", img: "/images/industry-retail-media.svg" },
];

export default function IndustriesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-10">
          Enhancing Outcomes
          <br />
          Across Industries
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map(({ name, img }) => (
            <a
              key={name}
              href="#"
              className="group border border-black/10 rounded-lg overflow-hidden flex hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 shrink-0 overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center px-4">
                <span className="text-[13px] font-medium text-[#10162B] underline decoration-1 underline-offset-2 group-hover:text-brand-orange">
                  {name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
