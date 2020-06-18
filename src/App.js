import React, { Component } from "react";
// import logo from "./logo.svg";
// import './App.css';
import Items from "./components/items";
import Navbar from "./components/navbar";
import Sidebar from "./components/sideBar";
import HambugerMenu from "./components/hambugerMenu";

// import assets
import itemsAsset from "./components/assets";

// css
import "./components/styles/app.css";

class App extends Component {
	state = {
		showSidebar: true,
		items: itemsAsset,
		searchBox: "",
	};
	constructor() {
		super();
		let order = itemsAsset;
		order = order.sort((a, b) => (a.price > b.price ? 1 : -1));
		this.setState({ items: order });
	}

	// Card item functions
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

	// SearchBox Function
	handleTextChange = (event) => {
		const searchBox = event.target.value;
		this.setState({ searchBox });
	};

	handleSearchSummit = () => {
		let items = [...this.state.items];
		for (let item of items) {
			if (
				item.name.toLowerCase().includes(this.state.searchBox.toLowerCase())
			) {
				item.visible = true;
			} else {
				item.visible = false;
			}
		}
		this.setState({ items });
	};

	// sidebar functions
	handleSideBar = () => {
		// hambugerMenu function
		let showSidebar = this.state.showSidebar;
		showSidebar = !showSidebar;
		this.setState({ showSidebar });
	};

	handleFilter = (setting) => {
		let items = this.state.items;
		if (setting.name !== "All") {
			for (let item of items) {
				if (item.foodClass.toLowerCase() === setting.name.toLowerCase()) {
					item.visible = true;
				} else {
					item.visible = false;
				}
			}
		} else {
			for (let item of items) {
				item.visible = true;
			}
		}
		this.setState({ items });
	};

	render() {
		return (
			<React.Fragment>
				<Navbar
					onChange={this.handleTextChange}
					onClick={this.handleSearchSummit}
					totalItemsBought={this.state.items.filter((a) => a.amount > 0).length}
				/>
				{/* <div className={`navigation navShow`}></div> */}
				<div className="fixedPlacement">
					<HambugerMenu onClick={this.handleSideBar} />
				</div>
				<div style={{ marginTop: 40 }}>
					<div
						className={`sideBarStyle ${
							!this.state.showSidebar ? "floatSideBarShow" : "floatSideBarHide"
						}`}
					>
						<Sidebar onClick={this.handleFilter} />
					</div>
					<div
						className={`transitionEffect ${
							this.state.showSidebar === true ? "itemShopShow" : "itemShopHide"
						}`}
						style={{ marginTop: 30 }}
					>
						<Items
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onReset={this.handleReset}
							items={this.state.items}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
