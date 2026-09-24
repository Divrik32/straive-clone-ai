const SECTIONS = [
  {
    title: "Fostering Diversity, Equity, and Inclusion",
    text: "We promote a respectful and supportive workplace where individuals from different backgrounds, experiences, and perspectives can contribute and grow. We are committed to equal opportunity and to maintaining a workplace free from discrimination.",
    img: "/images/life-team-collage-1.png",
  },
  {
    title: "Empowering Programs for Diverse Groups",
    text: "We encourage an environment where people have fair access to opportunities, resources, learning, and career development. Our workplace culture values individuality and diverse perspectives.",
    img: "/images/life-team-collage-2.webp",
  },
  {
    title: "Supporting Gender Equality",
    text: "We aim to create equal opportunities for career development and advancement across our workforce while respecting the different cultural and social contexts in which our teams operate.",
    img: "/images/life-team-collage-3.jpg",
  },
  {
    title: "Supporting Parent-Employees",
    text: "We recognize the different stages of employees' personal and professional journeys and aim to provide a supportive environment that helps employees balance their work and family responsibilities.",
    img: "/images/menu-industries.jpg",
  },
  {
    title: "Promoting Health and Mental Well-Being",
    text: "We encourage healthy workplace practices, employee well-being, awareness, and access to appropriate support resources that help our people maintain a healthy and productive work environment.",
    img: "/images/menu-services.webp",
  },
];

export default function EsgIndividuality() {
  const safeSections = Array.isArray(SECTIONS) ? SECTIONS : [];

  return (
    <section className="bg-[#f6f6f8] py-16 md:py-20">
      <div id="individuality" className="section-container scroll-mt-24">
        <h3 className="text-center text-lg md:text-xl font-semibold text-[#10162B] mb-12">
          Celebrating Each Other's Individuality
        </h3>

        <div className="space-y-10">
          {safeSections.map((s, i) => (
            <div
              key={s.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                i % 2 === 1
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div className="rounded-xl overflow-hidden h-48">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#10162B] mb-2">
                  {s.title}
                </h4>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#top"
            className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex"
          >
            Back To Top
          </a>
        </div>
      </div>
    </section>
  );
}