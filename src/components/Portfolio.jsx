import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { projects } from "../../projects.js";

const Portfolio = () => {
	return (
		<div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
			<h2 className="text-3xl text-gray-200 mb-8 ">Portfolio</h2>

			{projects.map((project, index) => (
				<Reveal key={project.id}>
					<div
						className={`flex flex-col md:flex-row ${
							index % 2 !== 0 ? "md:flex-row-reverse" : ""
						} mb-12`}
					>
						{/* Image and Overlay Container */}
						<div className="w-full md:w-1/2 p-4 relative group">
							<img
								src={project.img}
								alt={project.title}
								className="w-full h-full object-cover rounded-lg shadow-lg"
							/>
							{/* Hover Overlay */}
							<motion.div
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-6 rounded-lg transition-opacity duration-300"
							>
								<p className="text-gray-200 text-center text-sm md:text-base font-extralight mb-4">
									{project.description}
								</p>
								<div className="flex gap-4">
									<a
										href={project.links.site}
										className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
									>
										View Site
									</a>
									{project.links.github !== "#" && (
										<a
											href={project.links.github}
											className="p-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
										>
											<AiOutlineGithub size={24} className="text-slate-gray-400" />
										</a>
									)}
								</div>
							</motion.div>
						</div>
						{/* Project Title */}
						<div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
							<h3 className="text-2xl font-semibold text-gray-300 mb-4 text-center">
								{project.title}
							</h3>
						</div>
					</div>
				</Reveal>
			))}
		</div>
	);
};

export default Portfolio;
