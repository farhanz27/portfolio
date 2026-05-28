"use client";

import { motion } from "framer-motion";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f7f8fc 0%, #eef4ff 30%, #fff8f3 65%, #f8fbff 100%)",
      }}
    >
      {/* Aurora Layer 1 */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1800,
          height: 480,
          top: "-10%",
          left: "-25%",
          background:
            "linear-gradient(90deg, rgba(191,216,255,0.75), rgba(220,206,255,0.45), rgba(255,226,209,0.25))",
          filter: "blur(40px)",
          opacity: 0.85,
        }}
        initial={{ x: 0, y: 0, rotate: -12 }}
        animate={{ x: 40, y: -20, rotate: -8 }}
        transition={{ duration: 24, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Aurora Layer 2 */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1600,
          height: 420,
          top: "35%",
          right: "-20%",
          background:
            "linear-gradient(90deg, rgba(200,231,225,0.55), rgba(215,230,255,0.75), rgba(230,247,255,0.45))",
          filter: "blur(50px)",
          opacity: 0.80,
        }}
        initial={{ x: 0, y: 0, rotate: 18 }}
        animate={{ x: -30, y: 20, rotate: 22 }}
        transition={{ duration: 28, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Aurora Layer 3 */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1500,
          height: 350,
          bottom: "-5%",
          left: "-10%",
          background:
            "linear-gradient(90deg, rgba(220,206,255,0.60), rgba(191,216,255,0.45), rgba(255,241,220,0.50))",
          filter: "blur(55px)",
          opacity: 0.75,
        }}
        initial={{ x: 0, y: 0, rotate: 10 }}
        animate={{ x: 25, y: -15, rotate: 14 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Aurora Layer 4 */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1200,
          height: 260,
          top: "20%",
          left: "20%",
          background:
            "linear-gradient(90deg, rgba(255,226,209,0.50), rgba(191,216,255,0.55), rgba(220,206,255,0.55))",
          filter: "blur(35px)",
          opacity: 0.70,
        }}
        initial={{ x: 0, y: 0, rotate: -24 }}
        animate={{ x: -20, y: 10, rotate: -18 }}
        transition={{ duration: 34, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Streak 1 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1600,
          height: 80,
          top: "18%",
          left: "-20%",
          background:
            "linear-gradient(90deg, transparent, rgba(191,216,255,0.55), rgba(220,206,255,0.40), transparent)",
          filter: "blur(16px)",
          opacity: 0.65,
          transform: "rotate(18deg)",
        }}
      />

      {/* Streak 2 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1200,
          height: 60,
          bottom: "20%",
          right: "-10%",
          background:
            "linear-gradient(90deg, transparent, rgba(200,231,225,0.50), rgba(215,230,255,0.40), transparent)",
          filter: "blur(12px)",
          opacity: 0.55,
          transform: "rotate(-22deg)",
        }}
      />

      {/* Streak 3 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 1400,
          height: 40,
          top: "55%",
          left: "-10%",
          background:
            "linear-gradient(90deg, transparent, rgba(220,206,255,0.45), rgba(255,226,209,0.35), transparent)",
          filter: "blur(10px)",
          opacity: 0.45,
          transform: "rotate(8deg)",
        }}
      />

      {/* Atmospheric fog */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.40), transparent 65%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.015,
          mixBlendMode: "soft-light",
          backgroundImage: NOISE,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
