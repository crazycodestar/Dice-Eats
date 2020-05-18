import React, { Component } from "react";

const carousel = (props) => {
	return (
		<div className="carousel-item active">
			<img src="..." className="d-block w-100" alt="..." />
			<div className="carousel-caption d-none d-md-block">
				<h5>First slide label</h5>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</div>
		</div>
	);
};

export default carousel;
