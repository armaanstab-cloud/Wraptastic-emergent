import React, { useEffect } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { ReviewBelt } from "@/components/ReviewBelt";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { REVIEWS, REVIEWS_ON_PAGE, LINKS, ASSETS } from "@/lib/site";

export default function Reviews() {
  useEffect(() => {
    document.title = "Reviews | Wraptastic Auto Customs";
  }, []);

  return (
    <div>
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-[var(--w-black-975)]">
        <div className="absolute inset-0 opacity-25">
          <img src={ASSETS.corvetteGreen} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
        </div>
        <div className="container-w relative z-10">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">5-Star Service</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-chrome">Reviews</h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">Real feedback from real customers across the GTA.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-16 lg:py-24">
        <div className="container-w max-w-5xl">
          <ReviewBelt />
        </div>
      </section>

      <section className="bg-[var(--w-black-975)] py-16 lg:py-24 border-t border-white/10">
        <div className="container-w">
          <SectionHeading eyebrow="Every Word" title="More Reviews" className="mb-12" />
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {REVIEWS.slice(0, REVIEWS_ON_PAGE).map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.05}>
                <div className="mb-6 break-inside-avoid rounded-2xl hairline bg-[var(--w-charcoal-900)] p-6">
                  <div className="flex items-center gap-1 mb-4" aria-label={`${r.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={15}
                        className={
                          j < r.rating
                            ? "fill-[var(--w-red-accent)] text-[var(--w-red-accent)]"
                            : "text-white/20"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-[var(--w-chrome-300)]/90 leading-relaxed">“{r.text}”</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--w-silver-500)]">{r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-5 text-sm text-[var(--w-silver-500)]">
              These are a handful of them. Every review, unedited, is on our Google profile.
            </p>
            <a href={LINKS.google} target="_blank" rel="noopener noreferrer" data-testid="reviews-page-google-cta" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[var(--w-red-accent)] text-white font-500 hover:bg-[var(--w-red-deep)] transition-colors">
              See more reviews on Google <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
