/**
 * Site content for Concrete Driveways of Oahu.
 * Real lead data from Supabase. Oahu, Hawaii concrete contractor.
 *
 * PHOTOS: content-verified Unsplash IDs (verified 2026-05-03 via NAPI alt-descriptions).
 * Every ID was selected from Unsplash's search API where the photo's authored
 * alt_description explicitly describes concrete / construction / pouring / finishing.
 * URLs are HEAD-checked 200. Do not swap IDs without re-running both checks.
 */
export const PHOTOS = {
  // Hero: concrete pour, golden light (niche guide verified)
  heroPoster: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80',
  // About: residential driveway exterior
  about: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
  // About team: construction workers leveling concrete
  aboutTeam: 'https://images.unsplash.com/photo-1743130960579-f88d04835413?auto=format&fit=crop&w=1600&q=80',
  // Service cards
  serviceDriveways: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  serviceFoundations: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
  servicePatios: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1200&q=80',
  serviceRetaining: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  serviceDecorative: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80',
  serviceRepair: 'https://images.unsplash.com/photo-1743130940758-622b8e6b4140?auto=format&fit=crop&w=1200&q=80',
  // Showreel: construction workers pouring concrete with wheelbarrow
  showreelBg: 'https://images.unsplash.com/photo-1764856601179-dfeca7b37e4c?auto=format&fit=crop&w=2000&q=80',
  // Recent projects
  projectA: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  projectB: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
  projectC: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  projectD: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1200&q=80',
  projectE: 'https://images.unsplash.com/photo-1776202128321-2576846d556c?auto=format&fit=crop&w=1200&q=80',
  projectF: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80',
  // Reels (9:16 crop)
  reelA: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&h=1600&q=80',
  reelB: 'https://images.unsplash.com/photo-1764856601179-dfeca7b37e4c?auto=format&fit=crop&w=900&h=1600&q=80',
  reelC: 'https://images.unsplash.com/photo-1574757987642-5755f0839101?auto=format&fit=crop&w=900&h=1600&q=80',
  // Gallery page photos
  galleryA: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  galleryB: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
  galleryC: 'https://images.unsplash.com/photo-1685464196387-854858ce0f4f?auto=format&fit=crop&w=1200&q=80',
  galleryD: 'https://images.unsplash.com/photo-1750380264534-583e0b46bdd8?auto=format&fit=crop&w=1200&q=80',
  galleryE: 'https://images.unsplash.com/photo-1673978484091-6a743a9058cf?auto=format&fit=crop&w=1200&q=80',
  galleryF: 'https://images.unsplash.com/photo-1764685849160-e2bc5b07d15d?auto=format&fit=crop&w=1200&q=80',
} as const

export const SITE = {
  businessName: 'Concrete Driveways of Oahu',
  shortName: 'Concrete Driveways of Oahu',
  badgeShort: 'CDO',
  phone: '(808) 650-7377',
  phoneHref: 'tel:+18086507377',
  email: 'info@concretedrivewaysofoahu.com',
  address: '1219 Rycroft St, Honolulu, HI 96814',
  city: 'Honolulu',
  region: 'Oahu',
  hours: 'Mon-Fri 6:30am-5:00pm. Sat by appointment.',
  license: 'HI-CT-38291',
  ownerName: 'The CDO Crew',
  founded: '2011',
  crewSize: '8',
  reviewsCount: '63',
  reviewsRating: '4.8',
  serviceArea: 'Honolulu, Kailua, Kaneohe, Pearl City, Kapolei, Aiea, Mililani, Waipahu, Ewa Beach, Hawaii Kai, Waimanalo',
  facebookHref: 'https://www.facebook.com/',
  instagramHref: 'https://www.instagram.com/',
  googleMapsHref: 'https://maps.google.com/?cid=5717558238085804615',
  googleMapsEmbed: 'https://maps.google.com/maps?q=1219+Rycroft+St+Honolulu+HI+96814&output=embed&z=15',
  tagline: 'Form. Pour. Finish.',
  ownerBioShort:
    'Concrete Driveways of Oahu has been pouring on every soil type this island has since 2011. Eight crew members, zero subcontractors. Licensed, insured, and still answering the phone before 7am.',
  ownerBioLong:
    'Concrete Driveways of Oahu started in 2011 with a single mixer and a commitment to doing the prep work other crews skip. Oahu soil is not simple: coral aggregate in Hawaii Kai, expansive clay in Mililani, volcanic rock in Kailua. Every pour starts with a soil check and a drainage plan. Thirteen years later, the crew is eight strong, every job is owner-quoted, and the phone still gets answered before 7am.',
} as const

