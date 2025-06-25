import { useEffect, useState } from "react";

const AnimatedCounter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // duração total em ms
    const increment = targetNumber / (duration / 30); // incremento por passo (~30ms)

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return <h1>{count}+</h1>;
};

export default AnimatedCounter;
