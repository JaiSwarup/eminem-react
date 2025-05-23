import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  AppleIcon,
  Headphones,
} from "lucide-react";
import { Icons } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Headphones size={24} className="text-red-600 mr-2" />
              EMINEM
            </h3>
            <p className="text-zinc-400 mb-6">
              The official fan page for Eminem, one of the greatest rappers of
              all time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/eminem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com/eminem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-600 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://facebook.com/eminem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://youtube.com/eminem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-600 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">LISTEN NOW</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-red-600 transition-colors"
                >
                  <Icons.spotify width={20} height={20} className="mr-2" />
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://music.apple.com/us/artist/eminem/111051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-zinc-400 hover:text-red-600 transition-colors"
                >
                  <AppleIcon size={20} className="mr-2" />
                  Apple Music
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">JOIN THE FANBASE</h3>
            <p className="text-zinc-400 mb-4">
              Sign up for the latest news, exclusive content and more.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-zinc-800 border border-zinc-700 px-4 py-2 flex-grow text-white focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-medium transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-zinc-500 text-sm">
          <p>
            © {new Date().getFullYear()} Eminem Fan Page. This is an unofficial
            fan page. All trademarks and copyrights belong to their respective
            owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
