import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds, options = {}) {
  const { rootMargin = "-40% 0px -50% 0px", threshold = 0 } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "hero");

  useEffect(() => {
    const observers = [];
    const visibleSections = new Map();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }

          if (visibleSections.size > 0) {
            const topSection = [...visibleSections.entries()].sort(
              (a, b) => b[1] - a[1]
            )[0][0];
            setActiveSection(topSection);
          }
        },
        { rootMargin, threshold }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}
