// ---------------------------------------------------------------------------
// WRAPTASTIC AUTO CUSTOMS - central site content & configuration
// Edit this single file to update contact info, services, gallery media, etc.
// ---------------------------------------------------------------------------

export const BUSINESS = {
  name: "WRAPTASTIC AUTO CUSTOMS",
  shortName: "Wraptastic",
  city: "Brampton, Ontario",
  region: "Brampton & the GTA",
  phoneDisplay: "(647) 482-1403",
  phoneRaw: "+16474821403",
  email: "wraptasticautocustoms@gmail.com",
  instagramHandle: "@the.wraptastic",
};

const WA_MESSAGE =
  "Hi Wraptastic, I would like to get a quote for my vehicle. I would like to ask about your services and pricing.";

export const LINKS = {
  whatsapp: `https://wa.me/16474821403?text=${encodeURIComponent(WA_MESSAGE)}`,
  phone: "tel:+16474821403",
  email: "mailto:wraptasticautocustoms@gmail.com",
  instagram: "https://www.instagram.com/the.wraptastic/",
  tiktok: "https://www.tiktok.com/@wraptasticac",
  google: "https://share.google/ThQCm7y9VpegJHy8K",
};

export const ASSETS = {
  logo: "/assets/logo-transparent.png",
  logoBadge: "/assets/logo.png",
  viperVideo: "/assets/viper-enhanced.mp4",
  viperPoster: "/assets/viper-poster.jpg",
  corvetteVideo: "/assets/corvette-enhanced.mp4",
  corvettePoster: "/assets/corvette-poster.jpg",
  teslaPurple: "/assets/tesla-purple.png",
  corvetteGreen: "/assets/corvette-green.png",
  viperStill: "/assets/viper-still.png",
  durangoBlack: "/assets/durango-black.png",
  infinitiBlack: "/assets/infiniti-black.png",
  corvetteWheel: "/assets/corvette-wheel.png",
  brandFreshener: "/assets/brand-freshener.png",
  wheelSpin: "/assets/wheel-spin.png",
  racingStripes: "/assets/racing-stripes.jpg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

// slug is used for data-testid and service select
export const SERVICES = [
  {
    slug: "vinyl-wrap",
    name: "Vinyl Wrap",
    tagline: "Transform the finish. Keep the paint.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Full & partial", "Color change", "Removable"],
    image: ASSETS.teslaPurple,
    category: "Wraps",
  },
  {
    slug: "ppf",
    name: "Paint Protection Film (PPF)",
    tagline: "Invisible armor against rock chips and scratches.",
    price: "Starting at $1,999+",
    priceNote: "Final pricing depends on the vehicle and scope of work.",
    tags: ["Self-healing", "All vehicle types"],
    image: ASSETS.corvetteGreen,
    category: "PPF",
    tiers: [
      { label: "Partial Front", price: "Starting at $999+" },
      { label: "Full Front", price: "Starting at $1,499+" },
      { label: "Full Body", price: "Starting at $2,999+" },
    ],
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    tagline: "Deep gloss, hydrophobic beading and long-term protection.",
    price: "Starting at $249+",
    priceNote: "Final pricing depends on vehicle and service requirements.",
    tags: ["Hydrophobic", "UV resistant", "Enhanced gloss"],
    image: ASSETS.infinitiBlack,
    category: "Ceramic",
  },
  {
    slug: "tinting",
    name: "Window Tint",
    tagline: "Nano ceramic heat rejection with a lifetime warranty.",
    price: "Starting at $199+",
    priceNote: "Nano Ceramic Tint. Lifetime warranty.",
    tags: ["Nano ceramic", "Lifetime warranty", "Heat rejection"],
    image: ASSETS.durangoBlack,
    category: "Tint",
    highlight: "Lifetime Warranty",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    tagline: "Remove swirls. Restore true depth.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Swirl removal", "Gloss restore"],
    image: ASSETS.corvetteGreen,
    category: "Paint Correction",
  },
  {
    slug: "powder-coating",
    name: "Powder Coating",
    tagline: "Durable finishes for wheels and trim.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Wheels", "Trim", "Durable"],
    image: ASSETS.corvetteWheel,
    category: "Other",
  },
  {
    slug: "racing-stripes",
    name: "Racing Stripes",
    tagline: "Motorsport character, cleanly applied.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Custom layout", "Precision"],
    image: ASSETS.racingStripes,
    category: "Other",
  },
  {
    slug: "tuning",
    name: "Tuning",
    tagline: "Dial in the performance you want.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Performance", "Custom"],
    image: ASSETS.corvettePoster,
    category: "Performance",
  },
  {
    slug: "headlight-tints",
    name: "Headlight Tints",
    tagline: "Aggressive, cohesive front-end styling.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Styling", "Cohesive look"],
    image: ASSETS.infinitiBlack,
    category: "Other",
  },
  {
    slug: "exhaust-work",
    name: "Exhaust Work",
    tagline: "Sound and flow, done right.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Custom", "Performance"],
    image: ASSETS.viperStill,
    category: "Performance",
  },
];

