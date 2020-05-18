import React, { useState } from "react";
// import logo from "./logo.svg";
// import './App.css';
import Items from "./components/items";
import Navbar from "./components/navbar";
import Sidebar from "./components/sideBar";

function App() {
	// let sideShow = true;

	let sideBarStyle = {
		position: "sticky",
		top: 60,
		width: window.innerWidth < 450 ? "100%" : "138",
		float: "left",
	};

	// const handleShow = (sideBar) => {
	// 	if (sideShow === true) {
	// 		return sideBarStyle;
	// 	} else {
	// 		let sideBarStyle = { ...sideBar };
	// 		sideBarStyle.backgroundColor = "red";
	// 		setSideBarStyle({ sideBarStyle });
	// 		console.log(sideBarStyle);
	// 	}
	// };

	// const handleClose = () => {
	// 	sideShow = false;
	// 	handleShow(sideBarStyle);
	// };

	return (
		<React.Fragment>
			<Navbar />
			<div style={{ marginTop: 60 }}>
				<div style={sideBarStyle}>
					<Sidebar
					// onClose={handleClose}
					/>
				</div>
				<div
					style={{
						paddingTop: 70,
						marginLeft: window.innerWidth < 450 ? 0 : 140,
					}}
				>
					<Items />
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
