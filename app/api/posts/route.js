import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const backendUrl = process.env.BACKEND_URL;

export const dynamic = 'force-dynamic';

// @desc   Fetch all blog posts
// @route  GET /api/posts
// @access Public
export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const pageNumber = searchParams.get('pageNumber');
    const search = searchParams.get('search');

    const queryParams = [];

    if (search) {
      queryParams.push(`search=${search}`);
    }
    if (pageNumber) {
      queryParams.push(`pageNumber=${pageNumber}`);
    }

    let apiUrl = `${backendUrl}/api/posts`;

    if (queryParams.length > 0) {
      apiUrl += `?${queryParams.join('&')}`;
    }

    const res = await fetch(apiUrl);
    const data = await res.json();
    return NextResponse.json({ error });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// @desc   Create single blog post
// @route  POST /api/posts
// @access Private
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
