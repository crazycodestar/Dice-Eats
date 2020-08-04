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
		filters: {
			sortByOrder: {
				name: "Sort By",
				filter: [
					{ name: "Prices", clicked: true },
					{ name: "Popular", clicked: false },
				],
			},
			filterPrice: {
				name: "Filter Price",
				filter: [],
			},
			filter: {
				name: "Filter Products",
				clicked: false,
				filter: [],
			},
		},
	};
	constructor() {
		super();
		let order = itemsAsset;
		order = order.sort((a, b) => (a.price > b.price ? 1 : -1));
		this.state.items = order;

		let foodClass = [];
		for (let food of itemsAsset) {
			if (!foodClass.includes(food.foodClass)) {
				foodClass.push(food.foodClass);
			}
		}
		let filter = [{ name: "All", clicked: true }];

		for (let item of foodClass) {
			filter.push({ name: item, clicked: false });
		}

		let filters = { ...this.state.filters };
		filters.filter.filter = filter;
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

	sortBy = (usecase) => {
		let items = this.state.items;
		switch (usecase) {
		}
		items = items.sort((a, b) => (a[usecase] > b[usecase] ? 1 : -1));
		this.setState(items);
		// this.state.items = order;
	};

	filterProducts = (setting) => {
		for (let set of this.state.filter.filter) {
			set.clicked = false;
		}
		setting.clicked = true;
		this.props.onClick(setting);
	};

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
						<Sidebar onClick={this.handleFilter} filters={this.state.filters} />
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
