import {
  Lightbulb,
  Trophy,
  ShieldCheck,
  Users2,
  Handshake,
} from "lucide-react";

const VALUES = [
  {
    title: "Innovation",
    desc: "Stay curious, explore new ideas, and find better ways to solve problems.",
    icon: Lightbulb,
  },
  {
    title: "Ownership",
    desc: "Take responsibility for your work, make decisions thoughtfully, and deliver with commitment.",
    icon: Trophy,
  },
  {
    title: "Integrity",
    desc: "Communicate honestly, act responsibly, and build trust through everyday actions.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    desc: "Work together across teams, share knowledge, and value different perspectives.",
    icon: Users2,
  },
  {
    title: "Respect",
    desc: "Create an environment where people feel heard, valued, supported, and included.",
    icon: Handshake,
  },
];

export default function CultureValues() {
  const safeValues = Array.isArray(VALUES) ? VALUES : [];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-3">
          Our Culture and Values
        </h2>

        <p className="text-center text-sm text-[#4a4a5a] max-w-2xl mx-auto mb-12">
          We want people to feel comfortable sharing ideas, taking ownership,
          learning from challenges, and working together toward meaningful
          outcomes.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {safeValues.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="bg-[#f7f7f9] rounded-lg p-6 w-full sm:w-[220px] flex flex-col items-center text-center"
            >
              <span className="text-brand-orange text-sm font-semibold mb-2">
                {title}
              </span>

              <p className="text-[11px] text-[#4a4a5a] leading-relaxed mb-5">
                {desc}
              </p>

              <Icon
                className="w-8 h-8 text-[#10162B]"
                strokeWidth={1.5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}