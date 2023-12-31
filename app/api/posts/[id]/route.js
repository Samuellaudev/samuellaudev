import { NextResponse } from 'next/server';

const backendUrl = process.env.BACKEND_URL;

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    const id = params.id;

    const res = await fetch(`${backendUrl}/api/posts/${id}`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
