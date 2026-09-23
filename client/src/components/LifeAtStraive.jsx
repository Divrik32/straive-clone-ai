const TAGS = ["Belonging", "Wellness Activities", "Mentorship", "Learning"];

export default function LifeAtStraive() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <div className="relative bg-[#f7f7f9] rounded-2xl px-6 py-14 overflow-hidden">
          {/* floating tag pills */}
          <span className="hidden md:inline-block absolute top-6 left-16 text-[10px] bg-white border border-black/10 rounded-full px-3 py-1.5 shadow-sm">
            {TAGS[0]}
          </span>
          <span className="hidden md:inline-block absolute top-2 left-1/3 text-[10px] bg-emerald-100 text-emerald-700 rounded-full px-3 py-1.5 shadow-sm">
            {TAGS[1]}
          </span>
          <span className="hidden md:inline-block absolute bottom-10 left-20 text-[10px] bg-violet-100 text-violet-700 rounded-full px-3 py-1.5 shadow-sm">
            {TAGS[2]}
          </span>
          <span className="hidden md:inline-block absolute bottom-16 right-24 text-[10px] bg-pink-100 text-pink-700 rounded-full px-3 py-1.5 shadow-sm">
            {TAGS[3]}
          </span>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <img src="/images/life-team-collage-1.svg" alt="Life at Straive" className="w-16 h-16 rounded-xl object-cover" />
            <img src="/images/life-team-collage-2.svg" alt="Life at Straive" className="w-20 h-20 rounded-xl object-cover" />
            <img src="/images/life-team-collage-3.svg" alt="Life at Straive" className="w-16 h-16 rounded-xl object-cover" />
          </div>

          <div className="text-center max-w-lg mx-auto mb-8">
            <h2 className="text-2xl font-semibold text-[#10162B] mb-3">Explore Life @ Straive</h2>
            <p className="text-sm text-[#4a4a5a] leading-relaxed">
              At Straive, we believe that our teams and our capability will make data and AI
              accessible, adaptable, and actionable.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">Learn More</button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <img src="/images/life-team-collage-2.svg" alt="Life at Straive" className="w-20 h-20 rounded-xl object-cover" />
            <img src="/images/life-team-collage-3.svg" alt="Life at Straive" className="w-20 h-20 rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
