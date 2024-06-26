import React, { useCallback, useEffect, useState } from "react";
import DataLoading from "./components/DataLoading.jsx";
import DataDisplay from "./components/DataDisplay.jsx";
import Filter from "./components/Filter.jsx";
import { getDataset1, getDataset2 } from "./api/index.js";

const extractUniqueColors = (dataset) => {
	const colors = dataset.map(({ color }) => color);
	return [...new Set(colors)];
};

const App = () => {
	const [isDSLoading, setIsDSLoading] = useState(false);
	const [dataset, setDataset] = useState([]);
	const [filters, setFilters] = useState([]);
	const [visibleColors, setVisibleColors] = useState([]);
  const [error, setError] = useState(null);

	useEffect(() => {
		setIsDSLoading(true);
		Promise.all([getDataset1(), getDataset2()])
			.then(([ds1, ds2]) => {
				const initialDataset = [...ds1, ...ds2];
				setDataset(initialDataset);
				setVisibleColors(extractUniqueColors(initialDataset));
			})
			.catch((error) => {
				console.error("Failed to fetch dataset, error: ", error);
        setError(error);
			})
			.finally(() => {
				setIsDSLoading(false);
			});
	}, []);

	const toggleVisibility = useCallback((color) => {
		setVisibleColors((currentVisibleColors) => {
			if (currentVisibleColors.includes(color)) {
				return currentVisibleColors.filter(
					(visibleId) => visibleId !== color,
				);
			}
			return [...currentVisibleColors, color];
		});
	}, []);

	const handleAddFilter = useCallback(
		(newFilter) => {
			if (!filters.includes(newFilter)) {
				toggleVisibility(newFilter);
				setFilters((currentFilters) => [...currentFilters, newFilter]);
			}
		},
		[toggleVisibility, filters],
	);

	const handleRemoveFilter = useCallback(
		(filterToRemove) => {
			toggleVisibility(filterToRemove);
			setFilters((currentFilters) =>
				currentFilters.filter((filter) => filter !== filterToRemove),
			);
		},
		[toggleVisibility],
	);

	const handleRemoveAll = useCallback(() => {
		setFilters([]);
		setVisibleColors(extractUniqueColors(dataset));
	}, [dataset]);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
        flexDirection: "column",
			}}
		>
      {error && <div>Error: {error.message}</div>}
			<div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 20,
					}}
				>
					<DataLoading isDSLoading={isDSLoading} />
					<Filter
						filters={filters}
						removeFilter={handleRemoveFilter}
						removeAll={handleRemoveAll}
					/>
				</div>
				<DataDisplay
					data={dataset}
					visibleColors={visibleColors}
					addFilter={handleAddFilter}
				/>
			</div>
		</div>
	);
};

export default App;
