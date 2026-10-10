import Icon from "@/components/Icon";

export default function FAQList({ items }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-950 [&::-webkit-details-marker]:hidden">
            {f.q}
            <Icon name="chevron" className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
