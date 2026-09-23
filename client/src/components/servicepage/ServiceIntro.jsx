export default function ServiceIntro({ heading, body }) {
  return (
    <section className="bg-white py-14">
      <div className="section-container grid md:grid-cols-2 gap-10 items-start">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B]">{heading}</h2>
        <p className="text-sm text-[#4a4a5a] leading-relaxed">{body}</p>
      </div>
    </section>
  );
}
