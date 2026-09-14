'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/inventory');
  }, [router]);
  return (
    <div className="flex min-h-screen items-center justify-center text-sm text-steel">
      Loading Appetitebind…
    </div>
  );
}
