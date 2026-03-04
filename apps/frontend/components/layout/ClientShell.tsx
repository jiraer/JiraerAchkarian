'use client'; // Must be client component

import { Shell } from './Shell';

interface ClientShellProps {
  children: React.ReactNode;
}

export default function ClientShell({ children }: ClientShellProps) {
  return <Shell>{children}</Shell>;
}