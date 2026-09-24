import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const LOCATIONS = [
  { name: "Canada", top: "24%", left: "30%" },
  { name: "USA", top: "36%", left: "29%" },
  { name: "Nicaragua", top: "48%", left: "30%" },
  { name: "United Kingdom", top: "27%", left: "50%" },
  { name: "South Africa", top: "69%", left: "55%" },
  { name: "UAE", top: "48%", left: "59%" },
  { name: "India", top: "48%", left: "67%" },
  { name: "Vietnam", top: "50%", left: "72%" },
  { name: "Singapore", top: "60%", left: "74%" },
  { name: "Philippines", top: "47%", left: "78%" },
];

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function CareerMatchMap() {
  const safeLocations = Array.isArray(LOCATIONS) ? LOCATIONS : [];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-3">
          Opportunities Across Locations
        </h2>

        <p className="text-center text-sm text-[#4a4a5a] max-w-2xl mx-auto mb-12">
          Technology teams can collaborate across locations, disciplines, and
          time zones. Explore opportunities and connect with people who bring
          different experiences and perspectives to the work we do.
        </p>

        <div className="relative w-full max-w-5xl mx-auto aspect-[16/8] overflow-hidden">
          <div className="absolute inset-0">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 125,
                center: [0, 10],
              }}
              width={1000}
              height={500}
              className="w-full h-full"
            >
              <defs>
                <pattern
                  id="worldDots"
                  width="9"
                  height="9"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="1.5"
                    fill="#c7c7d1"
                  />
                </pattern>
              </defs>

              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  (Array.isArray(geographies) ? geographies : []).map(
                    (geo) => (
                      <Geography
                        key={geo.rpiKey}
                        geography={geo}
                        fill="url(#worldDots)"
                        stroke="none"
                        style={{
                          default: {
                            outline: "none",
                          },
                          hover: {
                            outline: "none",
                          },
                          pressed: {
                            outline: "none",
                          },
                        }}
                      />
                    )
                  )
                }
              </Geographies>
            </ComposableMap>
          </div>

          {safeLocations.map((loc) => (
            <span
              key={loc.name}
              className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center z-10"
              style={{
                top: loc.top,
                left: loc.left,
              }}
            >
              <span className="whitespace-nowrap bg-[#F15A29] text-white text-[10px] md:text-[12px] font-medium px-3 py-1.5 rounded-md shadow-sm mb-1">
                {loc.name}
              </span>

              <span className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-[#F15A29]/20" />

                <span className="relative w-3 h-3 rounded-full bg-[#F15A29] border-2 border-white shadow-md" />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}