// useIntersectionAnimation.js
import { useEffect, useRef } from "react";

function IntersectionAnimation(
  elementClassName,
  visibleClassName,
  threshold = 0.2
) {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const container = entries[0];

        if (container.isIntersecting) {
          const elements = currentContainerRef.querySelectorAll(
            `.${elementClassName}`
          );
          elements.forEach((el) => {
            el.classList.add(visibleClassName);
          });
        } else {
          const elements = currentContainerRef.querySelectorAll(
            `.${elementClassName}`
          );
          elements.forEach((el) => {
            el.classList.remove(visibleClassName);
          });
        }
      },
      { threshold }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, [elementClassName, visibleClassName, threshold]);

  return containerRef;
}

export default IntersectionAnimation;
