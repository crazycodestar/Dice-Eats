import React from "react";

const Option = ({ filterItem, onClick }) => {
	return (
		<li className="contentItem" key={filterItem.name}>
			<button
				onClick={() => onClick(filterItem)}
				className={`link ${filterItem.clicked ? "contentSelected" : ""}`}
			>
				{filterItem.name}
			</button>
		</li>
	);
};

export default Option;
