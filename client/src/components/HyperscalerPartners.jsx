import { Cloud, Database, Cpu, Boxes } from "lucide-react";

const TECHNOLOGIES = [
  {
    icon: Cloud,
    name: "Cloud AI",
    sub: "Scalable AI infrastructure",
  },
  {
    icon: Database,
    name: "Data Platforms",
    sub: "Connected enterprise data",
  },
  {
    icon: Cpu,
    name: "AI Models",
    sub: "Modern intelligent models",
  },
  {
    icon: Boxes,
    name: "Enterprise Systems",
    sub: "Integrated business applications",
  },
];

export default function HyperscalerPartners() {
  const safeTechnologies = Array.isArray(TECHNOLOGIES)
    ? TECHNOLOGIES
    : [];

  return (
    <section className="bg-white pb-16">
      <div className="section-container text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-10">
          Built for the Modern Technology Ecosystem
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
          {safeTechnologies.map(({ icon: Icon, name, sub }) => (
            <div key={name} className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#10162B]/5 flex items-center justify-center">
                <Icon className="w-4 h-4 text-brand-orange" />
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-[#10162B] leading-tight">
                  {name}
                </p>

                <p className="text-[10px] text-[#7a7a8a] leading-tight">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}