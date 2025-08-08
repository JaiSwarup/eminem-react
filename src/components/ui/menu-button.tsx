import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export default function Button({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden shadow-lg">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="group w-full h-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300"
          onClick={() => {
            toggleMenu();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PerspectiveText label="Menu" color />
        </motion.div>
        <motion.div
          className="group w-full h-full bg-gradient-to-r from-zinc-800 to-black hover:from-black hover:to-zinc-900 transition-all duration-300"
          onClick={() => {
            toggleMenu();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PerspectiveText label="Close" />
        </motion.div>
      </motion.div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-[25px] bg-gradient-to-r from-red-500/20 to-red-600/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

function PerspectiveText({ label, color }: { label: string; color?: boolean }) {
  return (
    <div className="group-hover:rotate-90 flex flex-col justify-center items-center w-full h-full [transform-style:preserve-3d] transition-transform duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]">
      <motion.p
        className={cn(
          "transition-all duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase font-semibold text-sm tracking-wider",
          color ? "text-white" : "text-red-500"
        )}
        whileHover={{ scale: 1.1 }}
      >
        {label}
      </motion.p>
      <p className="absolute opacity-0 rotate-x-[-90deg] translate-y-[9px] origin-bottom pointer-events-none uppercase transition-all duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] font-semibold text-sm tracking-wider">
        {label}
      </p>
    </div>
  );
}
