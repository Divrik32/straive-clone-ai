const FRAMEWORKS = [
  {
    name: "United Nations Global Compact",
    text: "We support internationally recognized principles that encourage responsible business practices, human rights, environmental responsibility, and ethical conduct.",
  },
  {
    name: "Science-Based Climate Action",
    text: "We continue to explore practical approaches for reducing environmental impact, improving energy efficiency, and supporting long-term climate goals.",
  },
];

const CERTS = [
  {
    name: "ISO",
    text: "Relevant management systems and operational practices are aligned with structured quality, environmental, and governance principles wherever applicable.",
  },
  {
    name: "Environmental Reporting",
    text: "We aim to maintain transparent environmental practices and continuously improve the way sustainability considerations are incorporated into our operations.",
  },
  {
    name: "Sustainability Assessment",
    text: "We support responsible business assessments and continuously work toward improving our sustainability practices across environmental, social, and governance areas.",
  },
];

const ENV_STATS = [
  {
    label: "Focus Area",
    value: "Energy Efficiency",
  },
  {
    label: "Environmental Priority",
    value: "Emission Reduction",
  },
  {
    label: "Operational Focus",
    value: "Resource Efficiency",
  },
  {
    label: "Sustainability Approach",
    value: "Responsible Operations",
  },
  {
    label: "Climate Focus",
    value: "Lower Impact",
  },
  {
    label: "Long-Term Goal",
    value: "Sustainable Growth",
  },
];

export default function EsgCertifications() {
  const safeFrameworks = Array.isArray(FRAMEWORKS) ? FRAMEWORKS : [];
  const safeCerts = Array.isArray(CERTS) ? CERTS : [];
  const safeEnvStats = Array.isArray(ENV_STATS) ? ENV_STATS : [];

  return (
    <section className="bg-[#f6f6f8] py-16 md:py-20">
      <div className="section-container">
        <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-4">
          Disclosures and Compliance
        </h3>

        <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-10">
          Responsible business practices are an important part of our approach
          to long-term growth. We aim to maintain transparent, accountable, and
          responsible practices across our environmental, social, and
          governance activities.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {safeFrameworks.map((f) => (
            <div key={f.name} className="bg-white rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[#10162B] mb-2">
                {f.name}
              </h4>

              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {safeCerts.map((c) => (
            <div key={c.name} className="bg-white rounded-xl p-6">
              <h4 className="text-sm font-bold text-brand-orange mb-2">
                {c.name}
              </h4>

              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>

        <div id="environment" className="scroll-mt-24">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-2">
            Sustainability Highlights
          </h3>

          <h4 className="text-brand-orange font-semibold mb-6">
            Environment
          </h4>

          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-8">
            Our environmental approach focuses on responsible resource use,
            energy efficiency, reducing operational impact, and identifying
            practical ways to make our business more sustainable. We continue
            to look for opportunities to improve environmental performance
            across our operations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div className="rounded-xl overflow-hidden h-56">
              <img
                src="/images/cpg-hero-bg.jpg"
                alt="Sustainable operations"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              {safeEnvStats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-brand-orange">
                    {s.value}
                  </p>

                  <p className="text-[11px] text-[#7a7a8a] leading-snug mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#greener-earth"
            className="text-[12px] font-semibold text-brand-orange underline"
          >
            Contributing to a Greener Earth (Read More)
          </a>
        </div>
      </div>
    </section>
  );
}