import project1 from "./src/assets/project1.png";
import project2 from "./src/assets/project2.png";
import project3 from "./src/assets/project3.png";
import project4 from "./src/assets/project4.png";
import project8 from "./src/assets/project8.jpg";

export const projects = [
  {
    id: "addis-temari",
    img: project1,
    title: "Addis Temari",
    subtitle: "Study Abroad Support Platform",
    period: "Jul 2025 – Sep 2025",
    type: "Personal Project",
    challenge:
      "International students had no centralized platform to research universities, track applications, or manage deadlines. The process was fragmented across dozens of websites with no personalization or guidance.",
    architecture:
      "Full-stack platform built with Django REST Framework and React. PostgreSQL database with normalized schemas for universities, programs, and applicants. JWT authentication, role-based dashboards (student/admin), searchable university database with advanced filtering (tuition, location, programs), and automated deadline reminder system.",
    impact:
      "Scaled to 500+ registered users and 50+ active daily users within 3 months of launch. Reduced student research time significantly through advanced filtering. Personalized dashboard handles application tracking, document management, and automated reminders.",
    links: {
      site: "https://addistemari.com/",
      github: "#",
    },
  },
  {
    id: "mertservice",
    img: project2,
    title: "MertService",
    subtitle: "Full-Stack Mobile Marketplace",
    period: "Feb 2026 – Mar 2026",
    type: "Client Project",
    challenge:
      "Users needed a fast, location-aware way to discover and book local service providers across 100+ categories — with trust and safety built in from day one.",
    architecture:
      "React Native frontend with Django backend. Geo-Precision tracking using the Haversine formula to sort providers by physical proximity. Axios interceptors for seamless JWT token refreshing and 401 error handling. Admin Control Center with real-time provider moderation, KYC document verification (Selfie vs. ID), and Expo push notification broadcasts.",
    impact:
      "Enabled real-time discovery across 100+ service categories. Geo-sorting reduced user search time by 40%. Secure admin 'God Mode' ensures platform integrity through KYC verification and real-time moderation.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    id: "ayata-travel",
    img: project8,
    title: "AYATA TRAVEL",
    subtitle: "Client Website",
    period: "2024",
    type: "Client Project",
    challenge:
      "A travel company needed a professional, visually engaging web presence to attract both local and international clients and communicate their services clearly.",
    architecture:
      "React application styled with Tailwind CSS. Component-driven architecture with fully responsive grid layouts across mobile, tablet, and desktop. Deployed on GitHub Pages with optimized asset loading.",
    impact:
      "Delivered a live production site at ayatatourandtravel.com. Established the client's digital presence and supported business growth with a modern, responsive platform.",
    links: {
      site: "https://ayatatourandtravel.com/",
      github: "https://hizki-rp.github.io/ayata-travel/",
    },
  },
  {
    id: "clinic-management",
    img: project3,
    title: "Clinic Management System",
    subtitle: "Personal Project",
    period: "2024",
    type: "Personal Project",
    challenge:
      "Clinics relying on paper-based workflows faced inefficiencies in patient tracking, appointment scheduling, and lifecycle management — leading to errors and lost data.",
    architecture:
      "Responsive React application automating the full clinic workflow. Digitally tracked patient data with CRUD operations, appointment management, and a clean dashboard UI for staff.",
    impact:
      "Automated clinic workflow end-to-end, replacing manual paper processes with a digital system for patient data management and lifecycle tracking.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    id: "gaotek-website",
    img: project4,
    title: "GAO Tek Corporate Website",
    subtitle: "Internship Project",
    period: "Jan 2024 – Jun 2024",
    type: "Client Project",
    challenge:
      "GAO Tek needed a comprehensive, professional multi-page corporate website to establish credibility and serve as a content-rich platform for their services.",
    architecture:
      "15+ page WordPress site built with Elementor. Custom CSS for an interactive, cross-browser-compatible contact form. Performance optimization through asset compression and code cleanup.",
    impact:
      "Improved page load times by 35% and reduced bounce rates. Contact form A/B testing increased completion rates by 25% and contributed to a 15% uplift in overall site conversion. Achieved 95% cross-browser compatibility.",
    links: {
      site: "https://lab26.wiplab.net/",
      github: "#",
    },
  },
];
