import React, { useEffect, useState } from "react";
import { Instagram, ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IG_POSTS, LINKS, BUSINESS } from "@/lib/site";

// Instagram grid. Shows curated real work by default. If a live feed URL is
// configured (e.g. Behold.so JSON feed via REACT_APP_INSTAGRAM_FEED_URL), the
// grid automatically switches to the latest live posts.
export const InstagramFeed = () => {
  const [posts, setPosts] = useState(IG_POSTS);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const url = process.env.REACT_APP_INSTAGRAM_FEED_URL;
    if (!url) return;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const raw = Array.isArray(data) ? data : data.posts || [];
        const mapped = raw
          .slice(0, 6)
          .map((p, i) => ({
            id: p.id || `live-${i}`,
            image: p.thumbnailUrl || p.mediaUrl || p.sizes?.medium?.mediaUrl,
            caption: p.caption || "",
            link: p.permalink,
            isVideo: p.mediaType === "VIDEO" || p.mediaType === "REEL",
          }))
          .filter((p) => p.image);
        if (mapped.length) {
          setPosts(mapped);
          setIsLive(true);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div data-testid="instagram-feed">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--w-red-accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--w-silver-500)]">
              {isLive ? "Live From Instagram" : "Fresh Work, Always"}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-chrome inline-flex items-center gap-4">
            <Instagram className="text-white/80" size={34} />
            {BUSINESS.instagramHandle}
          </h2>
        </div>
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="instagram-follow-button"
          className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-[rgba(215,220,228,0.25)] bg-[rgba(14,15,18,0.55)] text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--w-chrome-300)] hover:border-[rgba(215,220,228,0.5)] hover:text-white transition-[border-color,color] duration-200 shrink-0"
        >
          <Instagram size={16} /> Follow Us
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={(i % 3) * 0.06}>
            <a
              href={post.link || LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`instagram-post-${i}`}
              className="group relative block aspect-square overflow-hidden rounded-2xl hairline bg-[var(--w-charcoal-900)]"
            >
              <img
                src={post.image}
                alt={post.caption || "Wraptastic Instagram post"}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {post.isVideo && (
                <span className="absolute top-3 right-3 h-8 w-8 inline-flex items-center justify-center rounded-full bg-black/55 backdrop-blur border border-white/20 text-white">
                  <Play size={13} className="ml-0.5" />
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-300">
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  <Instagram size={13} /> View on Instagram <ArrowUpRight size={12} />
                </p>
                {post.caption && (
                  <p className="mt-1 text-xs text-white/60 line-clamp-1">{post.caption}</p>
                )}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
