import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView || typeof target !== "number") return;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return { ref, value, isInView };
}
