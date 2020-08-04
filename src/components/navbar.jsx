import React, { useState } from "react";
// assets
import { Navbar } from "react-bootstrap";
// css
import "./styles/navbar.css";
import NavBarMenuOption from "./navBarMenuOption";

const NavigationBar = ({ onChange, onClick, totalItemsBought }) => {
	const [showSubMenu, setShowSubMenu] = useState("");

	const HandleSubMenu = () => {
		setShowSubMenu(!showSubMenu);
		// !showSubMenu ? setShowSubMenu("hideSubMenu") : setShowSubMenu("");
	};

	return (
		<>
			<nav
				className={`navbar navbar-light bg-light BBottom ${
					showSubMenu ? "showSubMenu" : ""
				} `}
				style={{ padding: "0 16px" }}
			>
				<a href="#Home" className="heading">
					<h4 className="navbar-brand " href="#">
						Dice Eats
					</h4>
				</a>

				<Navbar.Toggle className="NavbarOptions" onClick={HandleSubMenu} />
				<div className="Dflex">
					<div className="searchBox">
						<div className="input-group mb-1 ">
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
									<i class="fas fa-search"></i>
								</button>
							</div>
						</div>
					</div>
					<ul
						className="marginLeft"
						style={{
							listStyle: "none",
							float: "left",
							margin: 0,
							padding: 0,
						}}
					>
						<div className="media-icon">
							<NavBarMenuOption
								listItem={<i class="fas fa-home"></i>}
								onClick={HandleSubMenu}
							/>
							<NavBarMenuOption
								listItem={<i class="fas fa-shopping-cart"></i>}
								onClick={HandleSubMenu}
								tag={totalItemsBought}
							/>
							<NavBarMenuOption
								listItem={<i class="fas fa-user"></i>}
								onClick={HandleSubMenu}
							/>
							<NavBarMenuOption
								listItem={<i class="fas fa-question"></i>}
								onClick={HandleSubMenu}
							/>
						</div>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavigationBar;
