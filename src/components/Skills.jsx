import {
	DiHtml5,
	DiCss3,
	DiJavascript1,
	DiReact,
	DiNodejsSmall,
	DiMongodb,
	DiGithubBadge,
} from "react-icons/di";
import Reveal from "../components/Reveal";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
	const skills = [
		{
			category: "Frontend",
			technologies: [
				{ name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
				{ name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
				{
					name: "Tailwind",
					icon: <RiTailwindCssFill className="text-blue-500" />,
				},
				{
					name: "JavaScript",
					icon: <DiJavascript1 className="text-yellow-600" />,
				},
				{ name: "React", icon: <DiReact className="text-blue-500" /> },
			],
		},
		{
			category: "Fullstack",
			technologies: [
				{ name: "Node", icon: <DiHtml5 className="text-green-500" /> },
				{ name: "Django", icon: <DiDjango className="text-green-600" /> },
				{
					name: "React",
					icon: <RiTailwindCssFill className="text-blue-600" />,
				},
				{ name: "Github", icon: <DiJavascript1 className="text-gray-600" /> },
			],
		},
	];
	return (
		<div
			className="max-w-[1000px] flex flex-col justify-center items-center mx-auto px-4 text-gray-200 pb-8 md:py-12"
			id="skills"
		>
			<Reveal>
				<h2 className="text-3xl font-bold mb-4 text-center ">Skills</h2>
				<p className="text-center mb-8">
					I worked on frontend projects. check them <t />
					<a
						href="#portfolio"
						className="underline hover:text-gray-600"
					>
						here
					</a>
				</p>
				<div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1000px] mx-auto">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="border border-yellow-900 p-6 rounded-lg bg-yellow-900/10 text-2xl opacity-4 shadow-lg max-w-[1000px] mx-auto"
						>
							<h3 className="mb-4 font-bold text-xl text-center">
								{skill.category}
							</h3>
							<div className="grid grid-cols-2 gap-4 ">
								{skill.technologies.map((tech, index) => (
									<div
										key={index}
										className="flex gap-4 items-center space-x-2"
									>
										<span className="flex gap-4 text-yellow-500 font-extralight text-2xl">
											{tech.name}
										</span>
										<span className="flex gap-4 text-yellow-500">
											{tech.icon}
										</span>
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
