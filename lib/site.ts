export const siteConfig = {
  name: 'MS Global Manpower',
  founder: 'Mehedi Sarker',
  tagline: "Malaysia's Trusted Bridge to Verified Bangladeshi Talent",
  description:
    'MS Global Manpower connects Malaysian employers with skilled, verified Bangladeshi workers across construction, manufacturing, plantation and F&B/hospitality sectors — end to end, from sourcing to deployment.',
  url: 'https://msglobalmanpower.com',
  whatsapp: '+8801646794359',
  whatsappDisplay: '+880 1646-794359',
  facebook: 'https://www.facebook.com/share/1BzHNoJQAs/',
  email: 'info@msglobalmanpower.com',
  addressMalaysia: 'Kuala Lumpur, Malaysia',
  addressBangladesh: 'Dhaka, Bangladesh (Sourcing Office)',
  hours: 'Sat–Thu, 9:00 AM – 6:00 PM (BST / MYT)',
  license: 'BMET RL License: [RL-XXXXX] · BAIRA Membership: [XXXX]',
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
