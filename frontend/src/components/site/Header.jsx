import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { menu, company } from "../../lib/content";

export default function Header({ onSubmitDealClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#063462" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Brand */}
        <a
          href="#home"
          data-testid="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleAnchor("#home");
          }}
          className="flex items-center gap-3 group"
        >
          <span
            className="inline-flex items-center justify-center w-10 h-10 border border-white/30 text-white font-serif text-lg tracking-wider"
            style={{ letterSpacing: "0.05em" }}
          >
            PT
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-serif text-base">
              {company.shortName}
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.25em]"
              style={{ color: "#9f6c5c" }}
            >
              {company.domain}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          data-testid="primary-nav"
        >
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.href.replace("#", "")}`}
              onClick={(e) => {
                e.preventDefault();
                handleAnchor(item.href);
              }}
              className="relative px-4 py-2 text-sm tracking-wide text-white/85 hover:text-white transition-colors"
            >
              {item.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onSubmitDealClick}
            data-testid="header-submit-deal-btn"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-colors"
            style={{ backgroundColor: "#9f6c5c" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8b5c4d")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9f6c5c")}
          >
            Submit a deal
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ backgroundColor: "#063462" }}
          data-testid="mobile-nav"
        >
          <nav className="px-6 py-4 flex flex-col">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`mobile-nav-link-${item.href.replace("#", "")}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchor(item.href);
                }}
                className="py-3 text-white/90 border-b border-white/10 last:border-0 text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onSubmitDealClick && onSubmitDealClick();
              }}
              data-testid="mobile-submit-deal-btn"
              className="mt-4 px-5 py-3 text-sm font-medium text-white"
              style={{ backgroundColor: "#9f6c5c" }}
            >
              Submit a deal
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
