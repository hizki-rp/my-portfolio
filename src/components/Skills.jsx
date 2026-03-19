import {
  DiHtml5, DiCss3, DiJavascript1, DiReact,
  DiNodejsSmall, DiGithub, DiDjango, DiPostgresql, DiPython,
} from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { MdApi } from "react-icons/md";
import { SiFramer, SiExpress } from "react-icons/si";
import Reveal from "./Reveal";

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
    <div
      className="max-w-[1000px] mx-auto px-4 py-16"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-2 text-gray-100">Skills</h2>
        <p className="text-gray-500 text-sm mb-10">
          Full-stack across the entire product lifecycle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <div key={i} className={`border ${group.color} p-5 rounded-xl`}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <h3 className={`font-semibold text-sm tracking-wide uppercase ${group.accent}`}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {group.technologies.map((tech, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-5 border border-gray-800 bg-gray-900/20 p-5 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <h3 className="font-semibold text-sm tracking-wide uppercase text-yellow-400">Languages</h3>
          </div>
          <div className="flex gap-6">
            <span className="text-gray-300 text-sm">English <span className="text-gray-600 text-xs ml-1">Fluent</span></span>
            <span className="text-gray-300 text-sm">Japanese <span className="text-gray-600 text-xs ml-1">N4 Level</span></span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
