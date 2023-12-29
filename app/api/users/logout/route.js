import { NextResponse } from 'next/server';

const backendUrl = process.env.BACKEND_URL;

export async function POST(request) {
  try {
    const response = await fetch(`${backendUrl}/api/users/logout`, {
      method: 'POST',
    });

    if (response.ok) {
      return response;
    } else {
      throw new Error('Failed to logout');
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}
