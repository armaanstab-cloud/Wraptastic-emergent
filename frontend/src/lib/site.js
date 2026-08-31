// ---------------------------------------------------------------------------
// WRAPTASTIC AUTO CUSTOMS - central site content & configuration
// Edit this single file to update contact info, services, gallery media, etc.
// ---------------------------------------------------------------------------

export const BUSINESS = {
  name: "WRAPTASTIC AUTO CUSTOMS",
  shortName: "Wraptastic",
  city: "Brampton, Ontario",
  region: "Brampton & the GTA",
  // Deliberately NOT displayed anywhere on the site - the shop address is
  // private. It is kept here only as the reference used for the Google Maps
  // link below and for the Google Business Profile listing.
  address: "46 Village Lake Crescent, Brampton, ON L6S 6K6",
  addressPublic: "Brampton, Ontario",
  phoneDisplay: "(647) 482-1403",
  phoneRaw: "+16474821403",
  email: "wraptasticautocustoms@gmail.com",
  instagramHandle: "@wraptasticac",
};

const WA_MESSAGE =
  "Hi Wraptastic, I would like to get a quote for my vehicle. I would like to ask about your services and pricing.";

export const LINKS = {
  whatsapp: `https://wa.me/16474821403?text=${encodeURIComponent(WA_MESSAGE)}`,
  phone: "tel:+16474821403",
  email: "mailto:wraptasticautocustoms@gmail.com",
  instagram: "https://www.instagram.com/wraptasticac/",
  tiktok: "https://www.tiktok.com/@wraptasticac",
  google: "https://share.google/ThQCm7y9VpegJHy8K",
  maps: "https://www.google.com/maps/dir/?api=1&destination=Wraptastic+Auto+Customs%2C+46+Village+Lake+Crescent%2C+Brampton%2C+ON+L6S+6K6",
};

export const ASSETS = {
  logo: "/assets/logo-transparent.webp",
  logoBadge: "/assets/logo.webp",
  viperVideo: "/assets/viper-enhanced.mp4",
  viperPoster: "/assets/viper-poster.webp",
  corvetteVideo: "/assets/corvette-enhanced.mp4",
  corvettePoster: "/assets/corvette-poster.webp",
  roofVideo: "/assets/roof-enhanced.mp4",
  roofPoster: "/assets/roof-poster.webp",
  teslaPurple: "/assets/tesla-purple.webp",
  teslaSide: "/assets/tesla-side.webp",
  corvetteGreen: "/assets/corvette-green.webp",
  corvetteFull: "/assets/corvette-full.webp",
  viperStill: "/assets/viper-still.webp",
  durangoBlack: "/assets/durango-black.webp",
  infinitiBlack: "/assets/infiniti-black.webp",
  corvetteWheel: "/assets/corvette-wheel.webp",
  brandFreshener: "/assets/brand-freshener.webp",
  bmwM5: "/assets/bmw-m5.webp",
  cybertruckGreen: "/assets/cybertruck-green.webp",
  mercedesBlack: "/assets/mercedes-black.webp",
  wheelSpin: "/assets/wheel-spin.webp",
  racingStripes: "/assets/racing-stripes.webp",
  jeepRubiconWhite: "/assets/jeep-rubicon-white.webp",
  teslaModelYSatin: "/assets/tesla-model-y-satin.webp",
  // Stock photo, not our own work. Source: Unsplash (Koons Automotive),
  // photo uoMRXrDu4gQ. Unsplash License: free for commercial use, no attribution
  // required. Swap for a real Wraptastic exhaust build when one is available.
  exhaustTip: "/assets/exhaust-tip.webp",
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
    // Towers fill the top of this shot; bias the crop down to the vehicle.
    imagePos: "center bottom",
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
    price: "Starting at $149+",
    priceNote: "Nano Ceramic Tint. Lifetime warranty.",
    tags: ["Nano ceramic", "Lifetime warranty", "Heat rejection"],
    image: ASSETS.teslaSide,
    highlight: "Lifetime Warranty",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    tagline: "Remove swirls. Restore true depth.",
    price: "Starting at $249+",
    priceNote: "Final pricing depends on the vehicle and scope of work.",
    tags: ["Swirl removal", "Gloss restore"],
    image: ASSETS.jeepRubiconWhite,
  },
  {
    slug: "powder-coating",
    name: "Powder Coating",
    tagline: "Durable finishes for wheels and trim.",
    price: "Starting at $449+",
    priceNote: "Final pricing depends on the vehicle and scope of work.",
    tags: ["Wheels", "Trim", "Durable"],
    image: ASSETS.corvetteWheel,
  },
  {
    slug: "racing-stripes",
    name: "Racing Stripes",
    tagline: "Motorsport character, cleanly applied.",
    price: "Starting at $249+",
    priceNote: "Final pricing depends on the vehicle and scope of work.",
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
    price: "Starting at $99+",
    priceNote: "Final pricing depends on the vehicle and scope of work.",
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
    image: ASSETS.exhaustTip,
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
  "Motorcycle",
  "ATV",
];

