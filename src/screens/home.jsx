import React from "react";

import lemon from "../assets/lemon.jpg";
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";

import Carousel from "../components/carousel";
import NavigationBar from "../components/navbar";

import "../components/styles/home.css";
import CategoryScroller from "../components/Categoryscroller";
import CategorySection from "../components/CategorySection";

const slides = [
	{
		src: lemon,
		title: "lekan is a boss",
		subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
	},
	{
		src: apple,
		title: "Second slide label",
		subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		src: banana,
		title: "Third slide label",
		subTitle:
			"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
	},
];

const Home = () => {
	return (
		<>
			<div className="carouselContainer">
				<Carousel slides={slides} />
			</div>
			<NavigationBar />
			<CategoryScroller />
			<CategorySection title="Dice Eats" />
		</>
	);
};

export default Home;
