import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const backendUrl = process.env.BACKEND_URL;

// @desc   Logout user
// @route  POST /api/users/logout
// @access Public
export async function POST(request) {
  try {
    cookies().delete('jwt');

    return NextResponse.json({ message: 'Logged out successfully' });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
