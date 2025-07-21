import React, { useRef, useEffect } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      translateX: number;
      translateY: number;
      size: number;
      alpha: number;
      targetAlpha: number;
      dx: number;
      dy: number;
      magnetism: number;
    }> = [];

    const rgb = [255, 255, 255];

    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        translateX: 0,
        translateY: 0,
        size: Math.random() * 2 + 0.1,
        alpha: 1,
        targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        magnetism: 0.1 + Math.random() * 4,
      });
    }

    const render = () => {
      context.clearRect(0, 0, w, h);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > w) particle.dx *= -1;
        if (particle.y < 0 || particle.y > h) particle.dy *= -1;

        context.globalAlpha = particle.alpha;
        context.fillStyle = `rgba(${rgb.join(", ")}, ${particle.alpha})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        context.fill();
      });

      requestAnimationFrame(render);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [quantity, staticity, ease, refresh]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}