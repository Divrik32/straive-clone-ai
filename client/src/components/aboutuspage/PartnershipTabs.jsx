import { useState } from "react";

const TABS = [
  {
    name: "Microsoft",
    img: "/images/logo-microsoft.jpg",
    text: "We help organizations make effective use of Microsoft cloud and data technologies to modernize applications, strengthen analytics capabilities, and build scalable enterprise solutions.",
  },
  {
    name: "AWS",
    img: "/images/logo-aws.png",
    text: "We combine cloud engineering and data expertise with AWS technologies to support infrastructure modernization, application development, migration, and scalable data and AI solutions.",
  },
  {
    name: "Databricks",
    img: "/images/logo-databricks.png",
    text: "We use modern data and AI platform capabilities to help organizations build unified data environments, streamline data workflows, and develop production-ready analytics and machine learning solutions.",
  },
  {
    name: "Snowflake",
    img: "/images/logo-snowflake.png",
    text: "We help organizations build secure and scalable data foundations using modern cloud data technologies, enabling analytics, data sharing, governance, and AI-ready workloads.",
  },
  {
    name: "GCP",
    img: "/images/logo-google-cloud.jpg",
    text: "We combine cloud infrastructure, analytics, and AI capabilities to help organizations modernize technology environments and develop secure, scalable, and data-driven solutions.",
  },
];

export default function PartnershipTabs() {
  const [active, setActive] = useState(0);

  const safeTabs = Array.isArray(TABS) ? TABS : [];
  const current = safeTabs[active] || safeTabs[0];

  if (!current) {
    return null;
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
          Technology Partnership Capabilities
        </h2>

        <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {safeTabs.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap text-left px-5 py-3 rounded-full md:rounded-md text-[13px] font-medium transition-colors ${
                  i === active
                    ? "bg-brand-orange text-white"
                    : "bg-white border border-black/15 text-[#3a3a4a] hover:border-brand-orange"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-[220px_1fr] gap-8 items-center bg-[#f6f6f8] rounded-xl p-6 md:p-8">
            <div className="h-32 sm:h-40 rounded-lg overflow-hidden bg-[#0A0E1F] flex items-center justify-center">
              <img
                src={current.img}
                alt={current.name}
                className="max-h-14 max-w-[160px] object-contain"
              />
            </div>

            <div>
              <p className="text-sm text-[#4a4a5a] leading-relaxed mb-5">
                {current.text}
              </p>

              <button className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase w-fit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}