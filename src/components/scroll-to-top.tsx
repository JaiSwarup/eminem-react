import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-8 right-8 z-50 group"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {/* Background with gradient */}
            <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
              <ChevronUp className="w-6 h-6 text-white" />
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

            {/* Pulse animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-red-700/30 rounded-full animate-ping opacity-75"></div>
          </div>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-zinc-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            Back to top
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-800"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
