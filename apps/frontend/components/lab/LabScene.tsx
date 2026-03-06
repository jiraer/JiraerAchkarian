'use client'

import React, { useRef, useState, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  OrbitControls,
  RoundedBox,
  MeshTransmissionMaterial,
  Text,
  Float,
  ContactShadows,
  Line,
  Sparkles,
  Preload
} from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Crosshair, Pause, Play, Layers } from 'lucide-react'

// ---------------------------
// Particle Field (Optimized with Instancing)
// ---------------------------
interface ParticleFieldProps {
  count?: number;
  theme?: 'neon' | 'cyberpunk' | 'light';
}

const ParticleField = ({ count = 150, theme = 'neon' }: ParticleFieldProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: new THREE.Vector3(Math.random() * 16 - 8, Math.random() * 16 - 8, Math.random() * 16 - 8),
        speed: Math.random() * 0.01 + 0.002,
        offset: Math.random() * 100,
        factor: Math.random() * 0.5 + 0.5
      })),
    [count]
  )

  const color = theme === 'neon' ? '#00ffcc' : theme === 'cyberpunk' ? '#ff0055' : '#ffffff'

  useFrame((state) => {
    if (!meshRef.current) return
    particles.forEach((p, i) => {
      p.pos.y += p.speed
      if (p.pos.y > 8) p.pos.y = -8
      const s = p.factor + Math.sin(state.clock.elapsedTime + p.offset) * 0.5
      dummy.position.copy(p.pos)
      dummy.scale.setScalar(s * 0.015)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined!, undefined!, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} depthWrite={false} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  )
}

// ---------------------------
// Advanced Glass HUD / Central Node
// ---------------------------
interface GlassHUDProps {
  scale?: number;
  isFocused?: boolean;
  onInteract: () => void;
  theme?: 'neon' | 'cyberpunk' | 'light';
}

const GlassHUD = ({ scale = 1, isFocused = false, onInteract, theme = 'neon' }: GlassHUDProps) => {
  const group = useRef<THREE.Group>(null!)
  const scanRef = useRef<THREE.Mesh>(null!)
  const textRef = useRef<any>(null!)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const themeColor = theme === 'neon' ? '#00ffcc' : theme === 'cyberpunk' ? '#ff0055' : '#ffffff'
  const targetScale = isFocused ? scale * 1.2 : hovered ? scale * 1.05 : scale

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Smooth scaling on focus/hover
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)

    // Interactive spin on click
    if (clicked) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, group.current.rotation.y + Math.PI, 0.1)
      if (Math.abs(group.current.rotation.y % Math.PI) < 0.1) setClicked(false)
    }

    if (scanRef.current) {
      scanRef.current.position.y = Math.sin(t * 2) * 0.8
    }

    if (textRef.current && t % 2 < 0.05) {
      textRef.current.text = Math.random() > 0.5 ? '> SYNCING...' : (isFocused ? '> FOCUSED' : '> SECURE_NODE')
    }
  })

  return (
    <group
      ref={group}
      onClick={(e) => { e.stopPropagation(); setClicked(true); onInteract(); }}
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer' }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto' }}
    >
      <Float speed={hovered ? 0.5 : 0.2} rotationIntensity={hovered ? 0.1 : 0.05} floatIntensity={hovered ? 0.1 : 0.05}>
        <RoundedBox args={[3.8, 2.2, 0.5]} radius={0.2} smoothness={4} position={[0, 0, 0]}>
          <MeshTransmissionMaterial
            backside={false}
            samples={8} // optimized samples for better performance while keeping glass looks
            thickness={1.2}
            transmission={0.9}
            chromaticAberration={0.7}
            distortion={0.15}
            distortionScale={0.12}
            color={theme === 'light' ? '#ffffff' : '#e0fcf9'}
            roughness={0.03}
            ior={1.6}
            transparent
          />

          {/* Interactive Core Glow */}
          <pointLight position={[0, 0, 0]} intensity={hovered || isFocused ? 2 : 0.5} color={themeColor} distance={3} />

          {/* Text Display */}
          <Text ref={textRef} position={[-1.6, 0.6, 0.26]} fontSize={0.25} color="#ffffff" anchorX="left" fontWeight="bold">
            {"> INITIALIZING"}
          </Text>
          <Text
            position={[-1.6, 0.1, 0.26]}
            fontSize={0.10}
            color={themeColor}
            fillOpacity={0.8}
            anchorX="left"
            fontWeight="bold"
            lineHeight={1.5}
          >
            {`LOAD: ${hovered ? '89.4%' : '14.2%'}\nNODE: SOUTH_EAST_VR\nSTATUS: ${isFocused ? 'ACTIVE' : 'ENCRYPTED'}`}
          </Text>

          {/* Internal Scanline */}
          <mesh ref={scanRef} position={[0, 0, 0.27]}>
            <planeGeometry args={[3.4, 0.02]} />
            <meshBasicMaterial color={themeColor} transparent opacity={hovered ? 0.6 : 0.35} blending={THREE.AdditiveBlending} />
          </mesh>
        </RoundedBox>

        {/* Ambient surrounding wireframe */}
        {hovered && (
          <RoundedBox args={[4.0, 2.4, 0.7]} radius={0.3} smoothness={2} position={[0, 0, 0]}>
            <meshBasicMaterial wireframe color={themeColor} transparent opacity={0.1} />
          </RoundedBox>
        )}
      </Float>
    </group>
  )
}

