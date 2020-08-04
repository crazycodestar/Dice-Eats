import React from "react";

import "./styles/info.css";

export default function info({ src, heading, children }) {
	return (
		<div className="inf0 row">
			<div className="col-lg-2 col-md-2 col-sm-2">
				<div className="info-icon-placeholder"></div>
			</div>
			{src && <image src={src} className="info-icon" />}
			<div className="info-content col-lg-10 col-md-10 col-sm-6">
				<h5 className="heading">{heading}</h5>
				<p className="info-text">{children}</p>
			</div>
		</div>
	);
}
