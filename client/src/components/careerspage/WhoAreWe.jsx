export default function WhoAreWe() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">
            Who We Are
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mt-3 mb-4">
            A Team That Builds With Technology
          </h2>

          <p className="text-sm text-[#4a4a5a] leading-relaxed">
            Work Science is a technology-focused organization working across
            software development, data, analytics, cloud technologies, and
            artificial intelligence. We bring together people with different
            technical backgrounds to solve business problems through practical
            and scalable digital solutions.
          </p>

          <p className="text-sm text-[#4a4a5a] leading-relaxed mt-4">
            Our teams work on real-world projects where learning, collaboration,
            problem solving, and continuous improvement are part of everyday
            work. We believe people do their best work when they have the
            opportunity to learn, contribute, and take ownership.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg mx-auto max-w-xs w-full">
          <img
            src="/images/menu-news.jpg"
            alt="Work Science team collaborating"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}