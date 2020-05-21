import React, { Component } from "react";
// css
import "./styles/sidebar.css";

import Reset from "./reset";

class Sidebar extends Component {
	state = {
		filter: [
			{
				name: "Arrangement",
				clicked: false,
				filter: [
					{ name: "Prices", clicked: false },
					{ name: "Popular", clicked: false },
					{ name: "Recommended", clicked: false },
				],
			},
			{
				name: "Filter Products",
				clicked: false,
				filter: [
					{ name: "All", clicked: false },
					{ name: "Fruits", clicked: false },
					{ name: "Vegetables", clicked: false },
					{ name: "Beans", clicked: false },
					{ name: "Tubers", clicked: false },
					{ name: "Grains, Beans and Nuts", clicked: false },
					{ name: "Meat and Poultry", clicked: false },
					{ name: "Seafood", clicked: false },
					{ name: "Dairy Foods", clicked: false },
				],
			},
		],
	};

	handleShow = (handlee) => {
		const filter = [...this.state.filter];
		const index = this.state.filter.indexOf(handlee);
		filter[index] = { ...handlee };
		filter[index].clicked === true
			? (filter[index].clicked = false)
			: (filter[index].clicked = true);
		this.setState({ filter });
	};

	handleDropdown = (filter) => {
		if (!filter) {
			return { display: "none" };
		}
	};

	handleClicked = (filterMode, setting) => {
		this.props.onClick(setting.name);
		const filter = this.state.filter;
		const index = filter.indexOf(filterMode);
		for (let content of filter[index].filter) {
			content.clicked = false;
		}
		const index2 = filter[index].filter.indexOf(setting);
		filter[index].filter[index2].clicked = true;
		this.setState({ filter });
	};

	isClicked = (setting) => (setting.clicked ? "active" : "");

	render() {
		const { onReset } = this.props;
		return (
			<div className="style">
				<Reset onReset={onReset} />
				{this.state.filter.map((filter) => (
					<div
						className="w-90"
						key={filter.name}
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<button
							className="btn btn-outline-dark m-2 w-90"
							style={{ height: 40, transition: "0.5s ease" }}
							onClick={() => this.handleShow(filter)}
						>
							{filter.name}
						</button>
						<div style={this.handleDropdown(filter.clicked)}>
							<ul style={{ listStyle: "none" }}>
								{filter.filter.map((setting) => (
									<li className="listItem" key={setting.name}>
										<button
											onClick={() => {
												this.handleClicked(filter, setting);
											}}
											className={`link ${this.isClicked(setting)}`}
										>
											{setting.name}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
				<div
					className="w-90"
					key={"Filter prices"}
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<button
						className="btn btn-outline-dark m-2 w-90"
						style={{ height: 40, transition: "0.5s ease" }}
					>
						Filter Price
					</button>
				</div>
			</div>
		);
	}
}

export default Sidebar;
