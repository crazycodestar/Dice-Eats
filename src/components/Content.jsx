import React from "react";

import { useState } from "react";
import Option from "./Option";

const Content = ({ filters, onClick }) => {
	const [show, setShow] = useState(false);
	return (
		<div className={`contentContainer`} key={filters.name}>
			<button
				className="btn btn-outline-dark m-2 widthLoss"
				style={{ height: 40, transition: "0.5s ease" }}
				onClick={() => (show ? setShow(false) : setShow(true))}
			>
				{filters.name}
			</button>
			<div className={`dormantContainer ${show ? "activeContainer" : ""}`}>
				<ul className="noList">
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
