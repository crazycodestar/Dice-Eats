import React from "react";
import "./styles/item.css";
import Button from "./quantityButton";
import Rating from "./Rating";

const Card = ({ onDecrement, onIncrement, onReset, item }) => {
	return (
		<>
			<div class="product-container">
				<div class="product">
					<div class="image-container">
						<img src={item.image} alt="apple" class="product-image" />
					</div>

					<div class="product-content">
						<h5 class="product-name">{item.name}</h5>
						<hr />
						<div class="product-info">
							<div class="product-price">
								<h5>
									<span style={{ fontFamily: " DejaVu Sans, Book" }}>
										&#8358;
									</span>
									{item.price}
								</h5>
							</div>
							<div className="sails-details">
								<p>{item.info}</p>
							</div>
							<div className="rating-container">
								<Rating rating={item.rating} />
							</div>
							<div class="product-seller">
								<p>
									Sold by: <span>Dice Eats</span>{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="product-button">
					<Button
						onDecrement={onDecrement}
						onIncrement={onIncrement}
						onReset={onReset}
						item={item}
					/>
				</div>
			</div>
		</>
	);
};

export default Card;
