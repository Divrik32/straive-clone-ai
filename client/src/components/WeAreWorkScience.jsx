const PILLS = [
  "AI Innovation",
  "Business Automation",
  "Intelligent Experiences",
];

export default function WeAreWorkScience() {
  return (
    <section className="relative bg-[#14161c] text-white py-24 overflow-hidden">
      {/* <img
        src="/images/we-are-straive-bg.svg"
        alt="Work Science"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

      <div className="relative section-container flex flex-col md:flex-row items-center justify-between gap-10">
        <h2 className="text-5xl md:text-6xl font-light">
          We Are
          <br />
          Work Science
        </h2>

        <div className="max-w-md">
          <p className="text-sm text-white/70 leading-relaxed mb-6">
            Work Science is focused on helping businesses use AI and modern
            technology to solve real operational challenges. We combine
            software engineering, data, automation, and artificial intelligence
            to create practical digital solutions for growing organizations.
          </p>

          <div className="flex flex-wrap gap-3">
            {PILLS.map((p) => (
              <span
                key={p}
                className="text-[11px] border border-white/30 rounded-full px-4 py-2"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}