import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "../components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../projects.js";

const TABS = [
  { id: "challenge", label: "The Challenge" },
  { id: "architecture", label: "The Architecture" },
  { id: "impact", label: "The Impact" },
];

const ProjectCard = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState("challenge");

  return (
    <Reveal key={project.id}>
      <div
        className={`flex flex-col md:flex-row ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        } mb-16 gap-6`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 relative group overflow-hidden rounded-lg">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4 flex gap-3">
            <a
              href={project.links.site}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 text-sm rounded-full hover:bg-white/20 transition duration-300"
            >
              View Site
            </a>
            {project.links.github !== "#" && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 rounded-full hover:bg-white/20 transition duration-300"
              >
                <AiOutlineGithub size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Case Study Panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            {project.title}
          </h3>

          {/* Tab Buttons */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                    : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
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
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <Reveal>
        <div className="mb-10">
          <h2 className="text-3xl text-gray-200 mb-2">Projects</h2>
          <p className="text-gray-500 text-sm">
            Each project viewed through three lenses — user problem, technical architecture, and real-world impact.
          </p>
        </div>
      </Reveal>

      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default Portfolio;
