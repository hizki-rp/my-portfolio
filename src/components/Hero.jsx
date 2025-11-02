import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
	AiOutlineDiscord,
	AiOutlineGithub,
	AiOutlineLinkedin,
	AiOutlineWhatsApp,
} from "react-icons/ai";
import profbest from "../assets/profile-best1.png";

const Hero = () => {
	return (
		<section className="relative my-12 py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
			<div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
				<div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
					<div>
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
						>
							<TypeAnimation
								sequence={[
									"Full Stack Dev",
									1000,
									"React Specialist",
									1000,
									"Backend Engineer",
									1000,
								]}
								speed={50}
								repeat={Infinity}
								className="font-bold text-gray-400 text-xl md:text-2xl italic mb-4"
							/>
						</motion.div>
						<motion.h1
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 0.5 }}
							className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl"
						>
							Hey! I'm <span className="gradient-text">Hizkiyas</span>
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 1 }}
							className="mt-4 text-lg font-normal text-gray-400 sm:mt-8"
						>
							A creative Full-Stack Engineer with a passion for building robust,
							scalable web applications from concept to deployment.
						</motion.p>

						<div className="flex items-center gap-8 mt-8 sm:mt-12">
							<p className="text-lg font-normal text-white">Connect with me</p>
							<div className="flex gap-6 text-gray-400">
								<motion.a whileHover={{ scale: 1.2, color: 'white' }} href="https://github.com/hizki-rp" title="GitHub">
									<AiOutlineGithub size={30} />
								</motion.a>
								<motion.a whileHover={{ scale: 1.2, color: 'white' }} href="https://linkedin.com/in/hizkiyas-bogale-ab5675273" title="LinkedIn">
									<AiOutlineLinkedin size={30} />
								</motion.a>
								<motion.a whileHover={{ scale: 1.2, color: 'white' }} href="#" title="WhatsApp">
									<AiOutlineWhatsApp size={30} />
								</motion.a>
								<motion.a whileHover={{ scale: 1.2, color: 'white' }} href="#" title="Discord">
									<AiOutlineDiscord size={30} />
								</motion.a>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0">
							<svg className="blur-3xl filter opacity-70" style={{ filter: "blur(64px)" }} width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
								<defs>
									<linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
										<stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
										<stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="absolute inset-0">
							<img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
						</div>
						<motion.img
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1 }}
							className="relative w-full max-w-[14rem] mx-auto lg:max-w-[18rem]" src={profbest} alt="Hizkiyas Bogale"
							style={{ animation: 'float-animation 4s ease-in-out infinite', willChange: 'transform' }} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
