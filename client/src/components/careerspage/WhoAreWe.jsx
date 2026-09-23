export default function WhoAreWe() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Who are we?</span>
          <p className="text-sm text-[#4a4a5a] leading-relaxed mt-4">
            Straive (erstwhile SPi Global) has been amongst the pioneers in Asia to provide content
            outsourcing services to leading Fortune 500 companies. Today, Straive is a multiple
            award-winning market leader in technology-driven solutions for Data and Information
            Solutions, EdTech, Research and Education Content Services. Data and content are fast
            becoming key differentiators across the market. At Straive, we believe that our teams
            and our capability will make data and content accessible, adaptable, and actionable.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg mx-auto max-w-xs w-full">
          <img
            src="/images/menu-news.jpg"
            alt="Team collaborating at Straive"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
