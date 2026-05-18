import {
  ShieldCheck,
  FileSearch,
  Landmark,
  Handshake,
  Stamp,
} from "lucide-react";
import { services, focusAreas } from "../../lib/content";

const ICONS = [ShieldCheck, FileSearch, Landmark, Handshake, Stamp];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="copper-rule" />
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "#9f6c5c" }}
            >
              Our Main Practices
            </span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: "#131e3d" }}
            data-testid="services-heading"
          >
            Why discerning clients trust Powerhouse Title.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
            We specialize in the full lifecycle of real-estate closings —
            covering residential, commercial, and refinancing transactions with
            attorney-led precision.
          </p>

          {/* focus area badges */}
          <div className="mt-7 flex flex-wrap gap-3" data-testid="focus-areas">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] px-4 py-2 border"
                style={{
                  color: "#131e3d",
                  borderColor: "#131e3d",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {services.map((s, i) => {
            const Icon = ICONS[i] || ShieldCheck;
            return (
              <article
                key={s.title}
                data-testid={`service-card-${i}`}
                className="group relative bg-white p-8 lg:p-10 transition-all duration-300 hover:bg-[#131e3d]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 border transition-colors duration-300"
                    style={{ borderColor: "#063462" }}
                  >
                    <Icon
                      size={22}
                      className="text-[#063462] group-hover:text-[#9f6c5c] transition-colors duration-300"
                    />
                  </div>
                  <span
                    className="font-serif text-sm tracking-widest"
                    style={{ color: "#9f6c5c" }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  className="font-serif text-xl lg:text-2xl mb-4 leading-snug tracking-tight transition-colors duration-300"
                  style={{ color: "#131e3d" }}
                >
                  <span className="group-hover:hidden">{s.title}</span>
                  <span className="hidden group-hover:inline text-white">
                    {s.title}
                  </span>
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 group-hover:text-white/75 transition-colors duration-300">
                  {s.description}
                </p>

                <div
                  className="mt-6 h-px w-12 transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: "#9f6c5c" }}
                />
              </article>
            );
          })}

          {/* Fill the 6th cell on lg with a CTA panel */}
          <article
            className="hidden lg:flex flex-col justify-between p-10"
            style={{ backgroundColor: "#063462" }}
            data-testid="services-cta-card"
          >
            <div>
              <span
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: "#9f6c5c" }}
              >
                Need a custom solution?
              </span>
              <h3 className="font-serif text-2xl text-white mt-4 leading-snug">
                Let's structure your next closing with confidence.
              </h3>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center text-white text-sm tracking-wide hover:opacity-80"
              data-testid="services-cta-link"
            >
              Talk to our attorneys →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
