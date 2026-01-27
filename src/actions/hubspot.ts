'use server'

interface HubSpotField {
  name: string;
  value: string;
}

interface HubSpotContext {
  pageUri: string;
  pageName: string;
}

export async function submitHubSpotForm(
  portalId: string,
  formId: string,
  fields: HubSpotField[],
  context: HubSpotContext
) {
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields,
        context,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { 
        success: false, 
        error: data.errors?.[0]?.message || 'Submission failed',
        details: data 
      };
    }

    return { success: true, message: data.inlineMessage };
  } catch (error) {
    console.error('HubSpot Submission Error:', error);
    return { success: false, error: 'Network error occurred' };
  }
}
