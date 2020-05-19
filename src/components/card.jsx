import React from "react";
import "./styles/item.css";

const Card = ({ onDecrement, onIncrement, onReset, item }) => {
	const handleShow = () => {
		if (item.amount < 1) {
			return (
				<button onClick={() => onIncrement(item)} className="btn btn-primary">
					Add to Cart
				</button>
			);
		} else {
			return (
				<div
					className="btn-group m-1"
					role="group"
					aria-label="Basic example"
					style={{ height: 40, display: "flex", alignItems: "flex-end" }}
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
			);
		}
	};
	return (
		<React.Fragment>
			<div className="card m-1 cardHover">
				<img
					src={item.image}
					className="card-img-top"
					alt="..."
					style={{ cursor: "pointer" }}
				/>
				<div
					className="card-body"
					style={{ display: "flex", flexDirection: "column" }}
				>
					<h5 className="card-title">{item.name}</h5>
					<a className="card-text link" href="#">
						{item.info}
					</a>
					<span style={{ flexGrow: 3 }} />
					<div style={{ alignItems: "flex-end" }}>
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
							{handleShow()}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Card;