import { NextResponse } from 'next/server';
import { USERS_URL } from '@/utils/constants';

const backendUrl = process.env.BACKEND_URL;

export async function POST(request) {
  try {
    const requestData = await request.json();
    const response = await fetch(`${backendUrl}${USERS_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const { status } = response;

    if (status === 200) {
      return response;
    }

    const errorMessage =
      status === 500 || status === 401
        ? 'Sorry! There was an error with your login. Please try again.'
        : 'Unexpected error during login.';

    return NextResponse.json({ status, message: errorMessage });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
