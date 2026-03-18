import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGithub,
  DiDjango,
  DiPostgresql,
  DiPython,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdApi, MdDesignServices } from "react-icons/md";
import { TbBrandFigma } from "react-icons/tb";
import Reveal from "../components/Reveal";

const skillGroups = [
  {
    category: "Technical Foundations",
    description: "Backend systems, data, and infrastructure",
    color: "border-cyan-900 bg-cyan-900/10",
    accent: "text-cyan-400",
    technologies: [
      { name: "Python", icon: <DiPython className="text-yellow-400" /> },
      { name: "Django", icon: <DiDjango className="text-green-500" /> },
      { name: "PostgreSQL", icon: <DiPostgresql className="text-blue-400" /> },
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-400" /> },
      { name: "REST APIs", icon: <MdApi className="text-purple-400" /> },
      { name: "GitHub", icon: <DiGithub className="text-gray-300" /> },
    ],
  },
  {
    category: "Interaction & Design",
    description: "Frontend, UX, and responsive interfaces",
    color: "border-purple-900 bg-purple-900/10",
    accent: "text-purple-400",
    technologies: [
      { name: "React", icon: <DiReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
      { name: "HTML5", icon: <DiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <DiCss3 className="text-blue-500" /> },
      { name: "Responsive Design", icon: <MdDesignServices className="text-pink-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[1000px] flex flex-col justify-center items-center mx-auto px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Two complementary disciplines — systems that scale and interfaces that resonate.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className={`border ${group.color} p-6 rounded-xl shadow-lg flex-1`}
            >
              <h3 className={`font-bold text-lg mb-1 ${group.accent}`}>
                {group.category}
              </h3>
              <p className="text-gray-500 text-xs mb-5">{group.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {group.technologies.map((tech, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-gray-300 text-sm font-light">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
