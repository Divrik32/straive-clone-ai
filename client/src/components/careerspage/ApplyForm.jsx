import { useState } from "react";

const POSITIONS = [
  "Software Development",
  "Frontend Development",
  "Backend Development",
  "Data & Analytics",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "UI/UX & Design",
  "Business & Client Solutions",
  "Other",
];

const SOURCES = [
  "LinkedIn",
  "Job Board",
  "Referral",
  "Work Science Website",
  "Social Media",
  "Other",
];

function GlobeGraphic() {
  return (
    <svg
      viewBox="0 0 240 200"
      className="w-full max-w-xs mx-auto"
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

export default function ApplyForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    source: "",
    message: "",
  });

  const [agree, setAgree] = useState(false);

  const safePositions = Array.isArray(POSITIONS) ? POSITIONS : [];
  const safeSources = Array.isArray(SOURCES) ? SOURCES : [];

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thanks for your interest in Work Science! Our team will get in touch with you soon."
    );
  };

  return (
    <section
      id="career-application"
      className="bg-[#f2f2f2] py-16 md:py-20 scroll-mt-24"
    >
      <div className="section-container grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col items-center md:items-start md:pt-6">
          <h2 className="text-xl font-semibold text-brand-orange mb-8 text-center md:text-left">
            Take the Next Step in Your Career
          </h2>

          <GlobeGraphic />

          <p className="text-sm text-[#4a4a5a] text-center md:text-left max-w-sm leading-relaxed mt-6">
            Tell us about your experience, skills, and the kind of work you
            would like to explore. We are always interested in connecting with
            people who enjoy building technology and solving problems.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#10162B] mb-2">
            Start a Conversation
          </h3>

          <p className="text-sm text-[#4a4a5a] mb-6">
            Share your details and tell us about the type of opportunity you
            are looking for.
          </p>

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

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-[11px] font-medium text-[#10162B]">
                  Email*
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
                  Phone Number
                </span>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">
                Area of Interest
              </span>

              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
              >
                <option value="">Select an area</option>

                {safePositions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">
                How did you hear about us?
              </span>

              <select
                name="source"
                value={form.source}
                onChange={handleChange}
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange bg-white"
              >
                <option value="">Select an option</option>

                {safeSources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-[11px] font-medium text-[#10162B]">
                Tell Us About Yourself
              </span>

              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your skills, experience, interests, or the type of opportunity you are looking for..."
                className="mt-1 w-full border border-black/15 rounded-md px-3 py-2 text-sm outline-none focus:border-brand-orange resize-y"
              />
            </label>

            <p className="text-[10px] text-[#7a7a8a] leading-relaxed">
              By submitting your information, you agree that Work Science may
              use the details provided to respond to your career inquiry and
              discuss relevant opportunities.
            </p>

            <label className="flex items-center gap-2 text-[11px] text-[#4a4a5a]">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-brand-orange"
              />

              I would like to hear about future career opportunities at Work
              Science.
            </label>

            <button
              type="submit"
              className="btn-pill btn-orange text-[11px] px-8 py-3 uppercase"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}