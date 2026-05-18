import { Award as AwardIcon } from "lucide-react";
import { awards } from "../../lib/content";

export default function Awards() {
  return (
    <section
      id="awards"
      data-testid="awards-section"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#131e3d" }}
    >
      {/* decorative diagonal */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#9f6c5c" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#9f6c5c" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="inline-block h-px w-12"
              style={{ backgroundColor: "#9f6c5c" }}
            />
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "#9f6c5c" }}
            >
              {awards.year} · Honored Recognition
            </span>
            <span
              className="inline-block h-px w-12"
              style={{ backgroundColor: "#9f6c5c" }}
            />
          </div>
          <h2
            className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            data-testid="awards-heading"
          >
            {awards.heading}
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            {awards.subheading}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative" data-testid="award-badge">
              <div
                className="absolute -inset-6 rounded-full blur-2xl opacity-30"
                style={{ backgroundColor: "#9f6c5c" }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                <img
                  src={awards.badge}
                  alt="RED News Real Estate Award Badge"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-7">
            {awards.list.map((a) => (
              <div
                key={a.name}
                className="border-l-2 pl-8 py-2"
                style={{ borderColor: "#9f6c5c" }}
                data-testid="award-item"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AwardIcon size={16} style={{ color: "#9f6c5c" }} />
                  <span
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ color: "#9f6c5c" }}
                  >
                    Featured Award
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  {a.name}
                </h3>
                <p
                  className="mt-2 font-serif italic text-lg"
                  style={{ color: "#9f6c5c" }}
                >
                  {a.caption}
                </p>
                <p className="mt-5 text-white/75 leading-relaxed text-base max-w-xl">
                  {a.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-6 text-white/80 text-sm">
                  <Metric label="Years Practicing" value="14+" />
                  <Divider />
                  <Metric label="Industry Award" value="2024" />
                  <Divider />
                  <Metric label="Recognized By" value="Houston RED News" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <div
        className="font-serif text-2xl"
        style={{ color: "#9f6c5c" }}
      >
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.25em] text-white/55 mt-1">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <span
      className="hidden sm:block self-stretch w-px"
      style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
    />
  );
}
