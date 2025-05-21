import { useEffect, useRef, useState } from 'react';

export function useCounterUp(target: number, delay: number, duration = 1000, steps = 60) {
  const [count, setCount] = useState(0);
  const frame = useRef(0);
  const delayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const increment = target / steps;
    let current = 0;

    const update = () => {
      current += increment;
      if (current < target) {
        setCount(Math.floor(current));
        frame.current = requestAnimationFrame(update);
      } else {
        setCount(target);
        cancelAnimationFrame(frame.current);
      }
    };

    delayTimeout.current = setTimeout(() => {
      frame.current = requestAnimationFrame(update);
    }, delay);

    return () => {
      if (delayTimeout.current) clearTimeout(delayTimeout.current);
      cancelAnimationFrame(frame.current);
    };
  }, [target, duration, steps, delay]);

  return count;
}