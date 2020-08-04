import React from "react";

import Item from "./item";

import "./styles/ProductScroller.css";

export default function ProductScroller({
	onDecrement,
	onIncrement,
	onReset,
	items,
}) {
	const scrollFunction = (event) => {
		let scrolled = 0;
		const arrow = event.target;
		const box = arrow.parentElement;
		const scroller = box.children[0].children[1];

		scroller.addEventListener("scroll", () => console.log(scroller.scrollX));

		// showing width
		let scrollable =
			scroller.scrollWidth / (scroller.scrollWidth % scroller.offsetWidth);
		console.log(scroller);
		console.log(scroller.scrollWidth, "yuu hoo");
		console.log(scroller.offsetWidth, "yuu hoo hoo");

		//scroll
		let timer = setInterval(function () {
			scrolled++;
			let frameRate = arrow.id === "left" ? -6 : 6;
			scroller.scrollBy(frameRate, 0);
			if (scrolled > scrollable) clearTimeout(timer);
			// console.log(scrolled);
			// console.log(scrollable);
		}, 0);
	};
	return (
		<div className="productScroller-main">
			<div className="listings">
				<div className="see-all-text">
					<a className="see-all" href="\">
						See all +
					</a>
				</div>
				<div className="ProductScroller">
					{items.map((item) => (
						<div className="related-content m-1">
							<Item
								key={item.name}
								id={item.name}
								item={item}
								onIncrement={onIncrement}
								onDecrement={onDecrement}
								onReset={onReset}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="arrow arrow-left" id="left" onClick={scrollFunction}>
				{/* <i className="fas fa-chevron-left"></i> */}
			</div>
			<div className="arrow arrow-right" id="right" onClick={scrollFunction}>
				{/* <i className="fas fa-chevron-right"></i> */}
			</div>
		</div>
	);
}
