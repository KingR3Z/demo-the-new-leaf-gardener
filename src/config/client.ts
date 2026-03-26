export const client = {
  // Business Details
  name: "The New Leaf Gardener",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Maidstone.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07917 726226",
  email: "",
  website: "",

  // Location
  address: "Maidstone",
  city: "Maidstone",
  county: "",
  postcode: "",
  basedIn: "Maidstone",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Penny Shirley", rating: 5, text: "Claire was the first person I contacted about helping tidy up my, very overgrown, allotment. She replied quickly and was very knowledgeable about what my space needed. She has done a great job with my space and I would definitely recommend her.", date: "9 months ago" },
    { name: "Living Room YouTube", rating: 5, text: "Very professional and do exactly what they say. Great job very happy satisfied customer. Will recommend this company and will 💯 having them back to work on my back garden 😃 …", date: "10 months ago" },
    { name: "Michelle Sullivan", rating: 5, text: "Brilliant professional and friendly service. Highly recommend Claire she’s transformed my garden.", date: "10 months ago" },
    { name: "Roxy Francis", rating: 5, text: "Claire did an amazing job cutting back our trees and hedges. She was quick to respond to my enquiry, the quality of work was fantastic and she left the garden neat and tidy. We would definitely use Claire’s services again.", date: "a year ago" },
    { name: "Janet Topping", rating: 5, text: "Claire has looked after mum’s garden for the past couple of years. She is friendly, professional and reliable. She has worked out a maintenance schedule for the garden but is also happy to undertake specific projects such as designing and planting a flower border. The garden now always looks good, we would definitely recommend this business.", date: "a year ago" },
    { name: "Snodland Bedtime Stories", rating: 5, text: "I first discovered Claire a number of years ago when I was looking for somebody to bring the beautiful wisteria on the front of my house back to life. It really was in a bad way after a tough winter and had only had one flower the previous Spring. Claire pruned it expertly and gave it a good feed. The following Spring, it was back to its former glory. Claire has returned to prune it every winter since and each year, the wisteria is bursting with bloom. I love it so much! Claire is lovely and has also helped me transform my little garden by digging beds and introducing plants which have really thrived. I can’t recommend her enough. Get in quickly though as she’s so popular, she’s always super busy!", date: "a year ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The New Leaf Gardener | Landscaper in Maidstone",
    description: "Professional landscaper in Maidstone. 5.0-star rated on Google. Call for a free quote.",
  },
};
