import { useState } from "react";

function GlobeGraphic() {
  return (
    <svg viewBox="0 0 240 200" className="w-full max-w-[260px] mx-auto" fill="none">
      <circle cx="120" cy="100" r="55" fill="#e5e5ea" />
      <circle cx="120" cy="100" r="55" stroke="#c9c9d4" strokeWidth="1" />
      <ellipse cx="120" cy="100" rx="90" ry="30" stroke="#c9c9d4" strokeWidth="1" transform="rotate(-15 120 100)" />
      <ellipse cx="120" cy="100" rx="90" ry="30" stroke="#c9c9d4" strokeWidth="1" transform="rotate(15 120 100)" />
      <ellipse cx="120" cy="100" rx="55" ry="90" stroke="#c9c9d4" strokeWidth="1" />
      <circle cx="55" cy="70" r="4" fill="#F1591F" />
      <circle cx="190" cy="60" r="3" fill="#F1591F" />
      <circle cx="70" cy="150" r="3" fill="#F1591F" />
      <circle cx="185" cy="130" r="4" fill="#F1591F" />
      <circle cx="150" cy="40" r="2.5" fill="#F1591F" />
    </svg>
  );
}

export default function GetInTouch() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col items-center md:items-start md:pt-6">
          <h2 className="text-xl font-semibold text-brand-orange mb-8 text-center md:text-left">
            We want to hear from you
          </h2>
          <GlobeGraphic />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#10162B] mb-2">Leave a Message</h3>
          <p className="text-sm text-[#4a4a5a] mb-6">
            Our solutioning team is eager to know about your challenge and how we can help.
          </p>

          <form onSubmit={handleSubmit} className="bg-[#f7f7f9] rounded-lg p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-[11px] font-medium text-[#10162B]">First Name*</span>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
                />
              </label>
              <label className="block">
                <span className="text-[11px] font-medium text-[#10162B]">Last Name*</span>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">Work Email*</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
              />
            </label>

            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">Message*</span>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange resize-y bg-white"
              />
            </label>

            <p className="text-[10px] text-[#7a7a8a] leading-relaxed">
              By providing my contact information, I authorize Straive to send me personalized
              communications about its solutions and services. Please see our{" "}
              <a href="#" className="text-brand-orange underline">Privacy Policy</a> for more details
              or to opt out at any time.
            </p>

            <label className="flex items-center gap-2 text-[11px] text-[#4a4a5a]">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-brand-orange"
              />
              Contact me to schedule a Solution Discussion.
            </label>

            <button type="submit" className="btn-pill btn-orange text-[11px] px-8 py-3 uppercase">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
