import React from "react";
import "./styles/navBarMenuOption.css";

const NavBarMenuOption = ({ listItem, tag = "", onClick }) => {
	return (
		<li key={listItem} className={`navBarListItem list amountMargin`}>
			<a
				className="nav-link listLink"
				href={`#${listItem}`}
				style={{ padding: 0 }}
				onClick={onClick}
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
