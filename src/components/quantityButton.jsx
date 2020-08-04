import React from "react";

const Button = ({ item, onReset, onIncrement, onDecrement }) => {
	return (
		<>
			{!item.amount ? (
				<button
					onClick={() => onIncrement(item)}
					className="btn btn-primary btn-md w-100"
				>
					Add to Cart
				</button>
			) : (
				<div
					className="btn-group"
					role="group"
					aria-label="Basic example"
					style={{
						height: 38,
						display: "flex",
						alignItems: "flex-end",
					}}
				>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => onDecrement(item)}
						style={{ flexGrow: 1, height: 38 }}
					>
						<h5>-</h5>
					</button>
					<button
						type="button"
						className="btn btn-light"
						style={{
							color: "#000",
							flexGrow: 4,
							height: 38,
						}}
						onClick={() => onReset(item)}
					>
						<h5>{item.amount}</h5>
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => onIncrement(item)}
						style={{ flexGrow: 1, height: 38 }}
					>
						<h5>+</h5>
					</button>
				</div>
			)}
		</>
	);
};

export default Button;
