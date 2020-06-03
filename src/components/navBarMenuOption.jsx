import React from "react";
import "./styles/navBarMenuOption.css";

const NavBarMenuOption = ({ listItem, showSubMenu, tag = "" }) => {
	return (
		<li
			key={listItem}
			className={`navBarListItem list amountMargin ${showSubMenu}`}
		>
			<a
				className="nav-link navbar-dark listLink"
				href="#"
				style={{ padding: 0 }}
			>
				{listItem}
			</a>
			{tag !== "" && (
				<span className="badge badge-pill badge-secondary amountMargin">
					{tag}
				</span>
			)}
		</li>
	);
};

export default NavBarMenuOption;
