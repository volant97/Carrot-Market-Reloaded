import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setIsInViewport(true) : setIsInViewport(false);
      });
    };
    const options = { root: null, rootMargin: "0px", threshold: 0 };
    const observer = new IntersectionObserver(callback, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isInViewport };
};
