import React, { useState } from "react";
// import logo from "./logo.svg";
// import './App.css';
import Items from "./components/items";
import Navbar from "./components/navbar";
import Sidebar from "./components/sideBar";

// css
import sideView from "./components/styles/app.module.css";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div style={{ marginTop: 70 }}>
				<div className={sideView.sideBarStyle}>
					<Sidebar
					// onClose={handleClose}
					/>
				</div>
				<div className={sideView.floatRight} style={{ width: "83%" }}>
					<Items />
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
