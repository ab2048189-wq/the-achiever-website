import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL, site } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Achievers Institute of Learning — Class 11 & 12 Online Tuition",
    template: "%s | The Achievers",
  },
  description: site.description,
  keywords: [
    "online tuition Nepal",
    "Class 11/12 online tuition",
    "NEB tuition",
    "Medical CEE preparation",
    "entrance preparation Nepal",
    "live classes",
    "mock tests",
  ],
  openGraph: {
    type: "website",
    siteName: site.fullName,
    locale: "en_NP",
    title: "The Achievers Institute of Learning",
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.fullName }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#1f48e0",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.fullName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: site.description,
  email: site.email,
  telephone: site.phonePrimary.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Puspalal Chowk, Science Campus Road",
    addressLocality: "Mahendranagar",
    addressCountry: "NP",
  },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
