'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, RoundedBox, MeshTransmissionMaterial, Text, Float, ContactShadows, Line } from '@react-three/drei'
import * as THREE from 'three'

// ---------------------------
// Particle Field (Optimized)
// ---------------------------
const ParticleField = ({ count = 90 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: new THREE.Vector3(Math.random() * 12 - 6, Math.random() * 12 - 6, Math.random() * 12 - 6),
        speed: Math.random() * 0.01 + 0.005,
        offset: Math.random() * 100
      })),
    [count]
  )

  useFrame((state) => {
    particles.forEach((p, i) => {
      p.pos.y += p.speed
      if (p.pos.y > 6) p.pos.y = -6
      const s = 1 + Math.sin(state.clock.elapsedTime + p.offset) * 0.5
      dummy.position.copy(p.pos)
      dummy.scale.setScalar(s * 0.012)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined!, undefined!, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#00ffcc" transparent opacity={0.2} />
    </instancedMesh>
  )
}

// ---------------------------
// Glass HUD / Card
// ---------------------------
const GlassHUD = ({ scale = 1 }) => {
  const group = useRef<THREE.Group>(null!)
  const scanRef = useRef<THREE.Mesh>(null!)
  const textRef = useRef<any>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (scanRef.current) {
      scanRef.current.position.y = Math.sin(t * 1.5) * 0.8
     }

    if (textRef.current && t % 2 < 0.02) {
      textRef.current.text = Math.random() > 0.5 ? '> SYNCING...' : '> SECURE_NODE'
    }
  })

  return (
    <group ref={group} scale={[scale, scale, scale]}>
      {/* subtle float for lift only */}
      <Float speed={0.2} rotationIntensity={0.05} floatIntensity={0.05}>
        <RoundedBox args={[3.8, 2.2, 0.5]} radius={0.2} smoothness={4} position={[0, 0, 0]}>
          <MeshTransmissionMaterial
            backside={false} // safe for full rotation
            samples={12}
            thickness={1.2}
            transmission={0.9}
            chromaticAberration={0.7}
            distortion={0.15}
            distortionScale={0.12}
            color="#e0fcf9"
            roughness={0.03}
            ior={1.6}
          />

          {/* Text Display */}
          <Text ref={textRef} position={[-1.6, 0.6, 0.26]} fontSize={0.25} color="#ffffff" anchorX="left" fontWeight="bold">
            {"> INITIALIZING"}
          </Text>
          <Text 
  position={[-1.6, 0.1, 0.26]} 
  fontSize={0.10} 
  color="#00ffcc" 
  fillOpacity={0.7} // Use this instead of opacity + transparent
  anchorX="left" 
  fontWeight="bold" 
  lineHeight={1.5}
>
  {"LOAD: 14.2% \nNODE: SOUTH_EAST_VR \nSTATUS: ENCRYPTED"}
</Text>


          {/* Internal Scanline */}
          <mesh ref={scanRef} position={[0, 0, 0.27]}>
            <planeGeometry args={[3.4, 0.02]} />
            <meshBasicMaterial color="#00ffcc" transparent opacity={0.35} />
          </mesh>

          {/* Internal Glow */}
          <pointLight position={[0, 0, 0.1]} intensity={0.5} color="#00ffcc" distance={2} />
        </RoundedBox>

        {/* Subtle Backlight Glow */}
        <mesh position={[0, 0, -0.1]}>
          <meshBasicMaterial color="#00ffcc" transparent opacity={0.03} toneMapped={false} />
        </mesh>
      </Float>
    </group>
  )
}

// ---------------------------
// Volumetric Chart
// ---------------------------
const VolumetricChart = () => {
  const [points, setPoints] = useState<THREE.Vector3[]>(
    Array.from({ length: 40 }, (_, i) => new THREE.Vector3(i * 0.25 - 5, 0, 0))
  )

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    setPoints((prev) =>
      prev.map((p, i) => {
        p.y = Math.sin(i * 0.4 + t) * 1.5
        p.z = Math.cos(i * 0.3 + t) * 1.0
        return p
      })
    )
  })

  return (
    <group position={[0, 0, -1]}>
      <Line points={points} color="#00ffcc" lineWidth={2.5} transparent opacity={0.15} />
    </group>
  )
}

// ---------------------------
// Main Lab Scene
// ---------------------------
export const LabScene = () => {
  const [scale, setScale] = useState(1)
  const [fov, setFov] = useState(35)
  const [canvasHeight, setCanvasHeight] = useState('100vh')

  // Responsive scaling for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(1.2)
        setFov(45)
        setCanvasHeight('50vh')
      } else {
        setScale(1)
        setFov(35)
        setCanvasHeight('100vh')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: canvasHeight,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 6px 24px 0 rgba(211, 211, 211, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <Canvas
        shadows
        gl={{ alpha: true, antialias: true, stencil: false }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        camera={{ position: [0, 0, 10], fov }}
      >
        <ambientLight intensity={0.8} />
 
        <GlassHUD scale={scale} />
        <VolumetricChart />
        <ParticleField count={90} />

        {/* Ground / Grid */}
        <group position={[0, -2.8, 0]}>
          <gridHelper args={[30, 30, '#00ffcc', '#030303']} />
          <ContactShadows opacity={0.4} scale={20} blur={3} far={4.5} />
        </group>

        {/* User Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.1}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}