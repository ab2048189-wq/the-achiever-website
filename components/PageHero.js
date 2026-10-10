import { heroImages } from "@/lib/data";

export default function PageHero({ image = heroImages.page, title, text, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 text-white">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/60 to-transparent" />
      <div className="container-page relative py-14 sm:py-20">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight !text-white sm:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-brand-100">{text}</p>}
        {children}
      </div>
    </section>
  );
}
