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
      "A multi-tenant invoicing SaaS for managing customers, invoices, quotations, and payments — with PDF exports, a product catalog, and an AI assistant powered by Google Gemini.",
    tags: ["Java", "Spring Boot", "Vue 3", "PostgreSQL", "AWS", "Google Gemini", "Docker"],
    features: [
      "AI assistant (Pax) powered by Google Gemini",
      "Multi-tenant workspaces with Owner / Admin / Member roles",
      "PDF export stored in S3 with presigned URLs",
      "Automated reminders via AWS Lambda + EventBridge + SES",
    ],
    github: "https://github.com/farhanz27/paytrack",
    demo: "https://paytrack.farhann.dev",
    color: "from-sky-400 to-blue-500",
    emoji: "💳",
    category: "Full Stack",
  },
  {
    title: "CloudPulse — Uptime Monitor",
    description:
      "An uptime monitoring SaaS that tracks HTTP health, SSL and domain expiry, and sends downtime alerts via email, Telegram, Slack, Teams, or webhook.",
    tags: ["Java", "Spring Boot", "Vue 3", "PostgreSQL", "Docker"],
    features: [
      "Scheduled HTTP health checks with configurable intervals (30s – 24h)",
      "SSL & domain expiry tracking with advance alerts",
      "Public status pages with 30-day uptime bars",
      "Multi-channel notifications (Email, Telegram, Slack, Teams, Custom Webhook)",
    ],
    github: "https://github.com/farhanz27",
    demo: "https://cloudpulse.farhann.dev",
    color: "from-teal-400 to-cyan-500",
    emoji: "📡",
    category: "Cloud Ops",
  },
  {
    title: "DomainXray — DNS & WHOIS Tool",
    description:
      "A domain intelligence tool for resolving all major DNS record types and querying WHOIS registration data across 80+ TLDs, with support for custom nameservers and automatic referral chain following.",
    tags: ["Python", "FastAPI", "Vue 3", "DNS", "WHOIS", "Docker"],
    features: [
      "Custom DNS resolver",
      "WHOIS ownership lookup",
      "FastAPI backend + Vue 3 frontend",
      "Unified domain intelligence interface",
    ],
    github: "https://github.com/farhanz27",
    demo: "https://domainxray.farhann.dev/",
    color: "from-indigo-400 to-sky-500",
    emoji: "🌐",
    category: "Networking",
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
    color: "from-violet-400 to-purple-500",
    emoji: "🔳",
    category: "Microservice",
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
    color: "from-cyan-400 to-sky-400",
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
      className="group relative glass-card rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:shadow-sky-100/40 transition-shadow duration-300"
    >
      {/* Top gradient banner */}
      <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.35) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />
        <span className="text-6xl relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {project.emoji}
        </span>
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug">{project.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-5">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-sky-50/80 border border-sky-100/80 text-slate-600 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-white/60 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900/90 text-white text-sm font-semibold hover:bg-slate-900 transition-colors"
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
            <span className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50/80 text-slate-300 text-sm font-medium border border-slate-100/80 cursor-not-allowed select-none">
              <ExternalLink size={15} />
              Unavailable
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
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/70 text-slate-700 font-semibold text-sm hover:shadow-md transition-all"
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
