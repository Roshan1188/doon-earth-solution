import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <p className="chip">404</p>
      <h1 className="mt-4 font-display font-extrabold text-5xl sm:text-6xl text-ink-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist or was moved.</p>
      <Link href="/" className="btn-primary mt-8 inline-flex">Back to Home</Link>
    </section>
  );
}