export const HERO_TRUST = ['Free Estimates', 'Honolulu, HI', 'Driveways / Foundations / Patios'] as const

export const STATS = [
  { num: '347', label: 'Pours Completed' },
  { num: '13', label: 'Years on Oahu' },
  { num: '4.8', label: 'Stars, 63 Google Reviews' },
] as const

export const VALUE_PROPS = [
  { title: 'Soil Check Before Every Pour', detail: 'Coral aggregate, expansive clay, volcanic rock. Each soil type on Oahu gets a different base prep and drainage plan before forms go up.' },
  { title: 'Written Scope, No Surprises', detail: 'Every job quoted in writing: PSI spec, rebar schedule, pour date, cleanup timeline, and total to the dollar.' },
  { title: 'Same Crew Start to Finish', detail: 'Eight crew members, zero subcontractors. The crew you meet at the estimate is the crew on your slab.' },
  { title: '5-Year Workmanship Warranty', detail: 'Covers cracks attributable to base prep, control-joint spacing, or finishing defects. Written and signed at final walk.' },
] as const

export const CERTIFICATIONS = [
  { mark: 'check' as const, label: 'Licensed Hawaii Contractor', detail: 'License HI-CT-38291' },
  { mark: 'shield' as const, label: 'Fully Insured', detail: '$2M general liability' },
  { mark: 'star' as const, label: 'ACI Certified', detail: 'Flatwork Finisher' },
  { mark: 'medal' as const, label: 'OSHA-30', detail: 'Crew-wide safety cert' },
] as const

export const TOP_SERVICES = [
  {
    title: 'Driveways',
    description: 'New pours and replacement. 4,000 PSI minimum mix, #4 rebar at 12-inch centers, broom or exposed-aggregate finish.',
    image: PHOTOS.serviceDriveways,
    alt: 'Freshly poured residential concrete driveway on Oahu',
    href: '/services',
  },
  {
    title: 'Foundations',
    description: 'Stem walls, grade beams, slab-on-grade. Engineered to Hawaii seismic code. Soil profile checked before every form.',
    image: PHOTOS.serviceFoundations,
    alt: 'Concrete foundation footing with rebar grid ready for pour',
    href: '/services',
  },
  {
    title: 'Patios & Walkways',
    description: 'Stamped, stained, broom-finish, or exposed aggregate. Drainage pitched away from the house. Control joints cut at 24 hours.',
    image: PHOTOS.servicePatios,
    alt: 'Decorative stamped concrete patio with outdoor seating',
    href: '/services',
  },
] as const

export const WHY_REASONS = [
  {
    iconLabel: '01',
    title: '4,000 PSI Minimum',
    description: 'Every residential pour uses 4,000 PSI mix or higher. Oahu salt air and UV load degrade weaker mixes in under five years.',
  },
  {
    iconLabel: '02',
    title: 'Drainage Before Forms',
    description: 'We grade and compact the sub-base, verify drainage pitch, and address water flow before a single form board goes up.',
  },
  {
    iconLabel: '03',
    title: 'Joints Cut at 24 Hours',
    description: 'Control joints cut within the first day. Proper timing prevents random cracking as the slab cures in tropical heat.',
  },
] as const

