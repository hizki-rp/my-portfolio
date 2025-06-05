import { motion } from "framer-motion";
import { MdDescription } from "react-icons/md";
import Reveal from "../components/Reveal";

const experiences = [
	{
		company: "GAO Tek Inc",
		period: "Jan-2023 - June-2023",
		Description:
			"Web developer intern: \n Improved User Experience by implementing a user-friendly contact form with advanced features like transforming ordinary contact form input, buttons, select and other input fields and customizing them to be a more interactive and engaging.\n \n Added cross platform compatibility: Ensured the contact form functioned flawlessly across all major browsers (e.g., Chrome, Firefox, Safari) using appropriate CSS techniques, guaranteeing a consistent experience for all users. \n \n Implemented theme Independence: Leveraged CSS to create a theme-agnostic contact form that agregates seamlessly with any Wordpress theme, providing flexibility for future website design changes. \n Developed Content-Rich Wordpress Website for Enviro Finance Solutions: Utilized content provided by the content development team to build a well-structured, professional and fully responsive Wordpress website for Enviro Finance Solutions. \n This involved tasks like: creating an engaging and user-friendly web pages using Wordpress and Elementor website builder plugin.",
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
