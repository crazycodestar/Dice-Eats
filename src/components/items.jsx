import React, { Component } from "react";
import Card from "./item";

// css
import style from "./styles/items.module.css";

class Items extends Component {
	render() {
		const { onDecrement, onIncrement, onReset, items } = this.props;

		return (
			<div className={style.style}>
				{items.map((item) =>
					item.visible ? (
						<div className={`${style["card-dimensions"]} m-1`}>
							<Card
								key={item.name}
								id={item.name}
								item={item}
								onIncrement={onIncrement}
								onDecrement={onDecrement}
								onReset={onReset}
							/>
						</div>
					) : (
						""
					)
				)}
			</div>
		);
	}
}

export default Items;
