import { motion } from "motion/react";

export const links = [
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Agency",
    href: "/",
  },
  {
    title: "Expertise",
    href: "/",
  },
];

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 3,
      delay: 1 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function MainNav() {
  return (
    <div className="flex flex-col justify-between px-10 pt-[100px] pb-[50px] h-full box-border">
      <div className=" flex flex-col gap-[10px]">
        {links.map((link, i) => (
          <div
            key={`b_${i}`}
            className="[perspective:120px] [perspective-origin:bottom]"
          >
            <motion.div
              className="no-underline text-black text-[46px]"
              initial={{
                opacity: 0,
                rotateX: 90,
                translateY: 80,
                translateX: -20,
              }}
              animate={{ opacity: 1, rotateX: 0, translateY: 0, translateX: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.5 + i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
                opacity: { duration: 0.35 },
              }}
            >
              <a href={link.href}>{link.title}</a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
