import React from "react";

const Button = ({ item, onReset, onIncrement, onDecrement }) => {
	return (
		<>
			{!item.amount ? (
				<button onClick={() => onIncrement(item)} className="btn btn-primary">
					Add to Cart
				</button>
			) : (
				<div
					className="btn-group m-1"
					role="group"
					aria-label="Basic example"
					style={{
						height: 40,
						display: "flex",
						alignItems: "flex-end",
					}}
				>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => onDecrement(item)}
						style={{ flexGrow: 1, height: 40 }}
					>
						<h5>-</h5>
					</button>
					<button
						type="button"
						className="btn btn-light"
						style={{
							color: "#000",
							flexGrow: 4,
							height: 40,
						}}
						onClick={() => onReset(item)}
					>
						<h5>{item.amount}</h5>
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => onIncrement(item)}
						style={{ flexGrow: 1, height: 40 }}
					>
						<h5>+</h5>
					</button>
				</div>
			)}
		</>
	);
};

export default Button;
