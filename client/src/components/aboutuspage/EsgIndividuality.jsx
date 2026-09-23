const SECTIONS = [
  {
    title: "Fostering Diversity, Equity, and Inclusion",
    text: "Platform for value of respect and a supportive culture, and one where each and every individual feels through the #CelebrateDiversity Programs that support diverse groups throughout the employee lifecycle. As an equal opportunity employer, we prohibit and address discrimination across all stages of employment.",
    img: "/images/life-team-collage-1.png",
  },
  {
    title: "Empowering Programs for Diverse Groups",
    text: "We support programs with far broader and comparatable workplace where everyone has equal access to opportunities and resources. These programs cater to diverse groups including self-identifying LGBTQ+ employees and their families, among others.",
    img: "/images/life-team-collage-2.webp",
  },
  {
    title: "Ensuring Gender Equality and Women's Empowerment",
    text: "Our labor force is empowered by 34% women, many of whom play important leadership roles. As a global company, we strive to ensure equal opportunities for career advancement across the gender spectrum, with respect to cultural nuances.",
    img: "/images/life-team-collage-3.jpg",
  },
  {
    title: "Supporting Parent-Employees",
    text: "We provide resources for employees across all stages of their parenthood journey. Through online support groups and webinars for expectant parents, we aim to build community that supports the everyday success of work and home, while offering flexible parenting policies.",
    img: "/images/menu-industries.jpg",
  },
  {
    title: "Promoting Health and Mental Well-Being",
    text: "We engage employees in self-care exercises and forums, and conduct activities that promote health and wellness. Our teams have access to comprehensive health counselling with utmost confidentiality.",
    img: "/images/menu-services.webp",
  },
];

export default function EsgIndividuality() {
  return (
    <section className="bg-[#f6f6f8] py-16 md:py-20">
      <div id="individuality" className="section-container scroll-mt-24">
        <h3 className="text-center text-lg md:text-xl font-semibold text-[#10162B] mb-12">
          Celebrating Each Other's Individuality
        </h3>

        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <div
              key={s.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="rounded-xl overflow-hidden h-48">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#10162B] mb-2">{s.title}</h4>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#top" className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex">
            Back To Top
          </a>
        </div>
      </div>
    </section>
  );
}
