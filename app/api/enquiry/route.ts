import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let name = '', phone = '', email = '', service = '', message = '', source = '';

  // ── Parse body ────────────────────────────────────────────────────────────
  try {
    const body = await req.json() as Record<string, unknown>;
    name    = String(body.name    ?? '').trim();
    phone   = String(body.phone   ?? '').trim();
    email   = String(body.email   ?? '').trim();
    service = String(body.service ?? '').trim();
    message = String(body.message ?? '').trim();
    source  = String(body.source  ?? 'website').trim();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!name || !phone) {
    return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
  }

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  // ── Always log to Vercel (Dashboard → Logs) ───────────────────────────────
  console.log('📬 New Enquiry:', JSON.stringify({
    timestamp, source, name, phone,
    email: email || '—',
    service: service || '—',
    message: message || '—',
  }));

  // ── Send email via Web3Forms (zero-dependency, free, reliable) ────────────
  // Setup (2 minutes, one-time):
  //   1. Visit https://web3forms.com
  //   2. Enter: info@doonearthsolutions.in → click "Get your Access Key"
  //   3. Copy the key from your email
  //   4. Vercel → Settings → Environment Variables → add WEB3FORMS_ACCESS_KEY
  //   5. Redeploy (push any small change)
  // Web3Forms public access key (safe to commit — not a secret)
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY ?? 'ccb346b9-b6d9-4b32-ad75-9bea67a08945';

  if (accessKey) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `🌿 New Enquiry: ${name} — ${service || 'General'}`,
          from_name: name,
          replyto: email || 'info@doonearthsolutions.in',
          // Structured fields shown in Web3Forms dashboard & email
          'Full Name':       name,
          'Mobile Number':   phone,
          'Email Address':   email   || 'Not provided',
          'Service Required': service || 'Not specified',
          'Message':         message  || 'No message',
          'Source':          source,
          'Timestamp':       timestamp,
          // Plain-text body fallback
          message: [
            `📋 NEW ENQUIRY — ${timestamp}`,
            `━━━━━━━━━━━━━━━━━━━━━━━━`,
            `Name    : ${name}`,
            `Mobile  : ${phone}`,
            `Email   : ${email   || 'Not provided'}`,
            `Service : ${service || 'Not specified'}`,
            `━━━━━━━━━━━━━━━━━━━━━━━━`,
            `Message :`,
            message || 'No message provided.',
            `━━━━━━━━━━━━━━━━━━━━━━━━`,
            `Source  : ${source}`,
            `Sent via doonearthsolutions.in`,
          ].join('\n'),
          redirect: 'false',
        }),
      });

      const result = await res.json() as { success: boolean; message?: string };
      if (result.success) {
        console.log('✅ Email sent via Web3Forms');
      } else {
        console.error('⚠️ Web3Forms error:', result.message ?? 'Unknown');
      }
    } catch (err) {
      // Never block visitor if email fails
      console.error('⚠️ Web3Forms exception:', err);
    }
  } else {
    console.warn(
      '⚠️  WEB3FORMS_ACCESS_KEY not set.\n' +
      '   → Visit https://web3forms.com\n' +
      '   → Enter info@doonearthsolutions.in\n' +
      '   → Copy key from your email\n' +
      '   → Add to Vercel: Settings → Environment Variables → WEB3FORMS_ACCESS_KEY',
    );
  }

  // ── Always return success to visitor ─────────────────────────────────────
  return NextResponse.json({ success: true });
}
