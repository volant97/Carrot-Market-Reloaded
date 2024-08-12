"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface Props {
  children: React.ReactNode;
}

export const ScrollAnimationContainer = ({ children }: Props) => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={
        isInViewport
          ? "transform duration-500 translate-x-0"
          : "translate-x-40 bg-blue-700"
      }
    >
      {children}
    </div>
  );
};
