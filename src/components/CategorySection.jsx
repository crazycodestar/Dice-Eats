import React from "react";

import "./styles/categorySection.css";

export default function CategorySection({ title }) {
	return (
		<div className="logo-container">
			<div className="logo"></div>
			<h1 className="logo-name">{title}</h1>
		</div>
	);
}
