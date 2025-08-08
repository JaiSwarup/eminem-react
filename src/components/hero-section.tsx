import { motion } from "motion/react";
import image from "../assets/204865.jpg";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen py-20 px-12 relative overflow-hidden flex items-center justify-start bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      {/* Animated Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 h-full">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover object-center rounded-bl-[80px] shadow-2xl"
          src={image}
          alt="Eminem Hero"
        />
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 rounded-bl-[80px] bg-gradient-to-tr from-red-600/20 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/95 via-black/70 to-transparent pointer-events-none" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            initial={{ x: -10, y: Math.random() * window.innerHeight }}
            animate={{
              x: window.innerWidth + 10,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-start max-w-5xl px-8">
        <motion.h1
          className="text-5xl md:text-6xl mb-6 text-white drop-shadow-2xl leading-tight font-heading"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Welcome to the <br />
          <span className="text-transparent text-7xl bg-gradient-to-r font-emphasis tracking-tight from-red-400 to-red-800 bg-clip-text">
            EMINEM SHOW
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl drop-shadow leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          Dive deep into the legendary world of Marshall Mathers. Explore his
          groundbreaking music, incredible journey, and the passionate community
          that celebrates his artistry.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <Button
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-red-500/25 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Explore Gallery</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("timeline")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10"
          >
            <span>Listen Now</span>
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
