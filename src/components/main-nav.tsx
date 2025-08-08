import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const links = [
  {
    title: "Home",
    href: "#hero",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "Timeline",
    href: "#timeline",
  },
  {
    title: "Quotes",
    href: "#quotes",
  },
];

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 360,
    translateY: 80,
    translateX: -20,
  },
  enter: {
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
    exit: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
      transition: {
        duration: 0.65,
        delay: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  },
};

export default function MainNav({
  onClick,
}: {
  onClick: (value: boolean) => void;
}) {
  return (
    <motion.div
      className="pt-[80px] pb-[50px] box-border h-full"
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ staggerChildren: 0.25 }}
    >
      {links.map((link, i) => (
        <motion.div
          key={`nav_${i}`}
          className="group flex gap-3 border-b items-center overflow-hidden px-6 py-4  hover:bg-accent transition-colors duration-300 cursor-pointer"
          custom={i}
          variants={perspective}
          initial="initial"
          animate="enter"
          exit="exit"
          onClick={(e) => {
            e.preventDefault();
            
            // Close the menu first and restore scrolling
            onClick(false);
            
            // Wait for the menu to close and body scroll to be restored, then scroll
            setTimeout(() => {
              const element = document.querySelector(link.href);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 800); // Wait for menu close animation (0.75s) + small buffer
          }}
        >
          <ArrowRight className="w-8 h-8 stroke-2 text-white -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
          <span className="block text-black group-hover:text-white text-4xl font-black no-underline transition-all duration-300 -translate-x-8 group-hover:translate-x-0 tracking-tight">
            {link.title}
          </span>

          {/* Subtle accent line */}
          <div className="ml-auto w-0 group-hover:w-12 h-0.5 bg-red-500 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100" />
        </motion.div>
      ))}

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-12 ml-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a
          href="https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-green-500 transition-all duration-300 border border-white/10 hover:border-green-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.421.181.479.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </motion.a>

        <motion.a
          href="https://www.youtube.com/eminem"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300 border border-white/10 hover:border-red-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </motion.a>

        {/* Add Instagram for completeness */}
        <motion.a
          href="https://instagram.com/eminem"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 border border-white/10 hover:border-pink-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
