import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page text-center">
        <p className="font-display text-6xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/courses" className="btn-outline">Browse courses</Link>
        </div>
      </div>
    </section>
  );
}
