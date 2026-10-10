// Single source of truth for site content (PRD G4 / TRD 5.6 "site_settings").
// Replace with CMS / API data later. Items marked TODO need confirmation from the business.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theachievers.com.np";

// Existing learning platform: login, register, checkout and dashboard stay there for now.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theachievers.com.np";

export const appLinks = {
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
  freeTest: `${APP_URL}/tests/free`,
};

// ---------------------------------------------------------------------------
// Placeholder imagery (Unsplash). Flip USE_PLACEHOLDER_IMAGES to false to use the
// institute's real uploads (teacher photos / course images) instead.
// Replace any ID below with your own pick from https://unsplash.com
// ---------------------------------------------------------------------------
export const USE_PLACEHOLDER_IMAGES = true;

export const unsplash = (id, w = 1200, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=75`;

export const heroImages = {
  home: unsplash("1523240795612-9a054b0db644", 1600, 1000), // students studying together
  page: unsplash("1503676260728-1c00da094a0b", 1600, 700), // education / learning
  about: unsplash("1522202176988-66273c2fd55f", 1600, 700), // student group
  courses: unsplash("1427504494785-3a9ca7044f45", 1600, 700), // classroom
  teachers: unsplash("1509062522246-3755977927d7", 1600, 700), // teacher at board
  demo: unsplash("1524178232363-1fb2b075b655", 1600, 700), // lecture
};

const courseImageIds = {
  "neb-class-12": "1434030216411-0b793f4b4173", // studying
  "cee-medical-preparation": "1576086213369-97a306d36557", // medical
  "ioe-entrance": "1581092918056-0c4c3acd3789", // engineering
  "see-physical-batch": "1580582932707-520aed937b7b", // classroom
  "physics-chemistry-maths": "1532094349884-543bc11b234d", // science lab
};

const teacherPortraitIds = [
  "1507003211169-0a1dd7228f2d",
  "1472099645785-5658abf4ff4e",
  "1500648767791-00dcc994a43e",
  "1560250097-0b93528c311a",
  "1519085360753-af0119f7cbe7",
  "1506794778202-cad84cf45f1d",
];

export const site = {
  name: "The Achievers",
  fullName: "The Achievers Institute of Learning",
  tagline: "AI Powered Online Tuition Classes Platform",
  description:
    "Nepal's online tuition platform for NEB Class 11 & 12 — daily live classes, recorded lessons, chapterwise notes and free mock tests, plus Medical (CEE) and entrance preparation.",
  address: "Puspalal Chowk, Science Campus Road, Mahendranagar, Nepal",
  // TODO: confirm the correct primary phone. Site currently shows conflicting numbers.
  phonePrimary: { display: "981-0686665", tel: "+9779810686665" },
  phoneSecondary: { display: "976-9884993", tel: "+9779769884993" },
  email: "info.theachiever@gmail.com",
  whatsapp: "https://wa.me/9779810686665",
  whatsappMessage:
    "Hi! I'd like to know more about The Achievers online tuition classes.",
  // TODO: confirm counselling hours (site shows 7 AM and 10 AM starts).
  hours: "Sun–Fri, 7:00 AM – 6:00 PM (NPT)",
  mapUrl: "https://maps.app.goo.gl/fo6vjBYxXNQiSswWA",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579416387457",
    youtube: "https://youtube.com/@TheAchieversAcademy-edu",
    tiktok: "https://www.tiktok.com/@achievers.academy10",
  },
  playStore:
    "https://play.google.com/store/apps/details?id=com.theachievers.learning",
};

export const whatsappLink = `${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

// Self-reported on the current site and unverified (PRD §11). Edit or remove once substantiated.
export const stats = [
  { value: "100K+", label: "Students reached" },
  { value: "30+", label: "Mentors" },
  { value: "24/7", label: "Doubt support" },
  { value: "Weekly", label: "Mock tests" },
];

export const nav = [
  { label: "Courses", href: "/courses" },
  { label: "Free Mock Test", href: "/tests/free" },
  { label: "Syllabus", href: "/syllabus" },
  { label: "Teachers", href: "/teachers" },
  { label: "Demo", href: "/demo" },
  { label: "About", href: "/about" },
];

export const tracks = [
  { id: "class-11", label: "Class 11", sub: "NEB Science & Management", href: "/courses?track=neb" },
  { id: "class-12", label: "Class 12", sub: "NEB Science & Management", href: "/courses/neb-class-12" },
  { id: "cee", label: "CEE Medical", sub: "Physics, Chemistry, Biology, MAT", href: "/courses/cee-medical-preparation" },
  { id: "ioe", label: "IOE / CSIT", sub: "Engineering & IT entrance", href: "/courses/ioe-entrance" },
];

export const features = [
  {
    icon: "video",
    title: "Daily live classes",
    text: "Fixed weekly schedule, live-streamed, and every class is recorded so you can rewatch in the app or on the web.",
  },
  {
    icon: "file",
    title: "Chapterwise notes & practice",
    text: "Authentic questions from past papers and trusted sources, aligned to the NEB Class 11 & 12 syllabus.",
  },
  {
    icon: "clipboard",
    title: "Weekly computer-based mocks",
    text: "Real exam interface with detailed analysis, percentile and live rankings.",
  },
  {
    icon: "chart",
    title: "Performance analytics",
    text: "See your accuracy, time per subject and weak topics so you know exactly what to fix next.",
  },
  {
    icon: "chat",
    title: "24/7 doubt support",
    text: "Stuck on a problem? Ask and get help from mentors, anytime.",
  },
  {
    icon: "phone",
    title: "Web + Android app",
    text: "Study from any phone or laptop. iOS app is coming soon.",
  },
];

export const steps = [
  { title: "Register & choose course", text: "Create a free account with phone, Google or email." },
  { title: "Join live classes", text: "Attend daily live classes or watch the recording." },
  { title: "Practice with mock tests", text: "Chapterwise sets and weekly full-length CBT mocks." },
  { title: "Track progress & improve", text: "Use analytics to target weak topics." },
];

export const subjects = [
  "Physics",
  "Chemistry",
  "Mathematics",
  "Biology",
  "Accountancy",
  "Economics",
  "English",
  "Computer Science",
];

// Fees and batch dates were NOT CAPTURED from the current site. Leave `price` null until confirmed.
export const courses = [
  {
    slug: "neb-class-12",
    title: "NEB Class 12 Tuition Classes (Science)",
    short: "Prepare for board exams with live classes, notes and weekly mocks.",
    track: "neb",
    level: "Class 12",
    mode: ["Online", "Physical"],
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
    syllabus: "neb-xii",
    price: null,
    image: "https://theachievers.com.np/api/uploads/mstz8k9g-b16150363ef0.jpeg",
  },
  {
    slug: "cee-medical-preparation",
    title: "CEE Medical Preparation",
    short: "Physics, Chemistry, Biology and MAT preparation for medical entrance.",
    track: "medical",
    level: "Entrance",
    mode: ["Online", "Physical"],
    subjects: ["Physics", "Chemistry", "Biology", "MAT"],
    syllabus: "cee-medical",
    price: null,
    image: "https://theachievers.com.np/api/uploads/mstz2ip9-2d4bf9568730.jpeg",
  },
  {
    slug: "ioe-entrance",
    title: "IOE Entrance Preparation",
    short: "Nepal's best entrance prep, online & physical.",
    track: "engineering",
    level: "Entrance",
    mode: ["Online", "Physical"],
    subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    syllabus: "ioe-entrance",
    price: null,
    image: "https://theachievers.com.np/api/uploads/mstzdat0-1c6e8523d614.jpeg",
  },
  {
    slug: "see-physical-batch",
    title: "SEE Batch",
    short: "Achieve high, work smart. Physical batch with limited seats.",
    track: "see",
    level: "Class 10 (SEE)",
    mode: ["Physical"],
    subjects: ["Mathematics"],
    syllabus: null,
    price: null,
    image: "https://theachievers.com.np/api/uploads/mrxpj4hc-cbf11422f1ea.jpeg",
  },
  {
    // Legacy slug "Physics chemistry maths" is redirected here in next.config.js
    slug: "physics-chemistry-maths",
    title: "Physics, Chemistry & Maths",
    short: "Focused core-science batch.",
    track: "neb",
    level: "Class 11 & 12",
    mode: ["Online"],
    subjects: ["Physics", "Chemistry", "Mathematics"],
    syllabus: null,
    price: null,
    image: null,
  },
];

// Resolve images once so components just read `course.image` / `teacher.image`.
courses.forEach((c) => {
  c.realImage = c.image;
  c.image = USE_PLACEHOLDER_IMAGES
    ? unsplash(courseImageIds[c.slug], 900, 506)
    : c.realImage;
});

export const syllabusTracks = [
  { slug: "neb-xi", title: "NEB Class 11", note: "Listed in the product plan; chapter list to be added." },
  { slug: "neb-xii", title: "NEB Class 12", note: "Science stream." },
  { slug: "cee-medical", title: "CEE Medical", note: "Physics, Chemistry, Biology, MAT." },
  { slug: "ioe-entrance", title: "IOE Entrance", note: "Engineering entrance." },
  { slug: "bsc-csit", title: "BSc.CSIT Entrance", note: "IT entrance." },
  { slug: "ioe-msc", title: "IOE MSc", note: "Postgraduate engineering entrance." },
];

// Full-word credentials. Abbreviations expanded only where the meaning is certain; others kept as given (PRD §11).
export const teachers = [
  { name: "Mr. Nirmal Dhami", subject: "Zoology", credential: "MBBS scholar, KUSMS", years: 2, featured: true, photo: "mswt3eby-4dc25679777b" },
  { name: "Prakash Saud", subject: "Physics", credential: "JEE Ranker · Bachelor's completed", years: 4, featured: true, photo: "mrxpz2a9-1062461fdedc" },
  { name: "Divyanshu Thapa", subject: "Chemistry", credential: "Founder · IOE Ranker · Master's running", years: 6, featured: true, photo: "mswtlq8g-2941d8a95d01" },
  { name: "Gaurav Prasad Bist", subject: "Mathematics", credential: "IOE Ranker · Bachelor's completed", years: 5, featured: false, photo: "mrxpupzw-c31c13f12b7a" },
  { name: "Niraj Badu", subject: "Biology", credential: "SNSC Ranker · Bachelor's completed", years: 4, featured: false, photo: "mrxpw52q-f6bcefb32593" },
  { name: "Dipesh Saud", subject: "Physics", credential: "B.E. Computer", years: 2, featured: true, photo: "mswt5ed7-8162ff5a7a05" },
  { name: "Dipesh Kalouni", subject: "Chemistry", credential: "WRC Ranker · Bachelor's completed", years: 4, featured: false, photo: "mrxqgq4m-4e97f88b789d" },
  { name: "Birendra Singh Oire", subject: "Physics & Maths", credential: "SNSC Ranker · Master's running", years: 5, featured: false, photo: "mrxq1xuy-d92d95d67f4c" },
  { name: "Chakra Chand", subject: "Physics", credential: "MSc. Topper · Master's completed", years: 6, featured: false, photo: "mrxqb4e0-0c2c915bcc32" },
  { name: "Tikendra Prasad Bist", subject: "Physics", credential: "FWU Ranker · Bachelor's completed", years: 4, featured: false, photo: "mrxqfggj-9514db438535" },
  { name: "Kailash Bhatt", subject: "Mathematics (Class 8–10)", credential: "Maths Topper · Bachelor's completed", years: 4, featured: false, photo: "mrxqmymk-ed9e2787aba6" },
];

export const photoUrl = (id) => `https://theachievers.com.np/api/uploads/${id}.jpeg`;

teachers.forEach((t, i) => {
  t.image = USE_PLACEHOLDER_IMAGES
    ? unsplash(teacherPortraitIds[i % teacherPortraitIds.length], 600, 600)
    : photoUrl(t.photo);
});

// Names and classes are real entries on the current site; quote text was not captured.
// Add a `quote` (with consent) and the testimonials section will render automatically.
export const testimonials = [
  { name: "Aarav Sharma", role: "Class 12 Science", quote: "" },
  { name: "Sneha Gurung", role: "Class 11 Science", quote: "" },
  { name: "Bishal Thapa", role: "Class 12 Management", quote: "" },
  { name: "Anjali Shrestha", role: "Class 11 Science", quote: "" },
  { name: "Prakash Adhikari", role: "Class 12 Science", quote: "" },
  { name: "Sunita Karki", role: "Parent", quote: "" },
  { name: "Rohan Maharjan", role: "Class 11 Science", quote: "" },
  { name: "Pooja Bhandari", role: "Class 12 Science", quote: "" },
  { name: "Kiran Rai", role: "Class 12 Management", quote: "" },
  { name: "Manisha Poudel", role: "Class 11 Science", quote: "" },
];

export const faqs = [
  { q: "Who are the classes for?", a: "Students of NEB Class 11 & 12 (Science and Management), plus Medical (CEE) and entrance preparation." },
  { q: "How do live classes work?", a: "Classes follow a fixed weekly schedule and are live-streamed. Every class is recorded so you can rewatch it in the app or on the web." },
  { q: "Are mock tests free?", a: "Yes. You can take free chapterwise and full-length mock tests with instant results and solutions. Scheduled weekly mocks with live ranking are part of enrolled batches." },
  { q: "What payment methods do you accept?", a: "eSewa, Khalti, Fonepay and bank transfer from major Nepali banks." },
  { q: "Can I try before I pay?", a: "Yes. Watch a free demo class or take a free mock test before you enroll." },
  { q: "Is there an Android app?", a: "Yes, on Google Play (Android 7 and above). An iOS app is coming soon." },
  { q: "Can I get career guidance?", a: "Yes. Book a free 1-on-1 counselling session for a career roadmap, study strategy and scholarship & admission guidance. We reply within 24 hours." },
];

export const demoVideos = [
  { id: "F5O0jsU6FJE", title: "Demo class 1" },
  { id: "_WXO4T1bXhM", title: "Demo class 2" },
];

export const payments = [
  { name: "eSewa", src: "https://theachievers.com.np/payments/esewa.svg" },
  { name: "Khalti", src: "https://theachievers.com.np/payments/khalti.svg" },
  { name: "Fonepay", src: "https://theachievers.com.np/payments/fonepay.svg" },
];
