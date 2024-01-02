'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-52 space-y-8">
      <h2> 404 Not Found</h2>
      <p>Could not find requested resource</p>
      <p className="border w-[200px] p-2 px-6 hover:cursor-pointer hover:bg-white hover:text-black transition duration-250">
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}
