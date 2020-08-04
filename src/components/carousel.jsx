import React from "react";
import { Carousel } from "react-bootstrap";

import "./styles/carousel.css";

const Home = ({ slides, propotions = "w-100" }) => {
	return (
		<div>
			<Carousel className={`carousel  ${propotions}`}>
				{slides.map((slide) => (
					<Carousel.Item className={`carouselItem`}>
						<img
							className={`d-block imagePosition ${propotions} `}
							src={slide.src}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>{slide.title}</h3>
							<p>{slide.subTitle}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Home;
