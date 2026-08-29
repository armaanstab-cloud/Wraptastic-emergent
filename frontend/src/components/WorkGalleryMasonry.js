import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronDown, ChevronUp } from "lucide-react";
import { GALLERY, BUSINESS } from "@/lib/site";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const STEP = 6;

// "Tesla Model Y - satin grey color-change wrap by Wraptastic Auto Customs,
// Brampton". Reads correctly to a screen reader and to Google Images.
const altFor = (item) =>
  `${item.title} - ${item.caption} by ${BUSINESS.name} in ${BUSINESS.city}`;

export const WorkGalleryMasonry = ({ limit }) => {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(limit || STEP);

  const items = GALLERY.slice(0, visible);
  const hasMore = visible < GALLERY.length;
  const expanded = !limit && visible > STEP;

  return (
    <div>
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
                alt={altFor(item)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 via-45% to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
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

      {!limit && (hasMore || expanded) && (
        <div className="mt-8 flex justify-center gap-3">
          {hasMore && (
            <button
              data-testid="gallery-see-more-button"
              onClick={() => setVisible((v) => Math.min(v + STEP, GALLERY.length))}
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-[rgba(215,220,228,0.25)] bg-[rgba(14,15,18,0.55)] text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--w-chrome-300)] hover:border-[rgba(215,220,228,0.5)] hover:text-white active:scale-[0.97] transition-[border-color,color,transform] duration-200"
            >
              See More <ChevronDown size={16} />
            </button>
          )}
          {expanded && (
            <button
              data-testid="gallery-show-less-button"
              onClick={() => setVisible(STEP)}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/10 text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--w-silver-500)] hover:text-white active:scale-[0.97] transition-[border-color,color,transform] duration-200"
            >
              Show Less <ChevronUp size={16} />
            </button>
          )}
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
                <img src={selected.src} alt={altFor(selected)} className="w-full max-h-[80vh] object-contain rounded-xl bg-black" />
              )}
              <div className="px-2 py-3 flex items-center justify-between">
                <div>
                  <DialogTitle asChild>
                    <p className="font-display text-lg text-white">{selected.title}</p>
                  </DialogTitle>
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
