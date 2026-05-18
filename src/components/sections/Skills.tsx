"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  SiPython, SiSpringboot, SiFastapi, SiNodedotjs, SiVuedotjs,
  SiReact, SiJavascript, SiTailwindcss, SiDocker,
  SiDigitalocean, SiFirebase, SiHuawei, SiPostgresql, SiGit, SiGithub,
  SiLinux, SiGnubash, SiOpenai,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { Globe, Lock, Plug, Network } from "lucide-react";

type SkillIcon = React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;

const skills: { name: string; Icon: SkillIcon; color: string; category: string }[] = [
  { name: "Java", Icon: FaJava as SkillIcon, color: "#ED8B00", category: "Backend" },
  { name: "Python", Icon: SiPython, color: "#3776AB", category: "Backend" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F", category: "Backend" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688", category: "Backend" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E", category: "Backend" },
  { name: "REST APIs", Icon: Plug as SkillIcon, color: "#6366f1", category: "Backend" },
  { name: "LLM Integration", Icon: SiOpenai, color: "#412991", category: "Backend" },
  { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D", category: "Frontend" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", category: "DevOps" },
  { name: "Git", Icon: SiGit, color: "#F05032", category: "DevOps" },
  { name: "GitHub", Icon: SiGithub, color: "#181717", category: "DevOps" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624", category: "DevOps" },
  { name: "Bash", Icon: SiGnubash, color: "#4EAA25", category: "DevOps" },
  { name: "AWS", Icon: FaAws as SkillIcon, color: "#FF9900", category: "Cloud" },
  { name: "DigitalOcean", Icon: SiDigitalocean, color: "#0080FF", category: "Cloud" },
  { name: "Firebase", Icon: SiFirebase, color: "#DD2C00", category: "Cloud" },
  { name: "Huawei Cloud", Icon: SiHuawei, color: "#CF0A2C", category: "Cloud" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { name: "TCP/IP & DNS", Icon: Network as SkillIcon, color: "#0d9488", category: "Networking" },
  { name: "TLS/SSL", Icon: Lock as SkillIcon, color: "#16a34a", category: "Networking" },
  { name: "HTTP/HTTPS", Icon: Globe as SkillIcon, color: "#7c3aed", category: "Networking" },
];

const categories = ["All", "Backend", "Frontend", "Cloud", "DevOps", "Database", "Networking"];


export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const gridInnerRef = useRef<HTMLDivElement>(null);
  const [gridHeight, setGridHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = gridInnerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setGridHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const filtered = skills.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tools and technologies I use to build scalable, production-grade software.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill cards grid */}
        <motion.div
          animate={{ height: gridHeight }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div ref={gridInnerRef} className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 py-3 px-1">
            <AnimatePresence mode="popLayout">
              {filtered.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: i * 0.03, duration: 0.25, ease: "easeOut" } }}
                  exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-lg transition-shadow cursor-default flex flex-col items-center gap-3 text-center"
                >
                  <skill.Icon size={36} style={{ color: skill.color }} />
                  <h3 className="font-medium text-gray-800 text-xs leading-snug">{skill.name}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
