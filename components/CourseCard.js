import Link from "next/link";
import Icon from "@/components/Icon";

export default function CourseCard({ course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden bg-brand-50">
        {course.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={course.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">{course.level}</span>
          {course.mode.map((m) => (
            <span key={m} className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{m}</span>
          ))}
        </div>
        <h3 className="mt-4 text-lg font-semibold">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{course.short}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          View course <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
