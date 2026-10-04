import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const locationId = process.env.GHL_LOCATION_ID || '6N2AQE2esqvfOtdlQ7QR';
    const accessToken = process.env.GHL_ACCESS_TOKEN || 'pit-f8c6032f-0064-4dee-a232-1e15934ddb79';

    if (!locationId || !accessToken) {
      console.error('Missing GoHighLevel credentials');
      return NextResponse.json(
        { error: 'CRM integration not configured' },
        { status: 500 }
      );
    }

    // Parse participant names
    const fullName = (data.participantName || '').trim();
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || 'Referral';
    const lastName = nameParts.slice(1).join(' ') || 'Client';

    // Primary email and phone
    const contactEmail = data.participantEmail || data.referrerEmail || '';
    const contactPhone = data.participantPhone || data.referrerPhone || '';

    // Generate tags based on funding, discipline, and region
    const tags: string[] = ['website-referral', 'intake-pending'];

    if (data.fundingCategory) {
      if (data.fundingCategory.includes('NDIS')) tags.push('funding: ndis');
      else if (data.fundingCategory.includes('Aged Care') || data.fundingCategory.includes('HCP')) tags.push('funding: aged-care');
      else if (data.fundingCategory.includes('DVA')) tags.push('funding: dva');
      else if (data.fundingCategory.includes('Private')) tags.push('funding: private');
    }

    if (Array.isArray(data.services)) {
      data.services.forEach((svc: string) => {
        if (svc.includes('Occupational Therapy')) tags.push('service: ot');
        if (svc.includes('Physiotherapy')) tags.push('service: physio');
        if (svc.includes('Speech')) tags.push('service: speech');
        if (svc.includes('Behaviour') || svc.includes('PBS')) tags.push('service: pbs');
        if (svc.includes('Assistant') || svc.includes('AHA')) tags.push('service: aha');
        if (svc.includes('Clinical') || svc.includes('RN')) tags.push('service: rn-assessment');
      });
    }

    if (data.suburb) {
      tags.push(`suburb: ${data.suburb.toLowerCase().replace(/\s+/g, '-')}`);
    }

    // Custom fields mapping from GoHighLevel Koina Location
    const customFields = [
      { id: 'sLIMVKhlZu7InfZLWjWw', field_value: data.referrerType || 'Myself' },
      { id: 'yeO9Ia07fSyxGW65HYjI', field_value: data.referrerName || '' },
      { id: 'o9k8cYgjhrU6YZ9573E5', field_value: data.referrerPhone || '' },
      { id: 'wFZLZOxbeBZkMy27Xbyy', field_value: firstName },
      { id: 'vctApk7bss5nGdCnoxJT', field_value: data.referrerEmail || data.participantEmail || '' },
      { id: 'mAKMhf57CBwCJyZEjHkr', field_value: 'at Home' },
      { id: 'wV3NJbTUPhO1uIx3uxXz', field_value: 'No' },
      {
        id: 'zOR1cGWVPVj30xJPtUrR',
        field_value: `Referral Goals: ${data.participantGoals || 'Not specified'}\nDiagnosis: ${data.medicalDiagnosis || 'Not specified'}`,
      },
    ];

    if (data.ndisNumber) {
      customFields.push({
        id: 'pAuXnOjmr3HE8sdYxy5G',
        field_value: data.fundingCategory.includes('Plan-Managed') ? 'Plan-managed' : 'Self-managed',
      });
    }

    if (data.planEndDate) {
      customFields.push({ id: 'gpIw34dnivsY3SLi7bnI', field_value: data.planEndDate });
    }

    if (data.dvaCardType) {
      customFields.push({
        id: 'syhZAzTj0Tp24UX6oEHN',
        field_value: data.dvaCardType.includes('Gold') ? 'Gold' : 'White',
      });
    }

    // Build GHL Upsert Payload
    const ghlPayload = {
      locationId,
      firstName,
      lastName,
      name: fullName,
      email: contactEmail || undefined,
      phone: contactPhone || undefined,
      address1: data.address || undefined,
      city: data.suburb || undefined,
      state: 'QLD',
      postalCode: data.postcode || undefined,
      country: 'AU',
      tags,
      customFields,
    };

    // 1. Upsert Contact in GHL
    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlRes.ok) {
      const errText = await ghlRes.text();
      console.error('GHL Contact Upsert Error:', errText);
      // Still return success to user so client experience is smooth, but log error
      return NextResponse.json({ success: true, offline: true });
    }

    const ghlData = await ghlRes.json();
    const contactId = ghlData.contact?.id;

    // 2. Add Detailed Clinical Intake Note & Opportunity to the Contact
    if (contactId) {
      // Create Opportunity in Client Intake Pipeline -> New Referral - Triage Pending
      await fetch('https://services.leadconnectorhq.com/opportunities/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pipelineId: 'aV8OYpqXJByVwPyLlyJu',
          pipelineStageId: '35d92a62-2c9e-4531-a58e-86b31eecbeb4',
          locationId,
          name: `${fullName} - ${Array.isArray(data.services) ? data.services.join(', ') : data.services}`,
          status: 'open',
          contactId,
          monetaryValue: 1930,
        }),
      }).catch((err) => console.error('Failed to create GHL opportunity:', err));

      const noteContent = `
KOINA ALLIED HEALTH - NEW INTAKE REFERRAL
------------------------------------------------
Referrer Type: ${data.referrerType || 'N/A'}
Referrer Name: ${data.referrerName || 'N/A'} (${data.referrerOrg || 'N/A'})
Referrer Contact: ${data.referrerPhone || 'N/A'} | ${data.referrerEmail || 'N/A'}

PARTICIPANT DETAILS:
Name: ${fullName} (DOB: ${data.dob || 'N/A'}, Gender: ${data.gender || 'N/A'})
Address: ${data.address || 'N/A'}, ${data.suburb || 'N/A'} QLD ${data.postcode || ''}
Emergency Contact: ${data.emergencyContactName || 'N/A'} (${data.emergencyContactPhone || 'N/A'})

FUNDING:
Stream: ${data.fundingCategory || 'N/A'}
NDIS Number: ${data.ndisNumber || 'N/A'} (Plan End: ${data.planEndDate || 'N/A'})
Plan Manager: ${data.planManagerOrg || 'N/A'} (${data.planManagerEmail || 'N/A'})
DVA: ${data.dvaNumber || 'N/A'} (${data.dvaCardType || 'N/A'})
Aged Care Provider: ${data.agedCareProvider || 'N/A'}

CLINICAL REQUEST:
Disciplines: ${Array.isArray(data.services) ? data.services.join(', ') : data.services}
Goals: ${data.participantGoals || 'N/A'}
Medical / Diagnosis: ${data.medicalDiagnosis || 'N/A'}
Consent Confirmed: ${data.consentGiven ? 'YES' : 'NO'}
------------------------------------------------
Submitted via koina.com.au/referral
      `.trim();

      await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Version: '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: noteContent }),
      }).catch((err) => console.error('Failed to create GHL note:', err));
    }

    return NextResponse.json({
      success: true,
      contactId,
    });
  } catch (error) {
    console.error('Referral API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing referral' },
      { status: 500 }
    );
  }
}
