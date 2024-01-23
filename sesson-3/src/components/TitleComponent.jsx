/** @format */

// props  --> thuộc tính của component
// children --> component con của component

const TitleComponent = (props) => {
	const { color, size, text } = props;

	return (
		<h1
			style={{
				color: color ?? 'coral',
				fontSize: size ?? 20,
			}}>
			{text}
		</h1>
	);
};

export default TitleComponent;
