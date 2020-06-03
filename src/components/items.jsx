import React, { Component } from "react";
import Card from "C:/Users/olamilekan/Documents/GitHub/Dice-Eats/src/components/card";

// css
import style from "./styles/items.module.css";

class Items extends Component {
	render() {
		const { onDecrement, onIncrement, onReset, items } = this.props;

		return (
			<div className={style.style}>
				{items.map((item) =>
					item.visible ? (
						<Card
							key={item.name}
							id={item.name}
							item={item}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							onReset={onReset}
						/>
					) : (
						""
					)
				)}
			</div>
		);
	}
}

export default Items;