// ---------------------------
// Animated Volumetric Chart
// ---------------------------
interface VolumetricChartProps {
  theme?: 'neon' | 'cyberpunk' | 'light';
}

const VolumetricChart = ({ theme = 'neon' }: VolumetricChartProps) => {
  const [points, setPoints] = useState<THREE.Vector3[]>(
    Array.from({ length: 40 }, (_, i) => new THREE.Vector3(i * 0.25 - 5, 0, 0))
  )
  const themeColor = theme === 'neon' ? '#00ffcc' : theme === 'cyberpunk' ? '#ff0055' : '#aaaaaa'

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    setPoints((prev) =>
      prev.map((p, i) => {
        p.y = Math.sin(i * 0.4 + t * 2) * 1.5 * Math.sin(t * 0.5)
        p.z = Math.cos(i * 0.3 + t * 1.5) * 1.0
        return p
      })
    )
  })

  return (
    <group position={[0, 0, -1]}>
      <Line points={points} color={themeColor} lineWidth={3} transparent opacity={0.3} />
    </group>
  )
}

// ---------------------------
// Dynamic Camera Controller
// ---------------------------
const CameraController = ({ isFocused, autoRotate }: { isFocused: boolean, autoRotate: boolean }) => {
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)

  useFrame(() => {
    if (controlsRef.current) {
      // Adjust target smoothly based on focus state
      if (isFocused) {
        controlsRef.current.target.lerp(new THREE.Vector3(0, 0, 0), 0.05)
      }
      controlsRef.current.update()
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true} // Allow zoom with inertia
      enablePan={true} // Allow pan with inertia
      enableDamping={true}
      dampingFactor={0.05} // Increased inertia/smoothness
      rotateSpeed={0.8}
      zoomSpeed={0.8}
      autoRotate={autoRotate}
      autoRotateSpeed={1.5}
      maxDistance={25}
      minDistance={4}
    />
  )
}

// ---------------------------
// HTML UI Overlay (Framer Motion + Tailwind)
// ---------------------------
interface UIOverlayProps {
  theme: 'neon' | 'cyberpunk' | 'light';
  setTheme: (theme: 'neon' | 'cyberpunk' | 'light') => void;
  autoRotate: boolean;
  setAutoRotate: (v: boolean) => void;
  isFocused: boolean;
  setIsFocused: (v: boolean) => void;
  stats: { mem: number };
}

