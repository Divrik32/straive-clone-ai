const UNSDG = [
  { label: "Education", stats: ["30 Programs", "25,000+ Beneficiaries", "810+ Volunteers", "3,700+ Volunteer Hours"] },
  { label: "Environment", stats: ["17 Conversions", "4,000+ Beneficiaries", "630+ Volunteers", "5,200+ Volunteer Hours"] },
  { label: "Diversity", stats: ["25 Programs", "10,000+ Beneficiaries", "35% Women", "110+ Volunteer Hours"] },
  { label: "Wellness", stats: ["18 Conversions", "2,150+ Beneficiaries", "530+ Volunteers", "1,280+ Volunteer Hours"] },
];

const CHANNELS = [
  { title: "Corporate Governance Email", text: "Good corporate governance is a universal entity. It ensures accountability, and ethical conduct in decision-making processes, reinforcing the interests of all stakeholders." },
  { title: "Whistleblower Grievance", text: "Through the Corporate Governance email, employees may choose to directly report any knowledge of violations against corporate policies and code of conduct." },
  { title: "My Voice Matters", text: "A confidential channel that empowers every employee to raise concerns freely, ensuring every voice is heard and valued." },
];

export default function EsgWellnessComms() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div id="wellness" className="scroll-mt-24 mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-2">Wellness</h3>
          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-3xl mb-8">
            We are committed to uplifting lives through transformative sustainable initiatives that
            provide clean and safe water in our communities, focusing on the ethical responsibility
            education, environment, and wellness programs.
          </p>

          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-sm">
              CSV
            </div>
            <div>
              <p className="text-sm font-semibold text-[#10162B] leading-tight">Let It Be, CSV</p>
              <p className="text-[11px] text-[#7a7a8a]">Being Good, Being Better</p>
            </div>
          </div>

          <h4 className="text-sm font-semibold text-[#10162B] mb-6">Our Contributions to the UNSDG</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {UNSDG.map((u) => (
              <div key={u.label} className="bg-[#f6f6f8] rounded-xl p-5">
                <h5 className="text-sm font-semibold text-brand-orange mb-3">{u.label}</h5>
                <ul className="space-y-1">
                  {u.stats.map((s) => (
                    <li key={s} className="text-[11px] text-[#4a4a5a]">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="#top" className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex">
            Back To Top
          </a>
        </div>

        <div id="comms" className="scroll-mt-24 bg-[#fff4ef] rounded-xl p-8">
          <h3 className="text-lg md:text-xl font-semibold text-[#10162B] mb-6">Employee Communication Channels</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {CHANNELS.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold text-[#10162B] mb-2 underline">{c.title}</h4>
                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <a href="#top" className="btn-pill btn-orange text-[10px] px-5 py-2.5 uppercase inline-flex">
            Back To Top
          </a>
        </div>
      </div>
    </section>
  );
}
