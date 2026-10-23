import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineTrophy, AiOutlineSafetyCertificate, AiOutlineExpand } from "react-icons/ai";
import Reveal from "./Reveal";

import aiEngineer from "../assets/certifications/images/ai-engineer.jpg";
import android from "../assets/certifications/images/android-udacity.jpg";
import japaneseAdvanced from "../assets/certifications/images/japanese-advanced.jpg";
import japaneseBasic from "../assets/certifications/images/japanese-basic.jpg";
import cultureDay from "../assets/certifications/images/japan-culture-day.jpg";
import englishProficiency from "../assets/certifications/images/english-proficiency.jpg";

const awards = [
  {
    title: "3rd Place & Tier 1: AI Trailblazer",
    issuer: "Product Manager Accelerator",
    year: "2026",
    detail: "ClosetAI, an AI personal stylist built with a cross-functional team of PMs, designers, engineers and data scientists.",
  },
  {
    title: "Competing Startup — SmartLease",
    issuer: "Ethiopian Artificial Intelligence Institute (EAII)",
    year: "2026",
    detail: "Co-founding an AI-driven leasing startup in the national AI Startup Competition.",
  },
  {
    title: "Founded Platform Acquired — Addis Temari",
    issuer: "Marvels Creative Technologies",
    year: "2025",
    detail: "Study-abroad platform that reached 500+ registered users in three months before acquisition.",
  },
];

const certificates = [
  {
    img: aiEngineer,
    title: "Certified AI Engineer",
    issuer: "PM Accelerator · AI PM Bootcamp",
    date: "2026",
    category: "AI",
    note: "Certificate no. e9352e65",
  },
  {
    img: android,
    title: "Android Developer Fundamentals",
    issuer: "Udacity Nanodegree",
    date: "Sep 2024",
    category: "Engineering",
    verify: "https://confirm.udacity.com/V33RU2EQ",
  },
  {
    img: englishProficiency,
    title: "English Language Proficiency",
    issuer: "Mekelle University Registrar",
    date: "Sep 2025",
    category: "Academic",
    portrait: true,
  },
  {
    img: japaneseAdvanced,
    title: "Japanese Language Program — Advanced 1",
    issuer: "Mekelle University",
    date: "Nov 2019 – Jan 2020",
    category: "Language",
  },
  {
    img: japaneseBasic,
    title: "Japanese Language Program — Basic",
    issuer: "Mekelle University & Embassy of Japan in Ethiopia",
    date: "Apr – Jun 2019",
    category: "Language",
  },
  {
    img: cultureDay,
    title: "Certificate of Appreciation — Japan Culture Day",
    issuer: "Mekelle University Japanese Language Program",
    date: "Dec 2019",
    category: "Culture",
  },
];

const focusAreas = [
  {
    title: "Human-Centred Interaction Design",
    text: "Studying the moment a person uses a product — where software succeeds or fails.",
  },
  {
    title: "Applied AI & Data",
    text: "Moving from integrating AI to designing intelligent systems grounded in users' own data.",
  },
  {
    title: "Technology for Emerging Economies",
    text: "Education, health and work tools built for people in places like Ethiopia, not designed elsewhere.",
  },
];

const categoryColors = {
  AI: "text-pink-400 border-pink-900 bg-pink-950/30",
  Engineering: "text-cyan-400 border-cyan-900 bg-cyan-950/30",
  Academic: "text-yellow-400 border-yellow-900 bg-yellow-950/30",
  Language: "text-purple-400 border-purple-900 bg-purple-950/30",
  Culture: "text-red-400 border-red-900 bg-red-950/30",
};

const Lightbox = ({ cert, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 text-gray-400 hover:text-white"
        >
          <AiOutlineClose size={24} />
        </button>
        <img
          src={cert.img}
          alt={cert.title}
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />
        <p className="text-gray-300 text-sm mt-3 text-center">
          {cert.title} · <span className="text-gray-500">{cert.issuer}</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

const Credentials = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16" id="credentials">
      <Reveal>
        <h2 className="font-bold mb-2 text-gray-100">
          Awards & <span className="gradient-text">Credentials</span>
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Recognition, certifications and the questions I want to pursue next.
        </p>
      </Reveal>

      {/* Awards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {awards.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-5 border-yellow-900/40 bg-yellow-950/10"
          >
            <div className="flex items-center justify-between mb-3">
              <AiOutlineTrophy size={22} className="text-yellow-400" />
              <span className="text-gray-600 text-xs">{a.year}</span>
            </div>
            <h3 className="text-gray-100 font-semibold text-sm leading-snug">{a.title}</h3>
            <p className="text-yellow-400/80 text-xs mt-1 mb-2">{a.issuer}</p>
            <p className="text-gray-400 text-xs font-light leading-relaxed">{a.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Certificates */}
      <Reveal>
        <div className="flex items-center gap-2 mb-6">
          <AiOutlineSafetyCertificate size={18} className="text-cyan-400" />
          <h3 className="font-semibold text-sm tracking-wide uppercase text-cyan-400">Certifications</h3>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {certificates.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="glass rounded-2xl overflow-hidden flex flex-col"
          >
            <button
              onClick={() => setOpen(c)}
              className="relative h-44 overflow-hidden group bg-white/5"
              aria-label={`View ${c.title}`}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                  c.portrait ? "object-cover object-top" : "object-cover"
                }`}
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <AiOutlineExpand size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </button>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${categoryColors[c.category]}`}>
                  {c.category}
                </span>
                <span className="text-gray-600 text-xs">{c.date}</span>
              </div>
              <h4 className="text-gray-100 text-sm font-semibold leading-snug">{c.title}</h4>
              <p className="text-gray-500 text-xs mt-1">{c.issuer}</p>
              {c.note && <p className="text-gray-600 text-[11px] mt-1">{c.note}</p>}
              {c.verify && (
                <a
                  href={c.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-xs mt-2"
                >
                  Verify credential →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Academic focus */}
      <Reveal>
        <div className="glass rounded-2xl p-6 border-purple-900/40 bg-purple-950/10">
          <h3 className="font-semibold text-sm tracking-wide uppercase text-purple-400 mb-1">
            Academic & Research Interests
          </h3>
          <p className="text-gray-500 text-xs mb-5">
            Where I want to go deeper: research methods to test whether technology truly helps people.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {focusAreas.map((f) => (
              <div key={f.title} className="border-l-2 border-purple-500/40 pl-4">
                <p className="text-gray-100 text-sm font-medium">{f.title}</p>
                <p className="text-gray-400 text-xs font-light leading-relaxed mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {open && <Lightbox cert={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Credentials;
