const FOCUS_AREAS = [
  {
    title: "AI Strategy",
    text: "Identify where AI can create meaningful business value.",
  },
  {
    title: "Solution Development",
    text: "Design and build AI-powered applications for real business needs.",
  },
  {
    title: "Automation",
    text: "Reduce repetitive work through intelligent process automation.",
  },
  {
    title: "Continuous Improvement",
    text: "Monitor, optimize, and evolve AI solutions as business needs change.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-10 max-w-xl">
          From AI Ideas to Business Solutions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map(({ title, text }) => (
            <div
              key={title}
              className="border border-black/10 rounded-lg p-5"
            >
              <h3 className="text-sm font-semibold text-[#10162B] mb-2">
                {title}
              </h3>

              <p className="text-[12px] text-[#7a7a8a] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}