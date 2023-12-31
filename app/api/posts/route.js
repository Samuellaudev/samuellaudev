import { NextResponse } from 'next/server';

const backendUrl = process.env.BACKEND_URL;

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const res = await fetch(`${backendUrl}/api/posts`);
    const data = await res.json();
    // console.log(data);
    return NextResponse.json(data);
    // return res;
  } catch (error) {
    return NextResponse.json({ error });
  }
}
