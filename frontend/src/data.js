export const business = {
  name: "Diptouch Cleaning Services",
  phoneDisplay: "0703 600 4238",
  phoneTel: "+2347036004238",
  whatsapp: "2347036004238",
  email: "diptouchcleaning@gmail.com",
  instagram: "diptouch_cleaning",
  instagramUrl: "https://www.instagram.com/diptouch_cleaning/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61577827134563",
  tiktokUrl: "https://www.tiktok.com/@dip.touch",
};

export const waLink = (text = "") =>
  `https://wa.me/${business.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const services = [
  {
    id: "post-construction",
    name: "Post-construction cleaning",
    text: "Rubble, cement splashes, paint drops and builder's dust cleared out. Floors washed until the tiles shine again.",
    for: "Developers, contractors and home owners after a build or renovation",
  },
  {
    id: "move-in-out",
    name: "Move-in / move-out cleaning",
    text: "Every room, cabinet, bathroom and window cleaned before the keys change hands.",
    for: "Landlords, estate agents and tenants",
  },
  {
    id: "deep-clean",
    name: "Deep house cleaning",
    text: "A top-to-bottom clean of a lived-in home: kitchen degreasing, bathrooms, doors, fans and windows.",
    for: "Families getting ready for guests, festive seasons or a fresh start",
  },
  {
    id: "office",
    name: "Office & commercial cleaning",
    text: "One-off cleans or weekly and monthly contracts, scheduled around your opening hours.",
    for: "Offices, shops, clinics, salons and churches",
  },
  {
    id: "shortlet",
    name: "Shortlet turnaround",
    text: "Fast cleans between guests so your apartment is photo-ready for the next check-in.",
    for: "Shortlet and Airbnb hosts",
  },
  {
    id: "upholstery",
    name: "Upholstery & carpet cleaning",
    text: "Sofas, chairs, rugs and carpets washed and freshened on site.",
    for: "Homes and offices",
  },
];

export const steps = [
  {
    title: "Send us the space",
    text: "WhatsApp a few photos or a short video, the location, and when you need it done.",
  },
  {
    title: "Get your quote",
    text: "We reply with a price. For large sites we come to inspect first, free of charge.",
  },
  {
    title: "We clean",
    text: "Our team arrives with the equipment and supplies needed for the job.",
  },
  {
    title: "Walk through it with us",
    text: "Check every room before we leave, so anything you want redone gets done on the spot.",
  },
];

export const work = [
  {
    video: "media/reel-01.mp4",
    poster: "media/reel-01.jpg",
    title: "Construction mess to mirror-shine floors",
  },
  {
    video: "media/reel-04.mp4",
    poster: "media/reel-04.jpg",
    title: "Black marble floors, before and after",
  },
  {
    video: "media/reel-06.mp4",
    poster: "media/reel-06.jpg",
    title: "A full apartment, rubble to move-in ready",
  },
];

export const areas = [
  "Lekki",
  "Ajah",
  "Victoria Island",
  "Ikoyi",
  "Ikeja",
  "Yaba",
  "Surulere",
  "Gbagada",
  "Magodo",
  "Festac",
  "Other",
];

export const results = [
  {
    title: "Bedroom floor after a move-out",
    service: "Move-in / move-out cleaning",
    before: "media/result-room-before.jpg",
    after: "media/result-room-after.jpg",
    beforeAlt: "Cream floor tiles covered in brown stains, loose paper and debris",
    afterAlt: "The cleaned bedroom with spotless, glossy tiles reflecting the window light",
  },
  {
    title: "Fabric armchair, washed on site",
    service: "Upholstery & carpet cleaning",
    before: "media/result-chair-before.jpg",
    after: "media/result-chair-after.jpg",
    beforeAlt: "A striped armchair with dark grime on the seat, back and arms",
    afterAlt: "The same armchair after washing, with bright white and brown stripes",
  },
];

export const jobPhotos = [
  {
    src: "media/job-scrubbing.jpg",
    alt: "A Diptouch cleaner using a rotary floor scrubber in a bedroom",
    caption: "Machine-scrubbing tiles after a move-out",
  },
  {
    src: "media/job-machine-window.jpg",
    alt: "A cleaner scrubbing a wet tiled floor beside a large window",
    caption: "Deep-cleaning every corner of the room",
  },
  {
    src: "media/job-villa-team.jpg",
    alt: "The Diptouch team scrubbing the marble floor of a large open-plan living room",
    caption: "Team clean of a new beachfront home",
  },
  {
    src: "media/job-villa-scrubber.jpg",
    alt: "A floor scrubbing machine at the foot of a staircase in a new house",
    caption: "Professional equipment on every job",
  },
];
