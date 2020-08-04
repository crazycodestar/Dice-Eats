import React from "react";
import "./styles/Section.css";

export default function Section({ title, children, style }) {
	return (
		<div className="section" style={style}>
			<h4>{title}</h4>
			<hr />
			{children}
		</div>
	);
}
