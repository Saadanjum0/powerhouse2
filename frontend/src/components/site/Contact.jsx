import { MapPin, Phone, Mail, ArrowRight, Calendar } from "lucide-react";
import { contact, company } from "../../lib/content";
import { useState } from "react";

export default function Contact({ onSubmitDealClick, onBookMeetingClick }) {
  const [formStage, setFormStage] = useState("idle");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStage("loading");
    setTimeout(() => setFormStage("success"), 1000);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#f7f5f1] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left — heading & Form */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="copper-rule w-8 h-[1px] bg-[#9f6c5c]" />
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
          >
            Let's get your closing started.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 max-w-md mb-8">
            Whether you're starting a transaction or just have questions about
            title, escrow, or closing services — our team is ready to help.
          </p>

          <div className="flex gap-4 mb-10">
            <button
              type="button"
              onClick={onSubmitDealClick}
              className="group flex-1 inline-flex justify-center items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors"
              style={{ backgroundColor: "#9f6c5c" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8b5c4d")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9f6c5c")}
            >
              Submit a deal
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={onBookMeetingClick}
              className="group flex-1 inline-flex justify-center items-center gap-2 px-5 py-3 text-sm font-medium tracking-wide text-[#063462] border border-[#063462] transition-colors hover:bg-[#063462] hover:text-white"
            >
              <Calendar size={16} />
              Book Meeting
            </button>
          </div>

          <div className="bg-white p-8 border border-slate-200">
            <h3 className="font-serif text-xl text-[#131e3d] mb-4">Send a Message</h3>
            {formStage === "idle" && (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input required type="text" placeholder="Your Name" className="w-full p-3 border border-slate-300 focus:outline-none focus:border-[#9f6c5c]" />
                </div>
                <div>
                  <input required type="email" placeholder="Email Address" className="w-full p-3 border border-slate-300 focus:outline-none focus:border-[#9f6c5c]" />
                </div>
                <div>
                  <textarea required rows={4} placeholder="How can we help?" className="w-full p-3 border border-slate-300 focus:outline-none focus:border-[#9f6c5c] resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-[#063462] text-white font-medium hover:bg-[#0b4986] transition-colors">
                  Send Message
                </button>
              </form>
            )}
            {formStage === "loading" && (
              <div className="py-10 text-center text-slate-500">Sending...</div>
            )}
            {formStage === "success" && (
              <div className="py-10 text-center">
                <p className="text-[#9f6c5c] font-medium mb-2">Message Sent!</p>
                <p className="text-sm text-slate-500">We will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right — info cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          <InfoCard icon={<MapPin size={20} />} label="Office" value={contact.address} />
          <InfoCard icon={<Phone size={20} />} label="Telephone" value={contact.phone} href={`tel:${contact.phone}`} />
          <InfoCard icon={<Mail size={20} />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <InfoCard icon={<span className="font-serif text-lg" style={{ color: "#9f6c5c" }}>PT</span>} label="Company" value={company.name} />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, href }) {
  const inner = (
    <div className="h-full bg-white p-7 flex flex-col gap-3 transition-colors hover:bg-[#131e3d] group">
      <div className="text-[#063462] group-hover:text-[#9f6c5c] transition-colors">
        {icon}
      </div>
      <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 group-hover:text-white/60 transition-colors">
        {label}
      </div>
      <div className="font-serif text-base sm:text-lg leading-snug group-hover:text-white transition-colors" style={{ color: "#131e3d" }}>
        {value}
      </div>
    </div>
  );
  if (href) return <a href={href} className="block">{inner}</a>;
  return <div>{inner}</div>;
}
