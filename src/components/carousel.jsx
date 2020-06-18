import React from "react";
import lemon from "../assets/lemon.jpg";
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";
import { Carousel } from "react-bootstrap";
import "./styles/carousel.css";

const Home = () => {
	return (
		<div>
			<Carousel className={"carousel"}>
				<Carousel.Item className={"carouselItem"}>
					<img
						className="d-block w-100 imagePosition "
						src={lemon}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={"carouselItem"}>
					<img className="d-block w-100" src={apple} alt="second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className={"carouselItem"}>
					<img className="d-block w-100" src={banana} alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Home;
