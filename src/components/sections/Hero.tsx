"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const TYPING_WORDS = [
  "Full Stack Developer",
  "Backend Developer",
  "Cloud & Networking Graduate",
  "AI Integration Builder",
  "Open to Opportunities",
];

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [words, wordIdx, charIdx, deleting, speed, pause]);

  return display;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Hero() {
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-sky-200/60 text-sky-700 text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Open to full-time & freelance
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Farhan</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div variants={itemVariants} className="h-10 mb-6">
              <span className="text-xl sm:text-2xl font-semibold text-slate-500">
                {typed}
                <span className="animate-pulse text-sky-400 ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg"
            >
              I build full-stack applications, ship cloud infrastructure, and integrate AI into
              products that solve real problems. Computer Network graduate who crossed into software,
              based in Selangor, Malaysia.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 24px rgba(14,165,233,0.3)",
                  transition: { type: "spring", stiffness: 240, damping: 22 },
                }}
                whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold text-sm shadow-md shadow-sky-400/20"
              >
                View Projects
                <ChevronRight size={16} />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 16px rgba(100,116,139,0.12)",
                  transition: { type: "spring", stiffness: 240, damping: 22 },
                }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/70 text-slate-700 font-semibold text-sm"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer ambient glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-sky-200/50 via-teal-200/30 to-transparent blur-2xl" />
              {/* Spinning ring */}
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-300 via-teal-300 to-sky-300 opacity-50 animate-spin"
                style={{ animationDuration: "10s" }}
              />

              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl shadow-sky-400/15">
                <Image
                  src="/profile.jpg"
                  alt="Mohammad Farhan"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
