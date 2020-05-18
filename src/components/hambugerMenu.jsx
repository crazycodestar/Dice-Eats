import React, { useState } from "react";
import "./styles/hambugerMenu.css";

const HambugerMenu = (props) => {
	const [shown, setShown] = useState(true);

	const change = () => {
		props.onClick();
		shown ? setShown(false) : setShown(true);
	};

	return (
		<div
			class={`hambuger ${shown ? "change" : "hambuger"}`}
			id="hambuger"
			role="button"
			onClick={change}
		>
			<div></div>
		</div>
	);
};

export default HambugerMenu;
