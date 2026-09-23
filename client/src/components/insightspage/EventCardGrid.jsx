import { MapPin, Calendar } from "lucide-react";

export default function EventCardGrid({ items }) {
  return (
    <section className="bg-white py-14">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, location, date, excerpt, img }) => (
            <article key={title} className="border border-black/10 rounded-lg overflow-hidden flex flex-col">
              <div className="h-32 overflow-hidden">
                <img src={img} alt={location} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[11px] text-[#7a7a8a] flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3" /> {location}
                </p>
                <h3 className="text-[13px] font-semibold text-[#10162B] leading-snug mb-1">{title}</h3>
                <p className="text-[11px] text-[#7a7a8a] flex items-center gap-1 mb-2">
                  <Calendar className="w-3 h-3" /> {date}
                </p>
                {excerpt && <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-3 flex-1">{excerpt}</p>}
                <a href="#" className="text-[11px] font-semibold text-brand-orange">
                  Meet Straive at {title} &rsaquo;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
