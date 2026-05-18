import { Mail } from "lucide-react";
import { team } from "../../lib/content";

export default function Team() {
  return (
    <section
      id="team"
      data-testid="team-section"
      className="bg-[#f7f5f1] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="copper-rule" />
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "#9f6c5c" }}
            >
              Our Team
            </span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            style={{ color: "#131e3d" }}
            data-testid="team-heading"
          >
            The professionals behind every closing.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <article
              key={m.name}
              data-testid={`team-card-${i}`}
              className="bg-white border border-slate-200/80 p-6 flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-6 flex-1 flex flex-col">
                <h3
                  className="font-serif text-2xl tracking-tight"
                  style={{ color: "#131e3d" }}
                >
                  {m.name}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                  {m.titles.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-[0.2em]"
                      style={{ color: "#9f6c5c" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {m.bio && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 flex-1">
                    {m.bio}
                  </p>
                )}

                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    data-testid={`team-email-${i}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm text-[#063462] hover:text-[#9f6c5c] transition-colors"
                  >
                    <Mail size={14} />
                    {m.email}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
