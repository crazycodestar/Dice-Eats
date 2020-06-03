import React, { useState } from "react";
// assets
import NavBarMenu from "./navigationMenu";
// css
import "./styles/navbar.css";
import NavBarMenuOption from "./navBarMenuOption";

const Navbar = ({ onChange, onClick, totalItemsBought }) => {
	const [showSubMenu, setShowSubMenu] = useState("hideSubMenu");

	const HandleSubMenu = () => {
		!showSubMenu ? setShowSubMenu("hideSubMenu") : setShowSubMenu("");
	};

	return (
		<nav className="navbar fixed-top navbar-light BBottom">
			<h4 className="navbar-brand" href="#">
				Dice Eats
			</h4>
			<div>
				<div className="input-group mb-1" style={{ width: "40vw" }}>
					<input
						type="text"
						className="form-control"
						placeholder="search..."
						aria-label="search..."
						aria-describedby="button-addon2"
						onChange={onChange}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-dark"
							type="button"
							id="button-addon2"
							onClick={onClick}
						>
							Search
						</button>
					</div>
				</div>
			</div>
			<div className="Dflex">
				<ul className="marginLeft" style={{ listStyle: "none", float: "left" }}>
					<NavBarMenuOption listItem="Home" showSubMenu={showSubMenu} />
					<NavBarMenuOption
						listItem="Checkout"
						showSubMenu={showSubMenu}
						tag={totalItemsBought}
					/>
					<NavBarMenuOption listItem="Profile" showSubMenu={showSubMenu} />
					<NavBarMenuOption listItem="FAQ" showSubMenu={showSubMenu} />
				</ul>
				<div className="orderEnd">
					<NavBarMenu onClick={HandleSubMenu} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
