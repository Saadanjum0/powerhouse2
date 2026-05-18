import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { contact, company } from "../../lib/content";

export default function Contact({ onSubmitDealClick }) {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#f7f5f1] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left — heading */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="copper-rule" />
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "#9f6c5c" }}
            >
              Contact Us
            </span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: "#131e3d" }}
            data-testid="contact-heading"
          >
            Let's get your closing started.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 max-w-md">
            Whether you're starting a transaction or just have questions about
            title, escrow, or closing services — our team is ready to help.
          </p>

          <button
            type="button"
            onClick={onSubmitDealClick}
            data-testid="contact-submit-deal-btn"
            className="mt-8 group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors"
            style={{ backgroundColor: "#9f6c5c" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#8b5c4d")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#9f6c5c")
            }
          >
            Submit a deal
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Right — info cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          <InfoCard
            icon={<MapPin size={20} />}
            label="Office"
            value={contact.address}
            testId="contact-address"
          />
          <InfoCard
            icon={<Phone size={20} />}
            label="Telephone"
            value={contact.phone}
            href={`tel:${contact.phone}`}
            testId="contact-phone"
          />
          <InfoCard
            icon={<Mail size={20} />}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            testId="contact-email"
          />
          <InfoCard
            icon={
              <span
                className="font-serif text-lg"
                style={{ color: "#9f6c5c" }}
              >
                PT
              </span>
            }
            label="Company"
            value={company.name}
            testId="contact-company"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, href, testId }) {
  const inner = (
    <div className="h-full bg-white p-7 flex flex-col gap-3 transition-colors hover:bg-[#131e3d] group">
      <div className="text-[#063462] group-hover:text-[#9f6c5c] transition-colors">
        {icon}
      </div>
      <div
        className="text-[11px] uppercase tracking-[0.25em] text-slate-500 group-hover:text-white/60 transition-colors"
      >
        {label}
      </div>
      <div
        className="font-serif text-base sm:text-lg leading-snug group-hover:text-white transition-colors"
        style={{ color: "#131e3d" }}
      >
        {value}
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} data-testid={testId} className="block">
        {inner}
      </a>
    );
  }
  return (
    <div data-testid={testId}>{inner}</div>
  );
}