const UIOverlay = ({ theme, setTheme, autoRotate, setAutoRotate, isFocused, setIsFocused, stats }: UIOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 md:p-10"
    >
      {/* Top Bar */}
      <header className="flex justify-between items-start">
        <div className="pointer-events-auto backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-2xl shadow-2xl">
          <h1 className="text-white text-xl md:text-2xl font-bold tracking-widest flex items-center gap-2">
            <Zap className={`w-5 h-5 ${theme === 'neon' ? 'text-teal-400' : theme === 'cyberpunk' ? 'text-rose-500' : 'text-gray-300'}`} />
            LAB_CORE
          </h1>
          <p className="text-white/50 text-xs md:text-sm mt-1 uppercase font-mono tracking-wider">Interactive Matrix</p>
        </div>

        {/* Controls */}
        <div className="flex gap-2 pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="p-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white"
            title="Toggle Auto-Rotate"
          >
            {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setTheme(theme === 'neon' ? 'cyberpunk' : theme === 'cyberpunk' ? 'light' : 'neon')}
            className="p-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white"
            title="Cycle Theme"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFocused(!isFocused)}
            className={`p-3 backdrop-blur-md border rounded-xl transition-colors text-white ${isFocused ? 'bg-white/20 border-white/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            title="Toggle Focus Mode"
          >
            <Crosshair className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Bottom Panel */}
      <footer className="flex flex-col md:flex-row justify-between items-end gap-4 pointer-events-auto">
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl w-full md:w-64 shadow-2xl"
            >
              <h3 className="text-white font-mono text-sm mb-2 border-b border-white/10 pb-2">SYSTEM_DIAGNOSTICS</h3>
              <ul className="text-white/70 font-mono text-xs space-y-2 mt-3">
                <li className="flex justify-between"><span>FPS_TARGET:</span> <span className={`${theme === 'neon' ? 'text-teal-400' : theme === 'cyberpunk' ? 'text-rose-400' : 'text-white'}`}>60.0</span></li>
                <li className="flex justify-between"><span>MEM_ALLOC:</span> <span>{stats.mem} MB</span></li>
                <li className="flex justify-between"><span>ENGINE:</span> <span>R3F/THREE</span></li>
                <li className="flex justify-between"><span>LOD_STATE:</span> <span>OPTIMIZED</span></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 mt-auto mb-0 md:ml-auto">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme === 'neon' ? 'bg-teal-400' : theme === 'cyberpunk' ? 'bg-rose-500' : 'bg-gray-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${theme === 'neon' ? 'bg-teal-500' : theme === 'cyberpunk' ? 'bg-rose-600' : 'bg-gray-500'}`}></span>
          </span>
          <span className="text-white/60 text-xs font-mono uppercase">System Online</span>
        </div>
      </footer>
    </motion.div>
  )
}

// ---------------------------
// Main Export Component
// ---------------------------
export const LabScene = () => {
  const [scale, setScale] = useState(1)
  const [fov, setFov] = useState(40)

  // Interactive / Theming States
  const [theme, setTheme] = useState<'neon' | 'cyberpunk' | 'light'>('neon')
  const [autoRotate, setAutoRotate] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [stats, setStats] = useState({ mem: 124 })

  // Responsive scaling for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(1.2)
        setFov(50)
      } else {
        setScale(1)
        setFov(40)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // Simulate dynamic stats changing over time
    const interval = setInterval(() => setStats(s => ({ mem: s.mem + Math.floor(Math.random() * 5 - 2) })), 2500)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black selection:bg-teal-500/30">
      {/* Background Ambient Gradient based on Theme */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${theme === 'neon' ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-black to-black' :
        theme === 'cyberpunk' ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-black to-black' :
          'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black'
        }`} />

      {/* HTML Overlay with Framer Motion UI */}
      <UIOverlay
        theme={theme} setTheme={setTheme}
        autoRotate={autoRotate} setAutoRotate={setAutoRotate}
        isFocused={isFocused} setIsFocused={setIsFocused}
        stats={stats}
      />

      {/* 3D Canvas */}
      <Canvas
        shadows
        dpr={[1, 2]} // Performance: limit max device pixel ratio to 2
        gl={{ alpha: true, antialias: true, stencil: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 2, 14], fov }}
        className="touch-none" // prevent scrolling while interacting
      >
        {/* Responsive Lighting */}
        <ambientLight intensity={theme === 'light' ? 1.5 : 0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color={theme === 'neon' ? '#00ffcc' : theme === 'cyberpunk' ? '#ff0055' : '#ffffff'}
        />

        {/* Lazy Loaded Suspense wrapper for heavy assets */}
        <Suspense fallback={null}>
          <group position={[0, -0.5, 0]}>
            {/* Core Box Model */}
            <GlassHUD
              scale={scale}
              isFocused={isFocused}
              onInteract={() => setIsFocused(!isFocused)}
              theme={theme}
            />
            {/* Decorative Chart Line */}
            <VolumetricChart theme={theme} />

            {/* Ambient Sparkles around the model - adds depth and liveliness */}
            <Sparkles count={50} scale={8} size={2} speed={0.4} opacity={0.3} color={theme === 'neon' ? '#00ffcc' : '#ff0055'} />

            {/* Optimized Instance Mesh Particles */}
            <ParticleField count={120} theme={theme} />
          </group>

          {/* Ground / Grid showing depth and perspective */}
          <group position={[0, -3.8, 0]}>
            <gridHelper args={[40, 40, theme === 'cyberpunk' ? '#ff0055' : '#00ffcc', '#111111']} position={[0, 0, 0]} />
            <ContactShadows opacity={0.6} scale={30} blur={2.5} far={5} />
          </group>

          {/* User Controls and Interaction */}
          <CameraController isFocused={isFocused} autoRotate={autoRotate} />

          {/* Preload assets for better user experience */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}