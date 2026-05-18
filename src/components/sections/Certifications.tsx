"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, CheckCircle, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Huawei Developer Competition 2023",
    issuer: "Asia Pacific Region — Innovation Award",
    badge: "🏆",
    color: "from-red-400 to-rose-600",
    bg: "from-red-50 to-rose-50",
    border: "border-red-200",
    year: "2023",
    skills: ["Huawei Cloud", "OBS", "ModelArts", "System Design", "Innovation"],
    verified: true,
  },
  {
    title: "APAC HPC-AI Competition 2023",
    issuer: "Asia Pacific Region — Merit Award",
    badge: "🥈",
    color: "from-teal-400 to-cyan-600",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    year: "2023",
    skills: ["HPC", "Parallel Computing", "MPAS", "PBS Scripts", "Optimization"],
    verified: true,
  },
  {
    title: "Vice Chancellor Awards",
    issuer: "Universiti Putra Malaysia",
    badge: "🎓",
    color: "from-purple-400 to-violet-600",
    bg: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    year: "2021–2025",
    skills: ["Academic Excellence", "CGPA 3.96", "UPM", "CS Network"],
    verified: true,
  },
  {
    title: "Dean List Awards",
    issuer: "Universiti Putra Malaysia",
    badge: "📜",
    color: "from-indigo-400 to-indigo-600",
    bg: "from-indigo-50 to-blue-50",
    border: "border-indigo-200",
    year: "2021–2025",
    skills: ["Dean List", "Top Student", "Consistent Performance"],
    verified: true,
  },
  {
    title: "Matriculation Programme",
    issuer: "Kolej Matrikulasi Labuan",
    badge: "📚",
    color: "from-blue-400 to-blue-600",
    bg: "from-blue-50 to-sky-50",
    border: "border-blue-200",
    year: "2020",
    skills: ["CGPA 3.75", "Pre-University", "Science Stream"],
    verified: true,
  },
  {
    title: "Docker & Cloud Infrastructure",
    issuer: "Professional Development & Projects",
    badge: "🐳",
    color: "from-sky-400 to-blue-600",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    year: "2023–2025",
    skills: ["Docker", "AWS", "DigitalOcean", "Serverless", "CI/CD"],
    verified: true,
  },
];

export default function Certifications() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Awards &{" "}
            <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Asia Pacific competition awards, academic excellence, and professional achievements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} parentInView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: "3.96", label: "UPM CGPA", icon: GraduationCap, color: "text-purple-500" },
            { value: "2x", label: "APAC Awards", icon: Star, color: "text-amber-500" },
            { value: "5+", label: "Projects Shipped", icon: CheckCircle, color: "text-green-500" },
            { value: "2", label: "Languages", icon: Award, color: "text-blue-500" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm"
            >
              <stat.icon size={20} className={`${stat.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CertCard({
  cert,
  index,
  parentInView,
}: {
  cert: (typeof certifications)[0];
  index: number;
  parentInView: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const visible = inView || parentInView;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
      transition={{ type: "spring", damping: 22, stiffness: 95, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-default transition-all duration-300"
    >
      <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

      <div className="p-6">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.bg} border ${cert.border} flex items-center justify-center text-3xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
          {cert.badge}
        </div>

        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1">{cert.title}</h3>
        <p className="text-gray-500 text-xs mb-3 font-medium">{cert.issuer}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {cert.skills.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-gray-600 text-xs"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="text-gray-400 text-xs">{cert.year}</span>
          {cert.verified && (
            <span className="flex items-center gap-1 text-green-600 text-xs font-semibold">
              <CheckCircle size={12} />
              Verified
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
