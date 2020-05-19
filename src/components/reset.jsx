import React from "react";

const Reset = ({ onReset }) => {
	return (
		<button
			className="btn btn-danger m-2 w-5"
			style={{
				width: 40,
				height: 40,
				position: "absolute",
				top: 1,
				left: 193,
			}}
			onClick={onReset}
		>
			<h3
				style={{
					transform: "rotate(45deg)",
					position: "relative",
					bottom: 8,
				}}
			>
				+
			</h3>
		</button>
	);
};

export default Reset;
