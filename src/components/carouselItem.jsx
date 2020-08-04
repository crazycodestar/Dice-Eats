import React from "react";
import lemon from "../assets/lemon.jpg";
import Carousel from "react-bootstrap/Carousel";

const CarouselItem = ({ src, title, subTitle }) => {
	return (
		<Carousel.Item className={"carouselItem"}>
			<img className="d-block w-100 imagePosition " src={lemon} alt={"lemon"} />
			<Carousel.Caption>
				<h3>{title}</h3>
				{subTitle && <p>{subTitle}</p>}
			</Carousel.Caption>
		</Carousel.Item>
	);
};

export default CarouselItem;
