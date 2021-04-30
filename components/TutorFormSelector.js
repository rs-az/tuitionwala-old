const TutorFormSelector = ({ options }) => {
	return (
		<select className="form-select mt-1 block w-full">
			{options.map((item) => (
				<option value={item} key={item}>
					{item}
				</option>
			))}
		</select>
	);
};

export default TutorFormSelector;
