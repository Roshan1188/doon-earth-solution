import { site } from './site';

export type QueryPayload = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  property?: string;
  city?: string;
  message?: string;
};

export function buildWhatsAppLink(p: QueryPayload) {
  const lines = [
    `*New Enquiry — ${site.name}*`,
    ``,
    `*Name:* ${p.name}`,
    `*Phone:* ${p.phone}`,
    p.email ? `*Email:* ${p.email}` : '',
    p.service ? `*Service:* ${p.service}` : '',
    p.property ? `*Property Type / Size:* ${p.property}` : '',
    p.city ? `*Location:* ${p.city}` : '',
    p.message ? `*Message:* ${p.message}` : '',
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
