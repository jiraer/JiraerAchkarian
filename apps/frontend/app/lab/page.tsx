// app/lab/page.tsx
'use client'

import dynamic from 'next/dynamic'

const LabScene = dynamic(
  () => import('../../components/lab/LabScene').then((mod) => mod.LabScene),
  { ssr: false } // only render on client
)

export default function LabPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 pb-24 pt-12 space-y-10">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-display tracking-tight">Lab</h1>
          <p className="mt-3 max-w-xl text-sm text-neutral-300">
            A living playground for spatial interfaces, motion-first experiments,
            and real-time data visualizations.
          </p>
        </div>
      </header>

      {/* Render the LabScene only on the client */}
      <LabScene />
    </main>
  )
}