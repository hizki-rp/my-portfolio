import React, { useState } from "react";
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
		<div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
			<div className="max-w-[1400px] mx-auto flex justify-between text-gray-100 text-xl px-12 h-20 items-center">
				<a href="#">HIBAnim</a>

				<ul className="hidden md:flex gap-12 x-10 cursor-pointer">
					<li>
						<Link to="skills" smooth={50} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to="portfolio" smooth={50} duration={500}>
							Portfolio
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={50} duration={500}>
							Contact
						</Link>
					</li>
				</ul>

				<div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
					{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
				</div>

				<motion.div
					initial={false}
					animate={nav ? "open" : "closed"}
					variants={menuVariants}
					className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
				>
					<ul className="font-semibold text-4xl space-y-8 text-center mt-24">
						<li className="cursor-pointer hover:text-slate-400">
							<Link to="skills" onClick={closeNav} smooth={50} duration={500}>
								About
							</Link>
						</li>
						<li className="cursor-pointer hover:text-slate-400">
							<Link
								to="portfolio"
								onClick={closeNav}
								smooth={50}
								duration={500}
							>
								Portfolio
							</Link>
						</li>
						<li className="cursor-pointer hover:text-slate-400">
							<Link to="contact" onClick={closeNav} smooth={50} duration={500}>
								Contact
							</Link>
						</li>
					</ul>
				</motion.div>
			</div>
		</div>
	);
};

export default Navbar;
