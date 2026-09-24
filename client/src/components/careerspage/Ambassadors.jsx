const AMBASSADORS = [
  {
    quote:
      "A strong technology team is built when people are encouraged to share ideas, ask questions, and learn from one another.",
    name: "Team Culture",
    color: "bg-orange-100 text-orange-700",
  },
  {
    quote:
      "Working together across different skills and perspectives helps us approach business problems from multiple angles.",
    name: "Collaboration",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    quote:
      "Continuous learning is part of our everyday work, whether it is a new technology, a new project, or a new way of solving a problem.",
    name: "Learning",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote:
      "People should have the opportunity to take ownership, contribute meaningfully, and grow into new responsibilities.",
    name: "Growth",
    color: "bg-pink-100 text-pink-700",
  },
  {
    quote:
      "We value an environment where people can bring their ideas, experience, and individual perspective to the work.",
    name: "People",
    color: "bg-sky-100 text-sky-700",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Ambassadors() {
  const safeAmbassadors = Array.isArray(AMBASSADORS)
    ? AMBASSADORS
    : [];

  return (
    <section className="bg-[#f2f2f2] py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-3">
          What Matters to Our People
        </h2>

        <p className="text-center text-sm text-[#4a4a5a] max-w-2xl mx-auto mb-12">
          The way we work is shaped by curiosity, collaboration, ownership,
          learning, and respect for different perspectives.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {safeAmbassadors.map(({ quote, name, color }) => (
            <div
              key={name}
              className="bg-white rounded-lg p-6 w-full sm:w-[260px] flex flex-col items-center text-center shadow-sm"
            >
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-6 italic">
                &ldquo;{quote}&rdquo;
              </p>

              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-semibold mb-2 ${color}`}
              >
                {initials(name)}
              </span>

              <span className="text-[11px] font-medium text-[#10162B]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}