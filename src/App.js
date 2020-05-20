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
		searchBox: null,
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

	handleSideBar = () => {
		let showSidebar = this.state.showSidebar;
		if (showSidebar) {
			showSidebar = false;
		} else {
			showSidebar = true;
		}
		this.setState({ showSidebar });
	};

	handleFilter = (setting) => {
		const items = itemsAsset.filter(
			(item) => item.foodClass === setting.toLowerCase()
		);
		this.setState({ items });
	};

	handleResetFilter = () => {
		this.setState({ items: itemsAsset });
	};

	handleTextChange = (event) => {
		const searchBox = event.target.value;
		this.setState({ searchBox });
	};

	handleSearchSummit = () => {
		const items = itemsAsset.filter((item) =>
			item.name.toLowerCase().includes(this.state.searchBox.toLowerCase())
		);
		this.setState({ items });
	};
	render() {
		return (
			<React.Fragment>
				<div className={`navigation navShow`}>
					<Navbar
						onChange={this.handleTextChange}
						onClick={this.handleSearchSummit}
					/>
				</div>
				<div className="fixedPlacement">
					<HambugerMenu onClick={this.handleSideBar} />
				</div>
				<div style={{ marginTop: 70 }}>
					<div
						className={`sideBarStyle ${
							!this.state.showSidebar ? "floatSideBarShow" : "floatSideBarHide"
						}`}
					>
						<Sidebar
							onClick={this.handleFilter}
							onReset={this.handleResetFilter}
						/>
					</div>
					<div
						className={`transitionEffect ${
							this.state.showSidebar == true ? "itemShopShow" : "itemShopHide"
						}`}
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
