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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-5"
        >
          {/* Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm font-medium ${
                focused === "name" || form.name
                  ? "-top-2.5 text-xs text-blue-600 bg-white px-1"
                  : "top-3.5 text-gray-400"
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
              className={`w-full pt-4 pb-3 px-4 rounded-xl border text-sm text-gray-900 bg-gray-50 outline-none transition-all ${
                focused === "name"
                  ? "border-blue-400 bg-white shadow-sm shadow-blue-500/10"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm font-medium ${
                focused === "email" || form.email
                  ? "-top-2.5 text-xs text-blue-600 bg-white px-1"
                  : "top-3.5 text-gray-400"
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
              className={`w-full pt-4 pb-3 px-4 rounded-xl border text-sm text-gray-900 bg-gray-50 outline-none transition-all ${
                focused === "email"
                  ? "border-blue-400 bg-white shadow-sm shadow-blue-500/10"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm font-medium ${
                focused === "message" || form.message
                  ? "-top-2.5 text-xs text-blue-600 bg-white px-1"
                  : "top-3.5 text-gray-400"
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
              className={`w-full pt-4 pb-3 px-4 rounded-xl border text-sm text-gray-900 bg-gray-50 outline-none resize-none transition-all ${
                focused === "message"
                  ? "border-blue-400 bg-white shadow-sm shadow-blue-500/10"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status !== "idle"}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" ? { scale: 0.98 } : {}}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              status === "sent"
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
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
