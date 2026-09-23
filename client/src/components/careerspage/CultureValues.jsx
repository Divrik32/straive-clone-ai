import { Lightbulb, Trophy, ShieldCheck, Users2, Handshake } from "lucide-react";

const VALUES = [
  {
    title: "Innovation",
    desc: "Technology driven, next now. Curious and courageous, always.",
    icon: Lightbulb,
  },
  {
    title: "Meritocracy & Motivation",
    desc: "Action orientation, motivated to perform, recognized for accomplishment.",
    icon: Trophy,
  },
  {
    title: "Accountability",
    desc: "Own outcomes, be reliable and responsible, and empower our teams.",
    icon: ShieldCheck,
  },
  {
    title: "Client Focus",
    desc: "Achieve excellence and consistent satisfaction, naturally.",
    icon: Users2,
  },
  {
    title: "Respect",
    desc: "Fairness and collaboration, for everyone, in every interaction.",
    icon: Handshake,
  },
];

export default function CultureValues() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-3">
          Our Culture and Values
        </h2>
        <p className="text-center text-sm text-[#4a4a5a] max-w-2xl mx-auto mb-12">
          Our company culture reflects our core values and principles that govern how we accomplish
          our goals and interact with each other, as well as with our customers and the community.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {VALUES.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="bg-[#f7f7f9] rounded-lg p-6 w-full sm:w-[220px] flex flex-col items-center text-center"
            >
              <span className="text-brand-orange text-sm font-semibold mb-2">{title}</span>
              <p className="text-[11px] text-[#4a4a5a] leading-relaxed mb-5">{desc}</p>
              <Icon className="w-8 h-8 text-[#10162B]" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
