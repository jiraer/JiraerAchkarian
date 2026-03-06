{/*
    
    'use client';

import React, { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Html, Loader } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

interface LaptopModelProps {
    scrollProgress: number;
    videoSrc?: string;
    videoScale?: number; // New prop to control video size
}

function LaptopModel({ scrollProgress, videoSrc, videoScale = 0.6 }: LaptopModelProps) {
    const group = useRef<THREE.Group>(null);
    const lidRef = useRef<THREE.Object3D | null>(null);

    const { scene } = useGLTF('/Low_Poly_Laptop_Gltf/Low_Poly_Laptop.gltf');

    const videoTexture = useMemo(() => {
        if (!videoSrc) return null;

        const video = document.createElement('video');
        video.src = videoSrc;
        video.loop = true;
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.crossOrigin = 'Anonymous';
        video.play().catch(() => { });

        const texture = new THREE.VideoTexture(video);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.rotation = 0;
        texture.center.set(0.5, 0.5);
        texture.flipY = false;

        return texture;
    }, [videoSrc]);

    useEffect(() => {
        if (!videoTexture) return;
        // Centered smaller video
        videoTexture.repeat.set(videoScale, videoScale);
        const offset = (1 - videoScale) / 2;
        videoTexture.offset.set(offset, offset);
    }, [videoTexture, videoScale]);

    const { clonedScene, lidNode } = useMemo(() => {
        const clone = scene.clone(true);
        let lidNode: THREE.Object3D | null = null;

        clone.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                const name = child.name.toLowerCase();
                if (name.includes('lid')) lidNode = child;

                if (
                    (name.includes('screen') || name.includes('display') || name.includes('monitor')) &&
                    videoTexture
                ) {
                    mesh.material = new THREE.MeshBasicMaterial({
                        map: videoTexture,
                        toneMapped: false,
                    });
                }
            }
        });

        return { clonedScene: clone, lidNode };
    }, [scene, videoTexture]);

    useEffect(() => {
        lidRef.current = lidNode;
    }, [lidNode]);

    const { viewport } = useThree();
    const scale = useMemo(() => {
        if (viewport.width < 6) return 3.5;
        if (viewport.width < 10) return 4.5;
        return 5.5;
    }, [viewport.width]);

    useFrame((state, delta) => {
        if (group.current) {
            const targetRotY = THREE.MathUtils.lerp(0.5, -0.2, scrollProgress);
            group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 3, delta);
            const targetRotX = THREE.MathUtils.lerp(0.5, 0.1, scrollProgress);
            group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 3, delta);
        }

        if (lidRef.current) {
            const eased = THREE.MathUtils.smoothstep(scrollProgress, 0, 1);
            const lidOpen = THREE.MathUtils.lerp(1.2, 0.1, eased);
            lidRef.current.rotation.x = THREE.MathUtils.damp(lidRef.current.rotation.x, lidOpen, 4, delta);
        }
    });

    return (
        <group ref={group} position={[0, -0.2, 0]} scale={scale}>
            <primitive object={clonedScene} />
        </group>
    );
}

interface Laptop3DProps {
    scrollProgress: number;
    videoSrc?: string;
    videoScale?: number;
    title?: string;
    subtitle?: string;
    showContent?: boolean;
}

export default function Laptop3D({
    scrollProgress,
    videoSrc,
    videoScale = 0.6,
    title = 'My Portfolio Work',
    subtitle = 'Interactive apps and designs, shown live inside a device.',
    showContent = true,
}: Laptop3DProps) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 gap-8">
                <AnimatePresence>
                    {showContent && (
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-4 text-center lg:text-left"
                        >
                            <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>
                            <p className="text-neutral-400 max-w-md">{subtitle}</p>
                            <p className="text-sm text-neutral-500">Scroll or hover to rotate device</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="w-full lg:w-[600px] h-[80vh]">
                    <Canvas
                        camera={{ position: [0, 0, 2.75], fov: 30 }}
                        shadows
                        dpr={[1, Math.min(window.devicePixelRatio, 2.5)]}
                        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                    >
                        <ambientLight intensity={0.5} />
                        <spotLight
                            position={[8, 10, 8]}
                            intensity={1}
                            angle={0.25}
                            penumbra={1}
                            castShadow
                            shadow-mapSize-width={2048}
                            shadow-mapSize-height={2048}
                        />
                        <Environment preset="city" background={false} />

                        <Suspense
                            fallback={
                                <Html center>
                                    <div className="text-white text-sm">Loading device...</div>
                                </Html>
                            }
                        >
                            <LaptopModel scrollProgress={scrollProgress} videoSrc={videoSrc || '/preview.mp4'} videoScale={videoScale} />
                            <ContactShadows
                                position={[0, -1.8, 0]}
                                opacity={0.5}
                                scale={20}
                                blur={5}
                                far={6}
                                resolution={1024}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <Loader />
        </div>
    );
}

useGLTF.preload('/Low_Poly_Laptop_Gltf/Low_Poly_Laptop.gltf');
    
    
    */}


