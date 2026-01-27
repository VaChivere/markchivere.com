export const HUBSPOT_CONFIG = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '',
  forms: {
    contact: process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID || '',
    newsletter: process.env.NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID || '',
    workshop: process.env.NEXT_PUBLIC_HUBSPOT_WORKSHOP_FORM_ID || '',
  }
};
