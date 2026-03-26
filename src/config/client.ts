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
    { name: "Roxy Francis", rating: 5, text: "Claire did an amazing job cutting back our trees and hedges. She was quick to respond to my enquiry, the quality of work was fantastic and she left the garden neat and tidy. We would definitely use Claire’s services again. ", date: "11 months ago" },
    { name: "Living Room YouTube", rating: 5, text: "Very professional and do exactly what they say. Great job very happy satisfied customer. Will recommend this company and will 💯 having them back to work on my back garden 😃 …   Response from the owner 10 months agoEnjoyable project and a satisfyi", date: "10 months ago" },
    { name: "Penny Shirley", rating: 5, text: "Claire was the first person I contacted about helping tidy up my, very overgrown, allotment. She replied quickly and was very knowledgeable about what my space needed. She has done a great job with my space and I would definitely recommend her. ", date: "9 months ago" },
    { name: "Lee Macey", rating: 5, text: "We got in touch with Claire as we are both novice gardeners and wanted some help and guidance on bringing life to the garden at our new house. She has done a fantastic job expanding the bedding, preparing the soil and finding plants …  ", date: "2 years ago" },
    { name: "Chris Tolley", rating: 5, text: "Claire has worked closely with us over the past two years to develop our gardens. She listened carefully to what we were looking for, made good suggestions for how to achieve the effect, took time to understand light, soil and the effort we …  ", date: "3 years ago" },
    { name: "Liz Davidson", rating: 5, text: "Stuart and Claire did a fantastic job on my elderly Mum's garden, which was quite overgrown. The trees and shrubs were cut to the right size and shape, everything was discussed in advance and they arrived on schedule  and completed the work …  ", date: "7 years ago" },
    { name: "Julia Ward", rating: 5, text: "I wanted my garden revamped. Claire arrived, listened to what I wanted, asked for a list of plants I liked, or disliked and returned later with a plan. She offered other suggestions I hadn’t considered but what I particularly appreciated …  ", date: "7 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The New Leaf Gardener | Landscaper in Maidstone",
    description: "Professional landscaper in Maidstone. 5.0-star rated on Google. Call for a free quote.",
  },
};
