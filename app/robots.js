import { SITE_URL } from "@/lib/data";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin", "/dashboard", "/api", "/checkout", "/login", "/register",
        "/forgot-password", "/reset-password", "/verify", "/auth",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
