import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const SOCIALS = ["in", "f", "x"];

const COLUMNS = [
  {
    title: "AI Services",
    links: [
      "Generative AI",
      "AI Automation",
      "AI Engineering",
      "AI Agents",
      "Machine Learning",
      "AI Integration",
      "Intelligent Workflows",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Enterprise AI",
      "Customer Experience AI",
      "Document Intelligence",
      "Predictive Analytics",
      "AI Assistants",
      "Business Process Automation",
    ],
  },
  {
    title: "Industries",
    links: [
      "Banking & Finance",
      "Healthcare",
      "Education",
      "Retail & E-commerce",
      "Logistics",
      "Technology",
      "Professional Services",
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about-us" },
      { label: "Careers", path: "/careers" },
      { label: "Contact Us", path: "/contact-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0E1F] text-white/80 pt-14 pb-6">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wide mb-4">
                {col.title}
              </h4>

              <ul className="space-y-2">
                {col.links.map((link) => {
                  const isRouted =
                    typeof link === "object" && link.path;

                  const label = isRouted ? link.label : link;

                  return (
                    <li key={label}>
                      {isRouted ? (
                        <Link
                          to={link.path}
                          className="text-[11px] text-white/60 hover:text-brand-orange transition-colors"
                        >
                          {label}
                        </Link>
                      ) : (
                        <a
                          href="#"
                          className="text-[11px] text-white/60 hover:text-brand-orange transition-colors"
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wide mb-4">
              Connect With Us
            </h4>

            <div className="flex gap-3">
              {SOCIALS.map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-[11px] font-semibold hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  {label}
                </a>
              ))}

              <a
                href="#"
                aria-label="Email"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[11px] text-white/50 leading-relaxed mt-5 max-w-[220px]">
              Building practical AI solutions that help organizations
              automate processes, improve decisions, and create better
              digital experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-white/10 pt-10 pb-8">
          <a
            href="/"
            className="flex items-center gap-2 shrink-0 mb-6"
          >
            <img
              src="/images/company-logo.jpg"
              alt="Work Science logo"
              className="w-8 h-8 object-contain"
            />

            <span className="text-xl font-bold tracking-tight">
              <span className="text-blue-600">Work</span>{" "}
              <span className="text-brand-orange">Science</span>
            </span>
          </a>

          <p className="text-[11px] text-white/40 text-center max-w-xl leading-relaxed">
            Work Science Digital Solutions delivers AI-powered technology
            solutions for modern businesses, combining intelligent
            automation, generative AI, and enterprise software engineering.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 gap-2 text-[11px] text-white/40">
          <span>
            © 2026 Work Science Digital Solutions. All rights reserved.
          </span>

          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-white/70 transition-colors"
            >
              Cookie Policy
            </a>

            <a
              href="#"
              className="hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}