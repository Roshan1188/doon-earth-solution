import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message, source } = body as {
      name?: string;
      phone?: string;
      email?: string;
      service?: string;
      message?: string;
      source?: string;
    };

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name and phone are required.' },
        { status: 400 },
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // ─── Console log (visible in Vercel Function logs) ───────────────────────
    console.log('📬 New Enquiry:', {
      timestamp,
      source: source || 'website',
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || '—',
      service: service?.trim() || '—',
      message: message?.trim() || '—',
    });

    // ─── Email via SMTP (Gmail or any SMTP) ──────────────────────────────────
    // Set these env vars in Vercel Dashboard → Project → Settings → Environment Variables:
    //   SMTP_HOST     e.g. smtp.gmail.com
    //   SMTP_PORT     587
    //   SMTP_USER     your-gmail@gmail.com
    //   SMTP_PASS     Gmail App Password (not your regular password)
    //   ADMIN_EMAIL   info@doonearthsolutions.in  (where you want enquiries sent)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const adminEmail = process.env.ADMIN_EMAIL ?? 'info@doonearthsolutions.in';

      await transporter.sendMail({
        from: `"Doon Earth Solution Website" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        replyTo: email?.trim() || undefined,
        subject: `🌿 New Enquiry: ${name.trim()} — ${service?.trim() || 'General'}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f4f7f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#2e4d12 0%,#487a1a 50%,#5f9a26 100%);padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">🌿 New Enquiry Received</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">${timestamp} &nbsp;·&nbsp; Source: ${source || 'Website'}</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3px;">Full Name</span>
                  <span style="font-size:16px;font-weight:600;color:#1a221c;">${name.trim()}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3px;">Mobile Number</span>
                  <span style="font-size:16px;font-weight:600;color:#1a221c;">${phone.trim()}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3px;">Email Address</span>
                  <span style="font-size:15px;color:#26302a;">${email?.trim() || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3px;">Service Required</span>
                  <span style="font-size:15px;font-weight:600;color:#487a1a;">${service?.trim() || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">Message</span>
                  <div style="background:#f7fbe9;border-left:3px solid #a3c93f;padding:12px 16px;border-radius:0 8px 8px 0;font-size:14px;color:#26302a;line-height:1.6;">${message?.trim() || '<em style="color:#999;">No message provided</em>'}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#f3f8ec;padding:20px 32px;text-align:center;border-top:1px solid #e3f0d0;">
            <a href="tel:${phone.trim().replace(/\s/g, '')}"
               style="display:inline-block;background:#487a1a;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:50px;font-weight:700;font-size:14px;margin-bottom:8px;">
              📞 Call Back Now
            </a>
            <p style="margin:8px 0 0;font-size:12px;color:#888;">Doon Earth Solution · Dehradun, Uttarakhand · info@doonearthsolutions.in</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Enquiry API error:', err);
    return NextResponse.json({ error: 'Failed to submit enquiry.' }, { status: 500 });
  }
}