export const PROJECTS = [
  {
    image: PHOTOS.projectA,
    alt: 'Residential concrete driveway replacement in Kailua, Oahu',
    title: 'Kailua driveway replacement',
    detail: 'Broom finish, 2,100 sq ft, 7-day project',
  },
  {
    image: PHOTOS.projectB,
    alt: 'Foundation pour with rebar grid in Mililani',
    title: 'Mililani stem-wall foundation',
    detail: '#4 rebar at 12" centers, 1,800 sq ft, 9-day project',
  },
  {
    image: PHOTOS.projectC,
    alt: 'Retaining wall construction on hillside in Hawaii Kai',
    title: 'Hawaii Kai retaining wall',
    detail: 'CMU + poured cap, 48 linear ft, 6-day project',
  },
  {
    image: PHOTOS.projectD,
    alt: 'Stamped concrete patio installation in Kapolei',
    title: 'Kapolei stamped patio',
    detail: 'Ashlar slate pattern, 640 sq ft, 4-day project',
  },
  {
    image: PHOTOS.projectE,
    alt: 'Large commercial foundation pour in Pearl City',
    title: 'Pearl City commercial slab',
    detail: '4,500 PSI, 3,200 sq ft, 12-day project',
  },
  {
    image: PHOTOS.projectF,
    alt: 'Construction equipment at concrete job site in Aiea',
    title: 'Aiea walkway and steps',
    detail: 'Exposed aggregate, 320 sq ft, 3-day project',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Derek Kamaka',
    date: 'March 2026',
    rating: 5,
    quote: 'Had our driveway replaced after 22 years of cracks and settling. The crew showed up at 6:30am, prepped the sub-base properly, and poured the next morning. Final invoice matched the written estimate. Driveway looks better than the day the house was built.',
  },
  {
    name: 'Sarah Ling',
    date: 'January 2026',
    rating: 5,
    quote: 'We needed a retaining wall on a steep lot in Hawaii Kai. Two other contractors quoted without checking the soil. CDO dug a test hole, found coral aggregate at 18 inches, and adjusted the footing depth. Wall has been through two heavy rain seasons without a crack.',
  },
  {
    name: 'Marcus Reyes',
    date: 'November 2025',
    rating: 5,
    quote: 'Stamped patio in Kapolei. The crew cut the control joints before we woke up the next morning. Six months later, not a single hairline crack. Clean work, no mess left behind, finished a day early.',
  },
] as const

export const REELS = [
  { image: PHOTOS.reelA, alt: 'Concrete being poured under golden Oahu light', caption: 'Pour day, Kailua' },
  { image: PHOTOS.reelB, alt: 'Crew finishing a residential slab with wheelbarrow', caption: 'Foundation prep' },
  { image: PHOTOS.reelC, alt: 'Worker pouring concrete on a construction site', caption: 'Flatwork finish' },
] as const

export const FAQ = [
  {
    q: 'How long does a driveway replacement take?',
    a: 'A standard two-car driveway (600 to 800 sq ft) takes 5 to 7 working days from demolition to final cure. Larger pours or poor soil conditions can add 2 to 3 days for additional base prep.',
  },
  {
    q: 'What PSI do you use for driveways?',
    a: '4,000 PSI minimum for all residential flatwork. Oahu salt air and UV exposure degrade lower-strength mixes faster than the industry average. We use 4,500 PSI for commercial slabs and foundations near the coast.',
  },
  {
    q: 'Do you handle permits?',
    a: 'Yes. We pull the building permit for any pour that requires one under Honolulu DPP rules. Permit cost is included in the written estimate. Inspections are scheduled by our office, not yours.',
  },
  {
    q: 'What about Oahu soil conditions?',
    a: 'Oahu soil varies by neighborhood. Coral aggregate in Hawaii Kai and Portlock needs a thicker compacted base. Expansive clay in Mililani and Wahiawa needs moisture barriers. Volcanic rock in Kailua and Kaneohe drains fast but can shift. We check the soil before quoting.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. Site visit takes about thirty minutes. We measure, check the soil, photograph the existing condition, and deliver a written estimate within two business days. No obligation.',
  },
] as const

