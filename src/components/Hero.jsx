import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import profbest from "../assets/Portfolio-cart.png";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        const { clientX, clientY } = e;
        blobRef.current.style.transform = `translate(${clientX * 0.05}px, ${clientY * 0.05}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  const name = "Hizkiyas Gebregiorgis".split(" ");

  return (
    <section className="relative min-h-screen flex items-center py-12 overflow-hidden bg-black">
      {/* Animated mesh gradient blob */}
      <div
        ref={blobRef}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.4) 50%, transparent 70%)",
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full relative z-10">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Engineer",
                  1200,
                  "Product Architect",
                  1200,
                  "React & Django Specialist",
                  1200,
                  "Mobile App Developer",
                  1200,
                ]}
                speed={50}
                repeat={Infinity}
                className="font-medium text-cyan-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-6 block"
              />
            </motion.div>

            {/* Text reveal animation */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                className="font-bold text-white leading-none"
              >
                {name[0]}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textReveal}
                className="font-bold gradient-text leading-none"
              >
                {name[1]}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-8 text-sm md:text-base font-light text-gray-400 max-w-lg leading-relaxed"
            >
              I build intelligent systems where complex backend logic meets
              intuitive user experience. Specialist in React, Django, and
              full-stack architecture — shipping production apps used by real
              people at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <MagneticButton>
                <a
                  href="#portfolio"
                  className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white rounded-full overflow-hidden group glass glass-hover"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity rounded-full" />
                  <span className="relative z-10">View Projects</span>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://indigo-joellen-86.tiiny.site/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-gray-300 rounded-full glass glass-hover"
                >
                  Download CV
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex items-center gap-6 mt-10"
            >
              <a href="https://github.com/hizki-rp" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                <AiOutlineGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/hizkiyas-bogale-ab5675273" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                <AiOutlineLinkedin size={20} />
              </a>
              <a href="mailto:hizkiyasbogale46@gmail.com" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                <AiOutlineMail size={20} />
              </a>
              <span className="text-gray-700 text-xs ml-2">Addis Ababa, Ethiopia</span>
            </motion.div>
          </div>

          {/* Profile image with parallax */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <img
                className="relative w-full max-w-[280px] lg:max-w-[340px] rounded-2xl glass"
                src={profbest}
                alt="Hizkiyas Gebregiorgis"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
