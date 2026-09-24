function BackToTop() {
  return (
    <div className="mt-10">
      <a
        href="#top"
        className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex"
      >
        Back To Top
      </a>
    </div>
  );
}

const SUPPORT_GROUPS = [
  {
    title: "Employee Support",
    text: "We encourage an inclusive workplace where employees can access support, resources, and opportunities throughout their professional journey.",
  },
  {
    title: "Career Development",
    text: "We support continuous learning, professional development, and opportunities that help employees build meaningful and sustainable careers.",
  },
  {
    title: "Community Engagement",
    text: "We encourage initiatives that contribute positively to the communities in which we operate through education, environment, and social programs.",
  },
];

const GOVERNANCE_CARDS = [
  {
    title: "Data Protection",
    text: "We maintain responsible data handling and security practices designed to protect organizational and stakeholder information.",
  },
  {
    title: "Risk Management",
    text: "We use structured risk management practices to identify, assess, monitor, and address operational and business risks.",
  },
];

const POLICIES = [
  {
    title: "Social Responsibility Policies",
    items: [
      "Human Rights",
      "Prevention of Forced Labor",
      "Prevention of Child Labor",
      "Employee Grievance and Feedback",
    ],
  },
  {
    title: "Compliance & Awareness",
    items: [
      "Environmental Health & Safety",
      "Inclusion & Diversity",
      "Anti-Bribery / Anti-Corruption",
      "Code of Conduct",
      "Human Rights",
      "Responsible Use of AI and Data",
      "Corporate Governance",
      "Workplace Safety",
    ],
  },
];

export default function EsgSocialGovernance() {
  const safeSupportGroups = Array.isArray(SUPPORT_GROUPS)
    ? SUPPORT_GROUPS
    : [];

  const safeGovernanceCards = Array.isArray(GOVERNANCE_CARDS)
    ? GOVERNANCE_CARDS
    : [];

  const safePolicies = Array.isArray(POLICIES) ? POLICIES : [];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div id="social" className="scroll-mt-24 mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-2">
            Social
          </h3>

          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-8">
            Our social initiatives focus on building an inclusive workplace,
            supporting employee well-being, encouraging professional growth,
            and contributing positively to the communities where we operate.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {safeSupportGroups.map((g) => (
              <div
                key={g.title}
                className="bg-[#f6f6f8] rounded-xl p-5"
              >
                <h4 className="text-sm font-semibold text-[#10162B] mb-2">
                  {g.title}
                </h4>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                  {g.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#individuality"
            className="text-[12px] font-semibold text-brand-orange underline"
          >
            Celebrating Each Other's Individuality (Read More)
          </a>
        </div>

        <div id="governance" className="scroll-mt-24 mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-2">
            Governance
          </h3>

          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-8">
            Strong governance supports transparency, accountability, ethical
            decision-making, responsible data practices, and effective risk
            management. We aim to continuously improve our governance
            practices while maintaining responsible relationships with
            employees, clients, partners, and other stakeholders.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {safeGovernanceCards.map((c) => (
              <div
                key={c.title}
                className="bg-[#f6f6f8] rounded-xl p-6"
              >
                <h4 className="text-sm font-semibold text-[#10162B] mb-2">
                  {c.title}
                </h4>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {safePolicies.map((p) => (
              <div
                key={p.title}
                className="bg-[#f6f6f8] rounded-xl p-6"
              >
                <h4 className="text-sm font-semibold text-[#10162B] mb-3">
                  {p.title}
                </h4>

                <ul className="space-y-1.5">
                  {Array.isArray(p.items) &&
                    p.items.map((it) => (
                      <li
                        key={it}
                        className="text-[12px] text-[#4a4a5a] flex gap-2"
                      >
                        <span className="text-brand-orange">&bull;</span>
                        {it}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <a
            href="#comms"
            className="text-[12px] font-semibold text-brand-orange underline"
          >
            Employee Communication Channels (Read More)
          </a>
        </div>

        <div id="greener-earth" className="scroll-mt-24">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-4">
            Contributing to a Greener Earth
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              We continue to explore practical ways to reduce environmental
              impact through responsible resource use, sustainable operational
              practices, and technology-enabled solutions. Our goal is to
              support lasting operational effectiveness while considering
              environmental responsibility in the way we work.
            </p>

            <div className="rounded-xl overflow-hidden h-48">
              <img
                src="/images/cpg-outcomes-image.webp"
                alt="Greener earth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <BackToTop />
        </div>
      </div>
    </section>
  );
}