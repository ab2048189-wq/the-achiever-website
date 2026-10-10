export default function TeacherCard({ teacher }) {
  return (
    <div className="card overflow-hidden">
      <div className="aspect-square overflow-hidden bg-brand-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={teacher.image} alt={teacher.name} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold">{teacher.name}</h3>
        <p className="text-sm font-medium text-brand-600">{teacher.subject}</p>
        <p className="mt-2 text-sm text-slate-600">{teacher.credential}</p>
        {teacher.years ? (
          <p className="mt-1 text-xs text-slate-400">{teacher.years}+ years teaching</p>
        ) : null}
      </div>
    </div>
  );
}
