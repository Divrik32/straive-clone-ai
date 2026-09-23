import { Link } from "react-router-dom";
import { Zap, Mail } from "lucide-react";

const SOCIALS = ["in", "f", "x"];

const COLUMNS = [
  {
    title: "Services",
    links: [
      "Data Management",
      "Insights & Analytics",
      "AI Engineering",
      "Product Engg. & Ops",
      "IT & Tech Ops",
      "AI Customer Experience",
      "Generative AI",
    ],
  },
  {
    title: "Industries",
    links: [
      "Investment Management",
      "Banking & Financial Services",
      "Education",
      "Energy",
      "Logistics & Supply Chain",
      "Pharma & Life Sciences",
      "Retail Tech, Entertainment & Media",
      "Science & Research",
    ],
  },
  {
    title: "Thought Leadership",
    links: ["Blogs", "Case Studies", "Brochures", "Whitepapers", "E-books", "Webinars", "Infographics", "Videos"],
  },
  {
    title: "About Us",
    links: [
      { label: "Careers", path: "/careers" },
      { label: "Contact Us", path: "/contact-us" },
    ],
  },
];

const BRANDS = ["Gramener", "LearningMate", "DOUBLE LINE", "SG Analytics"];

export default function Footer() {
  return (
    <footer className="bg-[#0A0E1F] text-white/80 pt-14 pb-6">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-wide mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => {
                  const isRouted = typeof link === "object" && link.path;
                  const label = isRouted ? link.label : link;
                  return (
                    <li key={label}>
                      {isRouted ? (
                        <Link to={link.path} className="text-[11px] text-white/60 hover:text-brand-orange transition-colors">
                          {label}
                        </Link>
                      ) : (
                        <a href="#" className="text-[11px] text-white/60 hover:text-brand-orange transition-colors">
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
            <h4 className="text-white text-xs font-semibold uppercase tracking-wide mb-4">Connect with us</h4>
            <div className="flex gap-3">
              {SOCIALS.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-[11px] font-semibold hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-white/10 pt-10 pb-8">
          <a href="/" className="flex items-center gap-1 mb-6">
            <Zap className="w-6 h-6 text-brand-orange fill-brand-orange" strokeWidth={2.5} />
            <span className="text-xl font-bold text-white">
              Str<span className="text-brand-orange">ai</span>ve
            </span>
          </a>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70">
            {BRANDS.map((b) => (
              <span key={b} className="text-sm font-semibold tracking-wide text-white/70">
                {b}
                <span className="block text-[9px] font-normal text-white/40 text-center">A Straive Company</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 gap-2 text-[11px] text-white/40">
          <span>© 2026 Straive. All rights reserved</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70">Cookie Policy</a>
            <a href="#" className="hover:text-white/70">Terms of Service</a>
            <a href="#" className="hover:text-white/70">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
