import { useEffect, useRef } from 'react';

export default function useTilt3D({ maxTilt = 10, perspective = 800, scale = 1.02 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const tiltX = (maxTilt / 2 - px * maxTilt).toFixed(2);
      const tiltY = (py * maxTilt - maxTilt / 2).toFixed(2);
      el.style.transform = `perspective(${perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${scale})`;
    };

    const reset = () => {
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    el.style.transformStyle = 'preserve-3d';
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);
    el.addEventListener('mouseenter', handleMove);
    reset();

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', reset);
      el.removeEventListener('mouseenter', handleMove);
    };
  }, [maxTilt, perspective, scale]);

  return ref;
}


