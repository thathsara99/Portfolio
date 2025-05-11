import React, { useEffect, useRef } from "react";

const FloatingStars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars = [];

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.classList.add("floating-star");

      const size = Math.random() * 2 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = 10 + Math.random() * 20;
      const delay = Math.random() * 20;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;

      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach(star => container.removeChild(star));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="floating-stars pointer-events-none absolute inset-0 z-0"
    />
  );
};

export default FloatingStars;
