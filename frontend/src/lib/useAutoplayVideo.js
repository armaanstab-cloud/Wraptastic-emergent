import { useEffect, useRef } from "react";

// Background videos that must start on their own, including on phones.
//
// React sets `muted` as a DOM property and never writes the attribute into the
// HTML - inspect a rendered <video> and you see `autoplay loop playsinline` but
// no `muted`. Desktop Chrome plays anyway; iOS Safari checks that the element
// reads as muted when it evaluates autoplay and refuses, which is why these
// videos worked on a laptop and showed only the poster on a phone.
//
// So: set muted every way there is, ask for playback, and swallow the rejection
// (a rejected play() is normal - Low Power Mode blocks autoplay outright). The
// first tap anywhere on the page is the second chance, since by then we have a
// user gesture.
export const useAutoplayVideo = () => {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();
    v.addEventListener("canplay", tryPlay);
    v.addEventListener("loadeddata", tryPlay);
    document.addEventListener("touchstart", tryPlay, { once: true, passive: true });

    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return ref;
};
