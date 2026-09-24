import { useState } from "react";
import { ArrowRight } from "lucide-react";

const LOCATIONS = [
  {
    region: "Delhi",
    title: "Delhi, India",
    description:
      "Connect with our team in Delhi to explore software solutions, data-driven technologies, AI, automation, and digital transformation.",
    mapUrl:
      "https://maps.app.goo.gl/RJQ67VrCDwk8x5KS9",
  },
  {
    region: "Noida",
    title: "Noida, Uttar Pradesh",
    description:
      "Connect with our team in Noida to discuss software development, data, analytics, AI, cloud technologies, and enterprise solutions.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Work+Science+Noida",
  },
];

export default function OfficeLocations() {
  const safeLocations = Array.isArray(LOCATIONS) ? LOCATIONS : [];
  const [active, setActive] = useState(0);

  const current = safeLocations[active] || safeLocations[0];

  if (!current) {
    return null;
  }

  const handleContact = () => {
    window.open(current.mapUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-[#f7f7f9] py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-4">
          Our Locations
        </h2>

        <p className="text-center text-sm text-[#4a4a5a] max-w-2xl mx-auto mb-10 leading-relaxed">
          Work Science operates from Noida and Delhi, India. Connect with our
          teams to discuss your technology requirements, projects, and
          opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {safeLocations.map((location, index) => (
            <button
              key={location.region}
              onClick={() => setActive(index)}
              className={`text-[12px] px-5 py-2 rounded-full font-medium transition-colors ${
                index === active
                  ? "bg-brand-orange text-white"
                  : "bg-white border border-black/10 text-[#3a3a4a] hover:border-brand-orange"
              }`}
            >
              {location.region}
            </button>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6 text-center">
          <h3 className="text-sm font-semibold text-[#10162B] mb-2">
            {current.title}
          </h3>

          <p className="text-[11px] text-brand-orange uppercase tracking-wide mb-4">
            Work Science
          </p>

          <p className="text-sm text-[#4a4a5a] leading-relaxed mb-5">
            {current.description}
          </p>

          <button
            onClick={handleContact}
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-orange"
          >
            Contact Our Team
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}