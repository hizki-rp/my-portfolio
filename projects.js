import project1 from "./src/assets/project1.png";
import project2 from "./src/assets/project2.png";
import project3 from "./src/assets/project3.png";
import project4 from "./src/assets/project4.png";
import project8 from "./src/assets/project8.jpg";

export const projects = [
  {
    id: "study-abroad",
    img: project1,
    title: "Addis Temari — Study Abroad Platform",
    challenge:
      "Ethiopian students navigating study abroad faced a fragmented, confusing process — scattered information, no centralized application tracking, and zero guidance on university selection. The goal was to simplify this entire journey into a single, intuitive platform.",
    architecture:
      "Full-stack system built with Django REST Framework and React. PostgreSQL database with normalized schemas for universities, programs, and applicant profiles. JWT-based authentication, role-based access control for admin/student dashboards, and a RESTful API layer decoupling frontend from backend. Deployed on a cloud VPS with Nginx + Gunicorn.",
    impact:
      "Serving 500+ active users. Reduced average application research time significantly by centralizing university data. Admin dashboard processes and tracks dozens of applicant submissions monthly.",
    links: {
      site: "https://addistemari.com/",
      github: "#",
    },
  },
  {
    id: "moviespot",
    img: project2,
    title: "MovieSpot",
    challenge:
      "Users wanted a fast, searchable way to discover movies without wading through bloated streaming UIs. The challenge was building a clean, responsive interface that surfaces relevant results instantly.",
    architecture:
      "React SPA consuming the OMDb REST API. Client-side state management for search queries and results. Debounced search input to minimize redundant API calls. Deployed on Vercel with zero-config CI/CD.",
    impact:
      "Demonstrates production-grade API integration patterns and responsive UI design. Live on Vercel with instant global CDN delivery.",
    links: {
      site: "https://my-react-app-swart-ten.vercel.app/",
      github: "https://github.com/hizki-rp/my-react-app.git",
    },
  },
  {
    id: "ayata-travel",
    img: project8,
    title: "AYATA TRAVEL",
    challenge:
      "A travel company needed a professional web presence that communicated trust and showcased their services clearly to both local and international clients.",
    architecture:
      "React application styled with Tailwind CSS. Component-driven architecture for reusable section layouts. Fully responsive grid system adapting across mobile, tablet, and desktop breakpoints. Hosted on GitHub Pages.",
    impact:
      "Delivered a production client site now live at ayatatourandtravel.com. Improved the client's digital presence with a fully responsive, professionally designed platform.",
    links: {
      site: "https://ayatatourandtravel.com/",
      github: "https://hizki-rp.github.io/ayata-travel/",
    },
  },
  {
    id: "nike-spa",
    img: project3,
    title: "Nike SPA",
    challenge:
      "Recreate the feel of a premium e-commerce brand experience — fast, visually sharp, and responsive — as a frontend engineering exercise.",
    architecture:
      "React SPA with Tailwind CSS utility-first styling. Component hierarchy mirrors real e-commerce patterns: product grid, promotional banners, category navigation. Deployed on GitHub Pages.",
    impact:
      "Demonstrates ability to translate a high-fidelity brand design into a performant, responsive React application.",
    links: {
      site: "https://hizki-rp.github.io/nike-project/",
      github: "https://github.com/hizki-rp/nike-project.git",
    },
  },
  {
    id: "corp-website",
    img: project4,
    title: "Multi-Page Corporate Website",
    challenge:
      "A corporate client needed a comprehensive, content-rich website covering services, company info, and contact — built and delivered during an internship engagement.",
    architecture:
      "WordPress + Elementor for rapid multi-page delivery. Custom CSS for interactive contact form with cross-browser compatibility. 15+ pages structured for SEO and content management by non-technical staff.",
    impact:
      "Delivered a fully live 15+ page site for a real client. Demonstrated ability to ship production work under professional constraints.",
    links: {
      site: "https://lab26.wiplab.net/",
      github: "#",
    },
  },
];
