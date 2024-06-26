import React from "react";
import Ball from "./Ball";

const DataDisplay = ({ data, addFilter, visibleColors }) => (
	<div
		style={{
			border: "2px solid gray",
			borderRadius: 10,
			display: "flex",
			flexDirection: "column",
			padding: 8,
		}}
	>
		<h3>Data Display Section</h3>
		<ul>
			{data.map(({ id, color }) =>
				visibleColors.includes(color) ? (
					<li key={id}>
						<Ball color={color} onclick={addFilter} />
					</li>
				) : null,
			)}
		</ul>
	</div>
);

export default DataDisplay;
