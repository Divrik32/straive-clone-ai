import { useState } from "react";

const TABS = [
  {
    name: "Microsoft",
    img: "/images/logo-microsoft.jpg",
    text: "We leverage the power of Azure as a Microsoft strategic partner to offer cloud solutions that blend seamlessly with existing technology. With our team of trained and certified professionals, we've cultivated a long-standing partnership that enhances scalability, reliability, and market visibility. Our solutions are built on the exceptional scalability and flexibility of Microsoft Azure, providing clients with robust, trusted, and state-of-the-art data-driven solutions.",
  },
  {
    name: "AWS",
    img: "/images/logo-aws.png",
    text: "As an AWS partner, we combine deep cloud engineering expertise with AWS's breadth of services to help enterprises modernize infrastructure, accelerate migration, and build resilient, cost-efficient data and AI platforms at scale.",
  },
  {
    name: "Databricks",
    img: "/images/logo-databricks.png",
    text: "Our Databricks partnership powers unified data and AI workflows, helping clients unify lakehouse architectures, streamline pipelines, and operationalize machine learning with governed, production-grade reliability.",
  },
  {
    name: "Snowflake",
    img: "/images/logo-snowflake.png",
    text: "Through our Snowflake partnership, we help enterprises consolidate and govern data across clouds, enabling faster analytics, secure data sharing, and scalable AI-ready data foundations.",
  },
  {
    name: "GCP",
    img: "/images/logo-google-cloud.jpg",
    text: "As a Google Cloud partner, we bring together advanced analytics, AI/ML tooling, and infrastructure modernization expertise to help clients innovate faster on a secure, sustainable cloud foundation.",
  },
];

export default function PartnershipTabs() {
  const [active, setActive] = useState(0);
  const current = TABS[active];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
          Core Partnership Benefits
        </h2>

        <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {TABS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap text-left px-5 py-3 rounded-full md:rounded-md text-[13px] font-medium transition-colors ${
                  i === active ? "bg-brand-orange text-white" : "bg-white border border-black/15 text-[#3a3a4a] hover:border-brand-orange"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-[220px_1fr] gap-8 items-center bg-[#f6f6f8] rounded-xl p-6 md:p-8">
            <div className="h-32 sm:h-40 rounded-lg overflow-hidden bg-[#0A0E1F] flex items-center justify-center">
              <img src={current.img} alt={current.name} className="max-h-14 object-contain" />
            </div>
            <div>
              <p className="text-sm text-[#4a4a5a] leading-relaxed mb-5">{current.text}</p>
              <button className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase w-fit">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
