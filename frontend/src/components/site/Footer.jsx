import { menu, company, contact } from "../../lib/content";

export default function Footer() {
  const handleAnchor = (href) => (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid="site-footer"
      style={{ backgroundColor: "#063462" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center w-11 h-11 border border-white/30 font-serif text-lg"
              >
                PT
              </span>
              <div>
                <div className="font-serif text-lg">{company.shortName}</div>
                <div
                  className="text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: "#9f6c5c" }}
                >
                  {company.domain}
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/65 leading-relaxed max-w-sm">
              Attorney-led title, escrow, and closing services for residential,
              commercial, and refinancing transactions.
            </p>
            <div
              className="mt-6 inline-flex items-center gap-3 font-serif italic text-sm"
              style={{ color: "#9f6c5c" }}
            >
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: "#9f6c5c" }}
              />
              {company.extra}
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <div
              className="text-[11px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "#9f6c5c" }}
            >
              Sitemap
            </div>
            <ul className="space-y-3">
              {menu.map((m) => (
                <li key={m.href}>
                  <a
                    href={m.href}
                    onClick={handleAnchor(m.href)}
                    data-testid={`footer-link-${m.href.replace("#", "")}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div
              className="text-[11px] uppercase tracking-[0.25em] mb-4"
              style={{ color: "#9f6c5c" }}
            >
              Get in touch
            </div>
            <address className="not-italic text-sm text-white/80 leading-relaxed space-y-2">
              <div>{contact.address}</div>
              <div>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-white"
                  data-testid="footer-phone"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white"
                  data-testid="footer-email"
                >
                  {contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/55">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
          <div className="text-xs text-white/55">
            Licensed Texas Title Company.
          </div>
        </div>
      </div>
    </footer>
  );
}
