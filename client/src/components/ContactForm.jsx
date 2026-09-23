import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [agree, setAgree] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <section className="bg-[#f2f2f2] py-16">
      <div className="section-container max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#10162B] mb-2">Get In Touch</h2>
          <p className="text-sm text-[#4a4a5a]">
            Enter your information and describe your inquiry. We&rsquo;ll get back to you as soon as
            possible. Thanks!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 space-y-5 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">First Name*</span>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">Last Name*</span>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
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
              className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
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
              className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange resize-y"
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
    </section>
  );
}
