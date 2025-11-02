import { motion } from "framer-motion";
import { MdDescription } from "react-icons/md";
import Reveal from "../components/Reveal";

const experiences = [
    {
		company: "Marveles Creative Technologies",
		period: "Jan-2025 - present",
		Description:
			"Full stack web developer",
	},		
	{
		company: "GAO Tek Inc",
		period: "Jan-2023 - June-2023",
		Description:
			"As a Web Developer Intern, I was tasked with enhancing user engagement and building client websites. \n\n- Engineered a custom, interactive contact form using advanced CSS and JavaScript, resulting in a more engaging user experience for a WordPress client. \n- Ensured cross-browser compatibility and theme independence for the form, increasing its reusability across projects. \n- Developed and launched a 15+ page, fully responsive WordPress site for Enviro Finance Solutions using Elementor, delivering a professional and content-rich platform for the client.",
	},
	{
		company: "Mekelle University",
		period: "2019 - 2023",
		Description: "Software Engineering",
	},
];

const Experience = () => {
	return (
		<div className="p-8 m-auto flex flex-col items-center">
			<motion.div
				className="text-4xl text-gray-200 font-bold text-center mb-12 flex"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
			>
				Experience & Education
			</motion.div>
			<motion.div initial="hidden" animate="visible">
				{experiences.map((exp, index) => (
					<Reveal>
						<motion.div
							key={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 1 }}
							className=" max-w-[700px] mx-auto font-semibold border-purple-600 p-6 rounded-lg shadow md bg-purple-900/10 hover:shadow-xl transition-shadow duration-300 background-yellow-700/10 my-4"
						>
							<h2 className="text-gray-100 text-2xl font-semibold">
								{exp.company}
							</h2>
							<p className="text-gray-300 ">{exp.period}</p>
							<p
								className="text-gray-500 mt-4"
								style={{ whiteSpace: "pre-line" }}
							>
								{exp.Description}
							</p>
						</motion.div>
					</Reveal>
				))}
			</motion.div>
		</div>
	);
};

export default Experience;
