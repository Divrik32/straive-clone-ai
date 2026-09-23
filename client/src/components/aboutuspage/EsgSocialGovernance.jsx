function BackToTop() {
  return (
    <div className="mt-10">
      <a href="#top" className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex">
        Back To Top
      </a>
    </div>
  );
}

const SUPPORT_GROUPS = [
  { title: "Support Groups for Important Parent Needs", text: "Support Groups for Important Parent Needs" },
  { title: "Nirjhara", text: "2nd career program for women designed to empower them with flexibility and new roles." },
  {
    title: "The Good Awards",
    text: "We felt that our ESG nonprofit work, community reflects Straive's alignment with our CSR focus: Education, Environment...",
  },
];

const GOVERNANCE_CARDS = [
  { title: "Zero Data Breach", text: "Zero instances of data breach." },
  { title: "Risk Assessment", text: "100% capacity risk register ready to integrate with Enterprise Risk Management (ERM) process." },
];

const POLICIES = [
  { title: "New Social Compliance Policies in Place", items: ["Policy on Human Rights", "Policy against Forced Labor", "Policy against Child Labor", "My Voice Matters Policy"] },
  {
    title: "Mandatory Compliance Trainings",
    items: [
      "Environmental Health & Safety",
      "Inclusion & Diversity",
      "Anti Bribery / Anti-Corruption",
      "Code of Conduct",
      "Human Rights Assessment",
      "Responsible Use of AI and Data Governance",
      "Corporate Governance Awareness",
      "Workplace as a Safe Space",
    ],
  },
];

export default function EsgSocialGovernance() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div id="social" className="scroll-mt-24 mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-2">Social</h3>
          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-8">
            Straive's social initiatives focus on fostering an inclusive and equitable workplace,
            enhancing community engagement and promoting employee well-being. We believe that
            people are our greatest asset, and we are dedicated to creating an environment where
            everyone can thrive. Our social strategy emphasizes diversity, equity, and inclusion,
            as well as supporting the communities in which we operate.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {SUPPORT_GROUPS.map((g) => (
              <div key={g.title} className="bg-[#f6f6f8] rounded-xl p-5">
                <h4 className="text-sm font-semibold text-[#10162B] mb-2">{g.title}</h4>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>

          <a href="#individuality" className="text-[12px] font-semibold text-brand-orange underline">
            Celebrating Each Other's Individuality (Read More)
          </a>
        </div>

        <div id="governance" className="scroll-mt-24 mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-2">Governance</h3>
          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-8">
            Straive has strengthened our governance strategy to uphold transparency, accountability,
            and ethical conduct. Our governance strategy is designed to protect the interest of
            corporate responsibility, fostering trust and integrity in all our interactions. We
            are committed to continuous improvement in our governance practices, aligning with
            global best practices and stakeholder interests.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {GOVERNANCE_CARDS.map((c) => (
              <div key={c.title} className="bg-[#f6f6f8] rounded-xl p-6">
                <h4 className="text-sm font-semibold text-[#10162B] mb-2">{c.title}</h4>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {POLICIES.map((p) => (
              <div key={p.title} className="bg-[#f6f6f8] rounded-xl p-6">
                <h4 className="text-sm font-semibold text-[#10162B] mb-3">{p.title}</h4>
                <ul className="space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="text-[12px] text-[#4a4a5a] flex gap-2">
                      <span className="text-brand-orange">&bull;</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="#comms" className="text-[12px] font-semibold text-brand-orange underline">
            Employee Communication Channels (Read More)
          </a>
        </div>

        <div id="greener-earth" className="scroll-mt-24">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-4">Contributing to a Greener Earth</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              At the forefront of our efforts is a commitment to reducing our environmental impact.
              Our sustainable practices are anchored on embracing sustainable solutions, minimizing
              resource consumption, and partnering with organizations that share our vision. Our
              business is fully fueled by the activities from our own initiatives and our service
              offerings that are heavily dependent on the use of electricity. Therefore, we ensure
              that our resources are used wisely, and we make sure that each solution will be built
              for lasting operational effectiveness.
            </p>
            <div className="rounded-xl overflow-hidden h-48">
              <img src="/images/cpg-outcomes-image.webp" alt="Greener earth" className="w-full h-full object-cover" />
            </div>
          </div>
          <BackToTop />
        </div>
      </div>
    </section>
  );
}
