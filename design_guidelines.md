{
  "brand": {
    "name": "WRAPTASTIC AUTO CUSTOMS",
    "attributes": [
      "cinematic",
      "premium",
      "aggressive-performance",
      "chrome-and-carbon",
      "tactile-3d-depth",
      "conversion-focused"
    ],
    "voice": {
      "tone": "confident, minimal words, high impact",
      "copy_rules": [
        "Use short, punchy lines (3–7 words) for hero + section headers.",
        "Avoid long paragraphs; use bullets and spec-style microcopy.",
        "Use numbers and guarantees where possible (e.g., 'PPF from $1,999+')."
      ]
    }
  },

  "inspiration_refs": {
    "visual_refs": [
      {
        "title": "Lamborghini design system (dark luxury, spacing, contrast)",
        "url": "https://opendesigner.io/design-systems/lamborghini"
      },
      {
        "title": "Motion.dev Ticker (draggable marquee)",
        "url": "https://motion.dev/docs/react-ticker"
      },
      {
        "title": "shadcn testimonials marquee block (mask edges)",
        "url": "https://www.shadcn.io/blocks/testimonials-marquee"
      }
    ],
    "interaction_refs": [
      {
        "title": "Cinematic supercar landing concept (scroll-driven sequences)",
        "url": "https://github.com/KingDev4522/supercar-landingpage-concept-ui"
      },
      {
        "title": "Codrops infinite marquee patterns (wrap + motion values)",
        "url": "https://tympanus.net/codrops/2025/06/17/building-an-infinite-marquee-along-an-svg-path-with-react-motion/"
      }
    ]
  },

  "typography": {
    "google_fonts": {
      "display": {
        "family": "Road Rage",
        "fallback": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        "usage": "H1/H2, section titles, big background words (sparingly)",
        "notes": [
          "Matches aggressive slanted brush vibe similar to logo.",
          "Keep it 'clean' by using tight line-height and controlled letter spacing.",
          "Avoid using display font for long paragraphs."
        ]
      },
      "body": {
        "family": "Barlow",
        "fallback": "ui-sans-serif, system-ui, sans-serif",
        "usage": "Body, nav, forms, pricing, captions",
        "notes": [
          "Automotive-friendly, condensed feel without looking cheap.",
          "Use 500/600 weights for UI labels."
        ]
      },
      "mono": {
        "family": "IBM Plex Mono",
        "usage": "Spec chips, VIN-like micro labels, timestamps"
      }
    },
    "tailwind_hierarchy": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight leading-[0.92]",
      "h2": "text-base md:text-lg font-medium text-[color:var(--w-chrome-300)]/90",
      "section_title": "text-3xl sm:text-4xl lg:text-5xl font-display leading-[0.95]",
      "body": "text-sm sm:text-base leading-relaxed text-[color:var(--w-chrome-300)]/85",
      "small": "text-xs sm:text-sm text-[color:var(--w-silver-500)]/80"
    },
    "letter_spacing_rules": [
      "Display font: tracking-[0.01em] to tracking-[0.03em] (do NOT over-track brush fonts).",
      "UI labels: uppercase + tracking-[0.12em] for premium 'spec' feel.",
      "Buttons: uppercase + tracking-[0.10em] + font-semibold."
    ]
  },

  "color_system": {
    "locked_palette": {
      "black": "#070708",
      "charcoal": "#0E0F12",
      "graphite": "#1B1E25",
      "steel": "#3A404D",
      "silver": "#AEB6C2",
      "chrome": "#D7DCE4",
      "white": "#FFFFFF",
      "red_accent": "#E10600"
    },
    "semantic_tokens": {
      "bg": "var(--w-black-950)",
      "bg_elevated": "var(--w-charcoal-900)",
      "surface": "rgba(14, 15, 18, 0.72)",
      "surface_strong": "rgba(20, 22, 27, 0.92)",
      "text_primary": "var(--w-chrome-300)",
      "text_secondary": "rgba(174, 182, 194, 0.82)",
      "border_subtle": "rgba(238, 241, 246, 0.10)",
      "border_strong": "rgba(215, 220, 228, 0.18)",
      "focus_ring": "rgba(225, 6, 0, 0.55)",
      "cta": "var(--w-red-accent)",
      "cta_hover": "#FF1A12",
      "success": "#2EE59D",
      "warning": "#FFB020",
      "danger": "#FF3B30"
    },
    "chrome_treatments": {
      "chrome_text_class": "text-chrome text-chrome-red",
      "chrome_border": "border border-[rgba(215,220,228,0.22)]",
      "chrome_edge_glow": "shadow-[0_0_0_1px_rgba(215,220,228,0.18),0_18px_60px_rgba(0,0,0,0.55)]"
    },
    "gradients": {
      "allowed_usage": [
        "Hero background overlays only (<=20% viewport coverage)",
        "Large decorative streaks behind wheel set-piece",
        "Edge masks for marquees (mask-image), not visible gradients"
      ],
      "approved_gradients": [
        {
          "name": "cine-vignette",
          "css": "radial-gradient(1200px 620px at 62% 55%, rgba(225, 6, 0, 0.14) 0%, rgba(225, 6, 0, 0.04) 32%, rgba(7, 7, 8, 0.0) 58%), radial-gradient(140% 120% at 50% 40%, rgba(5, 5, 6, 0.0) 30%, rgba(5, 5, 6, 0.55) 72%, rgba(5, 5, 6, 0.9) 100%)"
        },
        {
          "name": "red-streak-soft",
          "css": "linear-gradient(90deg, rgba(225,6,0,0) 0%, rgba(225,6,0,0.18) 45%, rgba(225,6,0,0) 100%)"
        }
      ]
    }
  },

  "design_tokens_css": {
    "instructions": "Update /app/frontend/src/index.css: replace Google Fonts import and map h1/h2 to display font. Add tokens below under :root. Keep dark theme.",
    "css": ":root {\n  --font-display: 'Road Rage', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n  --font-body: 'Barlow', ui-sans-serif, system-ui, sans-serif;\n\n  --radius-sm: 0.75rem;\n  --radius-md: 0.95rem;\n  --radius-lg: 1.25rem;\n\n  --shadow-elev-1: 0 10px 30px rgba(0,0,0,0.45);\n  --shadow-elev-2: 0 18px 60px rgba(0,0,0,0.55);\n  --shadow-chrome: 0 0 0 1px rgba(215,220,228,0.18), 0 18px 60px rgba(0,0,0,0.55);\n\n  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);\n  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);\n\n  --btn-height: 44px;\n  --btn-pad-x: 18px;\n  --btn-radius: 999px;\n}\n\nbody { font-family: var(--font-body); }\nh1, h2, h3, h4, .font-display { font-family: var(--font-display); }\n"
  },

  "layout": {
    "grid": {
      "container": "container-w",
      "max_width": "80rem",
      "gutters": "px-5 lg:px-10",
      "section_spacing": "py-16 sm:py-20 lg:py-28",
      "stacking": [
        "Mobile-first: single column, big media first.",
        "Desktop: 12-col grid; hero uses 7/5 split for copy vs CTAs; galleries use masonry."
      ]
    },
    "page_structure": {
      "home": [
        "Cinematic video hero (full bleed)",
        "Services preview (image + price chips)",
        "Signature wheel scroll set-piece (pinned section)",
        "Featured builds (3-up premium cards)",
        "Why us (spec list + stats)",
        "Brands strip (marquee)",
        "Reviews belt (infinite draggable)",
        "Instagram grid",
        "Final CTA + quote"
      ],
      "services": [
        "Hero header",
        "Service cards with tiers + starting prices",
        "FAQ accordion",
        "CTA"
      ],
      "work": [
        "Gallery masonry",
        "Lightbox dialog",
        "CTA"
      ],
      "contact": [
        "Quote form (Web3Forms)",
        "Contact cards",
        "Policies"
      ]
    }
  },

  "components": {
    "component_path": {
      "shadcn_primary": [
        "/app/frontend/src/components/ui/button.jsx",
        "/app/frontend/src/components/ui/card.jsx",
        "/app/frontend/src/components/ui/dialog.jsx",
        "/app/frontend/src/components/ui/sheet.jsx",
        "/app/frontend/src/components/ui/input.jsx",
        "/app/frontend/src/components/ui/textarea.jsx",
        "/app/frontend/src/components/ui/accordion.jsx",
        "/app/frontend/src/components/ui/scroll-area.jsx",
        "/app/frontend/src/components/ui/carousel.jsx",
        "/app/frontend/src/components/ui/sonner.jsx"
      ],
      "new_components_to_create": [
        "/app/frontend/src/components/WheelScrollSetPiece.jsx",
        "/app/frontend/src/components/ReviewsBelt.jsx",
        "/app/frontend/src/components/ChromeCtaButtons.jsx",
        "/app/frontend/src/components/VideoHero.jsx",
        "/app/frontend/src/components/GalleryMasonry.jsx",
        "/app/frontend/src/components/InstagramGrid.jsx",
        "/app/frontend/src/components/FeaturedBuilds.jsx"
      ]
    },

    "navbar": {
      "logo_rules": [
        "Logo left, larger: h-10 sm:h-12 lg:h-14.",
        "Remove any black box background; use transparent PNG/SVG.",
        "Add subtle chrome edge glow on hover only."
      ],
      "nav_style": "glass hairline backdrop-blur with subtle top highlight",
      "cta_buttons": {
        "whatsapp": {
          "variant": "chrome-ghost",
          "tailwind": "rounded-full border border-[rgba(215,220,228,0.22)] bg-[rgba(14,15,18,0.55)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.10em] text-[color:var(--w-chrome-300)] shadow-[0_0_0_1px_rgba(215,220,228,0.10)] hover:bg-[rgba(20,22,27,0.72)] hover:shadow-[0_0_0_1px_rgba(215,220,228,0.18),0_18px_60px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)]",
          "data_testid": "navbar-whatsapp-button"
        },
        "quote": {
          "variant": "chrome-primary",
          "tailwind": "rounded-full bg-[color:var(--w-red-accent)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.10em] text-white shadow-[0_0_0_1px_rgba(225,6,0,0.35),0_18px_60px_rgba(225,6,0,0.14)] hover:bg-[#FF1A12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(225,6,0,0.55)] active:scale-[0.98]",
          "data_testid": "navbar-get-quote-button"
        }
      }
    },

    "buttons": {
      "variants": {
        "primary": {
          "style": "expensive red lacquer with chrome edge",
          "tailwind": "rounded-full bg-[color:var(--w-red-accent)] text-white shadow-[0_0_0_1px_rgba(225,6,0,0.35),0_18px_60px_rgba(225,6,0,0.14)] hover:bg-[#FF1A12] active:scale-[0.98]",
          "notes": [
            "No gradient on small buttons.",
            "Use subtle inner highlight via pseudo-element if needed."
          ]
        },
        "secondary": {
          "style": "glass + chrome border",
          "tailwind": "rounded-full border border-[rgba(215,220,228,0.22)] bg-[rgba(14,15,18,0.55)] text-[color:var(--w-chrome-300)] hover:bg-[rgba(20,22,27,0.72)]",
          "notes": [
            "Use for WhatsApp, secondary CTAs.",
            "Add icon-left (lucide-react)."
          ]
        },
        "ghost": {
          "style": "text-only with underline streak",
          "tailwind": "bg-transparent text-[color:var(--w-chrome-300)] hover:text-white",
          "notes": [
            "Use for 'View Work' links.",
            "Add animated underline using background-size transition."
          ]
        }
      },
      "sizes": {
        "sm": "h-10 px-4 text-sm",
        "md": "h-11 px-5 text-sm",
        "lg": "h-12 px-6 text-sm"
      }
    },

    "cards": {
      "base": "rounded-[var(--radius-lg)] bg-[rgba(14,15,18,0.72)] backdrop-blur-md border border-[rgba(238,241,246,0.10)] shadow-[var(--shadow-elev-1)]",
      "hover": "hover:border-[rgba(215,220,228,0.18)] hover:shadow-[var(--shadow-elev-2)]",
      "sheen": "card-sheen",
      "service_card_layout": [
        "Left: thumbnail image (aspect-video) with subtle vignette",
        "Right: service name (display font), 1-line description, starting price chip"
      ]
    }
  },

  "signature_scroll_set_piece": {
    "goal": "A pinned cinematic section where a 3D wheel spins and travels horizontally with speed streaks as the user scrolls; a huge background message parallax-reveals behind it.",
    "recommended_stack": {
      "primary": "React Three Fiber (r3f) + drei + Framer Motion",
      "fallback": "2D wheel PNG/SVG + CSS rotation + Framer Motion transforms",
      "notes": [
        "Keep it performant: wheel model should be low-poly + compressed textures.",
        "Use prefers-reduced-motion to disable pinning and show static hero image."
      ]
    },
    "install": {
      "packages": [
        "npm i three @react-three/fiber @react-three/drei"
      ]
    },
    "interaction_spec": {
      "section_behavior": [
        "Section height: 220vh (mobile 180vh) to give travel distance.",
        "Pin inner stage for ~120vh.",
        "Wheel starts off-screen left, exits right.",
        "Wheel rotation tied to scroll progress (e.g., 0 -> 1440deg).",
        "Speed streaks intensify mid-scroll (opacity + blur).",
        "Background message (e.g., 'WRAP. PROTECT. DOMINATE.') moves slower (parallax)."
      ],
      "framer_motion_scaffold_js": "// WheelScrollSetPiece.jsx\nimport { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';\n\nexport default function WheelScrollSetPiece() {\n  const reduce = useReducedMotion();\n  const { scrollYProgress } = useScroll({\n    // target: ref, offset: ['start start', 'end end']\n  });\n\n  const x = useTransform(scrollYProgress, [0, 1], ['-20vw', '120vw']);\n  const rot = useTransform(scrollYProgress, [0, 1], [0, 1440]);\n  const streakOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6, 1], [0, 0.65, 0.65, 0]);\n\n  return (\n    <section className=\"relative overflow-hidden\" data-testid=\"wheel-scroll-section\">\n      <div className=\"sticky top-0 h-screen\">\n        <div className=\"absolute inset-0\" aria-hidden>\n          <div className=\"noise-overlay\" />\n        </div>\n\n        <motion.div\n          className=\"pointer-events-none absolute inset-0 flex items-center justify-center\"\n          style={{ opacity: reduce ? 1 : 1 }}\n        >\n          <div className=\"text-center\">\n            <div className=\"font-display text-[12vw] leading-[0.85] text-chrome text-chrome-red opacity-[0.10]\">\n              SPEED\n            </div>\n            <div className=\"mt-2 font-mono uppercase tracking-[0.22em] text-xs text-[color:var(--w-silver-500)]/70\">\n              Brampton • GTA • Premium Finishes\n            </div>\n          </div>\n        </motion.div>\n\n        <motion.div\n          className=\"absolute left-0 top-1/2 -translate-y-1/2\"\n          style={{ x }}\n        >\n          <motion.div\n            className=\"relative\"\n            style={{ rotate: reduce ? 0 : rot }}\n          >\n            {/* Replace with R3F Canvas wheel or an <img> */}\n            <img\n              src=\"/assets/wheel.png\"\n              alt=\"\"\n              className=\"h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] drop-shadow-[0_30px_80px_rgba(0,0,0,0.65)]\"\n              aria-hidden\n            />\n\n            <motion.div\n              className=\"absolute -left-24 top-1/2 h-1 w-40 -translate-y-1/2 blur-[1px]\"\n              style={{ opacity: reduce ? 0 : streakOpacity }}\n              aria-hidden\n            >\n              <div className=\"h-full w-full bg-[rgba(225,6,0,0.35)]\" />\n            </motion.div>\n          </motion.div>\n        </motion.div>\n      </div>\n    </section>\n  );\n}\n"
    }
  },

  "reviews_belt": {
    "requirements": [
      "Infinite auto-scroll belt",
      "User can drag/scroll manually",
      "Edge fade masks",
      "Cards feel like premium badges (chrome border + subtle sheen)"
    ],
    "recommended_implementation": {
      "option_a": {
        "name": "motion.dev Ticker",
        "url": "https://motion.dev/docs/react-ticker",
        "notes": [
          "Best for performance and drag gestures.",
          "Bind velocity to hover/drag states."
        ]
      },
      "option_b": {
        "name": "Custom Framer Motion marquee",
        "notes": [
          "Use useAnimationFrame + wrap() to loop.",
          "Add drag='x' and constraints for manual control."
        ]
      }
    },
    "mask_css": "mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);",
    "data_testid": "reviews-belt"
  },

  "media": {
    "hero": {
      "must_use_real_videos": [
        "red Dodge Viper video",
        "green Corvette C8 video",
        "purple Tesla",
        "matte black Durango",
        "black Infiniti Q50",
        "corvette wheel closeup with orange calipers",
        "Wraptastic air freshener brand shot"
      ],
      "video_treatment": [
        "Use .cine-video filter + vignette overlay",
        "Add subtle film grain (noise-overlay)",
        "Add bottom fade to black for text legibility"
      ]
    },
    "decorative_image_urls": {
      "category": "atmosphere-only (optional)",
      "urls": [
        {
          "url": "https://images.unsplash.com/photo-1655487789576-fdcd9af88688?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
          "use": "Background texture panel / About page header (if real media missing)"
        },
        {
          "url": "https://images.unsplash.com/photo-1643261247133-f785ed87ab59?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
          "use": "Micro detail divider image (emblem close-up)"
        },
        {
          "url": "https://images.unsplash.com/photo-1584514041315-79ab950ef43f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
          "use": "Lifestyle shot for testimonials section background (very subtle opacity)"
        }
      ]
    }
  },

  "motion": {
    "principles": [
      "Everything moves with intent: like a camera dolly, not UI gimmicks.",
      "Prefer opacity + translate + blur for reveals.",
      "No universal transitions; only transition-[color,background-color,border-color,box-shadow,opacity].",
      "Use reduced motion fallback for pinned/scroll sequences."
    ],
    "micro_interactions": {
      "buttons": [
        "Hover: subtle specular sweep (pseudo-element) + shadow deepen",
        "Active: scale 0.98",
        "Focus: red ring + chrome outline"
      ],
      "cards": [
        "Hover: border brightens + sheen sweep",
        "Image: slight zoom (scale 1.03) with transition-transform only"
      ],
      "nav": [
        "On scroll: increase blur + add hairline border",
        "Logo hover: chrome glow"
      ]
    },
    "framer_defaults": {
      "transition": "{ type: 'spring', stiffness: 260, damping: 28 }",
      "reveal": "initial: { opacity: 0, y: 14, filter: 'blur(6px)' } -> animate: { opacity: 1, y: 0, filter: 'blur(0px)' }"
    }
  },

  "accessibility": {
    "requirements": [
      "WCAG AA contrast: chrome text on black is OK; avoid mid-gray on charcoal.",
      "Visible focus states on all interactive elements.",
      "prefers-reduced-motion: disable pinned wheel section + auto marquee; show manual scroll list.",
      "All videos must have poster images and muted autoplay with controls available."
    ]
  },

  "testing": {
    "data_testid_rules": [
      "All buttons, links, inputs, dialogs, carousels, and key info must include data-testid.",
      "Use kebab-case describing role (not appearance).",
      "Examples: 'hero-get-quote-button', 'services-ppf-card', 'gallery-lightbox-next-button'."
    ]
  },

  "instructions_to_main_agent": [
    "Update /app/frontend/src/index.css Google Fonts import to include Road Rage + Barlow; map headings to --font-display and body to --font-body.",
    "Keep palette locked; do not introduce purple gradients. Use red accent sparingly.",
    "Make navbar logo larger and transparent; remove any background container behind it.",
    "Implement WheelScrollSetPiece as a pinned scroll sequence using Framer Motion; optionally upgrade to R3F wheel model.",
    "Implement ReviewsBelt as infinite marquee with drag + edge mask; respect prefers-reduced-motion.",
    "Upgrade WhatsApp + Get a Quote CTAs to chrome/expensive pill buttons with tactile shadows and focus rings.",
    "Use shadcn Dialog for gallery lightbox; Card for service/build cards; Accordion for FAQs.",
    "Ensure every interactive element includes data-testid attributes (kebab-case).",
    "Do not use transition: all anywhere; only transition specific properties."
  ],

  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
