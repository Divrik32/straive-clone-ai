const LEADERS = [
  {
    name: "Samudra Sen",
    role: "Principal Founder & CEO, LearningMate",
    img: "/images/menu-about-us.jpg",
  },
  {
    name: "Kumar Subramaniam",
    role: "Chief Risk Officer & Head of Corporate Development",
    img: "/images/menu-about-us.jpg",
  },
  {
    name: "Amravat Roy",
    role: "Chief Technology Officer",
    img: "/images/menu-about-us.jpg",
  },
  {
    name: "Ankor Rai",
    role: "Chief Operating Officer",
    img: "/images/menu-about-us.jpg",
  },
];

export default function LeadershipGrid() {
  const safeLeaders = Array.isArray(LEADERS) ? LEADERS : [];

  return (
    <section className="bg-[#f6f6f8] py-16 md:py-24">
      <div className="section-container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#10162B] mb-2">
          Guided By Experienced Leaders
        </h2>

        <p className="text-center text-sm text-[#4a4a5a] max-w-xl mx-auto mb-12">
          Our leadership brings experience across technology, data, AI, risk,
          and enterprise operations to guide the organization's continued
          growth and innovation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safeLeaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-[#10162B] mb-1">
                  {leader.name}
                </h3>

                <p className="text-[11px] text-[#7a7a8a] leading-relaxed">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}