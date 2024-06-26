import React from "react";

const DataLoading = ({ isDSLoading }) => (
	<div
		style={{
			border: "2px solid gray",
			borderRadius: 10,
			display: "flex",
			flexDirection: "column",
			padding: 8,
		}}
	>
		<h3>Data Loading Section</h3>
		<ul>
			<li>{isDSLoading ? "Loading..." : "✔︎"} Dataset 1</li>
			<li>{isDSLoading ? "Loading..." : "✔︎"} Dataset 2</li>
		</ul>
	</div>
);

export default DataLoading;
