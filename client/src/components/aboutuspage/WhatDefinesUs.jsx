import { Target, Crosshair, Briefcase, Layers, Users } from "lucide-react";

const DEFINES = [
  {
    icon: Target,
    title: "Purpose",
    text: "We focus on solving meaningful business problems by combining people, technology, data, and AI into practical solutions.",
  },
  {
    icon: Crosshair,
    title: "Show, Not Just Tell",
    text: "Our focus is on demonstrating working solutions and practical outcomes rather than relying only on presentations or concepts.",
  },
  {
    icon: Briefcase,
    title: "Commercial Mindset",
    text: "We connect innovation with business value, designing solutions with measurable operational and commercial outcomes in mind.",
  },
  {
    icon: Layers,
    title: "Build With What We Have",
    text: "We bring together the right technologies, capabilities, partners, and expertise to create solutions that fit each organization's needs.",
  },
  {
    icon: Users,
    title: "People & Diverse Perspectives",
    text: "We value different experiences, ideas, and perspectives because collaboration and continuous learning are essential to building better solutions.",
  },
];

export default function WhatDefinesUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-5">
            What Defines Us
          </h2>

          <p className="text-sm text-[#4a4a5a] leading-relaxed mb-8">
            We combine people, technology, data, analytics, and AI to build
            practical solutions for modern business challenges. Our approach
            focuses on moving from ideas to implementation and embedding
            technology into real workflows.
          </p>

          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">
            Explore Opportunities
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {DEFINES.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`bg-[#f6f6f8] rounded-xl p-5 flex flex-col ${
                i === DEFINES.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-orange" />
              </div>

              <h3 className="text-sm font-semibold text-[#10162B] mb-2">
                {title}
              </h3>

              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-container mt-16">
        <h3 className="text-center text-lg md:text-xl font-semibold text-[#10162B] mb-10">
          Technology & Ecosystem Partners
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
          {[
            { name: "Databricks", img: "/images/logo-databricks.png" },
            { name: "Google Cloud", img: "/images/logo-google-cloud.jpg" },
            { name: "Microsoft", img: "/images/logo-microsoft.jpg" },
            { name: "Snowflake", img: "/images/logo-snowflake.png" },
          ].map((p) => (
            <img
              key={p.name}
              src={p.img}
              alt={p.name}
              className="h-9 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}