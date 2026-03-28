"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NoiseOverlay } from "@/components/layout/noise-overlay";

const photos = [
  {
    left: "5%",
    mLeft: "10%",
    top: "5%",
    mTop: "0%",
    w: 240,
    mW: 160,
    h: 320,
    mH: 200,
    z: 2,
    speed: 0.05,
    src: "/images/galeri/img1.jpg",
  },
  {
    left: "55%",
    mLeft: "45%",
    top: "12%",
    mTop: "10%",
    w: 360,
    mW: 170,
    h: 300,
    mH: 180,
    z: 4,
    speed: 0.2,
    src: "/images/galeri/img2.jpg",
  },
  {
    left: "30%",
    mLeft: "15%",
    top: "30%",
    mTop: "32%",
    w: 400,
    mW: 180,
    h: 480,
    mH: 220,
    z: 6,
    speed: -0.5,
    src: "/images/galeri/img3.jpg",
  },
  {
    left: "65%",
    mLeft: "50%",
    top: "65%",
    mTop: "58%",
    w: 320,
    mW: 155,
    h: 400,
    mH: 190,
    z: 1,
    speed: 1.0,
    src: "/images/galeri/img4.jpg",
  },
  {
    left: "0%",
    mLeft: "5%",
    top: "75%",
    mTop: "75%",
    w: 350,
    mW: 165,
    h: 340,
    mH: 175,
    z: 5,
    speed: 0.5,
    src: "/images/galeri/img5.jpg",
  },
];

const textElements = [
  {
    left: "0%",
    top: "6%",
    z: 10,
    speed: 0.0,
    content: "memoir.",
    className:
      "text-4xl md:text-6xl font-bold tracking-tighter text-white [writing-mode:vertical-rl] rotate-180",
  },
  {
    left: "55%",
    top: "5%",
    z: 3,
    speed: 0.0,
    content: "moment",
    className: "text-4xl md:text-6xl font-bold tracking-tighter text-white",
    fading: true,
  },
];

function ParallaxPhoto({
  left,
  mLeft,
  top,
  mTop,
  w,
  mW,
  h,
  mH,
  z,
  speed,
  src,
  index,
  scrollYProgress,
}: {
  left: string;
  mLeft: string;
  top: string;
  mTop: string;
  w: number;
  mW: number;
  h: number;
  mH: number;
  z: number;
  speed: number;
  src: string;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [80 * speed, -200 * speed],
  );

  return (
    <>
      {/* Desktop */}
      <motion.div
        className="absolute hidden md:block"
        style={{
          left,
          top,
          width: w,
          height: h,
          zIndex: z,
          y: yOffset,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="h-full w-full shadow-xl shadow-black/15"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={src}
              alt={`Galeri foto ${index + 1}`}
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        className="absolute md:hidden"
        style={{
          left: mLeft,
          top: mTop,
          width: mW,
          height: mH,
          zIndex: z,
          y: yOffset,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="h-full w-full shadow-lg shadow-black/10"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={src}
              alt={`Galeri foto ${index + 1}`}
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

function ParallaxText({
  left,
  right,
  top,
  z,
  speed,
  content,
  className,
  fading,
  index,
  scrollYProgress,
}: {
  left: string;
  right?: string;
  top: string;
  z: number;
  speed: number;
  content: string;
  className: string;
  fading?: boolean;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [60 * speed, -150 * speed],
  );
  const fadingOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0.8, 0.2, 0],
  );

  return (
    <motion.div
      className={`absolute select-none ${className}`}
      style={{
        left,
        right,
        top,
        zIndex: z,
        y: yOffset,
        ...(fading ? { opacity: fadingOpacity } : {}),
      }}
      {...(!fading
        ? {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true, margin: "-50px" },
            transition: { duration: 0.8, delay: 0.3 + index * 0.1 },
          }
        : {})}
    >
      {content}
    </motion.div>
  );
}

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#D4845A]"
    >
      {/* Noise overlay */}
      <NoiseOverlay />

      {/* Gallery area */}
      <div className="relative z-2 mx-auto max-w-6xl px-6">
        <div className="relative h-[70vh] md:h-[85vh] min-h-100 md:min-h-150">
          {photos.map((photo, i) => (
            <ParallaxPhoto
              key={`photo-${i}`}
              {...photo}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
          {textElements.map((text, i) => (
            <ParallaxText
              key={`text-${i}`}
              {...text}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
