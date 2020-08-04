import React from "react";

import "./styles/Comment.css";
import Support from "./Support";

export default function Comment({ src, username, subTitle }) {
	return (
		<li className="comment-container">
			<div className="img-container">
				<img src={src} alt="lemon" className="profile-picture" />
			</div>
			<div className="comment-Content">
				<h5>{username}</h5>
				{/* <div className="rating"></div> */}
				<p>{subTitle}</p>
				<div className="support">
					<Support />
				</div>
			</div>
		</li>
	);
}
