import React from "react";
import Content from "./Content";

const Test = () => {
	const filters = {
		name: "Sort By",
		filter: [
			{ name: "Popular", clicked: true },
			{ name: "Prices", clicked: false },
		],
	};

	const setting = {
		name: "Filter Products",
		filter: [
			{ name: "All", clicked: true },
			{ name: "Fruits", clicked: false },
			{ name: "Vegetables", clicked: false },
			{ name: "Beans", clicked: false },
			{ name: "Tubers", clicked: false },
			{ name: "Grains, Beans and Nuts", clicked: false },
			{ name: "Meat and Poultry", clicked: false },
			{ name: "Seafood", clicked: false },
			{ name: "Dairy Foods", clicked: false },
		],
	};

	return (
		<React.Fragment>
			<Content filters={filters} onClick={() => console.log("clicked")} />
			<Content filters={setting} onClick={() => console.log("clicked")} />
		</React.Fragment>
	);
};

export default Test;
