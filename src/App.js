import React, { useState } from "react";
// import logo from "./logo.svg";
// import './App.css';
import Items from "./components/items";
import Navbar from "./components/navbar";
import Sidebar from "./components/sideBar";
import HambugerMenu from "./components/hambugerMenu";

// css
import "./components/styles/app.css";

function App() {
	const [showSidebar, setShowSideBar] = useState(true);

	return (
		<React.Fragment>
			<Navbar />
			<HambugerMenu
				onClick={() => {
					showSidebar ? setShowSideBar(false) : setShowSideBar(true);
				}}
			/>
			<div style={{ marginTop: 70 }}>
				<div
					className={`sideBarStyle ${
						showSidebar == true ? "floatSideBarShow" : "floatSideBarHide"
					}`}
				>
					<Sidebar
						onClick={() => {
							setShowSideBar(false);
						}}
					/>
				</div>
				<div
					className={`transitionEffect ${
						showSidebar == true ? "itemShopShow" : "itemShopHide"
					}`}
				>
					<Items />
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
