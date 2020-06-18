import React, { useState } from "react";
// assets
import NavBarMenu from "./navigationMenu";
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	NavDropdown,
} from "react-bootstrap";
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
			{/* <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="#home">Dice Eats</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#Home">Home</Nav.Link>
						<Nav.Link href="#Profile">Profile</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#features">Features</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar> */}
			<nav
				className={`navbar fixed-top navbar-light BBottom ${
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
									Search
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
						<NavBarMenuOption listItem="Home" onClick={HandleSubMenu} />
						<NavBarMenuOption
							listItem="Checkout"
							onClick={HandleSubMenu}
							tag={totalItemsBought}
						/>
						<NavBarMenuOption listItem="Profile" onClick={HandleSubMenu} />
						<NavBarMenuOption listItem="FAQ" onClick={HandleSubMenu} />
					</ul>
					{/* <div className="orderEnd">
						<NavBarMenu onClick={HandleSubMenu} />
					</div> */}
				</div>

				{/* <Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#Home">Home</Nav.Link>
						<Nav.Link href="#Profile">Profile</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#features">Features</Nav.Link>
					</Nav>
				</Navbar.Collapse> */}
				{/* <div className="Dflex">
					<ul
						className="marginLeft"
						style={{ listStyle: "none", float: "left" }}
					>
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
				</div> */}
			</nav>
		</>
	);
};

export default NavigationBar;
