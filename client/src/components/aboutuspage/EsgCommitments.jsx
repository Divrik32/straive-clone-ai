const QUOTES = [
  {
    name: "Atty. Francis Victoria",
    role: "Chief Compliance Officer and General Counsel",
    text: "\u201cStraive's Integrity with Zero Tolerance to Corruption\u201d \u2014 we deeply commit to ethical business practices and sustainability, acknowledging their interconnectedness.",
  },
  {
    name: "Kumar Subramaniam",
    role: "Chief Risk Officer",
    text: "\u201cThe Relevance of Sustainable Development to Straive\u201d \u2014 sustainable development is essential for the long-term success and prosperity of our stakeholders and the environment.",
  },
  {
    name: "Straive Leadership",
    role: "Sustainability Council",
    text: "As a responsible corporate citizen, we are committed to integrating sustainable development principles into operations, strategy, and decision-making processes.",
  },
];

export default function EsgCommitments() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <span className="text-brand-orange font-bold text-3xl tracking-tight">ESG</span>
            <p className="text-xs text-[#7a7a8a] -mt-1 mb-4">Better Tomorrow</p>
            <p className="text-sm font-semibold text-brand-orange mb-3">#Straive For A Better Tomorrow</p>
          </div>
          <p className="text-sm text-[#4a4a5a] leading-relaxed">
            As a global citizen, we conduct our business with integrity and a commitment to
            sustainability. Straive's Environmental, Social, and Governance (ESG) strategies are
            not just policies; they reflect our shared dedication to creating a positive impact
            alongside our clients, employees, shareholders, and the communities we serve. We
            actively engage employees at all levels, we cultivate a deep understanding of our
            collective responsibility. Committed to best practices in social responsibility, we
            prioritize compliance with national and international standards, championing
            diversity, equality, and the eradication of forced and child labor.
          </p>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-6">Our Sustainability Commitments</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {QUOTES.map((q) => (
            <div key={q.name} className="bg-[#f6f6f8] rounded-xl p-6 flex flex-col">
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed italic mb-6 flex-1">{q.text}</p>
              <div>
                <p className="text-[12px] font-semibold text-[#10162B]">{q.name}</p>
                <p className="text-[11px] text-[#7a7a8a]">{q.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f6f6f8] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#4a4a5a] max-w-xl">
            Straive's Sustainability Report articulates our commitment to building a sustainable
            and equitable future.
          </p>
          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase whitespace-nowrap">
            Download Full Report
          </button>
        </div>
      </div>
    </section>
  );
}
