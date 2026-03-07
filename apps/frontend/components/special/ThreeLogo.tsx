'use client';

import { useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface ThreeIconProps {
    Icon: LucideIcon;
    size?: number;
}

export default function ThreeIcon({ Icon, size = 20 }: ThreeIconProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotX = -y * 20; // tilt up/down
        const rotY = x * 20;  // tilt left/right
        const scale = 1.15;

        el.style.transform = `
      perspective(400px)
      rotateX(${rotX}deg)
      rotateY(${rotY}deg)
      scale(${scale})
    `;
        el.style.transition = 'transform 0.1s ease-out';
        el.style.zIndex = '10';
    };

    const reset = () => {
        const el = ref.current;
        if (!el) return;

        el.style.transform = 'perspective(400px) rotateX(0deg) rotateY(0deg) scale(1)';
        el.style.transition = 'transform 0.3s ease-in-out';
        el.style.zIndex = '0';
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="cursor-pointer rounded bg-highlight/20 flex items-center justify-center p-1 will-change-transform"
            style={{ width: size + 10, height: size + 10 }}
        >
            <Icon className="text-white" size={size} />
        </div>
    );
}