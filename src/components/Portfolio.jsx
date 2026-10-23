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
  "Work Project": "text-purple-400 border-purple-900 bg-purple-950/30",
  Founder: "text-yellow-400 border-yellow-900 bg-yellow-950/30",
  "AI Product": "text-pink-400 border-pink-900 bg-pink-950/30",
};

const ProjectLinks = ({ links }) => {
  if (links.site === "#" && links.github === "#") return null;
  return (
    <div className="flex gap-2 mt-4">
      {links.site !== "#" && (
        <a
          href={links.site}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 glass glass-hover text-gray-200 text-xs rounded-full"
        >
          <AiOutlineLink size={13} /> Live Site
        </a>
      )}
      {links.github !== "#" && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 glass glass-hover text-gray-200 text-xs rounded-full"
        >
          <AiOutlineGithub size={13} /> GitHub
        </a>
      )}
    </div>
  );
};

// Shown until a project has a screenshot
const ProjectPlaceholder = ({ project }) => (
  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-cyan-950/60 via-black to-purple-950/60 flex flex-col items-center justify-center text-center px-6">
    <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
    <p className="relative text-3xl md:text-4xl font-bold gradient-text">{project.title}</p>
    <p className="relative mt-2 text-gray-500 text-xs tracking-[0.2em] uppercase">{project.type}</p>
  </div>
);

const slide = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.25 },
};

const displayUrl = (project) => {
  if (project.displayUrl) return project.displayUrl;
  if (project.links.site === "#") return project.title.toLowerCase().replace(/\s+/g, "");
  return new URL(project.links.site).host.replace(/^www\./, "");
};

// Web screenshots: full width, never cropped, inside a browser window
const BrowserFrame = ({ src, alt, url, index }) => (
  <div className="absolute inset-0 p-5 md:p-6 flex items-center justify-center">
    <div className="w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-gray-900">
      <div className="flex items-center gap-1.5 px-3 h-6 bg-gray-800/90 border-b border-white/5">
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-green-400/70" />
        <span className="ml-2 flex-1 max-w-[60%] truncate text-[10px] text-gray-400 bg-black/30 rounded px-2 leading-4">
          {url}
        </span>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.img key={index} src={src} alt={alt} {...slide} className="block w-full h-auto" />
      </AnimatePresence>
    </div>
  </div>
);

// Mobile screenshots: full height, never cropped, inside a phone
const PhoneFrame = ({ src, alt, index }) => (
  <div className="absolute inset-0 py-5 md:py-6 flex items-center justify-center">
    <div className="h-full rounded-[1.6rem] border-[5px] border-gray-800 bg-black shadow-2xl shadow-black/60 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img key={index} src={src} alt={alt} {...slide} className="block h-full w-auto" />
      </AnimatePresence>
    </div>
  </div>
);

// Photos already close to 4:3 fill the stage
const CoverFrame = ({ src, alt, index }) => (
  <>
    <AnimatePresence mode="wait" initial={false}>
      <motion.img
        key={index}
        src={src}
        alt={alt}
        {...slide}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
  </>
);

const ProjectMedia = ({ project, images }) => {
  const [current, setCurrent] = useState(0);
  const count = images.length;
  const frame = project.frame || "browser";

  const prev = () => setCurrent((c) => (c - 1 + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);

  const props = {
    src: images[current],
    alt: `${project.title} screenshot ${current + 1}`,
    index: current,
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-cyan-950/50 via-gray-950 to-purple-950/50">
      <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      {frame === "phone" && <PhoneFrame {...props} />}
      {frame === "cover" && <CoverFrame {...props} />}
      {frame === "browser" && <BrowserFrame {...props} url={displayUrl(project)} />}

      {count > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 glass glass-hover rounded-full text-white z-10"
            aria-label="Previous screenshot"
          >
            <AiOutlineLeft size={14} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 glass glass-hover rounded-full text-white z-10"
            aria-label="Next screenshot"
          >
            <AiOutlineRight size={14} />
          </button>

          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/30"}`}
              />
            ))}
          </div>

          <span className="absolute top-2 right-2 text-[10px] text-white/80 glass px-2.5 py-0.5 rounded-full z-10">
            {current + 1} / {count}
          </span>
        </>
      )}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState("challenge");
  const isReversed = index % 2 !== 0;
  const images = project.screenshots || (project.img ? [project.img] : null);

  return (
    <Reveal>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} md:items-center gap-6 md:gap-8 mb-14`}
      >
        {/* Image / Carousel */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-1/2 shrink-0 relative group"
        >
          {images ? (
            <ProjectMedia project={project} images={images} />
          ) : (
            <ProjectPlaceholder project={project} />
          )}
        </motion.div>

        {/* Case Study */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-2">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-3 py-1 rounded-full border glass ${tagColors[project.type] || "text-gray-400 border-gray-700"}`}>
              {project.type}
            </span>
            {project.period && <span className="text-gray-600 text-xs">{project.period}</span>}
          </div>

          <h3 className="font-bold text-gray-100 leading-tight">{project.title}</h3>
          <p className={`text-gray-500 text-sm ${project.domain ? "mb-1" : "mb-4"}`}>{project.subtitle}</p>
          {project.domain && (
            <p className="text-cyan-500/80 text-xs italic mb-4">{project.domain}</p>
          )}

          {/* Tabs */}
          <div className="flex gap-1.5 mb-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "glass bg-cyan-500/15 border-cyan-500/60 text-cyan-400"
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

          <ProjectLinks links={project.links} />
        </div>
      </motion.div>
    </Reveal>
  );
};

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-16" id="portfolio">
      <Reveal>
        <h2 className="font-bold mb-2 text-gray-100">Projects</h2>
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
