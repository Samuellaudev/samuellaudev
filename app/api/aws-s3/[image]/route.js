import { NextResponse } from 'next/server';
import { BACKEND_URL, AWS_S3_GET_URL } from '@/utils/constants';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { image: imgName } = params;

  try {
    const response = await fetch(`${BACKEND_URL}${AWS_S3_GET_URL}/${imgName}`);
    const { url } = await response.json();

    return NextResponse.json({ success: true, url });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
