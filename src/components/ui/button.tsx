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
    <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="group w-full h-full bg-[#d42e2e]"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" color />
        </div>
        <div
          className="group w-full h-full bg-black"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label, color }: { label: string; color?: boolean }) {
  return (
    <div className="group-hover:rotate-90  flex flex-col justify-center items-center w-full h-full [transform-style:preserve-3d] transition-transform duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]">
      <p
        className={cn(
          "transition-all duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase",
          color ? " text-black" : "text-[#d42e2e]"
        )}
      >
        {label}
      </p>
      <p className="absolute opacity-0 rotate-x-[-90deg] translate-y-[9px] origin-bottom pointer-events-none uppercase transition-all duration-[750ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]">
        {label}
      </p>
    </div>
  );
}
