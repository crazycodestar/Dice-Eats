import React, { Component } from "react";
import lemon from "../assets/lemon.jpg";
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";
import strawberry from "../assets/strawberry.jpg";
import tomato from "../assets/tomato.jfif";
import onion from "../assets/onions.jfif";
import potato from "../assets/potato.jfif";
import carrot from "../assets/carrot.jfif";
import corn from "../assets/corn.jfif";
import cucumber from "../assets/cucumber.jfif";
import grape from "../assets/grape.jfif";
import guava from "../assets/guava.jfif";
import lime from "../assets/lime.jfif";
import mango from "../assets/mango.jfif";
import orange from "../assets/orange.jfif";
import pineapple from "../assets/pineapple.jfif";
import tangerines from "../assets/tangerines.jpg";
import watermelon from "../assets/watermelon.jfif";
import Item from "./item";

class Items extends Component {
	state = {
		items: [
			{
				amount: 0,
				name: "Lemon",
				image: lemon,
				info: "Lemons are sold in packs of five(5)",
				price: "3000",
			},
			{
				amount: 0,
				name: "Apple",
				image: apple,
				info: "Apples are sold in packs of ten(10)",
				price: "2000",
			},
			{
				amount: 0,
				name: "Banana",
				image: banana,
				info: "Bananas are sold in packs of ten(10)",
				price: "500",
			},
			{
				amount: 0,
				name: "Strawberry",
				image: strawberry,
				info: "strawberries are sold in packs of ten(10)",
				price: "5000",
			},
			{
				amount: 0,
				name: "Tangerines",
				image: tangerines,
				info: "tangerines are sold in packs of five(5)",
				price: "800",
			},
			{
				amount: 0,
				name: "Tomato",
				image: tomato,
				info: "tomatoes are sold in packs of three(3)",
				price: "1500",
			},
			{
				amount: 0,
				name: "Onions",
				image: onion,
				info: "onions are sold in packs of three(3)",
				price: "1500",
			},
			{
				amount: 0,
				name: "Potato",
				image: potato,
				info: "potatoes are sold in kilograms of two(2)",
				price: "2000",
			},
			{
				amount: 0,
				name: "Carrot",
				image: carrot,
				info: "carrots are sold in packs of ten(10)",
				price: "5000",
			},
			{
				amount: 0,
				name: "Corn",
				image: corn,
				info: "corns are sold in packs of five(5)",
				price: "2000",
			},
			{
				amount: 0,
				name: "Cucumber",
				image: cucumber,
				info: "cucumbers are sold in packs of five(5)",
				price: "1000",
			},
			{
				amount: 0,
				name: "Grape",
				image: grape,
				info: "grapes are sold in packs of five(5) branches",
				price: "5500",
			},
			{
				amount: 0,
				name: "Guava",
				image: guava,
				info: "guavas are sold in packs of five(5)",
				price: "500",
			},
			{
				amount: 0,
				name: "Lime",
				image: lime,
				info: "limes are sold in packs of five(5)",
				price: "1000",
			},
			{
				amount: 0,
				name: "Mango",
				image: mango,
				info: "mangos are sold in packs of five(5)",
				price: "500",
			},
			{
				amount: 0,
				name: "Orange",
				image: orange,
				info: "oranges are sold in packs of five(5)",
				price: "2500",
			},
			{
				amount: 0,
				name: "Pineapple",
				image: pineapple,
				info: "pineapples are sold in pairs of two(2)",
				price: "5000",
			},
			{
				amount: 0,
				name: "Watermelon",
				image: watermelon,
				info: "watermelons are sold in pairs of two(2)",
				price: "8000",
			},
		],
	};

	handleIncrement = (item) => {
		let items = [...this.state.items];
		let index = items.indexOf(item);
		items[index] = { ...item };
		items[index].amount++;
		this.setState({ items });
	};

	handleDecrement = (item) => {
		let items = [...this.state.items];
		let index = items.indexOf(item);
		items[index] = { ...item };
		items[index].amount--;
		this.setState({ items });
	};

	handleReset = (item) => {
		let items = [...this.state.items];
		let index = items.indexOf(item);
		items[index] = { ...item };
		items[index].amount = 0;
		this.setState({ items });
	};

	style = {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	};

	render() {
		return (
			<div style={this.style}>
				{this.state.items.map((item) => (
					<Item
						key={item.name}
						id={item.name}
						item={item}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onReset={this.handleReset}
					/>
				))}
			</div>
		);
	}
}

export default Items;
