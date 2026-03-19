import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Reveal from "./Reveal";

const stats = [
  { value: "500+", label: "Active Users" },
  { value: "5+", label: "Projects Shipped" },
  { value: "2+", label: "Years Experience" },
];

const Contact = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-16" id="contact">
      <Reveal>
        <h2 className="text-3xl font-bold mb-2 text-gray-100">
          About & <span className="gradient-text">Contact</span>
        </h2>
        <p className="text-gray-500 text-sm mb-10">Let's build something together.</p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* About */}
          <div className="flex-1">
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
              Passionate and detail-oriented Software Engineer with expertise in building
              scalable, user-centric web applications. Proficient across the full stack —
              React and Next.js on the frontend, Django and Node.js on the backend.
              I ship production systems used by real people, from 500+ user platforms
              to real-time mobile marketplaces.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a href="mailto:hizkiyasbogale46@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <AiOutlineMail size={16} className="text-cyan-400" />
                hizkiyasbogale46@gmail.com
              </a>
              <a href="tel:+251943349980" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <AiOutlinePhone size={16} className="text-cyan-400" />
                +251-943-349-980
              </a>
              <a href="https://github.com/hizki-rp" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <AiOutlineGithub size={16} className="text-cyan-400" />
                github.com/hizki-rp
              </a>
              <a href="https://linkedin.com/in/hizkiyas-bogale-ab5675273" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <AiOutlineLinkedin size={16} className="text-cyan-400" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            action="https://getform.io/f/bgddlvxa"
            method="post"
            className="flex-1 flex flex-col gap-3"
          >
            <p className="text-gray-200 font-semibold text-base mb-1">Send a message</p>

            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-800 transition"
            />

            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-800 transition"
            />

            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows="5"
              className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-800 transition resize-none"
            />

            <button
              type="submit"
              className="relative w-full py-2.5 rounded-lg text-white text-sm font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500" />
              <span className="relative">Send Message</span>
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
