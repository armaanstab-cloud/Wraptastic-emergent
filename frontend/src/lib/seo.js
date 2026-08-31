import { useEffect } from "react";

// ---------------------------------------------------------------------------
// Per-page SEO. index.html carries one set of tags for every route, which is
// fine for the homepage and wrong for everything else - most importantly the
// canonical, which told Google that /services, /work and the rest were just
// copies of "/" and should not be indexed on their own. This hook rewrites the
// title, description, keywords, canonical and social tags on each route.
//
// Titles are kept near 60 characters and descriptions near 155 so Google shows
// them whole in the results page instead of truncating them.
// ---------------------------------------------------------------------------

export const SITE_URL = "https://wraptastic.ca";

const BASE_KEYWORDS =
  "Wraptastic Auto Customs, car wrap Brampton, vehicle wrap GTA, auto customization Brampton";

export const PAGE_SEO = {
  home: {
    path: "/",
    title: "Vinyl Wrap, PPF & Ceramic Coating in Brampton | Wraptastic",
    description:
      "Vinyl wraps, paint protection film, ceramic coating and nano ceramic window tint in Brampton and the GTA. Lifetime tint warranty, 5-star rated.",
    keywords:
      "car wrap Brampton, vinyl wrap Brampton, PPF Brampton, paint protection film GTA, ceramic coating Brampton, window tint Brampton, car wrap near me",
  },
  services: {
    path: "/services",
    title: "Car Wrap, PPF, Ceramic Coating & Tint Prices | Brampton",
    description:
      "Starting prices for every service: PPF from $999, ceramic coating from $249, nano ceramic tint from $149, paint correction from $249, plus wraps and stripes.",
    keywords:
      "car wrap prices Brampton, PPF cost Ontario, ceramic coating price, window tint price Brampton, paint correction, powder coating wheels, racing stripes, headlight tint, car tuning Brampton",
  },
  work: {
    path: "/work",
    title: "Car Wrap & PPF Gallery in Brampton | Wraptastic Auto Customs",
    description:
      "Real vehicles wrapped, tinted and protected by Wraptastic in Brampton - Tesla, Corvette, BMW, Jeep, Cybertruck and more. See the finish before you book.",
    keywords:
      "car wrap gallery Brampton, Tesla wrap GTA, Corvette wrap, colour change wrap Ontario, satin black wrap, vehicle wrap before and after",
  },
  about: {
    path: "/about",
    title: "About Wraptastic Auto Customs | Wrap Shop in Brampton",
    description:
      "A Brampton wrap and detailing shop built on clean panel gaps, honest quotes and premium materials from Avery Dennison, 3M, XPEL, VViViD and KPMF.",
    keywords:
      "wrap shop Brampton, auto detailing Brampton, XPEL installer Ontario, Avery Dennison wrap installer, 3M certified wrap GTA",
  },
  reviews: {
    path: "/reviews",
    title: "Reviews | Wraptastic Auto Customs, Brampton & GTA",
    description:
      "Read what Brampton and GTA drivers say about our vinyl wraps, PPF, ceramic coating and window tint. Real Google reviews from real customers.",
    keywords:
      "Wraptastic reviews, best car wrap shop Brampton, car wrap reviews GTA, ceramic coating reviews Ontario",
  },
  contact: {
    path: "/contact",
    title: "Get a Free Wrap, PPF or Tint Quote | Brampton & the GTA",
    description:
      "Tell us your vehicle and what you want done and we will send a quote. Fastest reply on WhatsApp. Serving Brampton, Mississauga, Toronto and the GTA.",
    keywords:
      "car wrap quote Brampton, window tint quote GTA, PPF quote Ontario, mobile wrap service Brampton, car wrap near me",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Wraptastic Auto Customs",
    description:
      "How Wraptastic Auto Customs handles the information you send through the quote form.",
    keywords: BASE_KEYWORDS,
  },
  terms: {
    path: "/terms",
    title: "Terms of Service | Wraptastic Auto Customs",
    description:
      "Booking, deposit, payment and warranty terms for work carried out by Wraptastic Auto Customs.",
    keywords: BASE_KEYWORDS,
  },
};

// Creates the tag on first use, then reuses it. `attr` is "name" for standard
// meta tags and "property" for the Open Graph ones.
const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useSeo = (pageKey) => {
  useEffect(() => {
    const page = PAGE_SEO[pageKey];
    if (!page) return;

    const url = `${SITE_URL}${page.path}`;
    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "keywords", `${page.keywords}, ${BASE_KEYWORDS}`);
    setCanonical(url);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
  }, [pageKey]);
};
