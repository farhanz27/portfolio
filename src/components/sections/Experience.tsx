"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Globe, GraduationCap } from "lucide-react";

const entries = [
  {
    title: "Software Engineer Intern",
    org: "Digital Heritage Sdn. Bhd.",
    period: "March 2025 – August 2025",
    type: "Work",
    icon: Briefcase,
    color: "from-sky-400 to-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    textColor: "text-sky-600",
    highlights: [
      "Developed Python-based applications and conducted system testing to ensure functionality, reliability, and seamless integration",
      "Designed and deployed a microservice on DigitalOcean, integrating it with a Rocket.Chat chatbot via a custom plugin to automate response handling",
    ],
    tech: ["Python", "DigitalOcean", "Rocket.Chat", "Microservices"],
  },
  {
    title: "Freelance Web Developer",
    org: "Soloreen Ventures",
    period: "September 2024 – February 2025",
    type: "Work",
    icon: Globe,
    color: "from-teal-400 to-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    textColor: "text-teal-600",
    highlights: [
      "Developed custom WordPress websites focusing on performance, responsiveness, and user experience",
      "Collaborated with clients to translate business needs into scalable web solutions aligned with best practices",
    ],
    tech: ["WordPress", "HTML/CSS", "JavaScript", "Client Management"],
  },
  {
    title: "Bachelor of Computer Science (Computer Network)",
    org: "Universiti Putra Malaysia",
    period: "2021 – 2025",
    type: "Education",
    icon: GraduationCap,
    color: "from-violet-400 to-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    textColor: "text-violet-600",
    highlights: [
      "CGPA 3.96 — Vice Chancellor Awards & Dean List Awards throughout the programme",
      "Specialised in TCP/IP, DNS, TLS/SSL, and routing protocols alongside software engineering",
      "Built capstone projects spanning cloud infrastructure, IoT systems, AI integrations, and networking tools",
    ],
    tech: ["TCP/IP", "DNS", "Networking", "Java", "Python", "CGPA 3.96"],
  },
  {
    title: "Matriculation Programme",
    org: "Kolej Matrikulasi Labuan",
    period: "2020 – 2021",
    type: "Education",
    icon: GraduationCap,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    textColor: "text-cyan-600",
    highlights: [
      "CGPA 3.75 — Science stream with focus on Mathematics, Physics, and Chemistry",
    ],
    tech: ["Science Stream", "CGPA 3.75"],
  },
];

function JourneyCard({ entry, index, isLast }: { entry: (typeof entries)[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ type: "spring", damping: 22, stiffness: 95, delay: index * 0.08 }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${entry.color} shadow-lg flex items-center justify-center flex-shrink-0`}>
          <entry.icon size={18} className="text-white" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-slate-300 to-slate-100 min-h-[2rem]" />
        )}
      </div>

      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
        className="flex-1 mb-10 glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-sky-100/40 transition-shadow duration-300"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base">{entry.title}</h3>
            <p className={`text-sm font-semibold mt-0.5 ${entry.textColor}`}>{entry.org}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${entry.bg} ${entry.textColor}`}>
              {entry.type}
            </span>
            <span className="text-slate-400 text-xs font-medium">{entry.period}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {entry.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ type: "spring", damping: 22, stiffness: 100, delay: i * 0.06 + 0.15 }}
              className="flex items-start gap-2.5 text-sm text-slate-600"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${entry.color} flex-shrink-0 mt-1.5`} />
              {h}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {entry.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-sky-50/80 border border-sky-100/80 text-slate-600 text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="career" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Career{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Work experience, academic background, and Asia Pacific competition awards.
          </p>
        </motion.div>

        <div>
          {entries.map((entry, i) => (
            <JourneyCard key={entry.title} entry={entry} index={i} isLast={i === entries.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
