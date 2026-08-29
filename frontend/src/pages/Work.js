import React from "react";
import { Instagram, ArrowRight } from "lucide-react";
import { WorkGalleryMasonry } from "@/components/WorkGalleryMasonry";
import { BeholdFeed } from "@/components/BeholdFeed";
import { Reveal } from "@/components/Reveal";
import { CtaPrimary } from "@/components/Buttons";
import { LINKS, ASSETS, BUSINESS } from "@/lib/site";
import { useSeo } from "@/lib/seo";

export default function Work() {
  useSeo("work");

  return (
    <div>
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-[var(--w-black-975)]">
        <div className="absolute inset-0 opacity-30">
          <img src={ASSETS.teslaPurple} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--w-hero-vignette)" }} />
        </div>
        <div className="container-w relative z-10">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--w-red-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Real Builds, Real Results</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-chrome">Our Work</h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">A look at real vehicles we have transformed. Tap any project to view it up close.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-14 lg:py-20">
        <div className="container-w">
          <WorkGalleryMasonry />
        </div>
      </section>

      {/* Live Instagram feed - updates itself as new posts go up. */}
      <section className="bg-[var(--w-black-975)] py-14 lg:py-16 border-t border-white/10">
        <div className="container-w">
          <Reveal>
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--w-red-accent)]" />
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">Straight From The Shop</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chrome">Our Latest Work</h2>
                <p className="mt-3 max-w-xl text-[var(--w-silver-500)]">Fresh builds as they leave the bay, straight from our Instagram.</p>
              </div>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="work-latest-instagram-link"
                className="inline-flex shrink-0 items-center gap-2 h-11 px-6 rounded-full border border-[rgba(215,220,228,0.25)] bg-[rgba(14,15,18,0.55)] text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--w-chrome-300)] hover:border-[rgba(215,220,228,0.5)] hover:text-white transition-[border-color,color] duration-200"
              >
                <Instagram size={16} /> {BUSINESS.instagramHandle}
              </a>
            </div>
            <BeholdFeed />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-16 border-t border-white/10">
        <div className="container-w flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-chrome">See more on social</h2>
            <p className="mt-2 text-[var(--w-silver-500)]">We post fresh builds regularly. Follow along and message us anytime.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" data-testid="work-instagram-link" className="inline-flex items-center gap-2 h-12 px-5 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors"><Instagram size={18} /> Instagram</a>
            <CtaPrimary quote testId="work-cta-quote">Get a Quote <ArrowRight size={18} /></CtaPrimary>
          </div>
        </div>
      </section>
    </div>
  );
}
