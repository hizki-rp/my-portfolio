import {
  DiHtml5, DiCss3, DiJavascript1, DiReact,
  DiNodejsSmall, DiGithub, DiDjango, DiPostgresql, DiPython,
} from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { MdApi } from "react-icons/md";
import { SiFramer, SiExpress } from "react-icons/si";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    color: "border-cyan-900/60 bg-cyan-950/20",
    accent: "text-cyan-400",
    dot: "bg-cyan-400",
    technologies: [
      { name: "React", icon: <DiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "HTML5", icon: <DiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <DiCss3 className="text-blue-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
    ],
  },
  {
    category: "Backend",
    color: "border-purple-900/60 bg-purple-950/20",
    accent: "text-purple-400",
    dot: "bg-purple-400",
    technologies: [
      { name: "Python", icon: <DiPython className="text-yellow-300" /> },
      { name: "Django", icon: <DiDjango className="text-green-500" /> },
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "PostgreSQL", icon: <DiPostgresql className="text-blue-400" /> },
      { name: "REST APIs", icon: <MdApi className="text-purple-400" /> },
      { name: "JWT Auth", icon: <MdApi className="text-orange-400" /> },
    ],
  },
  {
    category: "Tools & Methods",
    color: "border-gray-800 bg-gray-900/20",
    accent: "text-gray-300",
    dot: "bg-gray-400",
    technologies: [
      { name: "Git", icon: <DiGithub className="text-gray-300" /> },
      { name: "WordPress", icon: <DiNodejsSmall className="text-blue-400" /> },
      { name: "A/B Testing", icon: <MdApi className="text-green-400" /> },
      { name: "Responsive Design", icon: <DiCss3 className="text-pink-400" /> },
      { name: "Agile", icon: <MdApi className="text-yellow-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16" id="skills">
      <Reveal>
        <h2 className="font-bold mb-2 text-gray-100">Skills</h2>
        <p className="text-gray-500 text-sm mb-10">
          Full-stack across the entire product lifecycle.
        </p>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-fr">
          {/* Frontend - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`md:col-span-3 md:row-span-2 glass rounded-2xl p-6 ${skillGroups[0].color}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className={`w-2 h-2 rounded-full ${skillGroups[0].dot}`} />
              <h3 className={`font-semibold text-sm tracking-wide uppercase ${skillGroups[0].accent}`}>
                {skillGroups[0].category}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skillGroups[0].technologies.map((tech, j) => (
                <div key={j} className="flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-gray-300 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`md:col-span-3 md:row-span-2 glass rounded-2xl p-6 ${skillGroups[1].color}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className={`w-2 h-2 rounded-full ${skillGroups[1].dot}`} />
              <h3 className={`font-semibold text-sm tracking-wide uppercase ${skillGroups[1].accent}`}>
                {skillGroups[1].category}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skillGroups[1].technologies.map((tech, j) => (
                <div key={j} className="flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-gray-300 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools - Medium card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`md:col-span-4 glass rounded-2xl p-6 ${skillGroups[2].color}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 rounded-full ${skillGroups[2].dot}`} />
              <h3 className={`font-semibold text-sm tracking-wide uppercase ${skillGroups[2].accent}`}>
                {skillGroups[2].category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {skillGroups[2].technologies.map((tech, j) => (
                <div key={j} className="flex items-center gap-2">
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-gray-300 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages - Small card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 glass rounded-2xl p-6 border-yellow-900/60 bg-yellow-950/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <h3 className="font-semibold text-sm tracking-wide uppercase text-yellow-400">Languages</h3>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-300 text-sm">English <span className="text-gray-600 text-xs">Fluent</span></span>
              <span className="text-gray-300 text-sm">Japanese <span className="text-gray-600 text-xs">N4</span></span>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
