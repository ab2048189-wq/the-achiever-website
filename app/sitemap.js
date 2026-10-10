import { SITE_URL, courses, syllabusTracks } from "@/lib/data";

// lastmod: replace with real edit dates from your CMS when available.
export default function sitemap() {
  const now = new Date();
  const staticPaths = [
    "", "/courses", "/tests/free", "/syllabus", "/teachers", "/about",
    "/counselling", "/demo", "/contact", "/faqs", "/privacy", "/terms", "/cookies",
  ];
  return [
    ...staticPaths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now })),
    ...courses.map((c) => ({ url: `${SITE_URL}/courses/${c.slug}`, lastModified: now })),
    ...syllabusTracks.map((t) => ({ url: `${SITE_URL}/syllabus/${t.slug}`, lastModified: now })),
  ];
}
