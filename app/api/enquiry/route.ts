import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  let name = '', phone = '', email = '', service = '', message = '', source = '';

  // ── Parse body ───────────────────────────────────────────────────────────
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

  // ── Always log to Vercel (visible in Dashboard → Logs) ───────────────────
  console.log('📬 New Enquiry:', JSON.stringify({
    timestamp, source, name, phone,
    email: email || '—',
    service: service || '—',
    message: message || '—',
  }));

  // ── Try to send email — NEVER block visitor if it fails ──────────────────
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: { rejectUnauthorized: false },
      });

      const adminEmail = process.env.ADMIN_EMAIL ?? 'info@doonearthsolutions.in';

      await transporter.sendMail({
        from: `"Doon Earth Solution Website" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        replyTo: email || undefined,
        subject: `🌿 New Enquiry: ${name} — ${service || 'General'}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f4f7f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">
        <tr>
          <td style="background:linear-gradient(135deg,#2e4d12 0%,#487a1a 50%,#5f9a26 100%);padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">🌿 New Enquiry Received</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">${timestamp} · Source: ${source}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#fff;padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                ['Full Name', name],
                ['Mobile Number', phone],
                ['Email Address', email || '—'],
                ['Service Required', service || '—'],
              ].map(([label, value]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px;">${label}</span>
                  <span style="font-size:16px;font-weight:600;color:#1a221c;">${value}</span>
                </td>
              </tr>`).join('')}
              <tr>
                <td style="padding:10px 0;">
                  <span style="display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;">Message</span>
                  <div style="background:#f7fbe9;border-left:3px solid #a3c93f;padding:12px 16px;border-radius:0 8px 8px 0;font-size:14px;color:#26302a;line-height:1.6;">${message || '<em style="color:#999;">No message provided</em>'}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f3f8ec;padding:20px 32px;text-align:center;border-top:1px solid #e3f0d0;">
            <a href="tel:${phone.replace(/\s/g, '')}" style="display:inline-block;background:#487a1a;color:#fff;text-decoration:none;padding:12px 28px;border-radius:50px;font-weight:700;font-size:14px;">
              📞 Call Back Now
            </a>
            <p style="margin:8px 0 0;font-size:12px;color:#888;">Doon Earth Solution · Dehradun · info@doonearthsolutions.in</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      });

      console.log('✅ Email sent successfully to', adminEmail);
    } catch (emailErr) {
      // Log the error but NEVER return 500 to the visitor
      console.error('⚠️ Email send failed (enquiry still saved in logs):', emailErr);
    }
  } else {
    console.warn('⚠️ SMTP_USER or SMTP_PASS not set — email skipped, enquiry logged above.');
  }

  // ── Always return success to the visitor ─────────────────────────────────
  return NextResponse.json({ success: true });
}
