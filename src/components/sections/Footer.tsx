"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com/farhanz27", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mohammad-farhan-a83385337/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:farhanzaid27@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-sm">
                farhann<span className="gradient-text">.dev</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Computer Science (Computer Network) graduate from UPM. Building full-stack apps, cloud infrastructure, and AI integrations.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + back to top */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                >
                  <Icon width={16} height={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Mohammad Farhan. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-400" /> using Next.js, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
