import { useState } from "react";

function GlobeGraphic() {
  return (
    <svg
      viewBox="0 0 240 200"
      className="w-full max-w-[260px] mx-auto"
      fill="none"
    >
      <circle cx="120" cy="100" r="55" fill="#e5e5ea" />

      <circle
        cx="120"
        cy="100"
        r="55"
        stroke="#c9c9d4"
        strokeWidth="1"
      />

      <ellipse
        cx="120"
        cy="100"
        rx="90"
        ry="30"
        stroke="#c9c9d4"
        strokeWidth="1"
        transform="rotate(-15 120 100)"
      />

      <ellipse
        cx="120"
        cy="100"
        rx="90"
        ry="30"
        stroke="#c9c9d4"
        strokeWidth="1"
        transform="rotate(15 120 100)"
      />

      <ellipse
        cx="120"
        cy="100"
        rx="55"
        ry="90"
        stroke="#c9c9d4"
        strokeWidth="1"
      />

      <circle cx="55" cy="70" r="4" fill="#F1591F" />
      <circle cx="190" cy="60" r="3" fill="#F1591F" />
      <circle cx="70" cy="150" r="3" fill="#F1591F" />
      <circle cx="185" cy="130" r="4" fill="#F1591F" />
      <circle cx="150" cy="40" r="2.5" fill="#F1591F" />
    </svg>
  );
}

export default function GetInTouch() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [agree, setAgree] = useState(false);

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting Work Science. Our team will get back to you soon."
    );
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-container grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col items-center md:items-start md:pt-6">
          <span className="text-brand-orange text-[11px] uppercase tracking-widest font-semibold mb-3">
            Start a Conversation
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B] mb-4 text-center md:text-left">
            Let&apos;s Talk About Your Next Idea
          </h2>

          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-md text-center md:text-left mb-8">
            Whether you are exploring AI, software development, data
            analytics, cloud technologies, or digital transformation, our
            team is ready to understand your requirements.
          </p>

          <GlobeGraphic />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#10162B] mb-2">
            Tell Us About Your Requirement
          </h3>

          <p className="text-sm text-[#4a4a5a] mb-6">
            Share a few details about your project or business challenge and
            our team will get in touch with you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-[#f7f7f9] rounded-lg p-6 md:p-8 space-y-5"
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
                  className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
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
                  className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
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
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
              />
            </label>

            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">
                Tell Us About Your Requirement*
              </span>

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project, business challenge, technology requirement, or AI opportunity..."
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange resize-y bg-white"
              />
            </label>

            <p className="text-[10px] text-[#7a7a8a] leading-relaxed">
              By submitting your information, you agree that Work Science may
              use the details provided to respond to your inquiry and discuss
              relevant technology solutions or services.
            </p>

            <label className="flex items-center gap-2 text-[11px] text-[#4a4a5a]">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-brand-orange"
              />

              I would like to discuss a technology or AI solution.
            </label>

            <button
              type="submit"
              className="btn-pill btn-orange text-[11px] px-8 py-3 uppercase"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}