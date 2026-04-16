import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { to: "skills", label: "Skills" },
  { to: "portfolio", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuVariants = {
    open: { x: 0, transition: { stiffness: 20, damping: 15 } },
    closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-white font-semibold text-lg tracking-tight">
            Hizkiyas<span className="gradient-text">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex relative group">
            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-cyan-500/30" />
            <a
              href="https://indigo-joellen-86.tiiny.site/"
              target="_blank"
              rel="noreferrer"
              className="relative px-5 py-1.5 text-sm font-medium text-white bg-black rounded-full"
            >
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setNav(!nav)}
            aria-expanded={nav}
            aria-label="Toggle menu"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden fixed left-0 top-0 w-full min-h-screen bg-black z-40 flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
            className="text-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
        <div className="relative group mt-2">
          <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
          <a
            href="https://indigo-joellen-86.tiiny.site/"
            target="_blank"
            rel="noreferrer"
            className="relative px-6 py-2 text-sm font-medium text-white bg-black rounded-full block"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
