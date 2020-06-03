import React from "react";

import "./styles/Content.css";
import { useState } from "react";
import Option from "./Option";

const Content = ({ filters, onClick }) => {
	const [show, setShow] = useState(false);
	return (
		<div
			className={`w-90 contentContainer ${show ? "activeContainer" : ""}`}
			key={filters.name}
		>
			<button
				className="btn btn-outline-dark m-2 w-90"
				style={{ height: 40, transition: "0.5s ease" }}
				onClick={() => (show ? setShow(false) : setShow(true))}
			>
				{filters.name}
			</button>
			<div>
				<ul style={{ listStyle: "none" }}>
					{filters.filter.map((filterItem) => (
						<Option
							key={filterItem.name}
							filterItem={filterItem}
							onClick={onClick}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Content;
