import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks! We'll get back to you soon.");
  };

  return (
    <section className="bg-[#f2f2f2] py-16">
      <div className="section-container max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#10162B] mb-2">
            Let's Build Something Intelligent
          </h2>

          <p className="text-sm text-[#4a4a5a]">
            Tell us about your business challenge, technology requirement, or
            AI opportunity. Our team will get in touch with you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 md:p-8 space-y-5 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">
                First Name*
              </span>

              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
              />
            </label>

            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">
                Last Name*
              </span>

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
            <span className="text-[11px] font-medium text-[#10162B]">
              Work Email*
            </span>

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
            <span className="text-[11px] font-medium text-[#10162B]">
              Tell Us About Your Requirement*
            </span>

            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project, AI requirement, or business challenge..."
              className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange resize-y"
            />
          </label>

          <p className="text-[10px] text-[#7a7a8a] leading-relaxed">
            By submitting this form, you agree that Work Science may use the
            information provided to respond to your inquiry and discuss
            relevant products or services.
          </p>

          <label className="flex items-center gap-2 text-[11px] text-[#4a4a5a]">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="accent-brand-orange"
            />

            I would like to discuss an AI or technology solution.
          </label>

          <button
            type="submit"
            className="btn-pill btn-orange text-[11px] px-8 py-3 uppercase"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}