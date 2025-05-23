import { motion } from "motion/react";
import image from "../assets/204865.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen py-20 px-12 relative overflow-hidden flex items-center justify-start bg-black"
    >
      {/* Animated Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 h-full">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover object-center rounded-bl-[80px] shadow-2xl"
          src={image}
          alt="Eminem Hero"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-start max-w-2xl px-8">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 font-['Anton'] text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Welcome to the <span className="text-red-600">Eminem</span> Show
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-zinc-200 mb-8 max-w-xl drop-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Dive into the world of Eminem: music, art, and inspiration. Explore
          his journey, fan creations, and more.
        </motion.p>
        <motion.a
          href="#gallery"
          className="inline-block px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-lg transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          View Fan Gallery
        </motion.a>
      </div>
    </section>
  );
}
