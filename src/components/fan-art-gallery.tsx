import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Eye, ExternalLink, X, Star, ImageIcon } from "lucide-react";

// Enhanced default art with better placeholder data
const DEFAULT_ART = [
  {
    id: 1,
    title: "The Real Slim Shady",
    artist: "DigitalArt_M",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop",
    likes: 234,
    views: 1420,
    description: "Digital portrait capturing the essence of Marshall Mathers",
    tags: ["portrait", "digital", "rap"],
    featured: true,
  },
  {
    id: 2,
    title: "Lose Yourself",
    artist: "VectorVibes",
    image:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&h=900&fit=crop",
    likes: 189,
    views: 892,
    description: "Minimalist poster inspired by the iconic song",
    tags: ["minimalist", "typography", "poster"],
    featured: false,
  },
  {
    id: 3,
    title: "Detroit Legend",
    artist: "UrbanCanvas",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=700&fit=crop",
    likes: 312,
    views: 1680,
    description: "Street art tribute to Detroit's finest",
    tags: ["street art", "urban", "detroit"],
    featured: true,
  },
  {
    id: 4,
    title: "Marshall Mathers",
    artist: "PhotoRealism",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c86a?w=600&h=800&fit=crop",
    likes: 445,
    views: 2103,
    description: "Hyper-realistic pencil drawing",
    tags: ["realistic", "pencil", "portrait"],
    featured: false,
  },
  {
    id: 5,
    title: "Rap God",
    artist: "NeonDreams",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=900&fit=crop",
    likes: 278,
    views: 1345,
    description: "Cyberpunk-inspired digital artwork",
    tags: ["cyberpunk", "neon", "futuristic"],
    featured: false,
  },
  {
    id: 6,
    title: "Without Me",
    artist: "RetroVibes",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=800&fit=crop",
    likes: 156,
    views: 743,
    description: "Vintage comic book style illustration",
    tags: ["comic", "vintage", "illustration"],
    featured: true,
  },
];

interface ArtModalProps {
  art: (typeof DEFAULT_ART)[0];
  onClose: () => void;
}

const ArtModal: React.FC<ArtModalProps> = ({ art, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-gradient-to-br from-zinc-900 to-black max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              {art.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Featured
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {art.title}
                    </h3>
                    <p className="text-red-400 text-lg font-medium">
                      by {art.artist}
                    </p>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  {art.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {art.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-800/60 text-zinc-300 rounded-full text-sm border border-zinc-700/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center text-zinc-400">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    <span className="font-medium">
                      {art.likes.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center text-zinc-400">
                    <Eye className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      {art.views.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <motion.button
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Like Artwork
                </motion.button>
                <motion.button
                  className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const FanArtGallery: React.FC = () => {
  const [fanArt] = useState(DEFAULT_ART);
  const [selectedArt, setSelectedArt] = useState<
    (typeof DEFAULT_ART)[0] | null
  >(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredArt =
    filter === "featured" ? fanArt.filter((art) => art.featured) : fanArt;

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (selectedArt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedArt]);

  return (
    <section
      id="gallery"
      className="py-24 px-4 md:px-8 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans">
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
              FAN
            </span>{" "}
            GALLERY
          </h2>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover incredible artwork created by passionate Eminem fans from
            around the world
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() => setFilter("all")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ImageIcon className="w-5 h-5 mr-2 inline" />
              All Artwork ({fanArt.length})
            </motion.button>
            <motion.button
              onClick={() => setFilter("featured")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === "featured"
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-5 h-5 mr-2 inline" />
              Featured ({fanArt.filter((art) => art.featured).length})
            </motion.button>
          </div>
        </motion.div>

        {/* Art Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArt.map((art, index) => (
            <motion.div
              key={art.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => setSelectedArt(art)}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-700/50 group-hover:border-red-500/30 transition-all duration-500 backdrop-blur-sm">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1 text-red-400" />
                            <span className="text-sm font-medium">
                              {art.likes}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1 text-blue-400" />
                            <span className="text-sm font-medium">
                              {art.views}
                            </span>
                          </div>
                        </div>
                        <motion.div
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {art.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {art.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">by {art.artist}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {art.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {art.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-zinc-800/60 text-zinc-400 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {art.tags.length > 2 && (
                      <span className="px-2 py-1 text-zinc-500 text-xs">
                        +{art.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 rounded-2xl p-8 border border-zinc-700/30 backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-500 mb-2">1.2K+</div>
            <div className="text-zinc-400">Artworks Submitted</div>
          </div>
          <div className="text-center bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 rounded-2xl p-8 border border-zinc-700/30 backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-zinc-400">Active Artists</div>
          </div>
          <div className="text-center bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 rounded-2xl p-8 border border-zinc-700/30 backdrop-blur-sm">
            <div className="text-4xl font-bold text-red-500 mb-2">50K+</div>
            <div className="text-zinc-400">Total Likes</div>
          </div>
        </motion.div>
      </div>

      {/* Art Modal */}
      <AnimatePresence>
        {selectedArt && (
          <ArtModal art={selectedArt} onClose={() => setSelectedArt(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FanArtGallery;