export const VEHICLE_TYPES = [
  "Sedan",
  "Coupe",
  "SUV",
  "Truck",
  "Sports Car",
  "Luxury Vehicle",
  "Exotic Vehicle",
  "Performance Vehicle",
  "Commercial Vehicle",
];

export const BRANDS = ["Avery Dennison", "3M", "XPEL", "VViViD", "KPMF"];

export const GALLERY_CATEGORIES = [
  "All",
  "Wraps",
  "PPF",
  "Tint",
  "Ceramic",
  "Paint Correction",
  "Performance",
  "Other",
];

// Real Wraptastic media only. Add more items here as new work is uploaded.
export const GALLERY = [
  {
    id: "viper-red",
    type: "video",
    src: ASSETS.viperVideo,
    poster: ASSETS.viperPoster,
    title: "Dodge Viper RT/10",
    caption: "Cinematic feature build",
    categories: ["Performance", "Other"],
    size: "tall",
  },
  {
    id: "viper-still",
    type: "image",
    src: ASSETS.viperStill,
    title: "Dodge Viper RT/10",
    caption: "Iconic red, dusk feature shoot",
    categories: ["Performance", "Paint Correction"],
    size: "wide",
  },
  {
    id: "tesla-purple",
    type: "image",
    src: ASSETS.teslaPurple,
    title: "Tesla Model Y",
    caption: "Midnight purple color-change wrap",
    categories: ["Wraps"],
    size: "wide",
  },
  {
    id: "durango-black",
    type: "image",
    src: ASSETS.durangoBlack,
    title: "Dodge Durango R/T",
    caption: "Satin black wrap, murdered-out",
    categories: ["Wraps", "Tint"],
    size: "wide",
  },
  {
    id: "corvette-video",
    type: "video",
    src: ASSETS.corvetteVideo,
    poster: ASSETS.corvettePoster,
    title: "Chevrolet Corvette C8",
    caption: "Gloss green wrap in motion",
    categories: ["Wraps", "Performance"],
    size: "tall",
  },
  {
    id: "infiniti-black",
    type: "image",
    src: ASSETS.infinitiBlack,
    title: "Infiniti Q50",
    caption: "Gloss black, ceramic beading in the rain",
    categories: ["Ceramic", "Tint"],
    size: "tall",
  },
  {
    id: "corvette-detail",
    type: "image",
    src: ASSETS.corvetteGreen,
    title: "Corvette C8 Front End",
    caption: "Flawless finish detail",
    categories: ["Wraps", "Paint Correction"],
    size: "tall",
  },
  {
    id: "corvette-wheel",
    type: "image",
    src: ASSETS.corvetteWheel,
    title: "Corvette C8 Wheel",
    caption: "Gloss black wheel, orange calipers",
    categories: ["Other", "Performance"],
    size: "tall",
  },
  {
    id: "brand-freshener",
    type: "image",
    src: ASSETS.brandFreshener,
    title: "Wraptastic Details",
    caption: "It is the little things",
    categories: ["Other"],
    size: "tall",
  },
];

export const FEATURED = [
  {
    id: "viper",
    title: "Dodge Viper RT/10",
    subtitle: "Iconic Red — Feature Shoot",
    desc: "A legend kept flawless. Paint correction, protection and a cinematic dusk shoot that shows every curve the way it deserves.",
    image: ASSETS.viperStill,
    tags: ["Paint Correction", "Detailing"],
  },
  {
    id: "tesla",
    title: "Tesla Model Y",
    subtitle: "Midnight Purple Color-Change Wrap",
    desc: "A full color-change wrap with a deep metallic shift finish. Clean panel gaps, wrapped edges, and a factory-fresh result.",
    image: ASSETS.teslaPurple,
    tags: ["Vinyl Wrap", "Window Tint"],
  },
  {
    id: "corvette",
    title: "Chevrolet Corvette C8",
    subtitle: "Gloss Green Transformation",
    desc: "An aggressive gloss green wrap that makes the C8 lines pop. Sharp reflections, protected paint, showroom presence.",
    image: ASSETS.corvetteGreen,
    tags: ["Vinyl Wrap", "Ceramic Coating"],
  },
  {
    id: "durango",
    title: "Dodge Durango R/T",
    subtitle: "Satin Black — Murdered Out",
    desc: "Full satin black transformation with tinted glass. Stealth presence with a finish that swallows light and turns heads.",
    image: ASSETS.durangoBlack,
    tags: ["Vinyl Wrap", "Window Tint"],
  },
];

