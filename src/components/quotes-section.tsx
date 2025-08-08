import { motion } from "motion/react";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "You can make something of your life. It just depends on your drive.",
    author: "Eminem",
    context: "The Way I Am",
  },
  {
    text: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    author: "Eminem",
    context: "Interview, 2013",
  },
  {
    text: "Love is just a word, but you bring it definition.",
    author: "Eminem",
    context: "Space Bound",
  },
];

export default function QuotesSection() {
  return (
    <section
      id="quotes"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating quote symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-600/30 text-8xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            "
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 font-sans">
            <span className="text-transparent font-emphasis bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
              Quotes
            </span>{" "}
            & Inspiration
          </h2>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Powerful words from Marshall Mathers that have inspired millions
            around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-zinc-700/50 group-hover:border-red-500/30 transition-all duration-500">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <motion.p
                      className="text-xl text-zinc-100 italic mb-6 leading-relaxed font-light"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      "{q.text}"
                    </motion.p>
                  </div>

                  <footer className="pt-4 border-t border-zinc-700/50">
                    <motion.div
                      className="text-white font-bold text-lg mb-1"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      - {q.author}
                    </motion.div>
                    <motion.div
                      className="text-red-400 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {q.context}
                    </motion.div>
                  </footer>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
