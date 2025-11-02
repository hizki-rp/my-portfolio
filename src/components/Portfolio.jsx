import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "../components/Reveal";
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
						<div className="w-full md:w-1/2 p-4">
							<img
								src={project.img}
								alt={project.title}
								className="w-full h-full object-cover rounded-lg shadow-lg"
							/>
						</div>
						<div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
							<h3 className="text-2xl font-semibold text-yellow-600 opacity-3 mb-4 ">
								{project.title}
							</h3>
							<p className="text-gray-200 text-[14px] font-extralight mb-4">
								{project.description}
							</p>
							<div className="flex gap-10">
								<a
									href={project.links.site}
									className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
								>
									View Site
								</a>
								{project.links.github !== "#" && (
									<a
										href={project.links.github}
										className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
									>
										<AiOutlineGithub size={30} className="text-slate-gray-400" />
									</a>
								)}
							</div>
						</div>
					</div>
				</Reveal>
			))}
		</div>
	);
};

export default Portfolio;
