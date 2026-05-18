"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

const projects = [
  {
    title: "PayTrack — Invoicing Platform",
    description:
      "A multi-tenant invoicing system with an AI-powered assistant integrated with Google Gemini. Features a serverless PDF generation pipeline for scalable document distribution.",
    tags: ["Java", "Spring Boot", "Vue.js", "AWS Lambda", "S3", "ECR", "API Gateway", "Gemini AI"],
    features: [
      "AI assistant powered by Google Gemini",
      "Serverless PDF generation via AWS Lambda",
      "Presigned S3 URLs for secure delivery",
      "Multi-tenant architecture",
    ],
    github: "https://github.com/farhanz27/paytrack",
    demo: null,
    color: "from-blue-500 to-indigo-600",
    emoji: "💳",
    category: "Full Stack",
  },
  {
    title: "QRBridge — QR Code Microservice",
    description:
      "A serverless Python microservice on DigitalOcean Functions exposing a REST API for QR code generation. Integrated with Rocket.Chat and Telegram Bot API for real-time chat-based delivery.",
    tags: ["Python", "DigitalOcean Functions", "REST API", "Rocket.Chat", "Telegram Bot"],
    features: [
      "Serverless on DigitalOcean Functions",
      "Configurable payload & input validation",
      "Rocket.Chat custom plugin integration",
      "Telegram Bot API delivery",
    ],
    github: "https://github.com/farhanz27/qrbridge",
    demo: "https://t.me/qrbridge_bot",
    color: "from-purple-500 to-violet-600",
    emoji: "🔳",
    category: "Microservice",
  },
  {
    title: "CloudPulse — Health Monitor",
    description:
      "A cloud service uptime monitoring system with scheduled health checks tracking status, latency, and response codes. Features a state-machine alert engine for consecutive failure detection.",
    tags: ["Python", "FastAPI", "APScheduler", "Vue.js", "State Machine"],
    features: [
      "Scheduled health checks & latency tracking",
      "State-machine alert engine (FastAPI)",
      "Consecutive failure detection",
      "Real-time monitoring dashboard",
    ],
    github: "https://github.com/farhanz27",
    demo: null,
    color: "from-teal-500 to-cyan-600",
    emoji: "📡",
    category: "Cloud Ops",
  },
  {
    title: "DomainXray — DNS & WHOIS Tool",
    description:
      "A domain intelligence tool with a custom DNS resolver and WHOIS client to query domain records, ownership, and registration data through a unified FastAPI + Vue.js interface.",
    tags: ["Python", "FastAPI", "Vue.js", "DNS", "WHOIS"],
    features: [
      "Custom DNS resolver",
      "WHOIS ownership lookup",
      "FastAPI backend + Vue.js frontend",
      "Unified domain intelligence interface",
    ],
    github: "https://github.com/farhanz27",
    demo: "https://domainxray.farhann.dev/",
    color: "from-indigo-500 to-blue-600",
    emoji: "🌐",
    category: "Networking",
  },
  {
    title: "AquaVision — Aquaculture Monitor",
    description:
      "A React Native mobile app for real-time aquaculture monitoring via ESP32 microcontroller and sensors. Uses Firebase Realtime Database and Cloud Functions for automated alert notifications.",
    tags: ["React Native", "Firebase", "ESP32", "IoT", "Cloud Functions"],
    features: [
      "React Native mobile app",
      "ESP32 sensor integration",
      "Firebase Realtime Database",
      "Automated alert notifications",
    ],
    github: "https://github.com/farhanz27/aquavision",
    demo: null,
    color: "from-cyan-500 to-blue-500",
    emoji: "🐟",
    category: "IoT & Mobile",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      transition={{ type: "spring", damping: 22, stiffness: 95, delay: (index % 3) * 0.1 }}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 overflow-hidden transition-shadow duration-300 flex flex-col"
    >
      {/* Top gradient banner */}
      <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />
        <span className="text-6xl relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {project.emoji}
        </span>
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
          {project.category}
        </span>
      </div>


      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-5">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-50 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            <GithubIcon width={15} height={15} />
            Code
          </motion.a>
          {project.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white text-sm font-semibold shadow-md`}
            >
              <ExternalLink size={15} />
              Live Demo
            </motion.a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-400 text-sm font-medium border border-gray-100">
              In Progress
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real-world applications built with modern tech stacks and deployed to production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/farhanz27"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
          >
            <GithubIcon width={16} height={16} />
            View All on GitHub
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
