import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="border-t border-gray-900 mt-12">
      <div className="max-w-[1000px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © 2025 Hizkiyas Gebregiorgis
        </p>
        <div className="flex gap-5 text-gray-600">
          <a href="https://github.com/hizki-rp" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <AiOutlineGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/hizkiyas-bogale-ab5675273" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <AiOutlineLinkedin size={18} />
          </a>
          <a href="mailto:hizkiyasbogale46@gmail.com" className="hover:text-white transition-colors">
            <AiOutlineMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
