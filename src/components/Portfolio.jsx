import { AiOutlineGithub } from "react-icons/ai";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import Reveal from "../components/Reveal";

const Portfolio = () => {
	const projects = [
		{
			img: project1,
			title: "project #1",
			description: "React API project styled with CSS3",
			links: {
				site: "https://my-react-app-swart-ten.vercel.app/",
				github: "https://github.com/hizki-rp/my-react-app.git",
			},
		},
		{
			img: project2,
			title: "project #2",
			description: "UI for frontend development using React and Tailwindcss",
			links: {
				site: "https://hizki-rp.github.io/nike-project/",
				github: "https://github.com/hizki-rp/nike-project.git",
			},
		},
		{
			img: project3,
			title: "project #3",
			description: "Wordpress Internship project with elementor",
			links: {
				site: "https://lab26.wiplab.net/",
				github: "#",
			},
		},
		{
			img: project4,
			title: "project #4",
			description:
				"Advanced CSS3 form completely compatible with themes and popular browsers.",
			links: {
				site: "https://ep13.wiplab.net/contact-us-7-two/",
				github: "#",
			},
		},
		{
			img: project5,
			title: "project #5",
			description: "UI for frontend development using React",
			links: {
				site: "https://hizki-rp.github.io/postDesign/",
				github: "https://github.com/hizki-rp/postDesign.git",
			},
		},
		{
			img: project6,
			title: "project #5",
			description: "UI for frontend development using React",
			links: {
				site: "https://hizki-rp.github.io/TechySonic/",
				github: "https://github.com/hizki-rp/TechySonic.git",
			},
		},
	];
	return (
		<div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
			<h2 className="text-3xl text-gray-200 mb-8 ">Portfolio</h2>

			{projects.map((project, index) => (
				<Reveal>
					<div
						key={index}
						className={`flex flex-col md:flex-row ${
							index % 2 !== 0 ? "md:flex-row-reverse" : ""
						} mb-12`}
					>
						{project.title}

						<div className="w-full md:w-1/2 p-4">
							<img
					     		src={project.img}
								alt={project.title}
								className="w-full h-full object-cover rounded-lg shadow-lg"
							/>
						</div>
						<div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
							<h3 className="text-2xl font-semibold text-gray-200 mb-4 ">
								{project.title}
							</h3>
							<p className="text-gray-200 mb-4">{project.description}</p>
							<div className="flex gap-10">
								<a
									href={project.links.site}
									className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
								>
									View Site
								</a>
								<a
									href={project.links.github}
									className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
								>
									<AiOutlineGithub size={30} className="text-slate-gray-400" />
								</a>
							</div>
						</div>
					</div>
				</Reveal>
			))}
		</div>
	);
};

export default Portfolio;
