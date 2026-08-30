"use client";

import React, { useEffect, useRef } from "react";

export function FloatingCodeSymbols() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", resize);

    const symbols = [
      "</>",
      "{ }",
      "( )",
      "[ ]",
      "=>",
      "&&",
      "||",
      ";",
      "*",
      "!",
      "$",
      "if",
      "for",
      "?",
      "return",
      "let",
      "const",
      "async",
      "await",
      "API",
    ];

    const colors = [
      "#2EDCFF", // Codely Cyan
      "#818CF8", // Indigo
      "#A855F7", // Purple
      "#38BDF8", // Sky Blue
      "#34D399", // Emerald
      "#FB923C", // Orange
      "#F43F5E", // Rose
    ];

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top - 120 && e.clientY <= rect.bottom + 120) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    class FloatingIcon {
      x: number;
      y: number;
      text: string;
      size: number;
      speedX: number;
      speedY: number;
      angle: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
        this.size = Math.random() * 16 + 14; // 14px to 30px
        this.speedX = (Math.random() - 0.5) * 0.45;
        this.speedY = (Math.random() - 0.5) * 0.45;
        this.angle = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.35 + 0.18; // soft ambient opacity
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Turn towards mouse if cursor is on screen
        if (mouse.x > 0 && mouse.y > 0) {
          const targetAngle = Math.atan2(dy, dx);
          this.angle = targetAngle;

          // Gentle attraction force
          const interactionRadius = 320;
          if (dist < interactionRadius && dist > 70) {
            const force = (interactionRadius - dist) / interactionRadius;
            this.x += (dx / dist) * force * 0.6;
            this.y += (dy / dist) * force * 0.6;
          }
        }

        // Boundary wrapping
        if (this.x > width + 50) this.x = -50;
        if (this.x < -50) this.x = width + 50;
        if (this.y > height + 50) this.y = -50;
        if (this.y < -50) this.y = height + 50;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.font = `600 ${this.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, 0, 0);

        ctx.restore();
      }
    }

    // Number of icons proportional to screen size
    const iconCount = Math.min(Math.max(Math.floor(width / 35), 24), 48);
    const icons: FloatingIcon[] = [];
    for (let i = 0; i < iconCount; i++) {
      icons.push(new FloatingIcon());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < icons.length; i++) {
        icons[i].update();
        icons[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-65"
      aria-hidden="true"
    />
  );
}
