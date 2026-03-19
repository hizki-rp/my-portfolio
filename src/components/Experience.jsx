import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Marvelous Creative Technologies PLC",
    role: "Software Developer",
    period: "Mar 2024 – Present",
    location: "Addis Ababa",
    type: "work",
    bullets: [
      "Modernized a legacy WordPress site by integrating React and Tailwind CSS, reducing load times by 50%.",
      "Designed and developed responsive, modern websites for various clients, establishing their online presence and supporting business growth.",
    ],
  },
  {
    company: "GAO Tek Inc.",
    role: "Web Developer Intern",
    period: "Jan 2024 – Jun 2024",
    location: "Remote",
    type: "work",
    bullets: [
      "Engineered and optimized a dynamic contact form with A/B testing, increasing completion rates by 25% and contributing to a 15% uplift in site conversion.",
      "Achieved 95% cross-browser compatibility, boosting form submissions by 30%.",
      "Collaborated with the content team to optimize multimedia assets, improving page load speeds and user retention.",
    ],
  },
  {
    company: "Mekelle University",
    role: "BSc in Software Engineering",
    period: "Graduated Apr 2023",
    location: "Mekelle, Tigray",
    type: "education",
    bullets: [],
  },
];

const Experience = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16" id="experience">
      <Reveal>
        <h2 className="text-3xl font-bold mb-2 text-gray-100">Experience</h2>
        <p className="text-gray-500 text-sm mb-10">Professional background and education.</p>
      </Reveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <Reveal key={index}>
              <div className="md:pl-12 relative">
                {/* Timeline dot */}
                <div className={`absolute left-3 top-5 w-2.5 h-2.5 rounded-full border-2 hidden md:block ${
                  exp.type === "education"
                    ? "border-yellow-400 bg-black"
                    : "border-cyan-400 bg-black"
                }`} />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border rounded-xl p-5 ${
                    exp.type === "education"
                      ? "border-yellow-900/50 bg-yellow-950/10"
                      : "border-gray-800 bg-gray-900/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-gray-100 font-semibold text-base">{exp.company}</h3>
                      <p className={`text-sm font-medium ${exp.type === "education" ? "text-yellow-400" : "text-cyan-400"}`}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-gray-500 text-xs">{exp.period}</p>
                      <p className="text-gray-600 text-xs">{exp.location}</p>
                    </div>
                  </div>
                  {exp.bullets.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-gray-400 text-sm font-light flex gap-2">
                          <span className="text-gray-600 mt-1 shrink-0">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
