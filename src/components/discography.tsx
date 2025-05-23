import { useEffect, useState } from "react";
import { motion } from "motion/react";
import image from "../assets/1746072.jpg";
import { Icons } from "./icons";

interface Album {
  id: string;
  title: string;
  image: string;
  year: string;
  spotifyUrl?: string;
}

export default function Discography() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAlbums() {
      setLoading(true);
      setError(null);
      try {
        // MusicBrainz API for Eminem's albums
        const res = await fetch(
          "https://musicbrainz.org/ws/2/release-group?artist=b95ce3ff-3d05-4e87-9e01-c97b66af13d4&type=album&fmt=json"
        );
        const data = await res.json();
        // Get cover art from Cover Art Archive
        const albumsData: Album[] = await Promise.all(
          data["release-groups"].map(async (group: any) => {
            let image =
              "https://placehold.co/500x500/222222/FFD700?text=No+Cover";
            try {
              const coverRes = await fetch(
                `https://coverartarchive.org/release-group/${group.id}`
              );
              const coverData = await coverRes.json();
              if (coverData.images && coverData.images[0]?.thumbnails?.large) {
                image = coverData.images[0].thumbnails.large;
              } else if (coverData.images && coverData.images[0]?.image) {
                image = coverData.images[0].image;
              }
            } catch {}
            return {
              id: group.id,
              title: group.title,
              image,
              year: group["first-release-date"]?.slice(0, 4) || "",
              spotifyUrl: `https://open.spotify.com/search/${encodeURIComponent(
                group.title + " eminem"
              )}`,
            };
          })
        );
        setAlbums(albumsData);
      } catch (e) {
        setError("Failed to load albums.");
      } finally {
        setLoading(false);
      }
    }
    fetchAlbums();
  }, []);

  return (
    <section
      id="the-heat"
      className="relative py-24 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-light overflow-hidden"
    >
      {/* Animated Background Image Overlay */}
      <motion.img
        src={image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-110 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.3, scale: 1.15 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
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
        <div className="section-header text-center mb-14">
          <motion.h2
            className="text-white font-['Permanent_Marker'] font-display text-4xl md:text-6xl text-light font-extrabold drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Eminem Albums<span className="text-accent-yellow">.</span>
          </motion.h2>
          <motion.div
            className="title-underline h-1 w-24 bg-accent-yellow mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </div>
        {loading && (
          <div className="text-center text-zinc-400 text-xl py-20">
            Loading albums...
          </div>
        )}
        {error && (
          <div className="text-center text-red-500 text-xl py-20">{error}</div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {albums.slice(10).map((album, i) => (
              <motion.article
                key={album.id}
                className="project-card  bg-zinc-950/80 border-4 border-zinc-800 shadow-2xl rounded-xl overflow-hidden hover:-translate-y-2 hover:rotate-[-1deg] transition-transform duration-300 group relative"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
                }}
              >
                <div className="project-image-container relative overflow-hidden h-56">
                  <motion.img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <div className="project-info p-6">
                  <motion.h3
                    className="project-title text-white font-['Anton'] text-2xl mb-2 font-bold drop-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {album.title}
                  </motion.h3>
                  <motion.p
                    className="mb-4 text-zinc-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {album.year && (
                      <span className="font-bold">{album.year}</span>
                    )}
                  </motion.p>
                  <motion.a
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 inline-block border-2 border-red-500 text-accent-yellow px-5 py-2 rounded-full font-bold  hover:text-red-300 transition-colors duration-300 shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    Listen on Spotify{" "}
                    <Icons.spotify
                      className="inline-block ml-2 text-green-400"
                      fill="currentColor"
                      width={24}
                    />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
