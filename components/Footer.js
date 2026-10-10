import Link from "next/link";
import Icon from "@/components/Icon";
import { nav, payments, site } from "@/lib/data";

const legal = [
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-white">{site.fullName}</p>
          <p className="mt-3 text-sm leading-relaxed">{site.description}</p>
          <div className="mt-5 flex gap-4 text-sm">
            {Object.entries(site.social).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-white">
                {name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Help</p>
          <ul className="mt-4 space-y-2 text-sm">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Icon name="pin" className="h-5 w-5 shrink-0" />
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">{site.address}</a>
            </li>
            <li className="flex gap-2">
              <Icon name="call" className="h-5 w-5 shrink-0" />
              <span>
                <a href={`tel:${site.phonePrimary.tel}`} className="hover:text-white">{site.phonePrimary.display}</a>
                {" · "}
                <a href={`tel:${site.phoneSecondary.tel}`} className="hover:text-white">{site.phoneSecondary.display}</a>
              </span>
            </li>
            <li className="flex gap-2">
              <Icon name="mail" className="h-5 w-5 shrink-0" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-2">
              <Icon name="clock" className="h-5 w-5 shrink-0" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p>We accept {payments.map((p) => p.name).join(", ")} and bank transfer.</p>
        </div>
      </div>
    </footer>
  );
}
