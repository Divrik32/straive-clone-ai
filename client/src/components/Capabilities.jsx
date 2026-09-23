import { Database, LineChart, Cpu, Bot } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "Build intelligent AI solutions that help businesses automate workflows, improve decision-making, and create better digital experiences.",
  },
  {
    icon: Cpu,
    title: "Generative AI",
    desc: "Develop secure and practical generative AI applications for content, knowledge management, customer support, and enterprise productivity.",
  },
  {
    icon: Database,
    title: "Data & AI Engineering",
    desc: "Design reliable data and AI foundations that connect business information, applications, and intelligent services.",
  },
  {
    icon: LineChart,
    title: "AI Analytics & Automation",
    desc: "Turn business data into actionable insights while automating repetitive processes with intelligent, scalable solutions.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-[#0A0E1F] text-white py-16">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Our AI Capabilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/[0.04] border border-white/10 rounded-lg p-5 flex flex-col"
            >
              <div className="w-11 h-11 rounded-md bg-brand-orange/15 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-brand-orange" />
              </div>

              <h3 className="text-sm font-semibold mb-2">{title}</h3>

              <p className="text-[12px] text-white/55 leading-relaxed mb-6 flex-1">
                {desc}
              </p>

              <button className="btn-pill btn-orange text-[10px] px-4 py-2 uppercase w-fit">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}