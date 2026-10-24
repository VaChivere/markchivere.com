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
    /**
     * Booking moved off HubSpot and onto cal.com, so the env var is named for
     * the booking provider rather than for HubSpot. Leaving it HubSpot-named
     * would have meant a variable called ...HUBSPOT_MEETING_LINK silently
     * pointing the button at cal.com.
     */
    primary: process.env.NEXT_PUBLIC_BOOKING_LINK || 'https://cal.com/mark-chivere-wdlgmm/20min',
  },
};
