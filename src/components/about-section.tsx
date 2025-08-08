import { motion } from "motion/react";
import image from "../assets/1745999.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden"
    >
      {/* Enhanced Decorative Elements */}
      <motion.div
        className="hidden md:block absolute -top-24 -left-24 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-3xl z-0"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="hidden md:block absolute bottom-0 right-0 w-[350px] h-[350px] bg-zinc-600/30 rounded-full blur-2xl z-0"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        <motion.div
          className="relative group order-2 lg:order-1"
          initial={{ opacity: 0, x: -80, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative">
            <img
              src={image}
              alt="Eminem Portrait"
              className="object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500 rounded-2xl border-4 border-zinc-700/50"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Decorative border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl -z-10 blur-xl"></div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-2xl order-1 lg:order-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl mb-8 drop-shadow-lg leading-tight text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text font-emphasis">
            EMINEM's Journey
          </h2>

          <motion.p
            className="text-xl text-zinc-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <strong className="text-white">Marshall Bruce Mathers III</strong>,
            known professionally as Eminem, is a legendary rapper, songwriter,
            and record producer. His rapid-fire lyrics, emotional depth, and
            unique style have made him one of the most influential artists in
            hip-hop history.
          </motion.p>

          <motion.p
            className="text-lg text-zinc-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            From Detroit's underground scene to global superstardom, Eminem's
            journey is a testament to resilience, creativity, and the
            transformative power of words. His music has inspired millions and
            broken countless barriers.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mb-8 p-6 bg-zinc-800/50 rounded-2xl backdrop-blur-sm border border-zinc-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-1">220M+</div>
              <div className="text-sm text-zinc-400">Records Sold</div>
            </div>
            <div className="text-center border-x border-zinc-700">
              <div className="text-3xl font-bold text-red-500 mb-1">15</div>
              <div className="text-sm text-zinc-400">Grammy Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-1">12</div>
              <div className="text-sm text-zinc-400">Studio Albums</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
