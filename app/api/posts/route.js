import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const backendUrl = process.env.BACKEND_URL;

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const res = await fetch(`${backendUrl}/api/posts`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request) {
  const postData = await request.json();

  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  try {
    const response = await fetch(`${backendUrl}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        cookie: `jwt=${token.value}`,
      },
      body: JSON.stringify(postData),
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
}
