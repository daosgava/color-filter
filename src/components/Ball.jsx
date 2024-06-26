const Ball = ({ color, onclick }) => (
	<div
		style={{
			backgroundColor: color,
			height: 50,
			width: 50,
			borderRadius: 50,
			margin: 10,
			cursor: "pointer",
		}}
		onClick={() => onclick(color)}
	></div>
);

export default Ball;
