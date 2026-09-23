import { Play } from "lucide-react";

export default function VideoCardGrid({ items, columns = 3 }) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-white py-14">
      <div className="section-container">
        <div className={`grid ${colClass} gap-6`}>
{items.map(({ title, excerpt, videoUrl }) => (
  <article
    key={title}
    className="border border-black/10 rounded-lg overflow-hidden flex flex-col"
  >
    <div className="relative aspect-video overflow-hidden bg-black">
      <iframe
        src={videoUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>

    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-[13px] font-semibold text-[#10162B] leading-snug mb-2">
        {title}
      </h3>

      {excerpt && (
        <p className="text-[12px] text-[#4a4a5a] leading-relaxed mb-3 flex-1">
          {excerpt}
        </p>
      )}

      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-semibold text-brand-orange"
      >
        Watch Now &rsaquo;
      </a>
    </div>
  </article>
))}
        </div>
      </div>
    </section>
  );
}
