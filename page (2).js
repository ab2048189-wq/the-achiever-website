import Link from "next/link";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import TeacherCard from "@/components/TeacherCard";
import FAQList from "@/components/FAQList";
import {
  appLinks,
  courses,
  faqs,
  features,
  heroImages,
  site,
  stats,
  steps,
  teachers,
  testimonials,
  tracks,
} from "@/lib/data";

export default function HomePage() {
  const featuredTeachers = teachers.filter((t) => t.featured).slice(0, 4);
  const quotes = testimonials.filter((t) => t.quote);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-600 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImages.home}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/60 to-transparent" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent-400">
              Nepal&apos;s first online tuition platform
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight !text-white sm:text-5xl lg:text-6xl">
              Class 11 &amp; 12 tuition that gets you{" "}
              <span className="text-accent-400">exam-ready</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-100">
              Daily live classes, recorded lessons, chapterwise notes and weekly
              mock tests for NEB, Medical (CEE) and entrance preparation. Try it
              free before you pay.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/tests/free" className="btn-accent">Take free mock test</Link>
              <Link href="/demo" className="btn-ghost-light">Watch free demo</Link>
              <a href={appLinks.register} className="btn-ghost-light">Enroll now</a>
            </div>
          </div>

          <div className="card !border-white/10 bg-white/10 p-6 !shadow-none backdrop-blur">
            <h2 className="text-lg font-semibold !text-white">I&apos;m preparing for…</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {tracks.map((t) => (
                <Link
                  key={t.id}
                  href={t.href}
                  className="group rounded-xl bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <p className="font-display text-lg font-bold text-brand-800">{t.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{t.sub}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                    Explore <Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand-700">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why The Achievers"
            title="Everything you need to score higher"
            text="A complete learning system, from concept to mock test, on your phone or laptop."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Courses"
            title="Pick your batch"
            text="Online and physical batches with limited seats."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/courses" className="btn-outline">View all courses</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-brand-50">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="Start in four simple steps" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Free funnel */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Try it free" title="Not sure yet? Start for free" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Free mock test", d: "CBT-style full-length test with instant result, solutions, percentile rank and subject analysis.", href: "/tests/free", cta: "Take the test" },
              { t: "Free demo class", d: "Watch a sample class and see how our teachers explain concepts.", href: "/demo", cta: "Watch demo" },
              { t: "Free counselling", d: "1-on-1 session on career roadmap, study strategy and admission guidance.", href: "/counselling", cta: "Book a session" },
            ].map((c) => (
              <div key={c.t} className="card flex flex-col p-6">
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{c.d}</p>
                <Link href={c.href} className="btn-primary mt-5">{c.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Mentors"
            title="Learn from rankers and toppers"
            text="Our teachers bring entrance-exam and university experience into every class."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTeachers.map((t) => (
              <TeacherCard key={t.name} teacher={t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/teachers" className="btn-outline">Meet all teachers</Link>
          </div>
        </div>
      </section>

      {/* Testimonials: renders only when real, consented quotes are added in lib/data.js */}
      {quotes.length > 0 && (
        <section className="section">
          <div className="container-page">
            <SectionHeading eyebrow="Student voices" title="What students and parents say" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {quotes.map((t) => (
                <figure key={t.name} className="card p-6">
                  <blockquote className="text-sm leading-relaxed text-slate-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-semibold text-brand-950">{t.name}</span>
                    <span className="text-slate-500"> · {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* App */}
      <section className="section">
        <div className="container-page">
          <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950 p-8 text-white sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold !text-white">Study anywhere with the Android app</h2>
              <p className="mt-3 text-brand-100">
                Join live classes, rewatch recordings and practise mock tests on your phone.
                iOS app is coming soon.
              </p>
              <a href={site.playStore} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6">
                Get it on Google Play
              </a>
            </div>
            <ul className="space-y-3 text-sm text-brand-100">
              {["Works on Android 7 and above", "Live class reminders", "Recorded lessons on demand", "Mock tests with instant analysis"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icon name="check" className="h-5 w-5 text-accent-400" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
          <div className="mt-10">
            <FAQList items={faqs.slice(0, 5)} />
          </div>
          <p className="mt-6 text-center text-sm">
            <Link href="/faqs" className="font-semibold text-brand-700 hover:underline">See all FAQs</Link>
          </p>
        </div>
      </section>
    </>
  );
}
