import React from "react";

import lemon from "../assets/lemon.jpg";
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";

import "./styles/ShoppingItem.css";
import Button from "./quantityButton";
import Carousel from "../components/carousel";
import Rating from "./Rating";

const slides = [
	{
		src: lemon,
	},
	{
		src: apple,
	},
	{
		src: banana,
	},
];

export default function ShoppingItem({
	onDecrement,
	onIncrement,
	onReset,
	item,
}) {
	return (
		<div className="shoppingContainer">
			<div className="col-lg-6 itemImage">
				<Carousel slides={slides} propotions="w-100 h-100" />
				{/* <img src={lemon} alt="lemon" className="itemImage h-100" /> */}
			</div>
			<div className="shoppingContent col-lg-6 col-md-12">
				<div className="contentInfo">
					<h3 className="card-title">{"Lemonade"}</h3>
					<hr />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad aperiam
						alias quos perspiciatis ipsum possimus a omnis, rerum accusantium
						laborum? Tenetur, esse laborum. Mollitia quam commodi pariatur!
						Assumenda, magnam labore. Cum iusto exercitationem numquam
						dignissimos aliquam, nesciunt explicabo dicta ratione.
					</p>
					<span className="badge-price">
						<span style={{ fontFamily: " DejaVu Sans, Book" }}>
							&#8358;{"500"}
						</span>

						<div className="shopping-item-rating">
							<Rating
								rating={item.rating}
								starFont={{
									fontSize: "70%",
								}}
							/>
						</div>
					</span>
				</div>
				<div className="quantity">
					<Button
						onDecrement={onDecrement}
						onIncrement={onIncrement}
						onReset={onReset}
						item={item}
					/>
				</div>
				<hr />
				<div className="find-us">
					<h4>Find us</h4>
					<div className="media-icons">
						<i class="media fab fa-instagram"></i>
						<i class="media fab fa-facebook"></i>
						<i class="media fab fa-twitter"></i>
					</div>
				</div>
			</div>
		</div>
	);
}
