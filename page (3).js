import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { appLinks, courses, features, site, whatsappLink } from "@/lib/data";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.short,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: course.image ? { images: [course.image] } : undefined,
  };
}

export default function CourseDetailPage({ params }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.short,
    provider: { "@type": "EducationalOrganization", name: site.fullName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title={course.title} text={course.short}>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1 text-sm">{course.level}</span>
          {course.mode.map((m) => (
            <span key={m} className="rounded-full bg-white/15 px-3 py-1 text-sm">{m}</span>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold">What you get</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {features.slice(0, 5).map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <div>
                      <p className="font-semibold text-brand-950">{f.title}</p>
                      <p className="text-sm text-slate-600">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Subjects</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.subjects.map((s) => (
                  <span key={s} className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">{s}</span>
                ))}
              </div>
              {course.syllabus && (
                <Link href={`/syllabus/${course.syllabus}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">
                  View syllabus <Icon name="arrow" className="h-4 w-4" />
                </Link>
              )}
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-sm text-slate-600">
              <h3 className="text-base font-semibold text-brand-950">Fees, batch dates and refund policy</h3>
              <p className="mt-2">
                Fees, current batch start dates and seat availability are confirmed by our team.
                Message us on WhatsApp or book a free counselling session to get the latest details.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="card sticky top-28 p-6">
              <p className="text-sm text-slate-500">Course fee</p>
              <p className="mt-1 font-display text-2xl font-bold text-brand-950">
                {course.price ? `Rs. ${course.price}` : "Fee on enquiry"}
              </p>
              <a href={appLinks.register} className="btn-primary mt-5 w-full">Enroll now</a>
              <Link href="/tests/free" className="btn-outline mt-3 w-full">Take a free mock test</Link>
              <Link href="/demo" className="btn-outline mt-3 w-full">Watch free demo</Link>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center text-sm font-semibold text-green-700 hover:underline">
                Ask on WhatsApp
              </a>
              <p className="mt-4 text-xs text-slate-400">Pay with eSewa, Khalti, Fonepay or bank transfer.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
