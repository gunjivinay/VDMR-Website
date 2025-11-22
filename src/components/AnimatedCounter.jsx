// src/components/AnimatedCounter.jsx
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps approx

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{value}%</span>;
};

export default AnimatedCounter;
