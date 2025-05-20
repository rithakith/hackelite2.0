// File: app/starfield/page.tsx (for App Router in Next.js 13+)
'use client';

import { useEffect, useRef } from 'react';

export default function StarfieldPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speedRef = useRef<number>(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: { x: number; y: number; z: number }[] = [];
    const warpSpeed = 5;
    const normalSpeed = 2;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const createStars = (count: number) => {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
    

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.z -= speedRef.current;
        if (star.z <= 0) {
          star.z = width;
        }

        const k = 128 / star.z;
        const x = star.x * k + cx;
        const y = star.y * k + cy;

        if (x >= 0 && x < width && y >= 0 && y < height) {
          const size = (1 - star.z / width) * 3;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = 'white';
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    createStars(100);
    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars(20);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    speedRef.current = 10;
  };

  const handleMouseLeave = () => {
    speedRef.current = 2;
  };

  return (
  <div className="relative w-full h-screen overflow-hidden aurora-background">
  <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
    >
      Download
    </button>
  </div>
</div>

  );
}
