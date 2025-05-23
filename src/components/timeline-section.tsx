import { motion } from "motion/react";

const timeline = [
  { year: "1996", event: "Debut Album: Infinite" },
  { year: "1999", event: "Breakthrough: The Slim Shady LP" },
  { year: "2002", event: "Oscar Win: Lose Yourself" },
  { year: "2010", event: "Recovery Album Release" },
  { year: "2020", event: "Music to Be Murdered By" },
];

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-zinc-800">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          <span className="text-red-600">Eminem</span> Timeline
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="bg-zinc-900 rounded-lg shadow-lg p-6 flex-1 min-w-[220px] text-center border-t-4 border-red-600"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-2xl font-bold text-red-500 mb-2">
                {item.year}
              </div>
              <div className="text-lg text-zinc-200">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