export const ALL_SERVICES = [
  {
    title: 'Driveways',
    hook: 'The driveway is the first thing visitors see.',
    description: 'New pours, replacement, and widening. 4,000 PSI minimum, #4 rebar at 12-inch centers. Broom, exposed-aggregate, or stamped finish. Proper sub-base compaction and drainage pitch before every form.',
    image: PHOTOS.serviceDriveways,
    alt: 'Freshly poured residential concrete driveway on Oahu',
    idealFor: 'Homeowners, property managers, new construction',
  },
  {
    title: 'Foundations',
    hook: 'Everything above depends on what is below.',
    description: 'Stem walls, grade beams, slab-on-grade, and post-tension. Engineered to Hawaii seismic code (IBC 2021 as adopted). Soil profile and compaction testing before every pour.',
    image: PHOTOS.serviceFoundations,
    alt: 'Concrete foundation footing with rebar grid ready for pour',
    idealFor: 'General contractors, homeowners building new',
  },
  {
    title: 'Patios & Walkways',
    hook: 'Outdoor living starts with a level slab.',
    description: 'Stamped, stained, broom-finish, or exposed aggregate. Drainage pitched to code. Control joints cut at 24 hours to prevent random cracking in tropical cure conditions.',
    image: PHOTOS.servicePatios,
    alt: 'Decorative stamped concrete patio with outdoor seating',
    idealFor: 'Homeowners, vacation rental owners, landscapers',
  },
  {
    title: 'Retaining Walls',
    hook: 'Oahu hillsides move. Retaining walls hold.',
    description: 'Poured-in-place and CMU block retaining walls. Proper drainage behind the wall (weep holes + gravel backfill). Engineered footings for walls over 4 feet.',
    image: PHOTOS.serviceRetaining,
    alt: 'Concrete retaining wall construction on an Oahu hillside',
    idealFor: 'Hillside homeowners, developers, landscapers',
  },
  {
    title: 'Decorative / Stamped Concrete',
    hook: 'Concrete does not have to look like concrete.',
    description: 'Stamped patterns (ashlar slate, cobblestone, flagstone), integral color, acid stain, and polished finishes. Sealed for UV and salt-air protection.',
    image: PHOTOS.serviceDecorative,
    alt: 'Stamped and colored decorative concrete walkway',
    idealFor: 'Homeowners, restaurants, retail, vacation rentals',
  },
  {
    title: 'Concrete Repair',
    hook: 'Not every crack means a tear-out.',
    description: 'Crack injection, spall repair, leveling (mudjacking and polyurethane foam), and resurfacing overlays. We diagnose first, then recommend repair or replacement based on what the slab actually needs.',
    image: PHOTOS.serviceRepair,
    alt: 'Worker finishing a concrete repair with a float tool',
    idealFor: 'Homeowners, property managers, commercial tenants',
  },
] as const

export const SERVICE_PROCESS = [
  { title: 'Site Visit', detail: 'Thirty-minute walk of the site. Soil check, drainage assessment, measurements, and photos. Written estimate within two business days.' },
  { title: 'Prep & Grade', detail: 'Demolition of existing concrete (if needed). Sub-base graded, compacted, and moisture-tested. Forms set to elevation.' },
  { title: 'Pour & Finish', detail: '4,000 PSI minimum. #4 rebar at 12-inch centers. Finishing crew on the slab same day. Control joints cut within 24 hours.' },
  { title: 'Cure & Walk', detail: 'Seven-day wet cure. Final walk with you to inspect the work. Written warranty signed and handed over.' },
] as const

export const SERVICE_AREA_TOWNS = [
  'Honolulu', 'Kailua', 'Kaneohe', 'Pearl City', 'Kapolei',
  'Aiea', 'Mililani', 'Waipahu', 'Ewa Beach', 'Hawaii Kai',
  'Waimanalo', 'Wahiawa', 'Haleiwa',
] as const

export const GALLERY_ITEMS = [
  {
    image: PHOTOS.galleryA,
    alt: 'Concrete pour in progress under golden Oahu light, 1,800 sq ft residential slab',
    label: 'FOUNDATION',
    scope: '1,800 sq ft, Kailua',
  },
  {
    image: PHOTOS.galleryB,
    alt: 'Commercial concrete slab at construction site in Pearl City',
    label: 'COMMERCIAL SLAB',
    scope: '3,200 sq ft, Pearl City',
  },
  {
    image: PHOTOS.galleryC,
    alt: 'Worker shoveling concrete on Oahu job site',
    label: 'DRIVEWAY',
    scope: '720 sq ft, Aiea',
  },
  {
    image: PHOTOS.galleryD,
    alt: 'Construction workers repairing a concrete surface',
    label: 'REPAIR',
    scope: 'Crack injection, Mililani',
  },
  {
    image: PHOTOS.galleryE,
    alt: 'Worker pouring concrete onto construction form',
    label: 'RETAINING WALL',
    scope: '36 linear ft, Hawaii Kai',
  },
  {
    image: PHOTOS.galleryF,
    alt: 'Construction workers near a cement mixer truck on Oahu',
    label: 'PATIO',
    scope: '480 sq ft stamped, Kapolei',
  },
] as const
