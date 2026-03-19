import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import profbest from "../assets/profile-best1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-12 overflow-hidden bg-black">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
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
                className="font-medium text-cyan-400 text-base md:text-lg tracking-widest uppercase mb-4 block"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl leading-tight"
            >
              Hizkiyas<br />
              <span className="gradient-text">Gebregiorgis</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 text-base font-light text-gray-400 max-w-lg leading-relaxed"
            >
              I build intelligent systems where complex backend logic meets
              intuitive user experience. Specialist in React, Django, and
              full-stack architecture — shipping production apps used by real
              people at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a
                href="#portfolio"
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                <span className="relative">View Projects</span>
              </a>
              <a
                href="https://indigo-joellen-86.tiiny.site/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-gray-300 border border-gray-700 rounded-full hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex items-center gap-5 mt-8"
            >
              <a href="https://github.com/hizki-rp" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors duration-200">
                <AiOutlineGithub size={22} />
              </a>
              <a href="https://linkedin.com/in/hizkiyas-bogale-ab5675273" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors duration-200">
                <AiOutlineLinkedin size={22} />
              </a>
              <a href="mailto:hizkiyasbogale46@gmail.com" className="text-gray-500 hover:text-white transition-colors duration-200">
                <AiOutlineMail size={22} />
              </a>
              <span className="text-gray-700 text-sm ml-2">Addis Ababa, Ethiopia</span>
            </motion.div>
          </div>

          {/* Profile image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="opacity-30" style={{ filter: "blur(72px)" }} width="400" height="400" viewBox="0 0 444 536" fill="none">
                <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#heroGrad)" />
                <defs>
                  <linearGradient id="heroGrad" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[260px] lg:max-w-[320px] rounded-2xl"
              src={profbest}
              alt="Hizkiyas Gebregiorgis"
              style={{ animation: "float-animation 4s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
