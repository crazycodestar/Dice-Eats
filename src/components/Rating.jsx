import React from "react";

import "./styles/rating.css";

const rate = (checked = "") => {
	let stars = [];
	for (let p = 0; p < 5; p++) {
		stars.push("star fa fa-star " + checked);
	}
	return stars;
};
export default function Rating({ rating, starFont }) {
	return (
		<div className="rating-container">
			<div className="template-stars">
				{rate().map((star) => (
					<div className="star-container">
						<span class={star} style={starFont}></span>
					</div>
				))}
			</div>
			<div
				className="checked-stars"
				// space
				style={{ width: `${(rating / 5) * 100}%` }}
			>
				{rate("checked").map((star) => (
					<div className="star-container">
						<span class={star} style={starFont}></span>
					</div>
				))}
			</div>
		</div>
	);
}
