import React from "react";

import "./styles/Support.css";

export default function Support() {
	return (
		<div className="support-container">
			<div className="support">
				<i class="support-icon fas fa-thumbs-up"></i>
				<span>0</span>
			</div>
			<div className="support">
				<i class=" support-icon fas fa-thumbs-down"></i>
				<span>0</span>
			</div>
		</div>
	);
}
