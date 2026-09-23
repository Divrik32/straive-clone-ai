export default function JoinUsBanner() {
  return (
    <section
      className="text-white py-10"
      style={{ background: "linear-gradient(90deg, #6d28d9 0%, #4c1fe0 55%, #3b19d9 100%)" }}
    >
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-[15px] leading-relaxed max-w-2xl text-white/90">
          Straive (erstwhile SPi Global) has been amongst the pioneers in Asia to provide content
          outsourcing services to leading Fortune 500 companies. Today, Straive is a multiple
          award-winning market leader in technology-driven solutions for Data and Information
          Solutions, EdTech, Research and Education Content Services. Data and content are fast
          becoming key differentiators across the market. At Straive, we believe that our teams
          and our capability will make data and content accessible, adaptable, and actionable.
        </p>
        <button className="btn-pill border border-white text-white text-[11px] px-6 py-3 uppercase shrink-0 hover:bg-white hover:text-[#3b19d9] transition-colors">
          Join Us
        </button>
      </div>
    </section>
  );
}
