import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
	return (
		<div className="max-w=[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12 ">
			<div>
				<h3 className="text-2xl text-gray-200 font-semibold">
					Hizkiyas Bogale
				</h3>
				<div className="flex gap-6 text-gray-400 text-4xl">
					<motion.a href="https://github.com/hizki-rp">
						<FaGithubSquare />
					</motion.a>
					<a href="#">
						<FaInstagram />
					</a>
				</div>
			</div>

			<p className="text-gray-400">@2024 Hizkiyas B.</p>
		</div>
	);
};

export default Footer;
