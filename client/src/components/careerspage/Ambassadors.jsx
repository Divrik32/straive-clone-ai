const AMBASSADORS = [
  {
    quote:
      "We spend so much of our lives at work, because of this I've made it my personal mission to make everyone I work with feel comfortable, safe, and appreciated at work.",
    name: "Kamala J.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    quote:
      "The company culture is inclusive and encouraging. Leadership genuinely listens, and there's always room to grow into new opportunities and challenges.",
    name: "Mukherjee R.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    quote:
      "I've had the opportunity to work on meaningful projects and learn from talented colleagues across geographies. It's been a rewarding journey.",
    name: "Deepshikha Kapoor Pradhan",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote:
      "There have been so many opportunities for growth, and the leadership team genuinely supports you in charting the career path that works best for you.",
    name: "Shravan Kumar Gupta",
    color: "bg-pink-100 text-pink-700",
  },
  {
    quote:
      "Straive gave me the confidence to lead and the freedom to innovate. It really feels like the team is invested in your success.",
    name: "Vikram Tripathi",
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
  return (
    <section className="bg-[#f2f2f2] py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-12">
          Ambassadors
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {AMBASSADORS.map(({ quote, name, color }) => (
            <div
              key={name}
              className="bg-white rounded-lg p-6 w-full sm:w-[260px] flex flex-col items-center text-center shadow-sm"
            >
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-6 italic">&ldquo;{quote}&rdquo;</p>
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-semibold mb-2 ${color}`}
              >
                {initials(name)}
              </span>
              <span className="text-[11px] font-medium text-[#10162B]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
