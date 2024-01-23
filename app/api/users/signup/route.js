import { NextResponse } from 'next/server';
import { USERS_URL } from '@/utils/constants';

const backendUrl = process.env.BACKEND_URL;

// @desc    Register/Sign up a new user
// @route   POST /api/users/signup
// @access  Public
export async function POST(request) {
  try {
    const requestData = await request.json();
    const response = await fetch(`${backendUrl}${USERS_URL}/signup`, {
      method: 'POST',
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
