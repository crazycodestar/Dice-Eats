import React from "react";

import "./styles/category.css";

export default function Category() {
	return (
		<>
			<div className="category-container">
				<div>
					{/* <img src={src} alt="lemon" className="profile-picture" /> */}
					<div className="category-img-container"></div>
				</div>
				<div className="category-Content">
					<h5>{"Vegetables"}</h5>
				</div>
			</div>
		</>
	);
}
