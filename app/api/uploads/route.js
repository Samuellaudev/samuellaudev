import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { UPLOAD_URL } from '@/utils/constants';

const backendUrl = process.env.BACKEND_URL;

export async function POST(request) {
  const uploadData = await request.formData();

  const image = uploadData.get('image');
  if (!image) {
    return NextResponse.json({ success: false });
  }

  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  try {
    const response = await fetch(`${backendUrl}${UPLOAD_URL}`, {
      method: 'POST',
      headers: {
        cookie: `jwt=${token.value}`,
      },
      body: uploadData,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
}
