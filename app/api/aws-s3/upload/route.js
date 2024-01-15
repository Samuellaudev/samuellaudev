import { NextResponse } from 'next/server';
import { BACKEND_URL, AWS_S3_UPLOAD_URL } from '@/utils/constants';
import { cookies } from 'next/headers';

export async function POST(request) {
  const formData = await request.formData();

  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  try {
    const response = await fetch(`${BACKEND_URL}${AWS_S3_UPLOAD_URL}`, {
      method: 'POST',
      headers: {
        cookie: `jwt=${token.value}`,
      },
      body: formData,
    });

    const { message, url } = await response.json();

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
