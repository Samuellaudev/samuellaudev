import PostClient from '@/components/Post';
import { notFound } from 'next/navigation';

const backendUrl = process.env.BACKEND_URL;

export default async function PostPage({ params }) {
  const { id } = await params;

  if (!backendUrl) throw new Error('BACKEND_URL is not set');

  const res = await fetch(`${ backendUrl }/api/posts/${ id }`, { cache: 'no-store' });

  if (!res.ok) return notFound();

  const postData = await res.json();
  return <PostClient post={ postData } />;
}