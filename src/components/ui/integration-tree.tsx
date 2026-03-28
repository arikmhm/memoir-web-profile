"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "framer-motion";
import { Monitor, Tablet, Printer, CreditCard } from "lucide-react";

const DESIGN_WIDTH = 600;

const leftNodes = [
  { icon: Monitor, label: "PC / Laptop" },
  { icon: Tablet, label: "Runner App" },
];

const rightNodes = [
  { icon: Printer, label: "Printer" },
  { icon: CreditCard, label: "Payment Gateway" },
];

export function IntegrationTree() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftCardRefs: RefObject<HTMLDivElement | null>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const rightCardRefs: RefObject<HTMLDivElement | null>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [paths, setPaths] = useState<string[]>([]);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [scale, setScale] = useState(1);
  const [scaledH, setScaledH] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      const wrapper = wrapperRef.current;
      const inner = innerRef.current;
      const center = centerRef.current;
      if (!wrapper || !inner || !center) return;

      // Scale calculation
      const wrapperW = wrapper.getBoundingClientRect().width;
      const s = Math.min(1, wrapperW / DESIGN_WIDTH);
      setScale(s);

      const innerRect = inner.getBoundingClientRect();
      // Scaled height adjusts the wrapper so it doesn't overflow
      setScaledH((innerRect.height / s) * s);

      // Path calculation — measure from inner container
      const cr = inner.getBoundingClientRect();
      const mr = center.getBoundingClientRect();

      setDims({ w: DESIGN_WIDTH, h: cr.height });

      // Positions are in scaled space — divide by scale to get design-space coords
      const mCy = (mr.top - cr.top) / s + mr.height / s / 2;
      const mL = (mr.left - cr.left) / s;
      const mR = (mr.left - cr.left + mr.width) / s;

      const result: string[] = [];
      const gap = 6;

      leftCardRefs.forEach((ref) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const toX = (r.left - cr.left + r.width) / s + gap;
        const toY = (r.top - cr.top) / s + r.height / s / 2;
        const midX = (mL + toX) / 2;
        result.push(
          `M ${mL} ${mCy} C ${midX} ${mCy} ${midX} ${toY} ${toX} ${toY}`
        );
      });

      rightCardRefs.forEach((ref) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const toX = (r.left - cr.left) / s - gap;
        const toY = (r.top - cr.top) / s + r.height / s / 2;
        const midX = (mR + toX) / 2;
        result.push(
          `M ${mR} ${mCy} C ${midX} ${mCy} ${midX} ${toY} ${toX} ${toY}`
        );
      });

      setPaths(result);
    };

    requestAnimationFrame(update);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto w-full overflow-hidden"
      style={{ height: scaledH }}
    >
      <div
        ref={innerRef}
        className="relative mx-auto py-4"
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {/* SVG beams — behind everything */}
        <svg
          className="pointer-events-none absolute inset-0 z-0"
          width={dims.w}
          height={dims.h}
          style={{ overflow: "visible" }}
        >
          <defs>
            <marker
              id="beam-arrow"
              markerWidth="6"
              markerHeight="5"
              refX="6"
              refY="2.5"
              orient="auto"
            >
              <polygon points="0 0, 6 2.5, 0 5" fill="#a8a29e" />
            </marker>
          </defs>

          {paths.map(
            (d, i) =>
              d && (
                <g key={i}>
                  <path
                    d={d}
                    fill="none"
                    stroke="#d6d3d1"
                    strokeWidth={1.5}
                    markerEnd="url(#beam-arrow)"
                  />
                  <circle r={10} fill="#D4845A" opacity={0.12}>
                    <animateMotion
                      dur="2.5s"
                      begin="0s"
                      repeatCount="indefinite"
                      path={d}
                    />
                  </circle>
                  <circle r={4} fill="#D4845A">
                    <animateMotion
                      dur="2.5s"
                      begin="0s"
                      repeatCount="indefinite"
                      path={d}
                    />
                  </circle>
                </g>
              )
          )}
        </svg>

        {/* Layout — above SVG */}
        <div className="relative z-10 flex items-center justify-center gap-16">
          {/* Left nodes */}
          <div className="flex flex-col items-center gap-8">
            {leftNodes.map((node, i) => (
              <motion.div
                key={node.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div
                  ref={leftCardRefs[i]}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-stone-200 bg-white shadow-sm"
                >
                  <node.icon className="h-6 w-6 stroke-[1.5] text-stone-600" />
                </div>
                <span className="whitespace-nowrap text-center text-[11px] font-medium text-stone-500">
                  {node.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Center — memoir. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div
              ref={centerRef}
              className="flex h-12 items-center justify-center rounded-xl bg-stone-900 px-6 shadow-lg"
            >
              <span className="text-sm font-bold tracking-tight text-white">
                memoir.
              </span>
            </div>
          </motion.div>

          {/* Right nodes */}
          <div className="flex flex-col items-center gap-8">
            {rightNodes.map((node, i) => (
              <motion.div
                key={node.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div
                  ref={rightCardRefs[i]}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-stone-200 bg-white shadow-sm"
                >
                  <node.icon className="h-6 w-6 stroke-[1.5] text-stone-600" />
                </div>
                <span className="whitespace-nowrap text-center text-[11px] font-medium text-stone-500">
                  {node.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
