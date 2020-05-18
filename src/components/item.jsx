import React from "react";

const Item = (props) => {
	const handleShow = () => {
		if (props.item.amount < 1) {
			return (
				<button
					onClick={() => props.onIncrement(props.item)}
					className="btn btn-primary"
				>
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
						onClick={() => props.onDecrement(props.item)}
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
						onClick={() => props.onReset(props.item)}
					>
						<h5>{props.item.amount}</h5>
					</button>
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => props.onIncrement(props.item)}
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
			<div className="card m-1" style={{ maxWidth: "286px", height: "28rem" }}>
				<img
					src={props.item.image}
					className="card-img-top"
					alt="..."
					style={{ cursor: "pointer" }}
				/>
				<div
					className="card-body"
					style={{ display: "flex", flexDirection: "column" }}
				>
					<h5 className="card-title">{props.item.name}</h5>
					<p className="card-text">{props.item.info}</p>
					<span style={{ flexGrow: 3 }} />
					<div style={{ alignItems: "flex-end" }}>
						<div style={{ display: "flex", flexDirection: "column-reverse" }}>
							<h3
								className="card-text"
								style={{ float: "right", order: 1, alignSelf: "flex-end" }}
							>
								<span className="badge badge-pill badge-info">
									{props.item.price}
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

export default Item;
