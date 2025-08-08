import { useState, useEffect } from "react";
import Button from "./ui/menu-button";
import { motion } from "motion/react";
import MainNav from "./main-nav";

const menu = {
  open: {
    width: "99vw",
    height: "99vh",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  // Block body scroll when menu is active
  useEffect(() => {
    if (isActive) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Cleanup function
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isActive]);

  return (
    <div className="fixed top-5 right-5 z-40 cursor-pointer">
      <motion.div
        className="absolute bg-[#d42e2e] rounded-[25px] overflow-hidden"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {isActive && <MainNav onClick={setIsActive} />}
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
