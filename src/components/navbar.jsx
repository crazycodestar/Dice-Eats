import React, { useState } from "react";
// assets
import NavBarMenu from "./navigationMenu";
// css
import "./styles/navbar.css";

const Navbar = ({ onChange, onClick }) => {
	const listings = ["Home", "Checkout", "Profile", "FAQ"];
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
					{listings.map((listItem) => (
						<li key={listItem} className={`list ${showSubMenu}`}>
							<a className="nav-link navbar-dark listLink" href="#">
								{listItem}
							</a>
						</li>
					))}
				</ul>
				<div className="orderEnd">
					<NavBarMenu onClick={HandleSubMenu} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
