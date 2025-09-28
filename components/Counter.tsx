import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const startTime = Date.now();
    
    const animateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      start = Math.floor(easedProgress * end);
      setCount(start);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="text-center bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
      <p className="text-5xl md:text-6xl font-black text-white">
        {count}{suffix}
      </p>
      <p className="text-sm md:text-base font-semibold text-sky-400 uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
};

export default Counter;
