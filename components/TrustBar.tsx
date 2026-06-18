const items = [
  'IS 6313 Compliant',
  '23-Point Quality Check',
  'Written Warranty',
  'Family-Safe Chemicals',
  'Trained Biologists',
  'On-time Service',
];

export default function TrustBar() {
  return (
    <section aria-label="Trust badges" className="border-y border-bone-200 bg-white relative overflow-hidden">
      <div className="absolute inset-0 ribbon-stripes opacity-30" aria-hidden />
      <div className="container-x py-6 relative">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-ink-700">
          {items.map((i) => (
            <li key={i} className="inline-flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-leaf-100 text-brand-800">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="font-medium">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
