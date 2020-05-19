import React, { Component } from "react";
// css
import sidebarView from "./styles/sidebar.module.css";

import Reset from "./reset";

class Sidebar extends Component {
	state = {
		filter: [
			{
				name: "Arrangement",
				clicked: false,
				filter: ["Popular", "pricing", "Recommended"],
			},
			{
				name: "Filter Products",
				clicked: false,
				filter: ["Fruits", "Vegetables", "Beans", "Tubers"],
			},
		],
	};

	// window.addEventListener("resize", () => self.style = self.style);

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

	render() {
		const { onClick, onReset } = this.props;
		return (
			<div className={sidebarView.style}>
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
									<li
										className="m-2 mb-3"
										style={{ color: "#808080", cursor: "pointer" }}
										key={setting}
									>
										<button
											onClick={() => onClick(setting)}
											className={sidebarView.link}
										>
											{setting}
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
