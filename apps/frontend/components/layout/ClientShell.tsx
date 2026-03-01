'use client';

import dynamic from 'next/dynamic';

// We move the dynamic import here, inside a Client Component
const Shell = dynamic(
  () => import('./Shell').then((m) => m.Shell),
  { ssr: false }
);

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}
