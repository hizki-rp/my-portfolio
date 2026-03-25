import { useState } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../projects.js";

const TABS = [
  { id: "challenge", label: "Challenge" },
  { id: "architecture", label: "Architecture" },
  { id: "impact", label: "Impact" },
];

const tagColors = {
  "Personal Project": "text-cyan-400 border-cyan-900 bg-cyan-950/30",
  "Client Project": "text-purple-400 border-purple-900 bg-purple-950/30",
};

const ScreenshotCarousel = ({ screenshots, title }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrent((c) => (c + 1) % screenshots.length);

  return (
    <div className="relative w-full h-56 md:h-full overflow-hidden rounded-xl group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={screenshots[current]}
          alt={`${title} screenshot ${current + 1}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition"
        aria-label="Previous screenshot"
      >
        <AiOutlineLeft size={14} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition"
        aria-label="Next screenshot"
      >
        <AiOutlineRight size={14} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="absolute top-3 right-3 text-xs text-white/70 bg-black/40 px-2 py-0.5 rounded-full">
        {current + 1} / {screenshots.length}
      </span>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState("challenge");
  const isReversed = index % 2 !== 0;

  return (
    <Reveal>
      <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-6 mb-14`}>
        {/* Image / Carousel */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl group">
          {project.screenshots ? (
            <ScreenshotCarousel screenshots={project.screenshots} title={project.title} />
          ) : (
            <>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.links.site !== "#" && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 text-xs rounded-full hover:bg-white/20 transition"
                  >
                    <AiOutlineLink size={13} /> Live Site
                  </a>
                )}
                {project.links.github !== "#" && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 text-xs rounded-full hover:bg-white/20 transition"
                  >
                    <AiOutlineGithub size={13} /> GitHub
                  </a>
                )}
              </div>
            </>
          )}
        </div>

        {/* Case Study */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-2">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full border ${tagColors[project.type] || "text-gray-400 border-gray-700"}`}>
              {project.type}
            </span>
            <span className="text-gray-600 text-xs">{project.period}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-100 leading-tight">{project.title}</h3>
          <p className="text-gray-500 text-sm mb-4">{project.subtitle}</p>

          {/* Tabs */}
          <div className="flex gap-1.5 mb-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-cyan-500/15 border-cyan-500/60 text-cyan-400"
                    : "border-gray-800 text-gray-600 hover:border-gray-600 hover:text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[100px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="text-gray-400 text-sm leading-relaxed font-light"
              >
                {project[activeTab]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-16" id="portfolio">
      <Reveal>
        <h2 className="text-3xl font-bold mb-2 text-gray-100">Projects</h2>
        <p className="text-gray-500 text-sm mb-12">
          Each project through three lenses — the problem, the system, and the result.
        </p>
      </Reveal>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default Portfolio;
