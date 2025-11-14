import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const NAV_LINKS = [
  { title: "home", href: "#hero", img: "/assets/nav-link-previews/home.png" },
  {
    title: "about",
    href: "#about",
    img: "/assets/nav-link-previews/about.png",
  },
  {
    title: "achievements",
    href: "#experience",
    img: "/assets/nav-link-previews/achievements.png",
  },
  {
    title: "skills",
    href: "#skills",
    img: "/assets/nav-link-previews/skills.png",
  },
  {
    title: "project",
    href: "#projects",
    img: "/assets/nav-link-previews/projects.png",
  },
  // {
  //   title: "testimonials",
  //   href: "#testimonials",
  //   img: "/assets/nav-link-previews/testimonials.png",
  // },
  {
    title: "contact",
    href: "#contact",
    img: "/assets/nav-link-previews/contact.png",
  },
];

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
};
const height = {
  initial: { height: 0 },
  enter: {
    height: "auto",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: { height: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
};
const blur = {
  initial: { filter: "blur(0px)", opacity: 1 },
  open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
  closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
};
const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

function getChars(word) {
  return word.split("").map((char, i) => (
    <motion.span
      className="pointer-events-none"
      custom={[i * 0.02, (word.length - i) * 0.01]}
      variants={translate}
      initial="initial"
      animate="enter"
      exit="exit"
      key={char + i}
      style={{ display: "inline-block" }}
    >
      {char}
    </motion.span>
  ));
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if scrolled past threshold
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check scroll direction
      if (scrollTop > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`z-30 fixed top-0 left-0 w-full transition-colors duration-500 ease-in ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
      style={{
        background: isScrollingDown
          ? "transparent"
          : scrolled
          ? "linear-gradient(180deg, rgba(10,10,20,0.95) 0%, rgba(15,15,30,0.8) 100%)"
          : "transparent",
        boxShadow:
          scrolled && !isScrollingDown
            ? "0 10px 40px rgba(142, 173, 255, 0.1)"
            : "none",
        transition: "background 0.3s ease-in-out",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between max-w-8xl mx-auto px-6 py-0">
        <motion.a
          href="#hero"
          className="flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-24 object-contain mix-blend-screen"
          />
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="text-white font-semibold text-sm uppercase tracking-wider hover:text-blue-400 transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
            >
              {link.title}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-white via-blue-400 to-transparent group-hover:w-full transition-all duration-300"
                layoutId={`nav-underline-${idx}`}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsActive(!isActive)}
          className="md:hidden flex flex-col gap-2 focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full"
            animate={isActive ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full"
            animate={isActive ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full"
            animate={isActive ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-gray-900/50 to-transparent backdrop-blur-sm"
          >
            <motion.nav className="flex flex-col gap-4 px-6 py-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsActive(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-white font-semibold text-lg uppercase tracking-wider hover:text-blue-400 transition-colors duration-300"
                >
                  {link.title}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
