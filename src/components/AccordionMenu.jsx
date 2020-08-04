import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "./styles/Content.css";

import Option from "./Option";

export default function AccordionMenu({ filters, onClick }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button
				onClick={() => setOpen(!open)}
				aria-expanded={open}
				className="btn btn-outline-dark w-100 mb-2 mt-2 widthLoss"
				style={{ height: 40, transition: "0.5s ease" }}
			>
				{filters.name}
			</Button>
			<Collapse in={open}>
				<ul className="noList">
					{filters.filter.map((filterItem) => (
						<Option
							key={filterItem.name}
							filterItem={filterItem}
							onClick={onClick}
						/>
					))}
				</ul>
			</Collapse>
		</>
	);
}
