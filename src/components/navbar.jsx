import React from "react";
import navigation from "./styles/navbar.module.css";

const Navbar = (props) => {
	const listings = ["Home", "checkout", "Profile", "Extra"];

	return (
		<nav
			className="navbar fixed-top navbar-light bg-light"
			style={{ borderBottom: "1px solid #c0c0c0", display: "flex" }}
		>
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
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-dark"
							type="button"
							id="button-addon2"
						>
							Search
						</button>
					</div>
				</div>
			</div>
			<div>
				<ul style={{ listStyle: "none", float: "left", padding: 0 }}>
					{listings.map((listItem) => (
						<li className={navigation.list}>
							<a className="nav-link" href="#" style={{ color: "inherit" }}>
								{listItem}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
