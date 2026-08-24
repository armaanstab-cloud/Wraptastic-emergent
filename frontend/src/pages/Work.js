import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, ArrowRight } from "lucide-react";
import { WorkGalleryMasonry } from "@/components/WorkGalleryMasonry";
import { Reveal } from "@/components/Reveal";
import { LINKS, ASSETS } from "@/lib/site";

export default function Work() {
  useEffect(() => {
    document.title = "Our Work | Wraptastic Auto Customs";
  }, []);

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
            <p className="mt-5 max-w-2xl text-lg text-[var(--w-silver-500)]">A look at real vehicles we have transformed. Browse by category and tap any project to view it up close.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--w-black-950)] py-14 lg:py-20">
        <div className="container-w">
          <WorkGalleryMasonry />
        </div>
      </section>

      <section className="bg-[var(--w-black-975)] py-16 border-t border-white/10">
        <div className="container-w flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-white">See more on social</h2>
            <p className="mt-2 text-[var(--w-silver-500)]">We post fresh builds regularly. Follow along and message us anytime.</p>
          </div>
          <div className="flex gap-3">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-5 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors"><Instagram size={18} /> Instagram</a>
            <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-5 rounded-xl bg-[var(--w-red-accent)] text-white font-500 hover:bg-[var(--w-red-deep)] transition-colors">Get a Quote <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
