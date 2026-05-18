import { ArrowRight } from "lucide-react";
import { company, heroImage } from "../../lib/content";

export default function Hero({ onSubmitDealClick }) {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh]">
        {/* LEFT — navy panel */}
        <div
          className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 md:py-0"
          style={{ backgroundColor: "#131e3d" }}
        >
          {/* corner ornament */}
          <div className="absolute top-10 left-8 sm:left-12 lg:left-20 flex items-center gap-3">
            <span
              className="inline-block h-px w-12"
              style={{ backgroundColor: "#9f6c5c" }}
            />
            <span
              className="text-xs uppercase tracking-[0.32em]"
              style={{ color: "#9f6c5c" }}
            >
              Est. Texas Title Authority
            </span>
          </div>

          <div className="max-w-xl">
            <h1
              data-testid="hero-heading"
              className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            >
              {company.name.replace(", LLC", "")}
              <span className="block font-serif italic text-white/70 text-2xl sm:text-3xl mt-3 tracking-tight">
                LLC
              </span>
            </h1>

            <p
              className="mt-8 text-lg sm:text-xl text-white/85 leading-relaxed max-w-lg"
              data-testid="hero-tagline"
            >
              {company.tagline}
            </p>

            <p className="mt-5 text-base text-white/65 leading-relaxed max-w-lg">
              {company.intro}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={onSubmitDealClick}
                data-testid="hero-submit-deal-btn"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors"
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

              <button
                type="button"
                onClick={scrollToServices}
                data-testid="hero-learn-more-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide border border-white/30 text-white hover:border-white/70 transition-colors"
              >
                Learn more
              </button>
            </div>

            <div className="mt-14 flex items-center gap-4">
              <span
                className="inline-block h-px w-8"
                style={{ backgroundColor: "#9f6c5c" }}
              />
              <span className="font-serif italic text-white/80 text-base sm:text-lg">
                {company.extra}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="relative min-h-[420px] md:min-h-full bg-[#131e3d]">
          <img
            src={heroImage}
            alt="Modern luxury corporate architecture"
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="hero-image"
          />
          {/* subtle navy tint */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(19,30,61,0.18) 0%, rgba(19,30,61,0.05) 30%, rgba(19,30,61,0.35) 100%)",
            }}
          />
          {/* floating credential card */}
          <div
            className="absolute bottom-8 left-8 right-8 sm:right-auto sm:max-w-xs bg-white p-6 shadow-xl"
            data-testid="hero-credential-card"
          >
            <div
              className="text-xs uppercase tracking-[0.25em] mb-2"
              style={{ color: "#9f6c5c" }}
            >
              14+ Years
            </div>
            <div
              className="font-serif text-xl leading-snug"
              style={{ color: "#131e3d" }}
            >
              Of real-estate expertise serving Houston & beyond.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
