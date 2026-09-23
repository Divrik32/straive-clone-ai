import { Target, Crosshair, Briefcase, Layers, Users } from "lucide-react";

const DEFINES = [
  {
    icon: Target,
    title: "Purpose",
    text: "For a client or a strategic team, we bring the same drive together, hands dirty in getting things done.",
  },
  {
    icon: Crosshair,
    title: '"Show" Vs "Tell"',
    text: "Our focus is on showcasing solutions to clients (vs. PPT pages or whitepapers).",
  },
  {
    icon: Briefcase,
    title: "Commercial Mindset",
    text: "Innovation with an eye on how ideas translate into sustainable value for our clients and Straive.",
  },
  {
    icon: Layers,
    title: "Build With What We Have",
    text: "We might not always have the perfect capability or team for a client opportunity (none has this in a world that is changing every 6 months). But we stitch together the winning solution that are the right future-fit partner for them and convince the client of that trust.",
  },
  {
    icon: Users,
    title: "Welcome New Personalities & Thoughts",
    text: "Straive is open to new people with different personalities and inputs realizing that this is necessary for Straive's evolution. And, in turn, every new person authentically connects with the Straive team, in their own individual way.",
  },
];

export default function WhatDefinesUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-5">We Are Straive</h2>
          <p className="text-sm text-[#4a4a5a] leading-relaxed mb-8">
            We leverage our unique people-tech framework to build the best data analytics &amp; AI
            solutions. By operationalizing this solution into your workflow, we deliver real-world
            impact and better ROIs through a combination of higher efficiency, experiences, and
            enhanced revenue.
          </p>
          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">Explore Opportunities</button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {DEFINES.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`bg-[#f6f6f8] rounded-xl p-5 flex flex-col ${i === DEFINES.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-sm font-semibold text-[#10162B] mb-2">{title}</h3>
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-container mt-16">
        <h3 className="text-center text-lg md:text-xl font-semibold text-[#10162B] mb-10">
          We Are Empowered By Our Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
          {[
            { name: "Databricks", img: "/images/logo-databricks.png" },
            { name: "Google Cloud", img: "/images/logo-google-cloud.jpg" },
            { name: "Microsoft", img: "/images/logo-microsoft.jpg" },
            { name: "Snowflake", img: "/images/logo-snowflake.png" },
          ].map((p) => (
            <img key={p.name} src={p.img} alt={p.name} className="h-9 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}
