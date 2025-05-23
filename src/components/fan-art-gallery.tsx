import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Fetch fan art from a public API (e.g. Unsplash for demo purposes)
const fetchFanArt = async () => {
  // This uses Unsplash's demo endpoint for random images
  // In a real app, use your own backend or a real fan art API
  const res = await fetch(
    "https://api.unsplash.com/search/photos?query=eminem%20fan%20art&per_page=12&client_id=YOUR_UNSPLASH_ACCESS_KEY"
  );
  const data = await res.json();
  return (
    data.results?.map((img: any, i: number) => ({
      title: img.alt_description || `Fan Art #${i + 1}`,
      artist: img.user?.name || "Unknown Artist",
      image: img.urls?.regular,
      link: img.links?.html,
    })) || []
  );
};

const DEFAULT_ART = [
  {
    title: "Art Piece 1",
    artist: "Artist 1",
    image: "https://image.pexels.com/photos/1234567.jpg",
    link: "#",
  },
  {
    title: "Art Piece 2",
    artist: "Artist 2",
    image: "https://example.com/art2.jpg",
    link: "#",
  },
  {
    title: "Art Piece 3",
    artist: "Artist 3",
    image: "https://example.com/art3.jpg",
    link: "#",
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-zinc-900 max-w-4xl w-full rounded-xl shadow-2xl overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-auto max-h-[60vh] object-contain bg-zinc-800"
          />
          <div className="p-6 flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {art.title}
              </h3>
              <p className="text-zinc-400 text-lg">By {art.artist}</p>
            </div>
            <button
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const FanArtGallery: React.FC = () => {
  const [fanArt, setFanArt] = useState(DEFAULT_ART);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedArt, setSelectedArt] = useState<
    (typeof DEFAULT_ART)[0] | null
  >(null);
  const sectionRef = useRef<HTMLElement>(null);
  const artItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    async function loadFanArt() {
      setLoading(true);
      setError(null);
      try {
        // Replace with your Unsplash access key or use your own API
        const data = await fetchFanArt();
        if (data.length > 0) setFanArt(data);
      } catch (e) {
        setError("Failed to load fan art. Showing default art.");
      } finally {
        setLoading(false);
      }
    }
    loadFanArt();
  }, []);

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

  // Calculate dynamic heights for masonry layout
  const getItemHeight = (index: number) => {
    const baseHeights = [300, 350, 250, 400];
    return baseHeights[index % baseHeights.length] + "px";
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <motion.div
        className="hidden md:block absolute -top-24 -left-24 w-[350px] h-[350px] bg-red-600 bg-opacity-20 rounded-full blur-3xl z-0"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="hidden md:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-zinc-400 bg-opacity-10 rounded-full blur-2xl z-0"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          FAN <span className="text-red-600">GALLERY</span>
        </motion.h2>
        {loading && (
          <div className="text-center text-zinc-400 text-xl py-20">
            Loading fan art...
          </div>
        )}
        {error && (
          <div className="text-center text-red-500 text-xl py-20">{error}</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fanArt.map((art, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                artItemsRef.current[index] = el;
              }}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-xl bg-zinc-950/80 border-2 border-zinc-800 relative"
              style={{ height: getItemHeight(index) }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => setSelectedArt(art)}
            >
              <div className="h-full w-full relative">
                <motion.img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-1 text-center drop-shadow-lg">
                    {art.title}
                  </h3>
                  <p className="text-zinc-300 text-sm text-center">
                    By {art.artist}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
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
