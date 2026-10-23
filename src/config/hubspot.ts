export const HUBSPOT_CONFIG = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '',
  forms: {
    contact: process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID || '',
    newsletter: process.env.NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID || '',
    workshop: process.env.NEXT_PUBLIC_HUBSPOT_WORKSHOP_FORM_ID || '',
    /**
     * Optional dedicated form for speaking enquiries. When unset, the speaking
     * enquiry form falls back to the contact form so submissions still arrive.
     */
    speaking: process.env.NEXT_PUBLIC_HUBSPOT_SPEAKING_FORM_ID || '',
  },
  meetings: {
    primary: process.env.NEXT_PUBLIC_HUBSPOT_MEETING_LINK || 'https://meetings-eu1.hubspot.com/mchivere',
  },
};
