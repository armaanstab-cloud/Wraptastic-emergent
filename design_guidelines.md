{
  "brand": {
    "name": "WRAPTASTIC AUTO CUSTOMS",
    "location": "Brampton, Ontario, Canada",
    "attributes": [
      "premium",
      "aggressive",
      "cinematic",
      "performance-focused",
      "technical",
      "clean",
      "high-end",
      "authentic"
    ],
    "copy_rules": {
      "tone": "Confident, premium, short, direct. No generic fluff.",
      "punctuation": {
        "no_em_dashes": true
      },
      "allowed_slogans_sparingly": [
        "BUILT TO STAND OUT.",
        "Protection. Style. Performance.",
        "Your vehicle deserves more than factory."
      ]
    }
  },
  "design_tokens": {
    "colors": {
      "notes": [
        "Palette is strictly: deep black, charcoal, metallic silver/chrome, white, controlled red accents.",
        "Red is an accent only. Use for CTA emphasis, active states, tiny highlights, and subtle lighting glows.",
        "No random bright colors. No purple."
      ],
      "hex": {
        "black_950": "#070708",
        "black_975": "#050506",
        "charcoal_900": "#0E0F12",
        "charcoal_850": "#14161B",
        "graphite_800": "#1B1E25",
        "graphite_700": "#242833",
        "steel_600": "#3A404D",
        "silver_500": "#AEB6C2",
        "chrome_400": "#D7DCE4",
        "chrome_300": "#EEF1F6",
        "white": "#FFFFFF",
        "red_accent": "#E10600",
        "red_deep": "#B30500",
        "red_glow": "#FF2A1A"
      },
      "semantic": {
        "bg": "var(--w-black-950)",
        "bg_elev_1": "var(--w-charcoal-900)",
        "bg_elev_2": "var(--w-charcoal-850)",
        "surface": "var(--w-graphite-800)",
        "surface_2": "var(--w-graphite-700)",
        "text": "var(--w-chrome-300)",
        "text_muted": "var(--w-silver-500)",
        "text_strong": "var(--w-white)",
        "border": "rgba(238, 241, 246, 0.10)",
        "border_strong": "rgba(238, 241, 246, 0.18)",
        "ring": "rgba(225, 6, 0, 0.55)",
        "accent": "var(--w-red-accent)",
        "accent_hover": "var(--w-red-deep)",
        "success": "#2EE59D",
        "warning": "#FFB020",
        "danger": "#FF3B30"
      },
      "gradients": {
        "restriction": {
          "max_viewport_coverage": "20%",
          "usage": [
            "hero background overlays",
            "decorative lighting glows",
            "large section backplates"
          ],
          "never": [
            "text-heavy reading areas",
            "small UI elements under 100px",
            "stack multiple gradients in same viewport",
            "dark/saturated multi-color gradients"
          ]
        },
        "allowed": {
          "hero_cinematic_vignette": "radial-gradient(1200px 600px at 50% 20%, rgba(225, 6, 0, 0.18) 0%, rgba(225, 6, 0, 0.06) 35%, rgba(7, 7, 8, 0.0) 60%), radial-gradient(900px 500px at 20% 40%, rgba(238, 241, 246, 0.06) 0%, rgba(7, 7, 8, 0.0) 55%), linear-gradient(180deg, rgba(5, 5, 6, 0.92) 0%, rgba(7, 7, 8, 0.98) 70%)",
          "section_backplate_soft": "linear-gradient(180deg, rgba(20, 22, 27, 0.0) 0%, rgba(20, 22, 27, 0.65) 55%, rgba(20, 22, 27, 0.0) 100%)",
          "red_edge_glow": "radial-gradient(600px 220px at 50% 50%, rgba(255, 42, 26, 0.22) 0%, rgba(255, 42, 26, 0.0) 70%)"
        }
      }
    },
    "typography": {
      "google_fonts": {
        "display": {
          "family": "Space Grotesk",
          "weights": [
            500,
            600,
            700
          ],
          "usage": "H1, section titles, service names, short punchy lines"
        },
        "body": {
          "family": "IBM Plex Sans",
          "weights": [
            400,
            500,
            600
          ],
          "usage": "Body copy, UI labels, form text, nav"
        },
        "mono": {
          "family": "IBM Plex Mono",
          "weights": [
            400,
            500
          ],
          "usage": "Specs, starting-at prices, technical microcopy, tags"
        }
      },
      "tailwind_mapping": {
        "font_display": "font-[\"Space_Grotesk\",ui-sans-serif,system-ui]",
        "font_body": "font-[\"IBM_Plex_Sans\",ui-sans-serif,system-ui]",
        "font_mono": "font-[\"IBM_Plex_Mono\",ui-monospace,SFMono-Regular]"
      },
      "scale": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl",
        "h2": "text-base md:text-lg",
        "body": "text-sm md:text-base",
        "small": "text-xs"
      },
      "tracking": {
        "headline": "tracking-[-0.02em]",
        "caps": "tracking-[0.18em]",
        "ui": "tracking-[0.02em]"
      },
      "chrome_heading_treatment": {
        "where_to_use": [
          "Selected major headings only: Hero tagline word, section titles like SERVICES, OUR WORK, REVIEWS",
          "Never on paragraphs, never on form labels"
        ],
        "css_technique": {
          "class_name": ".text-chrome",
          "description": "Readable metallic highlight using layered gradients + subtle text-shadow. Keep contrast high on black.",
          "css": ".text-chrome{\n  background: linear-gradient(180deg, #FFFFFF 0%, #EEF1F6 18%, #D7DCE4 45%, #AEB6C2 62%, #FFFFFF 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  text-shadow: 0 1px 0 rgba(255,255,255,0.10), 0 10px 30px rgba(0,0,0,0.55);\n}\n.text-chrome-outline{\n  -webkit-text-stroke: 1px rgba(225,6,0,0.35);\n}\n"
        }
      }
    },
    "spacing_layout": {
      "principles": [
        "Use 2–3x more spacing than feels comfortable.",
        "Cinematic sections need breathing room and strong hierarchy.",
        "Mobile-first: prioritize thumb reach and short blocks of copy."
      ],
      "container": {
        "max_width": "max-w-6xl",
        "padding": "px-4 sm:px-6 lg:px-10"
      },
      "section_padding": {
        "default": "py-16 sm:py-20 lg:py-28",
        "hero": "pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20",
        "tight": "py-12 sm:py-14"
      },
      "grid": {
        "services": "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8",
        "gallery_masonry": "columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6",
        "footer": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      },
      "radius": {
        "global": "rounded-xl",
        "cards": "rounded-2xl",
        "buttons": "rounded-xl"
      },
      "borders": {
        "hairline": "border border-white/10",
        "divider": "h-px bg-white/10"
      },
      "shadows": {
        "soft": "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
        "edge": "shadow-[0_0_0_1px_rgba(238,241,246,0.10)]"
      }
    },
    "effects": {
      "noise_overlay": {
        "purpose": "Avoid flat black. Add subtle film grain across hero and key sections.",
        "css": ".noise-overlay{\n  pointer-events:none;\n  position:absolute;\n  inset:0;\n  background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.22\"/></svg>');\n  mix-blend-mode: overlay;\n  opacity:0.10;\n}\n"
      },
      "glass": {
        "allowed": "Only for small overlays like nav background and floating WhatsApp button backplate.",
        "tailwind": "bg-black/55 backdrop-blur-md border border-white/10"
      }
    }
  },
  "component_path": {
    "shadcn_primary": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "dialog_lightbox": "/app/frontend/src/components/ui/dialog.jsx",
      "carousel_reviews": "/app/frontend/src/components/ui/carousel.jsx",
      "tabs_or_filters": "/app/frontend/src/components/ui/tabs.jsx",
      "select": "/app/frontend/src/components/ui/select.jsx",
      "input": "/app/frontend/src/components/ui/input.jsx",
      "textarea": "/app/frontend/src/components/ui/textarea.jsx",
      "label": "/app/frontend/src/components/ui/label.jsx",
      "sheet_mobile_nav": "/app/frontend/src/components/ui/sheet.jsx",
      "navigation_menu_desktop": "/app/frontend/src/components/ui/navigation-menu.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "scroll_area": "/app/frontend/src/components/ui/scroll-area.jsx",
      "sonner_toasts": "/app/frontend/src/components/ui/sonner.jsx"
    },
    "recommended_new_components": {
      "CinematicHero": "Create /app/frontend/src/components/CinematicHero.js",
      "ScrollVehicleTransition": "Create /app/frontend/src/components/ScrollVehicleTransition.js",
      "ServiceCardPremium": "Create /app/frontend/src/components/ServiceCardPremium.js",
      "WorkGalleryMasonry": "Create /app/frontend/src/components/WorkGalleryMasonry.js",
      "ReviewBelt": "Create /app/frontend/src/components/ReviewBelt.js",
      "QuoteForm": "Create /app/frontend/src/components/QuoteForm.js",
      "FloatingWhatsApp": "Create /app/frontend/src/components/FloatingWhatsApp.js",
      "StickyQuoteCTA": "Create /app/frontend/src/components/StickyQuoteCTA.js"
    }
  },
  "layout_direction": {
    "global": {
      "background": "Deep black base. No transparent page backgrounds.",
      "composition": "Apple-like editorial scroll: full-bleed media, then tight copy blocks, then immersive transitions.",
      "reading_flow": "Left-aligned copy. Avoid centered paragraphs. Center only for hero headline if needed.",
      "section_pattern": [
        "Full-bleed media",
        "Short headline + 1–2 lines support",
        "Single primary action",
        "Proof (work gallery, reviews, brands)",
        "Conversion (quote)"
      ]
    },
    "nav": {
      "style": "Minimal, glassy black bar with hairline border. Persistent GET A QUOTE CTA.",
      "desktop": {
        "layout": "Left logo, center links, right CTAs",
        "tailwind": "sticky top-0 z-50 bg-black/55 backdrop-blur-md border-b border-white/10"
      },
      "mobile": {
        "pattern": "Use Sheet for menu. Keep GET A QUOTE as a sticky bottom bar or top-right button.",
        "thumb_reach": "Primary CTA near bottom on mobile (sticky bar)"
      },
      "data_testids": {
        "nav": "site-nav",
        "quote_cta": "nav-get-a-quote-button",
        "whatsapp_cta": "nav-whatsapp-button",
        "mobile_menu": "nav-mobile-menu-button"
      }
    },
    "buttons": {
      "variants": {
        "primary": {
          "look": "Red accent fill, subtle inner highlight, strong focus ring.",
          "tailwind": "bg-[var(--w-red-accent)] text-white hover:bg-[var(--w-red-deep)] focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)]",
          "motion": "hover: translateY(-1px) + subtle glow; press: scale(0.98)"
        },
        "secondary": {
          "look": "Chrome outline on black, fills slightly on hover.",
          "tailwind": "bg-transparent text-[var(--w-chrome-300)] border border-white/15 hover:border-white/25 hover:bg-white/5",
          "motion": "hover: slight sheen sweep"
        },
        "ghost": {
          "look": "Text-only with red underline reveal.",
          "tailwind": "bg-transparent text-[var(--w-chrome-300)] hover:text-white"
        }
      },
      "sizes": {
        "lg": "h-12 px-6 text-sm",
        "md": "h-10 px-4 text-sm",
        "sm": "h-9 px-3 text-xs"
      },
      "data_testids": {
        "hero_primary": "hero-get-a-quote-button",
        "hero_secondary": "hero-whatsapp-button",
        "sticky_quote": "sticky-get-a-quote-button",
        "reviews_google": "reviews-google-button"
      }
    },
    "hero": {
      "requirements": {
        "video": "Autoplay muted loop. Use poster. Defer loading on mobile if needed.",
        "messaging": [
          "WRAPTASTIC AUTO CUSTOMS",
          "BUILT TO STAND OUT.",
          "Premium automotive customization, protection, styling and performance."
        ]
      },
      "composition": {
        "layout": "Full-bleed video with cinematic vignette overlay + noise. Copy block anchored lower-left on desktop, centered-left on mobile.",
        "tailwind": "relative min-h-[92vh] bg-[var(--w-black-950)] overflow-hidden"
      },
      "scroll_indicator": {
        "style": "Thin chrome line + small red pulse dot. No bouncing.",
        "data_testid": "hero-scroll-indicator"
      }
    },
    "services": {
      "overview": "Start with a 2-column editorial intro: left headline, right short bullets. Then premium cards.",
      "cards": {
        "style": "Not generic boxes. Use large imagery, layered backplates, subtle red edge glow on hover.",
        "structure": [
          "Image header (aspect ratio 16:10)",
          "Service name (display font)",
          "1-line benefit",
          "Starting at price OR Get a Quote",
          "Micro tags (durability, finish, warranty)"
        ],
        "hover": "Image scale 1.03, overlay darkens slightly, red edge glow appears, CTA arrow slides 4px.",
        "data_testid_pattern": "service-card-{service-slug}"
      }
    },
    "scroll_vehicle_transition": {
      "goal": "Scroll-driven 2.5D vehicle accelerating through the screen.",
      "layers": [
        "Background: subtle light streaks (CSS) moving slower",
        "Mid: vehicle image scales and translates",
        "Foreground: motion blur overlay + red rim light"
      ],
      "performance": [
        "Use transform + opacity primarily.",
        "Use filter blur sparingly and only during a short scroll window.",
        "Add will-change: transform, filter.",
        "Respect prefers-reduced-motion."
      ],
      "framer_motion_scaffold_js": "import { motion, useScroll, useTransform, useSpring } from 'framer-motion';\nimport { useRef } from 'react';\n\nexport default function ScrollVehicleTransition(){\n  const ref = useRef(null);\n  const { scrollYProgress } = useScroll({\n    target: ref,\n    offset: ['start end', 'end start']\n  });\n\n  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });\n\n  const scale = useTransform(p, [0.05, 0.45, 0.85], [0.78, 1.08, 1.22]);\n  const y = useTransform(p, [0.05, 0.85], [120, -140]);\n  const x = useTransform(p, [0.05, 0.85], [-20, 40]);\n  const blur = useTransform(p, [0.05, 0.25, 0.45], ['blur(10px)', 'blur(2px)', 'blur(0px)']);\n  const opacity = useTransform(p, [0.0, 0.08, 0.9, 1.0], [0, 1, 1, 0]);\n\n  return (\n    <section ref={ref} className=\"relative h-[140vh] bg-[var(--w-black-950)] overflow-hidden\" data-testid=\"scroll-vehicle-transition\">\n      <div className=\"sticky top-0 h-screen\">\n        <div className=\"absolute inset-0\" style={{ background: 'var(--w-hero-vignette)' }} />\n        <motion.img\n          src=\"/media/viper-transition.png\"\n          alt=\"Vehicle transition\"\n          className=\"absolute left-1/2 top-1/2 w-[min(980px,92vw)] -translate-x-1/2 -translate-y-1/2 will-change-transform\"\n          style={{ scale, x, y, filter: blur, opacity }}\n          loading=\"lazy\"\n          data-testid=\"scroll-vehicle-image\"\n        />\n        <motion.div\n          className=\"absolute inset-0 pointer-events-none\"\n          style={{ opacity }}\n          data-testid=\"scroll-vehicle-light-streaks\"\n        />\n      </div>\n    </section>\n  );\n}\n"
    },
    "gallery": {
      "layout": "Editorial masonry with varied tile sizes. Category filters pinned near top of gallery.",
      "filters": {
        "component": "Tabs",
        "categories": [
          "All",
          "Wraps",
          "PPF",
          "Tint",
          "Ceramic",
          "Paint Correction",
          "Performance",
          "Other"
        ],
        "data_testid": "work-gallery-filters"
      },
      "tile": {
        "style": "Dark overlay on hover, chrome title, red underline reveal. Video tiles show a subtle play icon.",
        "lightbox": "Use Dialog for fullscreen. Support image and video.",
        "lazy_loading": "Use loading=lazy for images, and preload only first row."
      },
      "data_testids": {
        "grid": "work-gallery-grid",
        "item_pattern": "work-gallery-item-{id}",
        "lightbox": "work-gallery-lightbox"
      }
    },
    "reviews": {
      "belt": "Auto-rotating carousel with 5-star row, short review, name, vehicle.",
      "component": "Carousel",
      "motion": "Slow, linear auto-advance. Pause on hover. Swipe on mobile.",
      "data_testids": {
        "carousel": "reviews-carousel",
        "google_cta": "reviews-google-cta"
      }
    },
    "brands_materials": {
      "layout": "Logo strip with subtle chrome emboss. Use grayscale logos, brighten on hover.",
      "brands": [
        "Avery Dennison",
        "3M",
        "XPEL",
        "VViViD",
        "KPMF"
      ],
      "data_testid": "brands-strip"
    },
    "quote_form": {
      "fields": [
        "Name",
        "Phone",
        "Email",
        "Vehicle Make",
        "Vehicle Model",
        "Vehicle Year",
        "Service",
        "Preferred Contact Method",
        "Message",
        "Optional image upload"
      ],
      "styling": {
        "inputs": "bg-white/5 border-white/10 text-white placeholder:text-white/35 focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)]",
        "labels": "text-xs text-white/70 tracking-[0.12em] uppercase",
        "helper": "text-xs text-white/50"
      },
      "conversion": "Keep WhatsApp CTA adjacent to submit. On mobile, show WhatsApp as a full-width secondary button.",
      "data_testids": {
        "form": "quote-form",
        "submit": "quote-form-submit-button",
        "whatsapp": "quote-form-whatsapp-button",
        "upload": "quote-form-upload-input",
        "success": "quote-form-success-message",
        "error": "quote-form-error-message"
      }
    },
    "footer": {
      "style": "Premium dark footer with chrome dividers, minimal columns, strong contact block.",
      "socials": [
        "Instagram",
        "TikTok",
        "Google Business Profile"
      ],
      "data_testid": "site-footer"
    },
    "floating_whatsapp": {
      "style": "Floating button bottom-right. Glass backplate, red accent dot.",
      "mobile": "Increase hit area to 56px.",
      "data_testid": "floating-whatsapp-button"
    }
  },
  "motion_microinteractions": {
    "principles": [
      "Expensive motion: slow-in, fast-out. No bouncy easing.",
      "Use scroll-triggered reveals with opacity + y + slight blur.",
      "Prefer transform/opacity for performance.",
      "Always support prefers-reduced-motion."
    ],
    "framer_motion": {
      "recommended": {
        "section_reveal_variant": "export const reveal = { hidden: { opacity: 0, y: 18, filter: 'blur(6px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };",
        "stagger": "transition: { staggerChildren: 0.08, delayChildren: 0.08 }",
        "hover_sheen": "Use a pseudo-element that translates across on hover (no gradient stacking)."
      },
      "reduced_motion": {
        "pattern": "const shouldReduce = useReducedMotion(); if (shouldReduce) disable scroll transforms and use simple fades."
      }
    },
    "scroll_behavior": {
      "smooth_scroll": "Optional: use CSS scroll-behavior: smooth for anchor links only. Avoid heavy smooth-scroll libraries unless necessary.",
      "sticky_sections": "Use sticky containers for hero follow-ups and the vehicle transition."
    }
  },
  "performance": {
    "media": [
      "Hero video: use poster, preload=metadata, playsInline, muted, loop.",
      "Defer secondary video until near viewport.",
      "Use responsive sizes and modern formats where possible.",
      "Lazy load gallery images and videos."
    ],
    "animation": [
      "Avoid animating box-shadow.",
      "Avoid universal transition: all.",
      "Use will-change only on elements that animate."
    ]
  },
  "accessibility": {
    "contrast": "Chrome/white text on black must meet WCAG AA. Muted text still readable.",
    "focus": "Visible focus ring using red accent with sufficient thickness.",
    "keyboard": "All dialogs, carousels, tabs must be keyboard navigable (shadcn defaults help).",
    "reduced_motion": "Respect prefers-reduced-motion for scroll scenes and autoplay video. Provide pause controls if needed."
  },
  "image_urls": {
    "notes": [
      "Use REAL provided media as primary visuals. Do not rely on stock cars.",
      "If placeholders are needed during development, use neutral studio textures only (carbon fiber, brushed metal), not stock vehicles."
    ],
    "categories": [
      {
        "category": "hero_video",
        "description": "Muted looping 4K video of real red Dodge Viper (dark cinematic grade).",
        "url": "LOCAL_ASSET_REQUIRED"
      },
      {
        "category": "secondary_video",
        "description": "Muted looping 4K video of real green Corvette C8 (cinematic section).",
        "url": "LOCAL_ASSET_REQUIRED"
      },
      {
        "category": "featured_photos",
        "description": "Purple wrapped Tesla Model Y photo and green Corvette detail photo.",
        "url": "LOCAL_ASSET_REQUIRED"
      },
      {
        "category": "gallery_media",
        "description": "Expandable gallery items (images + videos).",
        "url": "LOCAL_ASSET_REQUIRED"
      }
    ]
  },
  "instructions_to_main_agent": {
    "global_css_updates": [
      "Remove any centered App header defaults. Do not use .App { text-align: center }.",
      "Set :root tokens to Wraptastic palette and set body background to deep black.",
      "Add .text-chrome and .noise-overlay utilities to index.css (or a global css layer).",
      "Add a small set of CSS variables prefixed with --w- for brand tokens."
    ],
    "tailwind_usage": [
      "Use Tailwind for layout and spacing. Use CSS variables for colors to keep palette strict.",
      "Avoid gradients except the allowed hero vignette overlays."
    ],
    "page_structure": {
      "home": [
        "CinematicHero (Viper video)",
        "Brand intro (short, technical)",
        "Services overview + premium cards",
        "ScrollVehicleTransition (2.5D)",
        "Featured work (2–3 projects)",
        "Our Work gallery preview + link",
        "Brands & Materials strip",
        "Reviews belt + Google CTA",
        "Final quote CTA",
        "Footer"
      ],
      "services": [
        "Editorial header",
        "Service detail sections with media",
        "Quote CTA"
      ],
      "our_work": [
        "Filters + masonry gallery + lightbox"
      ],
      "contact_quote": [
        "Quote form + WhatsApp CTA + contact info"
      ]
    },
    "data_testid_policy": "Every button, link, input, filter tab, gallery item, dialog close, and key message must include data-testid in kebab-case describing role."
  }
}

<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>
