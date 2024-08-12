"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TestPage() {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setIsInViewport(true) : setIsInViewport(false);
      });
    };
    const options = { root: null, rootMargin: "0px", threshold: 0 };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [isInViewport]);

  return (
    <div className="">
      <div className="flex flex-col items-center gap-4">
        <h1>아래로 스크롤 하세요</h1>
        <div className="border-4 h-96">
          <h1>Box</h1>
        </div>
        <div>
          <h1>하이요</h1>
        </div>
        <div className="border-4 h-96">
          <h1>Box</h1>
        </div>
        <div>
          <h1>하이요</h1>
        </div>
        <div
          ref={ref}
          className={
            isInViewport
              ? "transition-all duration-500 transform translate-x-0 "
              : "translate-x-40"
          }
        >
          <h1 className=" border-4 h-96 bg-red-800">Box</h1>
        </div>
        <div>
          <h1>하이요</h1>
        </div>
        <div className="border-4 h-96">
          <h1>Box</h1>
        </div>
        <div>
          <h1>하이요</h1>
        </div>
        <div className="border-4 h-96">
          <h1>Box</h1>
        </div>
        <div>
          <h1>하이요</h1>
        </div>
        <div className="border-4 h-96">
          <h1>Box</h1>
        </div>
        <div>
          <h1>하이요</h1>
        </div>
      </div>
    </div>
  );
}
