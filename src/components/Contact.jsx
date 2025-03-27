import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const Contact = () => {
	return (
		<div className="px-6 max-w-[1000px] mx-auto md:my-12 " id="contact">
			<Reveal>
				<div classsName="grid grid-cols-2 place-items-center"></div>
				<div className="flex flex-col md:flex-row justify-center px-4 y-4">
					<div className="mt-3 max-w-lg">
						<h3 className="text-4xl font-semibold mb-4 text-gray-200 ">
							About
							<span className="text-yellow-300"> Me</span>
						</h3>
						<p className="text-gray-400 justify leading-7 w-11/12 mx-auto font-extralight text-lg">
							Enthusiastic and creative software developer with strong
							foundation in web development principles and a passion for
							user-centered design. Eager to learn and contribute to a
							fast-pased development environment. Proficient in HTML, CSS,
							JavaScript and React.
						</p>

						<div className="flex mt-10 items-center gap-2">
							<div className="bg-gray-800.40 px-6 py-5 rounded-lg">
								<h3 className="md:text-4xl text-2xl font-semibold text-white ">
									4<span>+</span>
								</h3>
								<p className="mb-4">
									<span className="text-xs md:text-base">Projects</span>
								</p>
								<h3 className="md:text-4xl text-2xl font-semibold text-white">
									1<span>+</span>
								</h3>
								<p>
									<span className="text-xs md:text-base ">
										Years of Experience
									</span>
								</p>
							</div>
						</div>
					</div>

					<form
						action="https://getform.io/f/bgddlvxa"
						method="post"
						className="w-full px-4 py-6 md:p-6 "
						id="contact"
					>
						<p className="text-gray-100 font-bold text-xl mb-2">
							Lets connect!
						</p>

						<input
							type="text"
							id="name"
							placeholder="Your name ..."
							name="name"
							className="mb-2 w-full rounded-md border border-Yellow-600 py-2 pl-2 pr-4 my-4"
						/>
						<input
							type="email"
							id="email"
							placeholder="Your Email ..."
							name="email"
							className="mb-2 w-full rounded-md border border-Yellow-600 py-2 pl-2 pr-4 my-4"
						/>

						<textarea
							id="message"
							placeholder="Your Message ..."
							cols="30"
							rows="4"
							name="message"
							className="mb-2 w-full rounded-md border border-Yellow-600 py-2 pl-2 pr-4 my-4"
						/>
						<button
							type="submit"
							className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-yellow-500 "
						>
							Send Message
						</button>
					</form>
				</div>
			</Reveal>
		</div>
	);
};

export default Contact;
