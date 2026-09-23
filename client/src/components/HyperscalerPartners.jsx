const PARTNERS = [
  { name: "Google Cloud", sub: "Data Analytics Partner", img: "/images/logo-google-cloud.svg" },
  { name: "Microsoft", sub: "Solutions Partner", img: "/images/logo-microsoft.svg" },
  { name: "ServiceNow", sub: "Consulting Partner", img: "/images/logo-servicenow.svg" },
  { name: "AWS", sub: "Advanced Tier Partner", img: "/images/logo-aws.svg" },
];

export default function HyperscalerPartners() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-10">
          Hyperscaler Partnerships That Drive Growth
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <img src={p.img} alt={p.name} className="w-8 h-8 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-[#10162B] leading-tight">{p.name}</p>
                <p className="text-[10px] text-[#7a7a8a] leading-tight">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
