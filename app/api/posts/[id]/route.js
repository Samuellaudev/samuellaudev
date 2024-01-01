import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const backendUrl = process.env.BACKEND_URL;

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    const res = await fetch(`${backendUrl}/api/posts/${id}`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  try {
    await fetch(`${backendUrl}/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie: `jwt=${token.value}`,
      },
    });

    return NextResponse.json({ data: { id } });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete post!');
  }
}
