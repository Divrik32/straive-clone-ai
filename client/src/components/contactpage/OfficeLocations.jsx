import { useState } from "react";
import { ArrowRight } from "lucide-react";

const OFFICES = [
  {
    country: "Singapore",
    name: "Straive Inc",
    address: "77 Robinson Road, # 13-00, Singapore 068896",
  },
  {
    country: "India",
    name: "Gramener",
    address: "Ground Floor, South Tower, Vaishnavi Tech Park, Sarjapur Main Rd, Bellandur, Bengaluru \u2013 560103",
  },
  {
    country: "Nicaragua",
    name: "Straive",
    address: "Managua Free Trade Zone, Managua, Nicaragua",
  },
  {
    country: "Philippines",
    name: "Straive",
    address: "Pascor Drive, Sto. Ni\u00f1o, Para\u00f1aque City 1700, Philippines",
  },
  {
    country: "USA",
    name: "Straive US Inc",
    address: "2nd Floor, Suite 2400, 2810 Crossroads Drive, Madison, Wisconsin 53718",
  },
  {
    country: "UK",
    name: "SG Analytics",
    address: "No. 1 Poultry, City of London, London EC2R 8EJ, United Kingdom",
  },
  {
    country: "Vietnam",
    name: "Straive",
    address: "Room 303, 3rd Floor, Detech Building, 8 Ton That Thuyet Street, My Dinh II, Nam Tu Liem District, Ha Noi 100000",
  },
  {
    country: "Canada",
    name: "LearningMate Solutions, Inc.",
    address: "128 West Hastings St, Suite 210, Vancouver BC, Canada V6B 1G8",
  },
  {
    country: "South Africa",
    name: "LearningMate",
    address: "358 Victoria Rd, Salt River, Cape Town, 7925, South Africa",
  },
  {
    country: "UAE",
    name: "Straive",
    address: "Dubai, United Arab Emirates",
  },
];

export default function OfficeLocations() {
  const [active, setActive] = useState(0);
  const current = OFFICES[active];

  return (
    <section className="bg-[#f7f7f9] py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-4">
          Office Locations
        </h2>
        <p className="text-center text-sm text-[#4a4a5a] max-w-2xl mx-auto mb-10 leading-relaxed">
          Straive is a global leader in operationalizing enterprise AI across industries. With deep
          domain expertise&mdash;spanning engineers and PhDs&mdash;and over 100 AI accelerators, we
          deliver measurable impact and 3&ndash;5x ROI for our clients. Backed by EQT, a global
          private equity firm, Straive serves 300+ clients across 30 countries through a
          20,000-strong team of data, AI, and operations professionals.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {OFFICES.map((o, i) => (
            <button
              key={o.country}
              onClick={() => setActive(i)}
              className={`text-[12px] px-4 py-2 rounded-full font-medium transition-colors ${
                i === active
                  ? "bg-brand-orange text-white"
                  : "bg-white border border-black/10 text-[#3a3a4a] hover:border-brand-orange"
              }`}
            >
              {o.country}
            </button>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6 text-center">
          <h3 className="text-sm font-semibold text-[#10162B] mb-1">{current.country}</h3>
          <p className="text-[11px] text-[#7a7a8a] uppercase tracking-wide mb-3">{current.name}</p>
          <p className="text-sm text-[#4a4a5a] leading-relaxed mb-4">{current.address}</p>
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(current.address)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-orange"
          >
            Directions <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
