import React, { useState, useEffect, useRef } from 'react';

interface ImageTrail {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
  scale: number;
}

interface CursorImageTrailProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

const CursorImageTrail: React.FC<CursorImageTrailProps> = ({ containerRef }) => {
  const [trails, setTrails] = useState<ImageTrail[]>([]);
  const trailIdRef = useRef(0);
  const lastTimeRef = useRef(Date.now());

  // Sample images using SVG data URLs (guaranteed to work)
  const images = [
    '/3d/1.webp',
    '/3d/2.webp',
    '/3d/3.webp',
    '/3d/4.webp',
    '/3d/5.webp',
    '/3d/6.webp',
    '/3d/7.webp',
    '/3d/8.webp',
    '/3d/9.webp',
    '/3d/10.webp',
    '/3d/11.webp',
    '/3d/12.webp',
    '/3d/13.webp',
    '/3d/14.webp',
    '/3d/15.webp',
    '/3d/16.webp',
    '/3d/17.webp',
    '/3d/18.webp',
    '/3d/19.webp',
    '/3d/20.webp',
    '/3d/21.webp',
    '/3d/22.webp',
    '/3d/23.webp',
    '/3d/24.webp',
    '/3d/25.webp',
    '/3d/26.webp',
    '/3d/27.webp',
    '/3d/28.webp',
    '/3d/29.webp',
    '/3d/30.webp',
    '/3d/33.webp',
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Get container's bounding rectangle to check if mouse is inside
      const rect = container.getBoundingClientRect();

      // Check if mouse is within the container bounds
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) return;

      // Exclude navbar area (top 80px of the section)
      const relativeY = e.clientY - rect.top;
      if (relativeY < 80) return;

      const now = Date.now();
      // Throttle to create trail effect (add image every 150ms)
      if (now - lastTimeRef.current < 150) return;

      lastTimeRef.current = now;
      trailIdRef.current += 1;

      const newTrail: ImageTrail = {
        id: trailIdRef.current,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        image: images[Math.floor(Math.random() * images.length)],
        rotation: 0, // No rotation
        scale: 1, // Consistent scale
      };

      setTrails(prev => [...prev, newTrail]);

      // Remove trail after animation completes
      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== newTrail.id));
      }, 1500);
    };

    // Listen on window to detect mouse position globally
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef, images]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">


      {/* Image Trails */}
      {trails.map(trail => (
        <div
          key={trail.id}
          className="absolute pointer-events-none z-20"
          style={{
            left: trail.x - 60,
            top: trail.y - 60,
            transform: `rotate(${trail.rotation}deg) scale(${trail.scale})`,
            animation: 'fadeInOut 1.5s ease-out forwards',
          }}
        >
          <img
            src={trail.image}
            alt="Trail"
            className="w-32 h-32 object-contain rounded-lg shadow-2xl"
            style={{
              filter: 'brightness(0.9) contrast(1.1)',
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default CursorImageTrail;