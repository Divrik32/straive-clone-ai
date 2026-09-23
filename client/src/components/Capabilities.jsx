import { Database, LineChart, Cpu, Boxes } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Database,
    title: "Data Management",
    desc: "Achieve seamless, secure, and actionable data flow across the organisation, empowering strategic decision-making and operational efficiency.",
  },
  {
    icon: LineChart,
    title: "Insights & Analytics",
    desc: "Transform data into actionable insights that drive smarter decisions, enhance customer experiences, and fuel business growth.",
  },
  {
    icon: Cpu,
    title: "AI Design & Deployment",
    desc: "Develop intelligent, scalable AI solutions that enhance business agility and deliver measurable impact across critical functions.",
  },
  {
    icon: Boxes,
    title: "Product Engg. & Expert-In-The-Loop Ops",
    desc: "Accelerate product innovation and quality with seamless, expert-driven operations that improve AI precision and strengthen business outcomes.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-[#0A0E1F] text-white py-16">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Explore Our Capabilities</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/[0.04] border border-white/10 rounded-lg p-5 flex flex-col">
              <div className="w-11 h-11 rounded-md bg-brand-orange/15 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{title}</h3>
              <p className="text-[12px] text-white/55 leading-relaxed mb-6 flex-1">{desc}</p>
              <button className="btn-pill btn-orange text-[10px] px-4 py-2 uppercase w-fit">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
