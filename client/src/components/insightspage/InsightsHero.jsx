export default function InsightsHero({ title, img }) {
  return (
    <section className="relative h-56 md:h-64 overflow-hidden">
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative section-container h-full flex items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">{title}</h1>
      </div>
    </section>
  );
}