// Curated Instagram grid (real business media). If you connect a live feed
// (e.g. Behold.so), set REACT_APP_INSTAGRAM_FEED_URL and it auto-updates.
export const IG_POSTS = [
  { id: "ig-1", image: ASSETS.viperStill, caption: "Dodge Viper RT/10 — feature shoot" },
  { id: "ig-2", image: ASSETS.corvetteGreen, caption: "Corvette C8 gloss green" },
  { id: "ig-3", image: ASSETS.teslaPurple, caption: "Tesla Model Y midnight purple" },
  { id: "ig-4", image: ASSETS.durangoBlack, caption: "Durango R/T satin black" },
  { id: "ig-5", image: ASSETS.infinitiBlack, caption: "Infiniti Q50 in the rain" },
  { id: "ig-6", image: ASSETS.brandFreshener, caption: "Wraptastic details" },
];

export const REVIEWS = [
  {
    name: "SM_08",
    rating: 5,
    text: "Just had my car done with a vinyl wrap, ceramic coating, and window tinting, and it was good! The team was super knowledgeable and the service was top-notch, plus the price was absolutely worth it for the flawless execution. Seriously, if you want quality work, this place is the spot.",
  },
  {
    name: "Rahul Hassanpuri",
    rating: 5,
    text: "Had an amazing experience with Wraptastic Auto Customs! Got the front end of my Tesla Model Y protected with PPF and the entire car window tinted. The quality of work is outstanding, attention to detail is top notch, and the team was professional from start to finish. Highly recommend!",
  },
  {
    name: "Keerat Sidhu",
    rating: 5,
    text: "5% back windows, 35% front windows and 50% front windshield. I also got ceramic coating and PPF making my car look beautiful. Absolutely amazing service, I would recommend Wraptastic to anyone that wants tints done or any other services done to vehicles.",
  },
  {
    name: "GURSEWAK Singh",
    rating: 5,
    text: "Got the ceramic coating and vinyl wrap done at Wraptastic, with some exhaust work too. The staff was super knowledgeable and gave top-notch service, plus the price was absolutely worth it for the quality of work.",
  },
  {
    name: "V J",
    rating: 5,
    text: "Wraptastic Auto Customs was a solid choice. The place was clean and had a chill vibe, plus the quality of the work was really good. The team was super helpful and made the whole process easy. Just a great experience all around, I am happy I chose them for my wrap!",
  },
  {
    name: "manav kapoor",
    rating: 5,
    text: "Just got my windows tinted and wow, it was super chill. The staff knew their stuff and the price? Absolutely worth it. It really gave my ride a nice look, kinda cool vibe and I cannot stop checking it out. Totally going back for more!",
  },
];

export const POLICIES = [
  {
    title: "Advance Payment",
    body: "A 30% advance payment is required before major work begins.",
  },
  {
    title: "Cancellations",
    body: "Please notify us 24 to 48 hours before your scheduled date. The 30% advance payment is non-refundable in the event of a cancellation.",
  },
  {
    title: "Rescheduling",
    body: "We recommend rescheduling instead of cancelling. Rescheduling handled according to our policy helps you avoid losing your advance payment.",
  },
  {
    title: "Payment Methods",
    body: "We accept Cash and E-transfer.",
  },
];

export const SERVICE_OPTIONS = [
  "Vinyl Wrap",
  "Paint Protection Film (PPF)",
  "Ceramic Coating",
  "Window Tint",
  "Paint Correction",
  "Powder Coating",
  "Racing Stripes",
  "Tuning",
  "Headlight Tints",
  "Exhaust Work",
  "Other / Not sure yet",
];

export const CONTACT_METHODS = ["WhatsApp", "Phone", "Email", "Text"];
