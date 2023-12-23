import { NextResponse } from 'next/server';

const backendUrl = process.env.BACKEND_URL;

export async function GET(req, res) {
  try {
    const res = await fetch(`${backendUrl}/api/posts`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
