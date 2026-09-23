import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import NavDropdown from "./NavDropdown";
import { MEGA_MENUS } from "./megaMenuData";

const NAV_LINKS = ["Services", "Industries", "Insights", "About Us", "Careers"];
const NAV_PATHS = { Careers: "/careers" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const activeMenu = hovered ? MEGA_MENUS[hovered] : null;

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#f2f2f2] border-b border-black/5 relative"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="section-container flex h-[64px] items-center justify-between">
        {/* Logo */}
<a href="/" className="flex items-center gap-2 shrink-0"> <img src="images/company-logo.jpg" alt="Work Science logo" className="w-8 h-8 object-contain" /> <span className="text-xl font-bold tracking-tight"> <span className="text-blue-600">Work</span>{" "} <span className="text-brand-orange">Science</span> </span> </a>

        {/* Nav + right actions grouped together: this wrapper's own edges define the
            exact left/right bounds of the mega menu dropdown below (from "Services"
            start to "Contact Us" end), matching the reference screenshot. */}
        <div className="hidden lg:flex items-center gap-10 relative">
          {/* Desktop nav */}
          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((label) => {
              const hasMenu = !!MEGA_MENUS[label];
              const isActive = hovered === label;
              const path = NAV_PATHS[label];

              if (path) {
                return (
                  <Link
                    key={label}
                    to={path}
                    onMouseEnter={() => setHovered(null)}
                    className="flex items-center gap-1 text-[13px] font-medium text-[#2a2a3a] hover:text-brand-orange transition-colors"
                  >
                    {label}
                  </Link>
                );
              }

              return (
                <button
                  key={label}
                  onMouseEnter={() => hasMenu && setHovered(label)}
                  className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                    isActive ? "text-brand-orange" : "text-[#2a2a3a] hover:text-brand-orange"
                  }`}
                >
                  {label}
                  {hasMenu && <ChevronDown className={`w-3 h-3 transition-transform ${isActive ? "rotate-180" : ""}`} />}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-[#2a2a3a] hover:text-brand-orange transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <Link to="/contact-us" className="btn-pill btn-orange text-[11px] px-5 py-[10px] uppercase">
              Contact Us
            </Link>
          </div>

          {/* Mega menu dropdown (desktop, hover-triggered) — spans exactly
              from the left edge of this wrapper (start of "Services") to its
              right edge (end of "Contact Us"), never full page width. */}
          {activeMenu && (
            <div className="absolute -left-6 -right-6 top-[25px] bg-white shadow-2xl border-t border-black/5 z-40 rounded-b-2xl overflow-hidden">
              <div className="px-10 py-8">
                <NavDropdown menu={activeMenu} onNavigate={() => setHovered(null)} />
              </div>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-[#1a1a2e]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#f2f2f2] border-t border-black/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((label) => {
            const path = NAV_PATHS[label];
            if (path) {
              return (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-sm font-medium text-[#2a2a3a]"
                >
                  {label}
                </Link>
              );
            }
            return (
              <button key={label} className="flex items-center justify-between text-sm font-medium text-[#2a2a3a]">
                {label}
                {MEGA_MENUS[label] && <ChevronDown className="w-3 h-3" />}
              </button>
            );
          })}
          <Link
            to="/contact-us"
            onClick={() => setOpen(false)}
            className="btn-pill btn-orange text-[11px] px-5 py-[10px] uppercase w-fit"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
