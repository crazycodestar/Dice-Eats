import React, { Component } from "react";
import AccordionMenu from "./AccordionMenu";
import Accordion from "react-bootstrap/Accordion";
// css
import "./styles/sidebar.css";
import "./styles/Content.css";

// import Content from "./Content";

class Sidebar extends Component {
	state = {
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
			filter: [
				{ name: "All", clicked: true },
				{ name: "Fruits", clicked: false },
				{ name: "Vegetables", clicked: false },
				{ name: "Tubers", clicked: false },
				{ name: "Grains, Beans and Nuts", clicked: false },
				{ name: "Meat and Poultry", clicked: false },
				{ name: "Seafood", clicked: false },
				{ name: "Dairy Foods", clicked: false },
			],
		},
	};

	filterProducts = (setting) => {
		for (let set of this.state.filter.filter) {
			set.clicked = false;
		}
		setting.clicked = true;
		this.props.onClick(setting);
	};

	render() {
		return (
			<div className="style">
				<Accordion>
					<AccordionMenu
						filters={this.state.sortByOrder}
						onClick={() => console.log("clicked")}
					/>
					<AccordionMenu
						filters={this.state.filter}
						onClick={this.filterProducts}
					/>
					<AccordionMenu
						filters={this.state.filterPrice}
						onClick={() => console.log("clicked")}
					/>
				</Accordion>
			</div>
		);
	}
}

export default Sidebar;
