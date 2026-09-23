export default function AcceleratorsRow({ heading, accelerators, techLogos }) {
  return (
    <section className="bg-white pb-14">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-8">
          {heading}
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 mb-14">
          {accelerators.map(({ name, sub, color, img }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center gap-3"
            >
              {img ? (
                <img
                  src={img}
                  alt={name}
                  className="w-14 h-14 object-contain"
                />
              ) : (
                <span
                  className="w-14 h-14 rounded-full"
                  style={{ backgroundColor: color }}
                />
              )}

              <div>
                <p className="text-sm font-semibold text-[#10162B]">
                  {name}
                </p>
                <p className="text-[11px] text-[#7a7a8a]">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {techLogos && (
          <>
            <h3 className="text-sm font-medium text-[#7a7a8a] mb-6">
              Experience the power of cutting-edge technologies
            </h3>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {techLogos.map(({ name, img }) => (
                <div key={name} className="flex items-center justify-center">
                  {img ? (
                    <img
                      src={img}
                      alt={name}
                      className="max-w-[110px] max-h-10 object-contain"
                    />
                  ) : (
                    <span className="text-sm font-semibold text-[#3a3a4a]">
                      {name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}