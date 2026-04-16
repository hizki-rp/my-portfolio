import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

const App = () => {
	return (
		<SmoothScroll>
			<CustomCursor />
			<Navbar />
			<Hero />
			<Skills />
			<Portfolio />
			<Experience />
			<Contact />
			<Footer />
		</SmoothScroll>
	);
};

export default App;
