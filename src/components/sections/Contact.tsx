"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xaqvryvw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-5"
        >
          {/* Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm font-medium ${
                focused === "name" || form.name
                  ? "-top-2.5 text-xs text-sky-600 bg-white/90 px-1 rounded"
                  : "top-3.5 text-slate-400"
              }`}
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              required
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={`w-full pt-4 pb-3 px-4 rounded-xl border text-sm text-slate-900 outline-none transition-all ${
                focused === "name"
                  ? "border-sky-300 bg-white/90 shadow-sm shadow-sky-400/10"
                  : "border-white/70 bg-white/50 hover:border-sky-200"
              }`}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm font-medium ${
                focused === "email" || form.email
                  ? "-top-2.5 text-xs text-sky-600 bg-white/90 px-1 rounded"
                  : "top-3.5 text-slate-400"
              }`}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              required
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={`w-full pt-4 pb-3 px-4 rounded-xl border text-sm text-slate-900 outline-none transition-all ${
                focused === "email"
                  ? "border-sky-300 bg-white/90 shadow-sm shadow-sky-400/10"
                  : "border-white/70 bg-white/50 hover:border-sky-200"
              }`}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm font-medium ${
                focused === "message" || form.message
                  ? "-top-2.5 text-xs text-sky-600 bg-white/90 px-1 rounded"
                  : "top-3.5 text-slate-400"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              required
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`w-full pt-4 pb-3 px-4 rounded-xl border text-sm text-slate-900 outline-none resize-none transition-all ${
                focused === "message"
                  ? "border-sky-300 bg-white/90 shadow-sm shadow-sky-400/10"
                  : "border-white/70 bg-white/50 hover:border-sky-200"
              }`}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileHover={status === "idle" ? {
              scale: 1.01,
              boxShadow: "0 6px 20px rgba(14,165,233,0.3)",
              transition: { type: "spring", stiffness: 240, damping: 22 },
            } : {}}
            whileTap={status === "idle" ? { scale: 0.99, transition: { duration: 0.1 } } : {}}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 ${
              status === "sent"
                ? "bg-teal-500 text-white"
                : "bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-md shadow-sky-400/20"
            }`}
          >
            {status === "idle" && <><Send size={15} />Send Message</>}
            {status === "sending" && (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending...
              </>
            )}
            {status === "sent" && <><CheckCircle size={15} />Message Sent!</>}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
