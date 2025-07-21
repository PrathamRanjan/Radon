"use client";

import React, { useEffect, useRef, useState } from "react";

// Import all cloudicons
import azureIcon from "../assets/cloudicons/azure.png";
import powerAutomateIcon from "../assets/cloudicons/Microsoft_Power_Automate.svg (1).png";
import nextjsIcon from "../assets/cloudicons/nextjs.png";
import tailwindIcon from "../assets/cloudicons/Tailwind_CSS_Logo.svg.png";
import reactIcon from "../assets/cloudicons/React.webp";
import groqIcon from "../assets/cloudicons/Groq_logo.svg.png";
import llamaIcon from "../assets/cloudicons/Llama-3-AI.webp";
import postgresIcon from "../assets/cloudicons/Postgresql_elephant.svg.png";
import googleCloudIcon from "../assets/cloudicons/social-icon-google-cloud-1200-630.png";
import chatgptIcon from "../assets/cloudicons/chatgpt-logo-transparent-background-free-png (1).webp";
import dockerIcon from "../assets/cloudicons/97_Docker_logo_logos-512.webp";
import awsIcon from "../assets/cloudicons/Amazon_Web_Services_Logo.svg.webp";
import pythonIcon from "../assets/cloudicons/Python-logo-notext.svg (1).png";

// Icon object structure: { x, y, z, scale, opacity, id }
// Props: { className? }

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function TechStackOrbit({ className = "" }) {
  const canvasRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState(null);
  const animationFrameRef = useRef();
  const rotationRef = useRef({ x: 0, y: 0 });
  const iconCanvasesRef = useRef([]);
  const imagesLoadedRef = useRef([]);

  // Tech stack images with scaling info
  const techImages = [
    { src: reactIcon, scale: 1 },
    { src: nextjsIcon, scale: 1 },
    { src: pythonIcon, scale: 1 },
    { src: dockerIcon, scale: 1 },
    { src: awsIcon, scale: 0.7 }, // Scale down AWS logo
    { src: azureIcon, scale: 1 },
    { src: googleCloudIcon, scale: 1 },
    { src: postgresIcon, scale: 1 },
    { src: tailwindIcon, scale: 1 },
    { src: chatgptIcon, scale: 1 },
    { src: groqIcon, scale: 0.7 }, // Scale down Groq logo
    { src: llamaIcon, scale: 1 },
    { src: powerAutomateIcon, scale: 0.6 }, // Scale down Power Automate logo
  ];

  // Create icon canvases once when component mounts
  useEffect(() => {
    imagesLoadedRef.current = new Array(techImages.length).fill(false);

    const newIconCanvases = techImages.map((imageData, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 60;
      offscreen.height = 60;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imageData.src;
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

          // Create circular clipping path
          offCtx.beginPath();
          offCtx.arc(30, 30, 28, 0, Math.PI * 2);
          offCtx.closePath();
          offCtx.clip();

          // Calculate scaled dimensions
          const scaledSize = 60 * imageData.scale;
          const offset = (60 - scaledSize) / 2;

          // Draw the image with scaling
          offCtx.drawImage(img, offset, offset, scaledSize, scaledSize);

          imagesLoadedRef.current[index] = true;
        };
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, []);

  // Generate initial icon positions on a sphere
  useEffect(() => {
    const newIcons = [];
    const numIcons = techImages.length;

    // Fibonacci sphere parameters
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({
        x: x * 120,
        y: y * 120,
        z: z * 120,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, []);

  // Handle mouse events
  const handleMouseDown = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !canvasRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    iconPositions.forEach((icon) => {
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;

      const screenX = canvasRef.current.width / 2 + rotatedX;
      const screenY = canvasRef.current.height / 2 + rotatedY;

      const scale = (rotatedZ + 250) / 350;
      const radius = 30 * scale;
      const dx = x - screenX;
      const dy = y - screenY;

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(
          icon.y,
          Math.sqrt(icon.x * icon.x + icon.z * icon.z),
        );
        const targetY = Math.atan2(icon.x, icon.z);

        const currentX = rotationRef.current.x;
        const currentY = rotationRef.current.y;
        const distance = Math.sqrt(
          Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2),
        );

        const duration = Math.min(2000, Math.max(800, distance * 1000));

        setTargetRotation({
          x: targetX,
          y: targetY,
          startX: currentX,
          startY: currentY,
          distance,
          startTime: performance.now(),
          duration,
        });
        return;
      }
    });

    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }

    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      };

      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Animation and rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.002 + (distance / maxDistance) * 0.008;

      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const easedProgress = easeOutCubic(progress);

        rotationRef.current = {
          x:
            targetRotation.startX +
            (targetRotation.x - targetRotation.startX) * easedProgress,
          y:
            targetRotation.startY +
            (targetRotation.y - targetRotation.startY) * easedProgress,
        };

        if (progress >= 1) {
          setTargetRotation(null);
        }
      } else if (!isDragging) {
        rotationRef.current = {
          x: rotationRef.current.x + (dy / canvas.height) * speed,
          y: rotationRef.current.y + (dx / canvas.width) * speed,
        };
      }

      // Sort icons by z-depth for proper rendering order
      const sortedIcons = iconPositions
        .map((icon, index) => ({ ...icon, originalIndex: index }))
        .sort((a, b) => {
          const cosX = Math.cos(rotationRef.current.x);
          const sinX = Math.sin(rotationRef.current.x);
          const cosY = Math.cos(rotationRef.current.y);
          const sinY = Math.sin(rotationRef.current.y);

          const rotatedZA = a.x * sinY + a.z * cosY;
          const rotatedZB = b.x * sinY + b.z * cosY;

          return rotatedZA - rotatedZB;
        });

      sortedIcons.forEach(({ originalIndex: index, ...icon }) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = Math.max(0.3, Math.min(1.2, (rotatedZ + 250) / 350));
        const opacity = Math.max(0.3, Math.min(1, (rotatedZ + 200) / 250));

        ctx.save();
        ctx.translate(
          canvas.width / 2 + rotatedX,
          canvas.height / 2 + rotatedY,
        );
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (
          iconCanvasesRef.current[index] &&
          imagesLoadedRef.current[index]
        ) {
          ctx.drawImage(iconCanvasesRef.current[index], -30, -30, 60, 60);
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [iconPositions, isDragging, mousePos, targetRotation]);

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Versatile Technology Stack
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From cloud infrastructure to AI models, we leverage cutting-edge technologies 
          to deliver comprehensive solutions tailored to your business needs.
        </p>
      </div>

      {/* Orbital Component */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="cursor-grab active:cursor-grabbing"
          aria-label="Interactive 3D Technology Stack Orbit"
          role="img"
        />
      </div>

      {/* Instructions */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
        Click and drag to rotate • Click on icons to focus
      </p>
    </div>
  );
}