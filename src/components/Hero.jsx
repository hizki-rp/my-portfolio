import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion";
import {
	AiOutlineDiscord,
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineWhatsApp,
} from "react-icons/ai";
import profpic from "../assets/profpic.png";
import profbest from "../assets/profile-best1.png";
import {
	DiHtml5,
	DiCss3,
	DiJavascript1,
	DiReact,
	DiNodejsSmall,
} from "react-icons/di";
const Hero = () => {
	return (
		<div className="z-0 mt-24 pt-4 max-w-[1200px] mx-auto relative">
			<div className="grid md:grid-cols-2 place-items-center gap-8 max-md:px-12 ">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<TypeAnimation
						sequence={["Frontend Dev", 1000, "Webdesigner", 1000]}
						speed={50}
						repeat={Infinity}
						className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
					/>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
						className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
					>
						HEY!, I AM <br />
						<span className="text-yellow-500">Hizkiyas Bogale</span>
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1 }}
						className="text-gray-300 md:text-xl text-md mb-6 md:max-w-[500px] font-sans mt-2"
					>
						Enthusiastic and creative
						<span className="text-yellow-400"> Front-End Engineer</span> with
						strong foundation in web development principles and a passion for
						user-centered design. <br />
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1.5 }}
						className="flex items-center gap-6 md:mb-0 "
					>
						<motion.button className="z-10 cursor-pointer text-yellow-400 md:w-auto p-4 border border-purple-400 rounded-xl">
							<a href="https://indigo-joellen-86.tiiny.site/">Download CV</a>
						</motion.button>

						<div className="z-20 flex gap-6  text-purple-400 x-20 ">
							<motion.a whileHover={{ scale: 1.2 }} href="https://github.com/hizki-rp">
								<AiOutlineGithub size={30} />
							</motion.a>

							<motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/hizkiyas-bogale-ab5675273">
								<AiOutlineLinkedin size={30} />
							</motion.a>
							<motion.a whileHover={{ scale: 1.2 }} href="#">
								<AiOutlineWhatsApp size={30} />
							</motion.a>
							<motion.a whileHover={{ scale: 1.2 }} href="#">
								<AiOutlineDiscord size={30} />
							</motion.a>
						</div>
					</motion.div>
				</motion.div>

				<motion.img
					src={profbest}
					width={240}
					height={240}
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				></motion.img>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1, delay: 2 }}
				className="flex text-7xl px-12 md:px-0 w-full justify-center items-center py-14"
			>
				<p className="text-gray-200 mr-6">My Tech Stack</p>

				<DiHtml5 className="text-orange-600 mx-2" />
				<DiCss3 className="text-blue-600 mx-2" />
				<DiJavascript1 className="text-yellow-500 mx-2" />
				<DiReact className="text-blue-500 mx-2" />
				<DiNodejsSmall className="text-green-500 mx-2" />
			</motion.div>
			<div className="absolute inset-0 hidden md:block">
				<ShinyEffect left={0} top={0} size={1400} />
			</div>
		</div>
	);
};

export default Hero;
