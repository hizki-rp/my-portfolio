import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const toggleNav = () => {
		setNav(!nav);
	};

	const closeNav = () => {
		setNav(false);
	};
	const menuVariants = {
		open: {
			x: 0,
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
		closed: {
			x: "-100%",
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
	};
	return (
		<header className="fixed top-0 left-0 w-full py-4 bg-black/60 backdrop-blur-md sm:py-6 z-50">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					<div className="shrink-0">
						<a href="#" title="Hizkiyas Bogale" className="flex text-2xl font-bold">
							Hizkiyas B.
						</a>
					</div>

					<div className="flex md:hidden">
						<button
							type="button"
							className="text-white"
							onClick={toggleNav}
							aria-expanded={nav}
						>
							{nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
						</button>
					</div>

					<nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
						<Link to="skills" smooth={true} duration={500} className="text-base font-normal text-gray-400 transition-all duration-200 cursor-pointer hover:text-white">
							Skills
						</Link>
						<Link to="portfolio" smooth={true} duration={500} className="text-base font-normal text-gray-400 transition-all duration-200 cursor-pointer hover:text-white">
							Portfolio
						</Link>
						<Link to="contact" smooth={true} duration={500} className="text-base font-normal text-gray-400 transition-all duration-200 cursor-pointer hover:text-white">
							About / Contact
						</Link>
					</nav>

					<div className="relative hidden md:items-center md:justify-center md:inline-flex group">
						<div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
						<a href="https://indigo-joellen-86.tiiny.site/" title="Download CV" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">
							Download CV
						</a>
					</div>
				</div>

				<motion.div
					initial={false}
					animate={nav ? "open" : "closed"}
					variants={menuVariants}
					className="md:hidden fixed left-0 top-0 w-full min-h-screen bg-black z-40"
				>
					<div className="flex flex-col pt-24 pb-4 space-y-6 items-center">
						<Link to="skills" onClick={closeNav} smooth={true} duration={500} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
							Skills
						</Link>
						<Link to="portfolio" onClick={closeNav} smooth={true} duration={500} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
							Portfolio
						</Link>
						<Link to="contact" onClick={closeNav} smooth={true} duration={500} className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
							About / Contact
						</Link>
						<div className="relative inline-flex items-center justify-center group mt-4">
							<div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
							<a href="https://indigo-joellen-86.tiiny.site/" title="Download CV" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">
								Download CV
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</header>
	);
};

export default Navbar;
