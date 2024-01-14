import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
  },
});

async function getFileFromS3(fileName) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    ContentType: 'image/jpg',
  };

  const command = new GetObjectCommand(params);

  const signedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 900,
  });

  return signedUrl;
}

export async function GET(request, { params }) {
  const { image: imgName } = params;

  try {
    const response = await getFileFromS3(imgName);

    return NextResponse.json({ success: true, url: response });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