export const BRANDS = ["Avery Dennison", "3M", "XPEL", "VViViD", "KPMF"];

// Printed in the footer and mirrored in the areaServed block of
// public/index.html. City names in the page text are what rank for searches
// like "car wrap mississauga" - keep this list to places we will actually
// travel to or take vehicles from.
export const SERVICE_AREAS = [
  "Brampton",
  "Mississauga",
  "Toronto",
  "Vaughan",
  "Caledon",
  "Etobicoke",
  "Georgetown",
  "Milton",
];

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
    id: "tesla-model-y-satin",
    type: "image",
    src: ASSETS.teslaModelYSatin,
    title: "Tesla Model Y",
    caption: "Satin grey color-change wrap",
    size: "wide",
  },
  {
    id: "jeep-rubicon-white",
    type: "image",
    src: ASSETS.jeepRubiconWhite,
    title: "Jeep Wrangler Rubicon",
    caption: "Gloss white full wrap",
    size: "tall",
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
    title: "Corvette Eray",
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
    title: "Chevrolet Corvette Eray",
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

// Real Google reviews, transcribed from the Google Business Profile.
// The rotating belt on the home and reviews pages shows ALL of these; the
// "More Reviews" grid on the reviews page shows the first REVIEWS_ON_PAGE and
// sends people to Google for the rest, so keep the most detailed ones near the
// top of this list.
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
    name: "Hargun Kaur",
    rating: 5,
    text: "Got my window tinting, PPF, and vinyl wrap done here, and the execution was flawless. The staff were super knowledgeable and friendly, making sure I felt good about my choices. Pricing was absolutely worth it too. Seriously, if you're looking for quality work, this is the place to be.",
  },
  {
    name: "Aarav Cajla",
    rating: 5,
    text: "Wraptastic does a great job with all of the services they provide, I recently got a full body PPF done to my Genesis G70 and it was completed on time, professionally, and with high quality.",
  },
  {
    name: "Maan singh",
    rating: 5,
    text: "I got tints and ceramic coating done from these guys and they do an immaculate job. I would highly recommend to everyone and you will not regret it. Suhail does a great job communicating and helping understand everything about the job being done!",
  },
  {
    name: "Daksh Narula",
    rating: 5,
    text: "Got a vinyl wrap done here and the attention to detail was exceptional, really happy with how it turned out. Staff were super knowledgeable and friendly, and honestly, it was pretty great value for the money.",
  },
  {
    name: "Aryan Sahni",
    rating: 5,
    text: "Just got my vinyl wrap and ceramic coating done at Wraptastic, and the service was on point. The staff was super friendly and knew their stuff, which made the whole experience a breeze. The quality of the work? Flawless execution, for sure. Totally worth every penny, I'm stoked with how my car turned out!",
  },
  {
    // Google shows this one at 4 stars, not 5 - see the owner reply on the
    // listing. Left honest on purpose.
    name: "Keerat Sidhu",
    rating: 4,
    text: "5% back windows, 35% front windows and 50% front windshield. I also got ceramic coating and PPF making my car look beautiful. Absolutely amazing service, I would recommend Wraptastic to anyone that wants tints done or any other services done to vehicles.",
  },
  {
    name: "harsimran singh",
    rating: 5,
    text: "Just got my car done with paint protection film and ceramic coating, and honestly, the work was beyond expectations. The staff was super knowledgeable and chill, making the whole experience pretty nice. Can't beat the value either, great bang for buck.",
  },
  {
    name: "Priyansh Panwar",
    rating: 5,
    text: "Just got some paint protection film at Wraptastic and I was really impressed with how it turned out. The staff were super friendly and knew their stuff, which made everything way easier. Prices felt right for the quality, and honestly, they did a great job. I'd say if you're thinking about it, just go for it, you won't regret it!",
  },
  {
    name: "GURSEWAK Singh",
    rating: 5,
    text: "Got the ceramic coating and vinyl wrap done at Wraptastic, with some exhaust work too. The staff was super knowledgeable and gave top-notch service, plus the price was absolutely worth it for the quality of work.",
  },
  {
    name: "Harinder Dhillon",
    rating: 5,
    text: "Amazing people and quality work. Best service i had so far since i went to 2 other places. Even after the job is done they treat you well. Got my car fully wrapped here and they're great. I recommend to everyone!",
  },
  // ^ REVIEWS_ON_PAGE cut-off. Everything below shows in the belt only.
  {
    name: "Akash Khalon",
    rating: 5,
    text: "Just had ceramic coating done at Wraptastic, and I gotta say, the execution was flawless. The staff were super friendly and really knew their stuff, which made the whole process pretty nice. Totally worth the price for the quality you get. If you're looking to protect your ride, I'd say these guys are the way to go.",
  },
  {
    name: "Subeg Uppal",
    rating: 5,
    text: "I took my Corvette for a vinyl wrap and window tinting done at Wraptastic and it was really good. The staff was super chill and knew their stuff, plus the price was totally worth it for the quality. I'd say it's a solid spot if you want to upgrade your ride.",
  },
  {
    name: "Eva Davies",
    rating: 5,
    text: "Got my window tinting done at Wraptastic and the work was beyond expectations. The staff were super knowledgeable and friendly, really helpful too. Honestly, it was absolutely worth the price. I'd say go here if you need stuff done to your car.",
  },
  {
    name: "Japgun",
    rating: 5,
    text: "Got a vinyl wrap done at Wraptastic, and the quality was beyond expectations. The staff were super knowledgeable and friendly, totally worth the price for the top-notch service.",
  },
  {
    name: "Jasman Aujla",
    rating: 5,
    text: "Just got my windows tinted at Wraptastic and I gotta say, the execution was flawless. The staff were super friendly and knew their stuff, making the whole thing pretty nice. I walked away feeling like I got a solid deal for the quality, totally worth it!",
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
  {
    name: "Khushman Chahal",
    rating: 5,
    text: "Absolutely amazing experience with Wraptastic Auto Customs. The quality of the work was amazing and very professional, attention to detail was top tier and the final result looked incredible. Highly recommend to everyone.",
  },
  {
    name: "Yash Vashisht",
    rating: 5,
    text: "Wraptastic provides the best quality services that anyone can ask for. Every time a friend of mine asks me about where they should get their car wrapped, I only have one answer. I've only heard good things about this business, so if you need your car wrapped, choose Wraptastic.",
  },
  {
    name: "aman singh",
    rating: 5,
    text: "Just got my ceramic coating and vinyl wrap done at Wraptastic, and wow, flawless execution for sure. The staff were super friendly and really knew their stuff, which made everything feel pretty chill.",
  },
  {
    name: "Aj L",
    rating: 5,
    text: "Great service, PPF was flawless, tints were perfect and ceramic coating was great as well.",
  },
  {
    name: "Ryan jatana",
    rating: 5,
    text: "Got ceramic coating done by Suhail, amazing job brother, thanks.",
  },
  {
    name: "The Real Food TV",
    rating: 5,
    text: "Amazing guys, really changed the whole look of my Durango.",
  },
  {
    name: "Waleed Adnan",
    rating: 5,
    text: "Amazing work on my car, great reasonable people and outstanding job done for an amazing price.",
  },
  {
    name: "Hareen Dhanoa",
    rating: 5,
    text: "I got my car PPF done at Wraptastic and it was amazing. Had a great experience and professional work. Highly recommend to everyone!",
  },
  {
    name: "Shamsher Singh",
    rating: 5,
    text: "Great quality work! Wrapped professionally and would recommend to all!",
  },
  {
    name: "Kivjot",
    rating: 5,
    text: "They did a very good job, I didn't have any problems, it was headache free and good price.",
  },
  {
    name: "harbir sandhu",
    rating: 5,
    text: "Got my car ceramic coated, great service.",
  },
  {
    name: "Mehtab Dhanoa",
    rating: 5,
    text: "I got my car wrapped, and the service was great!",
  },
  {
    name: "Milan Jit",
    rating: 5,
    text: "Amazing work.",
  },
  {
    name: "Kidha Bro",
    rating: 5,
    text: "Just went to Wraptastic, now I'm feeling fantastic.",
  },
  {
    name: "Jagmeet Singh Sekhon",
    rating: 5,
    text: "Out of the world.",
  },
];

// How many of the reviews above appear in the grid on the reviews page. The
// rest live in the belt, and the Google button under the grid covers everything.
export const REVIEWS_ON_PAGE = 12;

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
