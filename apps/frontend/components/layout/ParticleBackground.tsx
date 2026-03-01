'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

import { useMemo, useRef } from 'react';
import * as THREE from '@react-three/drei';

function createLayer(count: number, depth: number) {
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6
    positions[i * 3 + 2] = depth + (Math.random() - 0.5) * 2
  }

  return positions
}

const Layer = ({
  count,
  depth,
  color,
  size,
  opacity,
  speed
}: any) => {
  const ref = useRef<THREE.Points>(null!)
  const { mouse } = useThree()
  const positions = useMemo(() => createLayer(count, depth), [count, depth])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // subtle drift instead of rotation
    ref.current.position.x = mouse.x * 0.3
    ref.current.position.y = mouse.y * 0.2

    ref.current.rotation.z = t * speed
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={opacity}
      />
    </Points>
  )
}

export const ParticleBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-65">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 65 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        {/* Far layer */}
        <Layer
          count={900}
          depth={-4}
          color="#FFD700"
          size={0.01}
          opacity={0.5}
          speed={0.002}
        />

        {/* Mid layer */}
        <Layer
          count={700}
          depth={-1}
          color="#8FAF9F"
          size={0.04}
          opacity={0.3}
          speed={0.015}
        />

        {/* Front accent layer */}
        <Layer
          count={500}
          depth={2}
          color="#D6A75E"
          size={0.02}
          opacity={0.6}
          speed={0.009}
        />
      </Canvas>
    </div>
  )
}