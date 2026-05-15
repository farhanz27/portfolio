"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-gray-50/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            A bit about{" "}
            <span className="gradient-text">me</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Computer Science (Computer Network) graduate from Universiti Putra Malaysia with hands-on experience in
            full-stack development, cloud deployments, and AI-powered integrations. I enjoy building
            systems that are clean, reliable, and actually useful — from backend APIs to cloud infrastructure.
            Recognised at Asia Pacific level for innovation and high-performance computing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
