import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Instagram } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES, LINKS } from "@/lib/site";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const WorkGalleryMasonry = ({ showFilters = true, limit }) => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const items = useMemo(() => {
    let list = GALLERY;
    if (active !== "All") list = list.filter((g) => g.categories.includes(active));
    if (limit) list = list.slice(0, limit);
    return list;
  }, [active, limit]);

  return (
    <div>
      {showFilters && (
        <div data-testid="work-gallery-filters" className="mb-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              data-testid={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(cat)}
              className={`h-9 px-4 rounded-full text-sm font-mono tracking-[0.06em] transition-colors duration-200 border ${
                active === cat
                  ? "bg-[var(--w-red-accent)] text-white border-[var(--w-red-accent)]"
                  : "bg-white/5 text-[var(--w-silver-500)] border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {items.length === 0 ? (
        <div className="rounded-2xl hairline bg-[var(--w-charcoal-900)] p-12 text-center">
          <p className="font-display text-xl text-white">More {active} projects coming soon.</p>
          <p className="mt-2 text-sm text-[var(--w-silver-500)]">
            See our latest work as it drops on Instagram.
          </p>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors">
            <Instagram size={16} /> Follow @the.wraptastic
          </a>
        </div>
      ) : (
        <div data-testid="work-gallery-grid" className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 [column-fill:_balance]">
          {items.map((item) => (
            <motion.button
              key={item.id}
              data-testid={`work-gallery-item-${item.id}`}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative mb-4 lg:mb-6 block w-full overflow-hidden rounded-2xl hairline bg-[var(--w-charcoal-900)] break-inside-avoid ${
                item.size === "tall" ? "aspect-[3/4]" : "aspect-[16/10]"
              }`}
            >
              {item.type === "video" ? (
                <video
                  className="h-full w-full object-cover cine-video-soft transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={item.poster}
                  onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              {item.type === "video" && (
                <span className="absolute top-3 right-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-black/55 backdrop-blur border border-white/20 text-white">
                  <Play size={15} className="ml-0.5" />
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="font-display text-lg text-white leading-tight">{item.title}</p>
                <p className="text-xs text-[var(--w-silver-500)]">{item.caption}</p>
                <span className="mt-2 block h-px w-0 bg-[var(--w-red-accent)] group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent
          data-testid="work-gallery-lightbox"
          className="max-w-5xl w-[95vw] bg-[var(--w-black-975)] border-white/10 p-2 sm:p-3"
        >
          {selected && (
            <div className="relative">
              {selected.type === "video" ? (
                <video className="w-full max-h-[80vh] rounded-xl bg-black" controls autoPlay loop playsInline poster={selected.poster}>
                  <source src={selected.src} type="video/mp4" />
                </video>
              ) : (
                <img src={selected.src} alt={selected.title} className="w-full max-h-[80vh] object-contain rounded-xl bg-black" />
              )}
              <div className="px-2 py-3 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg text-white">{selected.title}</p>
                  <p className="text-xs text-[var(--w-silver-500)]">{selected.caption}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
