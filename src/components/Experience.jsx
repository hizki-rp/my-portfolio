import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "SmartLease",
    role: "Co-founder & Software Engineer",
    period: "2026 – Present",
    location: "EAII AI Startup Competition · Addis Ababa",
    type: "work",
    bullets: [
      "Co-founding an AI-driven leasing startup in the Ethiopian Artificial Intelligence Institute's national AI Startup Competition; building the MVP.",
      "Leading architecture, data model and AI features while working with teammates on market research and user needs.",
    ],
  },
  {
    company: "ClosetAI",
    role: "Full-Stack Developer Intern",
    period: "2026",
    location: "Product Manager Accelerator · Remote",
    type: "work",
    bullets: [
      "Built an AI personal stylist that turns photos of a user's clothes into a digital closet and generates three outfits tailored to occasion, mood and weather.",
      "Collaborated with the team's data scientists on an OpenAI-based RAG pipeline, building the application and data layer that grounds it in each user's wardrobe.",
      "Developed full-stack in Next.js with Supabase, Clerk and Cloudflare R2 from the PRD and Figma designs; designed the database schema.",
      "Demoed the MVP with a cross-functional team of PMs, designers and engineers — 3rd place and Tier 1: AI Trailblazer.",
    ],
  },
  {
    company: "Marvels Creative Technologies PLC",
    role: "Full-Stack Developer (part-time)",
    period: "Mar 2024 – Present",
    location: "Addis Ababa",
    type: "work",
    bullets: [
      "Built HomePath, a mobile-first real-estate platform where Addis Ababa developers list apartments with unit sizes, bedrooms and payment plans.",
      "Develop Django back ends and React/Next.js front ends with Tailwind CSS for client products.",
      "Modernized a legacy WordPress site with React and Tailwind CSS, cutting load times by 50%.",
    ],
  },
  {
    company: "GAO Tek Inc.",
    role: "Web Developer",
    period: "Jan 2024 – Jun 2024",
    location: "Remote",
    type: "work",
    bullets: [
      "Delivered a 15+ page corporate website and improved load times by 35%.",
      "Engineered and optimized a dynamic contact form with A/B testing, increasing completion rates by 25% and contributing to a 15% uplift in site conversion.",
      "Achieved 95% cross-browser compatibility, boosting form submissions by 30%.",
      "Collaborated with the content team to optimize multimedia assets, improving page load speeds and user retention.",
    ],
  },
  {
    company: "Product Manager Accelerator",
    role: "AI Product Program",
    period: "2026",
    location: "Remote",
    type: "education",
    bullets: [
      "Intensive, team-based program covering product discovery, PRDs, user research and AI product delivery; awarded Tier 1: AI Trailblazer.",
    ],
  },
  {
    company: "Mekelle University",
    role: "BSc in Software Engineering",
    period: "Graduated Apr 2023 · CGPA 3.29 / 4.00",
    location: "Mekelle, Ethiopia",
    type: "education",
    bullets: [
      "Core areas: software design and architecture, databases, web engineering, algorithms and data structures.",
    ],
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
