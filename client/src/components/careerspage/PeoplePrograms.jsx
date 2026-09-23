import { HeartHandshake, Sparkles, Award, ChevronRight } from "lucide-react";

const PROGRAMS = [
  {
    title: "Diversity, Equity & Inclusion",
    desc: "We foster an inclusive workplace where every voice is valued and every background is celebrated.",
    icon: HeartHandshake,
  },
  {
    title: "Health & Wellness",
    desc: "From fitness sessions to mental wellness support, we invest in our people feeling their best.",
    icon: Sparkles,
  },
  {
    title: "Rewards & Recognition",
    desc: "We celebrate achievements big and small, recognizing the people who drive our success.",
    icon: Award,
  },
];

export default function PeoplePrograms() {
  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-3">
          Our People Programs
        </h2>
        <p className="text-center text-sm text-[#4a4a5a] max-w-2xl mx-auto mb-12">
          The initiatives and programs that make Straive a place where people can grow, belong, and
          do their best work.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {PROGRAMS.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="bg-[#f7f7f9] rounded-lg p-6 flex flex-col items-start">
              <span className="w-11 h-11 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.75} />
              </span>
              <h3 className="text-sm font-semibold text-brand-orange mb-2">{title}</h3>
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-5 flex-1">{desc}</p>
              <button className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex items-center gap-1">
                Learn More <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
