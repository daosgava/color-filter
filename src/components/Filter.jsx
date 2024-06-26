import React from "react";
import Ball from "./Ball";

const Filter = ({ filters, removeFilter, removeAll }) => (
	<div
		style={{
			border: "2px solid gray",
			borderRadius: 10,
			display: "flex",
			flexDirection: "column",
			padding: 8,
		}}
	>
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				gap: 10,
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<h3>Filter</h3>
			<button
				onClick={removeAll}
				style={{
					borderRadius: 10,
					height: 30,
					border: 0,
					cursor: "pointer",
				}}
			>
				Clear All
			</button>
		</div>
		<ul>
			{filters.map((color, index) => (
				<li key={index}>
					<Ball color={color} onclick={removeFilter} />
				</li>
			))}
		</ul>
	</div>
);

export default Filter;
