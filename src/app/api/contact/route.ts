import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const locationId = process.env.GHL_LOCATION_ID || '6N2AQE2esqvfOtdlQ7QR';
    const accessToken = process.env.GHL_ACCESS_TOKEN || 'pit-f8c6032f-0064-4dee-a232-1e15934ddb79';

    if (!locationId || !accessToken) {
      return NextResponse.json(
        { error: 'CRM integration not configured' },
        { status: 500 }
      );
    }

    const fullName = (data.name || '').trim();
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || 'Inquiry';
    const lastName = nameParts.slice(1).join(' ') || '';

    const tags = ['website-inquiry', 'general-contact'];
    if (data.service) {
      tags.push(`topic: ${data.service.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
    }

    const ghlPayload = {
      locationId,
      firstName,
      lastName,
      name: fullName,
      email: data.email || undefined,
      phone: data.phone || undefined,
      tags,
    };

    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    if (ghlRes.ok) {
      const ghlData = await ghlRes.json();
      const contactId = ghlData.contact?.id;

      if (contactId && data.message) {
        const noteContent = `
KOINA GENERAL WEBSITE INQUIRY
----------------------------------------
From: ${fullName} (${data.email} | ${data.phone || 'No phone provided'})
Topic / Service: ${data.service || 'General'}
Message:
${data.message}
----------------------------------------
Submitted via koina.com.au/contact
        `.trim();

        await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Version: '2021-07-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ body: noteContent }),
        }).catch((err) => console.error('Failed to create GHL contact note:', err));
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing contact message' },
      { status: 500 }
    );
  }
}
