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
    `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#FF6B6B"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="white" font-family="Arial">Design</text></svg>')}`,
    `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#4ECDC4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="white" font-family="Arial">Creative</text></svg>')}`,
    `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#FFE66D"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="#333" font-family="Arial">Brand</text></svg>')}`,
    `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#95E1D3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="white" font-family="Arial">Dev</text></svg>')}`,
    `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#F38181"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="white" font-family="Arial">Studio</text></svg>')}`,
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
            className="w-32 h-32 object-cover rounded-lg shadow-2xl"
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