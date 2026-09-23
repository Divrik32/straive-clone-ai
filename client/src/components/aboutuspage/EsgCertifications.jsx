const FRAMEWORKS = [
  { name: "United Nations Global Compact", text: "We have renewed our commitment to the principles of the United Nations Global Compact and submitted our Communication on Progress (COP)." },
  { name: "Science Based Targets", text: "Straive's Net-Zero 2040 commitment and near-term decarbonization targets have been validated and approved by the Science Based Targets initiative (SBTi)." },
];

const CERTS = [
  { name: "ISO", text: "Our ISO 14001-certified Environmental Management System (EMS) continues to guide the systematic implementation of environmental sustainability initiatives across our operations." },
  { name: "CDP", text: "In our latest submission to the Carbon Disclosure Project (CDP), Straive earned an overall rating of \u2018B\u2019 with an \u2018A\u2019 rating on Supplier Engagement Assessment." },
  { name: "EcoVadis", text: "Our EcoVadis score was 56/100 in 2025, placing us at the 42nd percentile rank of all companies rated by EcoVadis \u2014 a platform that assesses corporate sustainability performance." },
];

const ENV_STATS = [
  { label: "Bronze for ESG Excellence", value: "Bronze" },
  { label: "Straive's energy consumption from Renewable Energy", value: "53%" },
  { label: "Total energy consumption in 2025", value: "12,312.06 MWh" },
  { label: "Sites with access to grid-supplied RE", value: "6" },
  { label: "Total Carbon Emission avoided through RE adoption", value: "4,945.66 tCO2e" },
  { label: "Decrease YoY in Scope 1 Emissions", value: "30.42%" },
  { label: "Decrease YoY in Scope 2 Emissions", value: "11.02%" },
];

export default function EsgCertifications() {
  return (
    <section className="bg-[#f6f6f8] py-16 md:py-20">
      <div className="section-container">
        <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-4">Disclosures and Compliance</h3>
        <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-10">
          As ESG conversations become more relevant even as more organizations now embark on their
          own conversations, this has also become very evident in the market that RFPs require
          ask questions about sustainability. It's equally important to note that Straive upholds
          high standards of ESG disclosure and compliance, ensuring transparency, accountability,
          and responsible business practices.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {FRAMEWORKS.map((f) => (
            <div key={f.name} className="bg-white rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[#10162B] mb-2">{f.name}</h4>
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {CERTS.map((c) => (
            <div key={c.name} className="bg-white rounded-xl p-6">
              <h4 className="text-sm font-bold text-brand-orange mb-2">{c.name}</h4>
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div id="environment" className="scroll-mt-24">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-2">Sustainability Highlights</h3>
          <h4 className="text-brand-orange font-semibold mb-6">Environment</h4>
          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-8">
            Straive continues to make further progress in its efforts to address environmental
            impact, recognizing the urgent need to address climate change and resource depletion.
            Our environmental strategy is centered around reducing emissions, enhancing energy
            efficiency, and promoting sustainable resource use. We are committed to integrating
            environmental considerations into every aspect of our business operations, ensuring
            that we contribute to a healthier planet.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div className="rounded-xl overflow-hidden h-56">
              <img src="/images/cpg-hero-bg.jpg" alt="Sustainable operations" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {ENV_STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-brand-orange">{s.value}</p>
                  <p className="text-[11px] text-[#7a7a8a] leading-snug mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <a href="#greener-earth" className="text-[12px] font-semibold text-brand-orange underline">
            Contributing to a Greener Earth (Read More)
          </a>
        </div>
      </div>
    </section>
  );
}
