"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

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
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-blue-500/30 flex items-center justify-center"
            >
              <Code2 size={28} className="text-white" />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="h-1 w-40 bg-gray-100 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
                  className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </motion.div>
              <p className="text-gray-400 text-xs font-medium tracking-widest uppercase">Loading</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
