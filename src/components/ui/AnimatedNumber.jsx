import { useEffect, useState } from "react";

export default function AnimatedNumber({ value, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    // Adjust duration based on number of digits
    let adjustedDuration = duration;
    if (value >= 1000) {
      adjustedDuration = duration * 0.6; // even faster
    } else if (value >= 100) {
      adjustedDuration = duration * 0.6;
    }

    const framesPerSecond = 60;
    const increment = value / (adjustedDuration * framesPerSecond);

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 800 / framesPerSecond); // more accurate frame interval

    return () => clearInterval(interval);
  }, [value, duration]);

  return <div className="text-3xl font-bold">{count}+</div>;
}
