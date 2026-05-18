"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Huawei Developer Competition 2023",
    award: "Asia Pacific — Innovation Award",
    year: "2023",
    color: "from-amber-500 to-orange-600",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    textColor: "text-amber-600",
    highlights: [
      "Developed CommunityCARE — a complaint management system enhancing public engagement and transparency in local governance",
      "Integrated Huawei Cloud OBS for data storage and ModelArts for automated image recognition",
    ],
    tech: ["Huawei Cloud", "OBS", "ModelArts", "System Design"],
  },
  {
    title: "APAC HPC-AI Competition 2023",
    award: "Asia Pacific — Merit Award",
    year: "2023",
    color: "from-teal-500 to-cyan-600",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-200",
    textColor: "text-teal-600",
    highlights: [
      "Optimised MPAS simulation performance by tuning processing elements and threading for better resource utilisation",
      "Developed PBS batch scripts to automate job scheduling and resource allocation in distributed computing environments",
    ],
    tech: ["HPC", "MPAS", "PBS Scripts", "Parallel Computing"],
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Achievements &{" "}
            <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Recognised at Asia Pacific level for innovation and high-performance computing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 22, stiffness: 95, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <Trophy size={22} className="text-white" />
                </div>
                <span className={`text-xs font-semibold ${a.textColor} mt-1`}>{a.year}</span>
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-1">{a.title}</h3>
              <p className={`text-sm font-semibold ${a.textColor} mb-4`}>{a.award}</p>

              <ul className="space-y-2 mb-5">
                {a.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${a.color} flex-shrink-0 mt-1.5`} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {a.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
