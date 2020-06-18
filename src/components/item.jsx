import React from "react";
import "./styles/item.css";
import Button from "./quantityButton";

const Card = ({ onDecrement, onIncrement, onReset, item }) => {
	return (
		<>
			<div className="cardHover card m-1">
				<div class="imgRestrict">
					<img
						src={item.image}
						className="card-img-top"
						alt="..."
						style={{ cursor: "pointer" }}
					/>
				</div>
				<div
					className="card-body"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<h5 className="card-title">{item.name}</h5>
					<a
						className="card-text expandText"
						href="https://www.youtube.com/watch?v=ELY_ak77GIU&t=104s"
					>
						{item.info}
					</a>
					{/* <span style={{ flexGrow: 3 }} /> */}
					<div style={{ alignItems: "flex-end" }}>
						<div className="rating"></div>

						<div style={{ display: "flex", flexDirection: "column-reverse" }}>
							<h3
								className="card-text"
								style={{ float: "right", order: 1, alignSelf: "flex-end" }}
							>
								<span className="badge badge-info">
									<span style={{ fontFamily: " DejaVu Sans, Book" }}>
										&#8358;
									</span>
									{item.price}
								</span>
							</h3>
							<Button
								onDecrement={onDecrement}
								onIncrement={onIncrement}
								onReset={onReset}
								item={item}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
