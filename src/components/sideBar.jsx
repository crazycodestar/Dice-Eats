import React from "react";
import AccordionMenu from "./AccordionMenu";
import Accordion from "react-bootstrap/Accordion";
// css
import "./styles/sidebar.css";
import "./styles/Content.css";

const Sidebar = ({ onClick, filters }) => {
	const filterProducts = (setting) => {
		for (let set of filters.filter.filter) {
			set.clicked = false;
		}
		setting.clicked = true;
		onClick(setting);
	};
	return (
		<div className="style">
			<Accordion>
				<AccordionMenu
					filters={filters.sortByOrder}
					onClick={() => console.log("clicked")}
				/>
				<AccordionMenu filters={filters.filter} onClick={filterProducts} />
				<AccordionMenu
					filters={filters.filterPrice}
					onClick={() => console.log("clicked")}
				/>
			</Accordion>
		</div>
	);
};

export default Sidebar;
