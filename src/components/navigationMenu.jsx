import React, { useState } from "react";
import "./styles/navigationButton.css";

const HambugerMenu = (props) => {
	const [shown, setShown] = useState(true);

	const change = () => {
		props.onClick();
		shown ? setShown(false) : setShown(true);
	};

	return (
		<div
			className={`Navigation ${!shown ? "changed" : "Navigation"}`}
			id="Navigation"
			role="button"
			onClick={change}
		>
			<div></div>
		</div>
	);
};

export default HambugerMenu;
