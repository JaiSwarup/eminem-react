import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  AppleIcon,
  Headphones,
  Mail,
  Heart,
} from "lucide-react";
import { Icons } from "./icons";
import { motion } from "motion/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl py-16 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-4">
                <Headphones size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-text">
                  EMINEM
                </h3>
                <p className="text-zinc-400 text-sm">Fan Community</p>
              </div>
            </div>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              The ultimate destination for Eminem fans worldwide. Join our
              community and celebrate the legacy of one of hip-hop's greatest
              artists.
            </p>

            <div className="flex space-x-4">
              {[
                {
                  icon: Instagram,
                  href: "https://instagram.com/eminem",
                  color: "hover:text-pink-500",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/eminem",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Facebook,
                  href: "https://facebook.com/eminem",
                  color: "hover:text-blue-600",
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com/eminem",
                  color: "hover:text-red-500",
                },
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center text-zinc-400 transition-all duration-300 border border-zinc-700/50 ${color} hover:border-current hover:bg-zinc-700/50`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "About Eminem", href: "#about" },
                { name: "Fan Gallery", href: "#gallery" },
                { name: "Timeline", href: "#timeline" },
                { name: "Quotes", href: "#quotes" },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-zinc-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Music Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Listen Now</h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-green-500 transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <Icons.spotify
                    width={20}
                    height={20}
                    className="mr-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  Spotify
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://music.apple.com/us/artist/eminem/111051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-white transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <AppleIcon
                    size={20}
                    className="mr-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  Apple Music
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://youtube.com/eminem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-red-500 transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <Youtube
                    size={20}
                    className="mr-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  YouTube Music
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              Get the latest news, exclusive content, and updates from the
              Eminem community.
            </p>

            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/50 focus:bg-zinc-800/70 transition-all duration-300"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5" />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-zinc-800/50 mt-16 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-zinc-500 text-sm">
              <span>
                © {new Date().getFullYear()} Eminem Fan Community. Made with
              </span>
              <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
              <span>by fans, for fans.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-zinc-500">
              <motion.a
                href="#"
                className="hover:text-red-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-red-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-red-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.a>
            </div>
          </div>

          <div className="text-center text-zinc-600 text-xs mt-4 italic">
            This is an unofficial fan page. All trademarks and copyrights belong
            to their respective owners.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
