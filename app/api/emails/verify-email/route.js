import { NextResponse } from 'next/server';

const backendUrl = process.env.BACKEND_URL;

export async function PUT(request) {
  try {
    const requestData = await request.json();

    const response = await fetch(`${backendUrl}/api/emails/verify-email`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
}
