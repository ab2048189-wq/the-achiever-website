import Link from "next/link";
import PageHero from "@/components/PageHero";
import CourseCard from "@/components/CourseCard";
import { courses, heroImages } from "@/lib/data";

export const metadata = {
  title: "Courses",
  description:
    "NEB Class 11 & 12, CEE Medical and IOE entrance preparation. Online and physical batches with live classes, notes and mock tests.",
  alternates: { canonical: "/courses" },
};

const filters = [
  { id: "all", label: "All" },
  { id: "neb", label: "NEB Class 11 & 12" },
  { id: "medical", label: "Medical (CEE)" },
  { id: "engineering", label: "IOE / Engineering" },
  { id: "see", label: "SEE" },
];

export default function CoursesPage({ searchParams }) {
  const track = searchParams?.track || "all";
  const list = track === "all" ? courses : courses.filter((c) => c.track === track);

  return (
    <>
      <PageHero
        image={heroImages.courses}
        title="Courses"
        text="Choose a batch for your class and goal. Not sure which one? Book a free counselling session."
      />
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter courses">
            {filters.map((f) => (
              <Link
                key={f.id}
                href={f.id === "all" ? "/courses" : `/courses?track=${f.id}`}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  track === f.id
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand-300"
                }`}
              >
                {f.label}
              </Link>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="mt-10 text-slate-500">No courses in this category yet.</p>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
