"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

type BlobConfig = {
  size: number;
  color: string;
  pos: React.CSSProperties;
  stiffness: number;
  damping: number;
  range: number;
};

const BLOBS: BlobConfig[] = [
  {
    size: 700,
    color: "from-blue-200/55 to-cyan-200/35",
    pos: { top: "-10%", left: "-8%" },
    stiffness: 28,
    damping: 52,
    range: 28,
  },
  {
    size: 580,
    color: "from-violet-200/50 to-purple-200/30",
    pos: { top: "5%", right: "-5%" },
    stiffness: 20,
    damping: 40,
    range: 48,
  },
  {
    size: 500,
    color: "from-indigo-200/42 to-blue-100/25",
    pos: { bottom: "5%", right: "5%" },
    stiffness: 16,
    damping: 58,
    range: 38,
  },
  {
    size: 440,
    color: "from-pink-200/38 to-rose-100/22",
    pos: { bottom: "18%", left: "2%" },
    stiffness: 24,
    damping: 44,
    range: 58,
  },
  {
    size: 320,
    color: "from-teal-200/32 to-emerald-100/18",
    pos: { top: "40%", left: "35%" },
    stiffness: 36,
    damping: 30,
    range: 70,
  },
];

function Blob({
  blob,
  cursorX,
  cursorY,
}: {
  blob: BlobConfig;
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
}) {
  const springX = useSpring(cursorX, { stiffness: blob.stiffness, damping: blob.damping });
  const springY = useSpring(cursorY, { stiffness: blob.stiffness, damping: blob.damping });
  const x = useTransform(springX, [0, 1920], [-blob.range, blob.range]);
  const y = useTransform(springY, [0, 1080], [-blob.range * 0.55, blob.range * 0.55]);

  return (
    <div className="absolute pointer-events-none" style={blob.pos}>
      <motion.div
        style={{ x, y, width: blob.size, height: blob.size }}
        className={`rounded-full bg-gradient-to-br ${blob.color} blur-[80px]`}
      />
    </div>
  );
}

export default function Background() {
  const cursorX = useMotionValue(960);
  const cursorY = useMotionValue(540);

  const glowSpringX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const glowSpringY = useSpring(cursorY, { stiffness: 120, damping: 20 });
  const glowX = useTransform(glowSpringX, (v) => v - 300);
  const glowY = useTransform(glowSpringY, (v) => v - 300);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-violet-50/60">
      {BLOBS.map((blob, i) => (
        <Blob key={i} blob={blob} cursorX={cursorX} cursorY={cursorY} />
      ))}

      <motion.div
        className="pointer-events-none fixed rounded-full"
        style={{
          x: glowX,
          y: glowY,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
