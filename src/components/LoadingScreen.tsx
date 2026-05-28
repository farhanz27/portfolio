"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-slate-50 via-sky-50 to-teal-50"
        >
          <div className="flex flex-col items-center gap-3">
            <p className="font-bold text-slate-900 text-2xl tracking-tight">farhann<span className="gradient-text">.dev</span></p>

            <div className="flex flex-col items-center gap-2 w-40">
              <div className="h-[3px] w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
                  className="h-full w-1/2 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full"
                />
              </div>
              <p className="text-slate-400 text-xs font-medium tracking-widest uppercase">Loading</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
