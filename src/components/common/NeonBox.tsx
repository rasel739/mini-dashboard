'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NeonBoxPropsType } from '@/types';

export default function NeonBox({
  children,
  pad = 1,
  neonColor = 'rgb(34,197,94)',
  radius = 'rounded-xl',
  duration = 2.2,
  className = '',
}: NeonBoxPropsType) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState({ width: 0, height: 0 });

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const repeat = prefersReduced ? 0 : Infinity;

  useEffect(() => {
    if (!ref.current) return;

    const measure = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setRect({ width: r.width, height: r.height });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(ref.current);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const outerWidth = rect.width + pad * 2;
  const outerHeight = rect.height + pad * 2;
  const offset = -pad;

  const glow1 = `0 0 6px ${neonColor}, 0 0 12px ${neonColor}55`;
  const glow2 = `0 0 18px ${neonColor}, 0 0 36px ${neonColor}88`;
  const glow3 = `0 0 8px ${neonColor}, 0 0 20px ${neonColor}55`;

  return (
    <div ref={ref} className={`relative ${className} p-8`}>
      <motion.div
        aria-hidden
        className={`absolute pointer-events-none ${radius}`}
        style={{
          width: outerWidth,
          height: outerHeight,
          left: offset,
          top: offset,
          border: `1px solid ${neonColor}`,
          zIndex: 10,
        }}
        initial={{ opacity: 0.6, scale: 0.99 }}
        animate={{
          opacity: [0.7, 1, 0.75],
          boxShadow: [glow1, glow2, glow3],
          scale: [1, 1.01, 1],
        }}
        transition={{ duration, repeat, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className={`absolute pointer-events-none ${radius}`}
        style={{
          width: outerWidth - 12,
          height: outerHeight - 12,
          left: offset + 6,
          top: offset + 6,
          filter: 'blur(12px)',
          mixBlendMode: 'screen',
          backgroundColor: neonColor,
          opacity: 0.06,
          zIndex: 5,
        }}
        animate={{ opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration, repeat, ease: 'easeInOut' }}
      />

      <div className='relative z-20'>{children}</div>
    </div>
  );
}
