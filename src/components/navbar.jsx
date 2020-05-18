import React from "react";
import "./styles/navbar.css";

const Navbar = (props) => {
	const listings = ["Home", "Checkout", "Profile", "FAQ"];

	return (
		<nav
			className="navbar fixed-top navbar-light"
			style={{
				borderBottom: "1px solid #c0c0c0",
				display: "flex",
				backgroundColor: "#f5f5f5",
			}}
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
				<ul style={{ listStyle: "none", float: "left" }}>
					{listings.map((listItem) => (
						<li className="list">
							<a className="nav-link navbar-dark listLink" href="#">
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
