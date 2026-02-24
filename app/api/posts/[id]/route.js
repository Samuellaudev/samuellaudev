import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const backendUrl = process.env.BACKEND_URL;

export const dynamic = 'force-dynamic';

// @desc   Fetch single blog post
// @route  GET /api/posts/:id
// @access Public
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const res = await fetch(`${ backendUrl }/api/posts/${ id }`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// @desc   Delete single blog post
// @route  DELETE /api/posts/:id
// @access Private
export async function DELETE(request, { params }) {
  const { id } = await params;

  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  try {
    await fetch(`${ backendUrl }/api/posts/${ id }`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie: `jwt=${ token.value }`,
      },
    });

    return NextResponse.json({ data: { id } });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete post!');
  }
}

// @desc   Update single blog post
// @route  PUT /api/posts/:id
// @access Private
export async function PUT(request, { params }) {
  const { id } = await params;
  const updatedPostData = await request.json();

  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  try {
    await fetch(`${ backendUrl }/api/posts/${ id }`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie: `jwt=${ token.value }`,
      },
      body: JSON.stringify(updatedPostData),
    });

    return NextResponse.json({ data: { id } });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update post!');
  }
}
