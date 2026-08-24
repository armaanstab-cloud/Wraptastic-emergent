// ---------------------------------------------------------------------------
// WRAPTASTIC AUTO CUSTOMS - central site content & configuration
// Edit this single file to update contact info, services, gallery media, etc.
// ---------------------------------------------------------------------------

export const BUSINESS = {
  name: "WRAPTASTIC AUTO CUSTOMS",
  shortName: "Wraptastic",
  city: "Brampton, Ontario",
  region: "Brampton & the GTA",
  address: "46 Village Lake Crescent, Brampton, ON L6S 6K6",
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
  maps: "https://www.google.com/maps?daddr=46+Village+Lake+Crescent,+Brampton,+ON+L6S+6K6",
};

export const ASSETS = {
  logo: "/assets/logo-transparent.png",
  logoBadge: "/assets/logo.png",
  viperVideo: "/assets/viper-enhanced.mp4",
  viperPoster: "/assets/viper-poster.jpg",
  corvetteVideo: "/assets/corvette-enhanced.mp4",
  corvettePoster: "/assets/corvette-poster.jpg",
  roofVideo: "/assets/roof-enhanced.mp4",
  roofPoster: "/assets/roof-poster.jpg",
  teslaPurple: "/assets/tesla-purple.png",
  teslaSide: "/assets/tesla-side.png",
  corvetteGreen: "/assets/corvette-green.png",
  corvetteFull: "/assets/corvette-full.png",
  viperStill: "/assets/viper-still.png",
  durangoBlack: "/assets/durango-black.png",
  infinitiBlack: "/assets/infiniti-black.png",
  corvetteWheel: "/assets/corvette-wheel.png",
  brandFreshener: "/assets/brand-freshener.png",
  bmwM5: "/assets/bmw-m5.png",
  cybertruckGreen: "/assets/cybertruck-green.png",
  mercedesBlack: "/assets/mercedes-black.png",
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
    image: ASSETS.cybertruckGreen,
  },
  {
    slug: "ppf",
    name: "Paint Protection Film (PPF)",
    tagline: "Invisible armor against rock chips and scratches.",
    price: "Starting at $1,999+",
    priceNote: "Final pricing depends on the vehicle and scope of work.",
    tags: ["Self-healing", "All vehicle types"],
    image: ASSETS.corvetteGreen,
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
  },
  {
    slug: "tinting",
    name: "Window Tint",
    tagline: "Nano ceramic heat rejection with a lifetime warranty.",
    price: "Starting at $199+",
    priceNote: "Nano Ceramic Tint. Lifetime warranty.",
    tags: ["Nano ceramic", "Lifetime warranty", "Heat rejection"],
    image: ASSETS.teslaSide,
    highlight: "Lifetime Warranty",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    tagline: "Remove swirls. Restore true depth.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Swirl removal", "Gloss restore"],
    image: ASSETS.corvettePoster,
  },
  {
    slug: "powder-coating",
    name: "Powder Coating",
    tagline: "Durable finishes for wheels and trim.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Wheels", "Trim", "Durable"],
    image: ASSETS.corvetteWheel,
  },
  {
    slug: "racing-stripes",
    name: "Racing Stripes",
    tagline: "Motorsport character, cleanly applied.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Custom layout", "Precision"],
    image: ASSETS.racingStripes,
  },
  {
    slug: "tuning",
    name: "Tuning",
    tagline: "Dial in the performance you want.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Performance", "Custom"],
    image: ASSETS.bmwM5,
  },
  {
    slug: "headlight-tints",
    name: "Headlight Tints",
    tagline: "Aggressive, cohesive front-end styling.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Styling", "Cohesive look"],
    image: ASSETS.mercedesBlack,
  },
  {
    slug: "exhaust-work",
    name: "Exhaust Work",
    tagline: "Sound and flow, done right.",
    price: null,
    priceNote: "Pricing varies by vehicle and scope of work.",
    tags: ["Custom", "Performance"],
    image: ASSETS.viperStill,
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

// Real Wraptastic media only. Add more items here as new work is uploaded.
// The gallery shows the first 6 and reveals more with the See More button.
export const GALLERY = [
  {
    id: "viper-red",
    type: "video",
    src: ASSETS.viperVideo,
    poster: ASSETS.viperPoster,
    title: "Dodge Viper RT/10",
    caption: "Cinematic feature build",
    size: "tall",
  },
  {
    id: "cybertruck-green",
    type: "image",
    src: ASSETS.cybertruckGreen,
    title: "Tesla Cybertruck",
    caption: "Matte green color-change wrap",
    size: "wide",
  },
  {
    id: "tesla-purple",
    type: "image",
    src: ASSETS.teslaPurple,
    title: "Tesla Model Y",
    caption: "Midnight purple color-change wrap",
    size: "wide",
  },
  {
    id: "mercedes-black",
    type: "image",
    src: ASSETS.mercedesBlack,
    title: "Mercedes-AMG C43",
    caption: "Satin black, blacked-out front end",
    size: "tall",
  },
  {
    id: "corvette-video",
    type: "video",
    src: ASSETS.corvetteVideo,
    poster: ASSETS.corvettePoster,
    title: "Chevrolet Corvette C8",
    caption: "Gloss green wrap in motion",
    size: "tall",
  },
  {
    id: "bmw-m5",
    type: "image",
    src: ASSETS.bmwM5,
    title: "BMW M5",
    caption: "Gloss black with red accents, rolling shot",
    size: "wide",
  },
  {
    id: "roof-wrap",
    type: "video",
    src: ASSETS.roofVideo,
    poster: ASSETS.roofPoster,
    title: "Gloss Black Roof Wrap",
    caption: "In the shop, install in progress",
    size: "tall",
  },
  {
    id: "viper-still",
    type: "image",
    src: ASSETS.viperStill,
    title: "Dodge Viper RT/10",
    caption: "Iconic red, dusk feature shoot",
    size: "wide",
  },
  {
    id: "infiniti-black",
    type: "image",
    src: ASSETS.infinitiBlack,
    title: "Infiniti Q50",
    caption: "Gloss black, ceramic beading in the rain",
    size: "tall",
  },
  {
    id: "tesla-side",
    type: "image",
    src: ASSETS.teslaSide,
    title: "Tesla Model Y",
    caption: "Matte purple profile, tinted glass",
    size: "wide",
  },
  {
    id: "durango-black",
    type: "image",
    src: ASSETS.durangoBlack,
    title: "Dodge Durango R/T",
    caption: "Satin black wrap, murdered-out",
    size: "wide",
  },
  {
    id: "corvette-full",
    type: "image",
    src: ASSETS.corvetteFull,
    title: "Corvette Z06",
    caption: "Gloss green at dusk",
    size: "tall",
  },
  {
    id: "corvette-wheel",
    type: "image",
    src: ASSETS.corvetteWheel,
    title: "Corvette C8 Wheel",
    caption: "Gloss black wheel, orange calipers",
    size: "tall",
  },
  {
    id: "corvette-detail",
    type: "image",
    src: ASSETS.corvetteGreen,
    title: "Corvette C8 Front End",
    caption: "Flawless finish detail",
    size: "tall",
  },
  {
    id: "brand-freshener",
    type: "image",
    src: ASSETS.brandFreshener,
    title: "Wraptastic Details",
    caption: "It is the little things",
    size: "tall",
  },
];

export const FEATURED = [
  {
    id: "viper",
    title: "Dodge Viper RT/10",
    subtitle: "Iconic Red, Feature Shoot",
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
    title: "Chevrolet Corvette Z06",
    subtitle: "Gloss Green Transformation",
    desc: "An aggressive gloss green wrap that makes the Corvette lines pop. Sharp reflections, protected paint, showroom presence.",
    image: ASSETS.corvetteFull,
    tags: ["Vinyl Wrap", "Ceramic Coating"],
  },
  {
    id: "durango",
    title: "Dodge Durango R/T",
    subtitle: "Satin Black, Murdered Out",
    desc: "Full satin black transformation with tinted glass. Stealth presence with a finish that swallows light and turns heads.",
    image: ASSETS.durangoBlack,
    tags: ["Vinyl Wrap", "Window Tint"],
  },
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

export const FAQS = [
  {
    q: "How much does a vinyl wrap cost?",
    a: "It depends on your vehicle size, the material you choose and the complexity of the job. Full wraps, partial wraps and color changes are all quoted individually. Send us your vehicle details on WhatsApp or through the quote form and we will get back to you with a clear price.",
  },
  {
    q: "How long does a full wrap take?",
    a: "Most full wraps take about 3 to 5 days depending on the vehicle, the prep required and the material. We never rush a build. Clean edges and tight corners take the time they take.",
  },
  {
    q: "Will a wrap damage my paint?",
    a: "No. A professionally installed and removed wrap protects your paint from sun and light scratches. For the best result the factory paint should be in healthy condition before wrapping.",
  },
  {
    q: "How long do wraps and PPF last?",
    a: "Quality vinyl typically lasts 5 to 7 years with proper care. Paint protection film is self-healing and can protect your paint for up to 10 years depending on the film and conditions.",
  },
  {
    q: "Is the window tint warrantied?",
    a: "Yes. We install nano ceramic tint that comes with a lifetime warranty, starting at $199+.",
  },
  {
    q: "How do I book my vehicle in?",
    a: "Request a quote first. Once you approve it, a 30% advance payment locks in your date. We accept Cash and E-transfer. Full booking terms are in our Terms of Service.",
  },
  {
    q: "Do you offer mobile service?",
    a: "Mobile service may be available upon request for an additional fee. Mention it in your quote request and we will confirm availability for your area.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "Please give us 24 to 48 hours notice before your scheduled date. We recommend rescheduling instead of cancelling, since the 30% advance payment is non-refundable on cancellations.",
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
