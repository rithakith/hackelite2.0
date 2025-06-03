"use client";
import { useEffect } from "react";

import { useHover } from "@/context/HoverContext";

export default function AuroraBackground() {
  const { isHovering } = useHover();

  useEffect(() => {
    const canvas = document.getElementById("outerspace") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const centerX = canvasWidth * 0.5;
    const centerY = canvasHeight * 0.5;
    const numberOfStars = 1000;
    const stars: Star[] = [];

    let currentSpeedMultiplier = 2;

    const frames_per_second = 60;
    const interval = Math.floor(1000 / frames_per_second);
    let previousTime = performance.now();

    const starColors = ["#a280ec", "#b146e4", "#d30de5", "#18d6ed"];

    class Star {
      x: number;
      y: number;
      counter: number;
      radiusMax: number;
      speed: number;
      color: string;
      originalX: number;
      originalY: number;

      constructor() {
        this.x = getRandomInt(-centerX, centerX);
        this.y = getRandomInt(-centerY, centerY);
        this.originalX = this.x;
        this.originalY = this.y;
        this.counter = getRandomInt(1, canvasWidth);
        this.radiusMax = 1 + Math.random() * 10;
        this.speed = getRandomInt(1,5);
        this.color = starColors[Math.floor(Math.random() * starColors.length)];
      }

      draw(context: CanvasRenderingContext2D, speedMultiplier: number) {
        this.counter -= this.speed * speedMultiplier;

        if (this.counter < 1) {
          this.counter = canvasWidth;
          this.x = getRandomInt(-centerX, centerX);
          this.y = getRandomInt(-centerY, centerY);
          this.originalX = this.x;
          this.originalY = this.y;
          this.radiusMax = getRandomInt(1, 10);
          this.speed = getRandomInt(1,5
            
          );
          this.color =
            starColors[Math.floor(Math.random() * starColors.length)];
        }

        // Always gradually return to original position
        this.x += (this.originalX - this.x) * 0.05;
        this.y += (this.originalY - this.y) * 0.05;

        const xRatio = this.x / this.counter;
        const yRatio = this.y / this.counter;

        const starX = remap(xRatio, 0, 1, 0, canvasWidth);
        const starY = remap(yRatio, 0, 1, 0, canvasHeight);
        const radius = remap(this.counter, 0, canvasWidth, this.radiusMax, 0);

        context.beginPath();
        context.arc(starX, starY, radius, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
      }
    }

    function setup() {
      for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star());
      }
    }

    function draw(currentTime: number) {
      const deltaTime = currentTime - previousTime;

      if (deltaTime > interval && ctx) {
        previousTime = currentTime - (deltaTime % interval);

        // Create gradient overlay for glassmorphism effect
        const glassGradient = ctx.createLinearGradient(
          0,
          0,
          canvasWidth,
          canvasHeight
        );
        glassGradient.addColorStop(0, "rgba(10, 10, 20, 0.92)");
        glassGradient.addColorStop(0.5, "rgba(15, 15, 30, 0.95)");
        glassGradient.addColorStop(1, "rgba(20, 20, 40, 0.98)");

        ctx.fillStyle = glassGradient;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Add subtle noise texture
        const noise = ctx.createImageData(canvasWidth, canvasHeight);
        const buffer = new Uint32Array(noise.data.buffer);
        for (let i = 0; i < buffer.length; i++) {
          if (Math.random() < 0.15) {
            buffer[i] = (Math.random() < 0.5 ? 0x05 : 0x0a) << 24;
          }
        }
        ctx.putImageData(noise, 0, 0);

        ctx.translate(centerX, centerY); // Smoothly transition speed
        if (isHovering) {
          currentSpeedMultiplier =10; // Increased speed
        } else {
          currentSpeedMultiplier = 2;
        }

        stars.forEach((star) => star.draw(ctx, currentSpeedMultiplier));

        ctx.translate(-centerX, -centerY);
      }

      requestAnimationFrame(draw);
    }

    function getRandomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function remap(
      value: number,
      istart: number,
      istop: number,
      ostart: number,
      ostop: number
    ) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }

    setup();
    draw(performance.now());

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isHovering]);

  return (
    <>
      {/* Multiple layers for enhanced glassmorphism */}
      <div className="fixed top-0 left-0 w-full h-full bg-[#0a0a14] bg-opacity-70 backdrop-blur-md z-0"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 z-0"></div>
      <div className="fixed top-0 left-0 w-full h-full backdrop-filter backdrop-blur-xl z-0"></div>
      <canvas id="outerspace" className="fixed top-0 left-0 w-full h-full" />
    </>
  );
}
