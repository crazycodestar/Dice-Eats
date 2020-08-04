import React from "react";

import { Nav, Navbar } from "react-bootstrap";

export default function SectionSlider({ brand, links }) {
	return (
		<Navbar expand="lg" bg="light" variant="light" fixed="top">
			<Navbar.Brand href="#home">{brand}</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					{links.map((link) => (
						<Nav.Link href={`#${link}`}>{link}</Nav.Link>
					))}
				</Nav>
				{/* <Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
					<Nav.Link eventKey={2} href="#memes">
						Dank memes
					</Nav.Link>
				</Nav> */}
			</Navbar.Collapse>
		</Navbar>
	);
}
