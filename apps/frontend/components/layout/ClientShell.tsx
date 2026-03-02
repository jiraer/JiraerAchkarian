'use client'

import { Shell } from './Shell'

export default function ClientShell({
  children,
}: {
  children: React.ReactNode
}) {
  return <Shell>{children}</Shell>
}