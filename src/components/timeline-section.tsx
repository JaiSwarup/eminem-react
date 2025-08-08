import { motion } from "motion/react";
import { Calendar, Trophy, Disc, Mic, Award, Play } from "lucide-react";

const timeline = [
  {
    year: "1988-1995",
    title: "Early Years & Formation",
    category: "Underground Beginnings",
    description:
      "Marshall Mathers begins rapping at age 14, developing his skills in Detroit's underground hip-hop scene with groups like New Jacks and Soul Intent.",
    icon: Mic,
    color: "from-gray-500 to-gray-600",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    achievements: [
      "First rap performances",
      "Local battle rap recognition",
      "Formed D12 group",
    ],
  },
  {
    year: "1996",
    title: "Infinite",
    category: "Debut Album",
    description:
      "Marshall's first studio album, showcasing his technical skills but receiving limited commercial success. Only 1,000 copies were pressed initially.",
    icon: Disc,
    color: "from-blue-500 to-blue-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Infinite_%28Eminem_album%29_coverart.jpg",
    achievements: [
      "First studio album",
      "Independent release",
      "Foundation for future work",
    ],
  },
  {
    year: "1997",
    title: "Slim Shady EP",
    category: "Breakthrough",
    description:
      "The birth of his controversial alter ego that would change hip-hop forever. This EP caught the attention of Interscope Records and Dr. Dre.",
    icon: Mic,
    color: "from-purple-500 to-purple-600",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fe/Slim_Shady_EP.jpg",
    achievements: [
      "Created Slim Shady persona",
      "Caught Dr. Dre's attention",
      "Record deal with Aftermath/Interscope",
    ],
  },
  {
    year: "1999",
    title: "The Slim Shady LP",
    category: "Major Label Debut",
    description:
      "Global breakthrough with hits like 'My Name Is' and 'Guilty Conscience'. Won Grammy Award for Best Rap Album.",
    icon: Trophy,
    color: "from-green-500 to-green-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/35/Eminem_-_The_Slim_Shady_LP_CD_cover.jpg",
    achievements: [
      "4x Platinum certification",
      "Grammy Award for Best Rap Album",
      "MTV VMAs wins",
    ],
  },
  {
    year: "2000",
    title: "The Marshall Mathers LP",
    category: "Cultural Phenomenon",
    description:
      "Fastest-selling solo album in US history at the time, selling 1.76 million copies in its first week. Sparked global controversy and debate.",
    icon: Award,
    color: "from-yellow-500 to-yellow-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/The_Marshall_Mathers_LP.jpg",
    achievements: [
      "8x Platinum",
      "1.76M first week sales",
      "Grammy nominations",
      "Cultural impact",
    ],
  },
  {
    year: "2002",
    title: "The Eminem Show",
    category: "Creative Peak",
    description:
      "Critically acclaimed album featuring 'Without Me' and 'Cleanin' Out My Closet'. Demonstrated artistic growth and mainstream appeal.",
    icon: Disc,
    color: "from-orange-500 to-orange-600",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg",
    achievements: [
      "12x Platinum",
      "Grammy Award",
      "#1 album worldwide",
      "Critical acclaim",
    ],
  },
  {
    year: "2002",
    title: "8 Mile & Oscar Win",
    category: "Hollywood Success",
    description:
      "Academy Award for 'Lose Yourself' - first rapper to win an Oscar. The semi-autobiographical film was both critical and commercial success.",
    icon: Play,
    color: "from-red-500 to-red-600",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/8_mile_ver2.jpg",
    achievements: [
      "Academy Award winner",
      "$54.2M opening weekend",
      "'Lose Yourself' #1 hit",
    ],
  },
  {
    year: "2004",
    title: "Encore",
    category: "Commercial Success",
    description:
      "Featured hits like 'Just Lose It' and 'Mockingbird'. Despite mixed reviews, achieved massive commercial success worldwide.",
    icon: Disc,
    color: "from-pink-500 to-pink-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Encore_%28Eminem_album%29_coverart.jpg",
    achievements: [
      "5x Platinum",
      "Multiple #1 singles",
      "Global chart success",
    ],
  },
  {
    year: "2005-2008",
    title: "Hiatus & Struggles",
    category: "Personal Challenges",
    description:
      "Battled addiction and personal problems. Took a break from music to focus on recovery and family.",
    icon: Calendar,
    color: "from-slate-500 to-slate-600",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
    achievements: ["Overcame addiction", "Personal growth", "Family focus"],
  },
  {
    year: "2009",
    title: "Relapse",
    category: "Return to Music",
    description:
      "Comeback album after 5-year hiatus. Marked his return to music with Dr. Dre production and recovery themes.",
    icon: Trophy,
    color: "from-teal-500 to-teal-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Eminem_-_Relapse.jpg",
    achievements: ["2x Platinum", "Grammy Award", "Successful comeback"],
  },
  {
    year: "2010",
    title: "Recovery",
    category: "Personal Resurrection",
    description:
      "Personal and professional resurrection with 'Love The Way You Lie' featuring Rihanna and 'Not Afraid'. Showed vulnerability and growth.",
    icon: Award,
    color: "from-emerald-500 to-emerald-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/60/Eminem_-_Recovery.jpg",
    achievements: [
      "4x Platinum",
      "Grammy wins",
      "'Love The Way You Lie' #1 hit",
    ],
  },
  {
    year: "2013",
    title: "The Marshall Mathers LP 2",
    category: "Artistic Return",
    description:
      "Sequel to his classic album featuring 'Rap God' and 'The Monster'. Showcased his technical prowess and storytelling abilities.",
    icon: Disc,
    color: "from-indigo-500 to-indigo-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/87/The_Marshall_Mathers_LP_2.png",
    achievements: [
      "4x Platinum",
      "'Rap God' Guinness World Record",
      "Grammy nominations",
    ],
  },
  {
    year: "2017",
    title: "Revival",
    category: "Political Voice",
    description:
      "Political and personal album addressing social issues, featuring collaborations with Beyoncé, Ed Sheeran, and other major artists.",
    icon: Mic,
    color: "from-cyan-500 to-cyan-600",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cd/Eminem_Revival.jpg",
    achievements: [
      "Platinum certification",
      "Political impact",
      "Major collaborations",
    ],
  },
  {
    year: "2018",
    title: "Kamikaze",
    category: "Response Album",
    description:
      "Surprise album addressing critics and the current state of hip-hop. Featured rapid-fire flows and controversial disses.",
    icon: Trophy,
    color: "from-violet-500 to-violet-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Eminem_-_Kamikaze.jpg",
    achievements: [
      "Platinum certification",
      "Chart success",
      "Cultural conversations",
    ],
  },
  {
    year: "2020",
    title: "Music to Be Murdered By",
    category: "Surprise Masterpiece",
    description:
      "Alfred Hitchcock-inspired surprise album showcasing intricate wordplay, storytelling, and continued relevance in modern hip-hop.",
    icon: Disc,
    color: "from-rose-500 to-rose-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/Eminem_-_Music_to_Be_Murdered_By.png",
    achievements: ["#1 Billboard 200", "Streaming records", "Critical acclaim"],
  },
  {
    year: "2024",
    title: "The Death of Slim Shady",
    category: "New Chapter",
    description:
      "Latest studio album marking the symbolic end of the Slim Shady persona and the evolution of Marshall Mathers as an artist.",
    icon: Award,
    color: "from-amber-500 to-amber-600",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Eminem_-_The_Death_of_Slim_Shady_%28Coup_de_Gr%C3%A2ce%29.png",
    achievements: [
      "Chart success",
      "Cultural significance",
      "Artistic evolution",
    ],
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="h-full w-full bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl text-white mb-6 font-sans">
            <span className="text-transparent font-emphasis bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
              EMINEM
            </span>{" "}
            Timeline
          </h2>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            From Detroit's underground to global superstardom - the incredible
            journey of Marshall Mathers
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700 transform -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-400 to-red-500"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  className={`flex items-center ${
                    isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-col md:gap-16`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isLeft ? "md:text-right" : "md:text-left"
                    } text-center`}
                  >
                    <motion.div
                      className="group relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-red-500/30 transition-all duration-500"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          initial={{ scale: 1.1, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Year Badge Overlay */}
                        <div className="absolute top-4 left-4">
                          <div
                            className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full font-bold text-sm shadow-lg backdrop-blur-sm`}
                          >
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.year}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                          {item.title}
                        </h3>

                        <div className="text-red-400 font-medium mb-4 text-lg">
                          {item.category}
                        </div>

                        <p className="text-zinc-300 leading-relaxed mb-6 text-base">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <div className="text-zinc-400 font-medium mb-3 text-sm">
                            Key Achievements:
                          </div>
                          {item.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.div
                                key={achievementIndex}
                                className="flex items-center text-zinc-300 text-sm"
                                initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                }}
                                viewport={{ once: true }}
                              >
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                                {achievement}
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10 order-first md:order-none mb-8 md:mb-0">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-zinc-900`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Pulse animation */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full opacity-30`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
