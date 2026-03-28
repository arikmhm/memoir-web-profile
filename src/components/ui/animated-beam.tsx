"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  containerRef: RefObject<HTMLElement | null>;
  curvature?: number;
  dotSize?: number;
  dotColor?: string;
  lineColor?: string;
  lineWidth?: number;
  duration?: number;
}

export function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
  curvature = 0,
  dotSize = 6,
  dotColor = "#6366f1",
  lineColor = "#e5e7eb",
  lineWidth = 2,
  duration = 3,
}: AnimatedBeamProps) {
  const [path, setPath] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;
      if (!container || !from || !to) return;

      const containerRect = container.getBoundingClientRect();
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });

      const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
      const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
      const toX = toRect.left - containerRect.left + toRect.width / 2;
      const toY = toRect.top - containerRect.top + toRect.height / 2;

      const midX = (fromX + toX) / 2;
      const midY = (fromY + toY) / 2 + curvature;

      setPath(`M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`);
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [fromRef, toRef, containerRef, curvature]);

  if (!path) return null;

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0"
      width={svgDimensions.width}
      height={svgDimensions.height}
      style={{ overflow: "visible" }}
    >
      {/* Static line */}
      <path
        d={path}
        fill="none"
        stroke={lineColor}
        strokeWidth={lineWidth}
        strokeDasharray="6 4"
        opacity={0.5}
      />

      {/* Flowing dot */}
      <circle r={dotSize} fill={dotColor}>
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" path={path} />
      </circle>

      {/* Glow effect */}
      <circle r={dotSize * 2.5} fill={dotColor} opacity={0.2}>
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" path={path} />
      </circle>
    </svg>
  );
}
