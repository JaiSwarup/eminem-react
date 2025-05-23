import { useState } from "react";
import Button from "./ui/button";
import { motion } from "motion/react";
import MainNav from "./main-nav";

const menu = {
  open: {
    width: "380px",
    height: "550px",
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
  return (
    <div className="fixed top-5 right-5 z-40 cursor-pointer">
      <motion.div
        className="absolute bg-[#d42e2e] rounded-[25px] overflow-hidden"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <MainNav />
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
