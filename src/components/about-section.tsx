import { motion } from "motion/react";
import image from "../assets/1745999.jpg";

export default function AboutSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-zinc-300 relative overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        className="hidden md:block absolute -top-24 -left-24 w-[350px] h-[350px] bg-gray-600/50 bg-opacity-30 rounded-full blur-3xl z-0"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="hidden md:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-gray-400/50 bg-opacity-20 rounded-full blur-2xl z-0"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <div className="container mx-auto grid grid-cols-2 items-center gap-16 relative z-10">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -80, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={image}
            alt="Eminem Portrait"
            className="object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl  mb-6 text-white drop-shadow-lg font-['Anton']">
            About{" "}
            <span className="text-red-600 font-['Permanent_Marker']">
              Eminem
            </span>
          </h2>
          <motion.p
            className="text-lg text-zinc-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Eminem, also known as Marshall Mathers, is a legendary rapper,
            songwriter, and record producer. His rapid-fire lyrics, emotional
            depth, and unique style have made him one of the most influential
            artists in hip-hop history.
          </motion.p>
          <motion.p
            className="text-zinc-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            From Detroit's underground scene to global superstardom, Eminem's
            journey is a testament to resilience, creativity, and the power of
            words.
          </motion.p>
          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href="#timeline"
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white  shadow-lg transition-colors duration-300"
            >
              View Timeline
            </a>
            <a
              href="#gallery"
              className="px-6 py-2 bg-zinc-300 hover:bg-zinc-500 text-red-700  border border-red-600 shadow-lg transition-colors duration-300"
            >
              Fan Gallery
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
