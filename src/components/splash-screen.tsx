import React, { useState, useEffect } from "react";
import image from "../assets/red-curtain.svg";
import { motion } from "motion/react";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Start animation on mount
  useEffect(() => {
    setIsStarted(true);
  }, []);

  // Hide overlay after curtain animation is done (max 6s for curtain + buffer)
  useEffect(() => {
    if (isStarted) {
      const timer = setTimeout(() => {
        setHidden(true);
        onFinish();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isStarted, onFinish]);

  if (hidden) return null;

  return (
    <div className="fixed top-0 z-50 inset-x-0 w-screen overflow-hidden h-screen pointer-events-none">
      <motion.div
        initial={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          filter: "brightness(180%)",
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transformOrigin: "top right",
        }}
        animate={
          isStarted
            ? {
                filter: "brightness(100%)",
                x: "-100%",
                rotate: 20,
                scaleX: 0,
                scaleY: 2,
              }
            : {}
        }
        transition={{
          filter: { duration: 2, ease: "easeInOut" },
          x: { duration: 4, ease: "easeInOut" },
          rotate: { duration: 4, ease: "easeInOut" },
          scaleX: { duration: 4, ease: "easeInOut" },
          scaleY: { duration: 4, ease: "easeInOut" },
        }}
      />

      <motion.div
        initial={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "50%",
          height: "100%",
          filter: "brightness(180%)",
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transformOrigin: "top left",
        }}
        animate={
          isStarted
            ? {
                filter: "brightness(100%)",
                x: "100%",
                rotate: -20,
                scaleX: 0,
                scaleY: 2,
              }
            : {}
        }
        transition={{
          filter: { duration: 2, ease: "easeInOut" },
          x: { duration: 4, ease: "easeInOut" },
          rotate: { duration: 4, ease: "easeInOut" },
          scaleX: { duration: 4, ease: "easeInOut" },
          scaleY: { duration: 4, ease: "easeInOut" },
        }}
      />
    </div>
  );
};

export default SplashScreen;
