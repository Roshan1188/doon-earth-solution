import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Doon Earth Solution',
  description:
    'Read the Doon Earth Solution privacy policy to understand what information we collect, how we use it, and how we protect it when you contact us or use our website.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

const lastUpdated = 'June 21, 2026';

const sections = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-information', label: 'How We Use Your Information' },
  { id: 'whatsapp-communication', label: 'WhatsApp & Communication' },
  { id: 'cookies', label: 'Cookies & Analytics' },
  { id: 'data-sharing', label: 'Data Sharing & Disclosure' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights & Choices' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'third-party-links', label: 'Third-Party Links' },
  { id: 'policy-changes', label: 'Changes to This Policy' },
  { id: 'contact-us', label: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-forest-fade" />
        <div className="absolute inset-0 -z-10 bg-leaf-rays" />
        <div className="container-x pt-6 sm:pt-10 pb-6 sm:pb-8">
          <span className="chip-leaf">Legal</span>
          <h1 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-5xl text-ink-900 leading-[1.05] max-w-3xl">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="p-lead mt-5 max-w-2xl">
            Your trust matters to us. This policy explains what information{' '}
            {site.name} collects when you visit our website or get in touch,
            and how we use and protect it.
          </p>
          <p className="mt-3 text-sm text-ink-700/70">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-12 gap-8 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <nav className="card p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                On this page
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-ink-700 hover:text-brand-700 transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-bone-200">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Questions?
                </p>
                <p className="mt-2 text-sm text-ink-700">
                  Reach us at{' '}
                  <a href={`mailto:${site.email}`} className="text-brand-700 font-medium hover:underline">
                    {site.email}
                  </a>{' '}
                  or call{' '}
                  <a href={`tel:${site.phone}`} className="text-brand-700 font-medium hover:underline">
                    {site.phone}
                  </a>
                  .
                </p>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-8">
            <div className="card p-6 sm:p-10 space-y-10">
              <p className="text-sm text-ink-700 leading-relaxed">
                {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates{' '}
                {site.url} (the &quot;Site&quot;). This Privacy Policy describes how
                we collect, use, and safeguard information when you visit the
                Site, fill out an enquiry form, or contact us by phone,
                WhatsApp, or email. By using the Site, you agree to the
                practices described here.
              </p>

              <div id="information-we-collect" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  1. Information We Collect
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We only collect information that you choose to share with us.
                  This includes:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700 list-disc list-inside">
                  <li>
                    <span className="font-medium text-ink-900">Contact details</span> — your
                    name, phone number, and email address, when submitted through
                    our enquiry / quote form.
                  </li>
                  <li>
                    <span className="font-medium text-ink-900">Service details</span> — property
                    type or size, city/location, the service you&apos;re enquiring
                    about, and any message or description of your issue.
                  </li>
                  <li>
                    <span className="font-medium text-ink-900">Communication records</span> — details
                    you share with us over phone calls, WhatsApp chats, or email.
                  </li>
                  <li>
                    <span className="font-medium text-ink-900">Technical data</span> — standard
                    , non-identifying information such as browser type and pages
                    visited, collected automatically by our hosting provider for
                    security and performance purposes.
                  </li>
                </ul>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We do not ask for or knowingly collect sensitive financial
                  information (such as card or bank details) through the Site.
                </p>
              </div>

              <div id="how-we-use-information" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  2. How We Use Your Information
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We use the information you provide to:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700 list-disc list-inside">
                  <li>Respond to your enquiry and schedule a free inspection or quote.</li>
                  <li>Communicate with you about your service request, appointments, and follow-ups.</li>
                  <li>Provide warranty support and after-service care.</li>
                  <li>Improve our website, services, and customer experience.</li>
                  <li>Meet legal, accounting, or regulatory requirements where applicable.</li>
                </ul>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We do not sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
              </div>

              <div id="whatsapp-communication" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  3. WhatsApp &amp; Communication
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  When you submit our enquiry form, your details are used to
                  open a pre-filled WhatsApp conversation between you and our
                  team — the message is sent directly from your device to ours
                  via WhatsApp; the form itself does not store your details on
                  a separate database. Conversations you have with us over
                  WhatsApp, phone, or email are subject to the respective
                  platform&apos;s own privacy practices in addition to this policy.
                </p>
              </div>

              <div id="cookies" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  4. Cookies &amp; Analytics
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  Our Site may use essential cookies and similar technologies
                  required for basic functionality, and may use privacy-friendly
                  analytics tools (such as aggregated visit statistics) to help
                  us understand how visitors use the Site and to improve it. We
                  do not use this information to personally identify you. You
                  can control or disable cookies through your browser settings;
                  doing so should not affect your ability to browse the Site.
                </p>
              </div>

              <div id="data-sharing" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  5. Data Sharing &amp; Disclosure
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We do not share your personal information with third parties,
                  except:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700 list-disc list-inside">
                  <li>With our own field staff and technicians, solely to deliver the service you requested.</li>
                  <li>With trusted service providers (such as our website hosting provider) who help us operate the Site, under obligations to keep your data confidential.</li>
                  <li>If required by law, court order, or government request.</li>
                  <li>To protect the rights, property, or safety of {site.name}, our customers, or others.</li>
                </ul>
              </div>

              <div id="data-security" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  6. Data Security
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We take reasonable technical and organisational measures to
                  protect the information you share with us from unauthorised
                  access, alteration, or disclosure. However, no method of
                  transmission over the internet or electronic storage is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div id="data-retention" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  7. Data Retention
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We retain your contact and service information only for as
                  long as necessary to respond to your enquiry, deliver our
                  services, honour any applicable warranty, and meet legal or
                  accounting obligations. You may request deletion of your
                  information at any time, as described below.
                </p>
              </div>

              <div id="your-rights" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  8. Your Rights &amp; Choices
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  You may contact us at any time to:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink-700 list-disc list-inside">
                  <li>Ask what personal information we hold about you.</li>
                  <li>Request a correction to inaccurate information.</li>
                  <li>Request deletion of your personal information, where we are not legally required to keep it.</li>
                  <li>Opt out of future communications from us.</li>
                </ul>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  To exercise any of these rights, reach out using the contact
                  details below.
                </p>
              </div>

              <div id="childrens-privacy" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  9. Children&apos;s Privacy
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  Our Site and services are intended for adults seeking termite
                  control or waterproofing services. We do not knowingly
                  collect personal information from children under 18.
                </p>
              </div>

              <div id="third-party-links" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  10. Third-Party Links
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  Our Site may contain links to third-party platforms, such as
                  WhatsApp, Google Maps, or our social media pages. We are not
                  responsible for the privacy practices or content of these
                  external sites, and we encourage you to review their privacy
                  policies separately.
                </p>
              </div>

              <div id="policy-changes" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  11. Changes to This Policy
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to
                  reflect changes in our practices or for legal reasons. Any
                  updates will be posted on this page with a revised
                  &quot;Last updated&quot; date. We encourage you to review
                  this page periodically.
                </p>
              </div>

              <div id="contact-us" className="scroll-mt-24">
                <h2 className="font-display font-bold text-xl sm:text-2xl text-ink-900">
                  12. Contact Us
                </h2>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or how
                  we handle your information, please contact us:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-900">
                  <li><span className="text-slate-500">Business:</span> {site.name}</li>
                  <li><span className="text-slate-500">Email:</span> <a href={`mailto:${site.email}`} className="text-brand-700 font-medium hover:underline">{site.email}</a></li>
                  <li><span className="text-slate-500">Phone:</span> <a href={`tel:${site.phone}`} className="text-brand-700 font-medium hover:underline">{site.phone}</a></li>
                  <li><span className="text-slate-500">Address:</span> {site.address}</li>
                </ul>
                <p className="mt-6 text-sm text-ink-700">
                  You may also visit our{' '}
                  <Link href="/contact" className="text-brand-700 font-medium hover:underline">
                    Contact page
                  </Link>{' '}
                  to reach us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
