"use client";
import React, { useEffect, useState } from "react";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "25s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "45s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "70s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-16 py-8 w-max flex-nowrap items-center ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            className="flex-shrink-0 flex items-center justify-center"
            key={idx}
          >
            <img 
              src={item.logo} 
              alt={item.name}
              className="w-auto object-contain"
              style={{
                height: item.logoHeight || '48px',
                maxWidth: item.logoWidth || '140px',
                maxHeight: '80px'
              }}
            />
          </li>
        ))}
      </ul>
      <style>{`
        .animate-scroll {
          animation: scroll var(--animation-duration) var(--animation-direction) linear infinite;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }

        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
}