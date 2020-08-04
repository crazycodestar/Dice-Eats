import React from "react";

export default function useless() {
	return (
		<div>
			<div className="cardHover card">
				<a
					class="imgRestrict"
					href="https://www.youtube.com/watch?v=ELY_ak77GIU&t=104s"
				>
					{/* <div class="imgRestrict"> */}
					<img
						src={item.image}
						className="card-img-top"
						alt="..."
						style={{ cursor: "pointer" }}
					/>
					{/* </div> */}
				</a>
				<div
					className="item-body"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<h5 className="card-title">{item.name}</h5>
					<p className="card-text">{item.info}</p>
					<div style={{ alignItems: "flex-end" }}>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<div className="item-sortBy">
								<div className="rating">
									<div className="brand">Dice Eats</div>
									<Rating rating={item.rating} />
								</div>
								<h3
									className="card-price"
									style={{ float: "right", alignSelf: "flex-end" }}
								>
									<span className="item-price">
										<span style={{ fontFamily: " DejaVu Sans, Book" }}>
											&#8358;
										</span>
										{item.price}
									</span>
								</h3>
							</div>
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
		</div>
	);
}
