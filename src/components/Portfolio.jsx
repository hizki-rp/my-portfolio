import { AiOutlineGithub } from "react-icons/ai";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.jpg";

import Reveal from "../components/Reveal";

const Portfolio = () => {
	const projects = [
		{
			img: project1,
			title: "MovieSpot",
			description:
				"This is a responsive Movie Showcase Website built using React and styled with CSS. The website fetches real-time movie data from the OMDb API, allowing users to search for movies, view detailed information about each title, and explore trending films.",
			links: {
				site: "https://my-react-app-swart-ten.vercel.app/",
				github: "https://github.com/hizki-rp/my-react-app.git",
			},
		},
			{
			img: project7,
			title: "AYATA TRAVEL",
			description:
				" is a visually engaging and fully responsive web application built with React and styled using Tailwind CSS. Designed for a client, the project showcases various sections that highlight different aspects of the Company.",
			links: {
				site: "https://ayatatourandtravel.com/",
				github: "https://hizki-rp.github.io/ayata-travel/",
			},
		},
		{
			img: project2,
			title: "Nike SPA",
			description:
				" is a visually engaging and fully responsive web application built with React and styled using Tailwind CSS. Designed to emulate a professional e-commerce platform, the project showcases various sections that highlight different aspects of the Nike brand, including product categories, promotional banners, and featured items.",
			links: {
				site: "https://hizki-rp.github.io/nike-project/",
				github: "https://github.com/hizki-rp/nike-project.git",
			},
		},
		{
			img: project3,
			title: "Multi-Page Corporate Website",
			description:
				"This is a professional, multi-page corporate website designed and developed using WordPress and Elementor for a client during my internship at the company. The website features over 15 pages, offering a comprehensive platform tailored to the client’s needs, including sections for services, company information, contact forms, and more.",
			links: {
				site: "https://lab26.wiplab.net/",
				github: "#",
			},
		},
		{
			img: project4,
			title: "Advanced CSS3 Contact Form",
			description:
				"This project involves creating an Advanced CSS3 Contact Form as part of a WordPress-based website. The form extends the functionality of Contact Form 7 (CF7), incorporating custom CSS3 styling for a modern and user-friendly design. It is fully compatible with various WordPress themes and major browsers, ensuring a seamless experience for all users.",
			links: {
				site: "https://ep13.wiplab.net/contact-us-7-two/",
				github: "#",
			},
		},
		{
			img: project5,
			title: "Canva Layout Clone",
			description:
				"This project is a Canva Layout Clone showcasing the design and functionality of Canva’s editing page. Built entirely with HTML and CSS, the clone replicates the core layout and aesthetic of Canva’s user interface, emphasizing precision and attention to detail.",
			links: {
				site: "https://hizki-rp.github.io/postDesign/",
				github: "https://github.com/hizki-rp/postDesign.git",
			},
		},
		{
			img: project6,
			title: "TechySonic - E-commerce SPA",
			description:
				"TechySonic is a simple, single-page e-commerce application (SPA) built with React and styled using CSS. The project focuses on showcasing a catalog of various computer types, offering a clean and intuitive user interface for exploring products.",
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
								<a
									href={project.links.github}
									className={`px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 ${
										project.links.github === "#" ? "hidden" : ""
									}`}
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
