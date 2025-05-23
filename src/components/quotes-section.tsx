import { motion } from "motion/react";

const quotes = [
  {
    text: "You can make something of your life. It just depends on your drive.",
    author: "Eminem",
  },
  {
    text: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    author: "Eminem",
  },
  {
    text: "Love is just a word, but you bring it definition.",
    author: "Eminem",
  },
];

export default function QuotesSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          <span className="text-red-600">Quotes</span> & Inspiration
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              className="bg-zinc-800 rounded-lg shadow-lg p-8 flex-1 min-w-[250px] text-center border-l-4 border-red-600 flex flex-col justify-center"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-xl text-zinc-100 italic mb-4">“{q.text}”</p>
              <footer className="text-zinc-400 font-bold">- {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
