import { Quote, Star } from "lucide-react";
import { reviews } from "../../lib/content";

export default function Reviews({ onLeaveReviewClick }) {
  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="copper-rule" />
              <span
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: "#9f6c5c" }}
              >
                Client Feedback
              </span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight"
              style={{ color: "#131e3d" }}
              data-testid="reviews-heading"
            >
              Trusted by clients across Texas.
            </h2>
          </div>

          <button
            type="button"
            onClick={onLeaveReviewClick}
            data-testid="leave-review-btn"
            className="self-start inline-flex items-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors"
            style={{ backgroundColor: "#9f6c5c" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#8b5c4d")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#9f6c5c")
            }
          >
            Leave Us A Review
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {reviews.map((r, i) => (
            <article
              key={i}
              data-testid={`review-card-${i}`}
              className="bg-white p-8 lg:p-10 flex flex-col"
            >
              <Quote
                size={28}
                style={{ color: "#9f6c5c" }}
                className="mb-6"
              />
              <p
                className="font-serif text-lg leading-relaxed flex-1"
                style={{ color: "#131e3d" }}
              >
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center font-serif text-sm"
                  style={{
                    backgroundColor: "#131e3d",
                    color: "#ffffff",
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "#131e3d" }}
                  >
                    {r.source}
                  </div>
                  <div className="flex items-center gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={12}
                        fill="#9f6c5c"
                        style={{ color: "#9f6c5c" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
