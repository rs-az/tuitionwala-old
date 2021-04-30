const RefinedSearch = () => {
	const gender = ["male", "female"];
	const classes = [
		"Nursery",
		"Kg",
		,
		"1st",
		"2nd",
		,
		"3rd",
		"4th",
		"5th",
		"6th",
		"7th",
		"8th",
		"9th",
		"10th",
		"11th",
		"12th",
		"Hobby Courses",
		"Languages",
		"Competitive Exam",
		"B.Tech",
		"B.A.",
		"B.Com.",
		"B.Sc.",
		"BBA",
		"MBA",
		"BCA",
		"MCA",
		"M.A.",
		"M.Com",
		"M.Sc.",
		"M.Tech",
		"PMT",
		"IIT-JEE",
		"MBBS",
		"C.S.",
		"LLB",
		"Diploma",
		"NEET",
		"IIT-j2E",
		"PMT",
	];
	return (
		<div className="flex flex-col border-l-2 border-gray-100 space-x-4 sticky top-0">
			<span className="text-lg mt-3">Refine Search</span>
			<span className="text-lg mt-3">Gender</span>
			<div className="grid grid-cols-2 space-y-2">
				{gender.map((e, i) => (
					<div className="inline-flex items-center space-x-2" key={i}>
						<input
							type="checkbox"
							className="appearance-none checked:bg-blue-600 checked:border-transparent "
						/>
						<label className="text-sm"> {e}</label>
					</div>
				))}
			</div>
			<div className="bg-gray-100 h-px mt-2" />
			<span className="text-lg mt-3">Class</span>
			<div className="grid grid-cols-2 space-y-2">
				{classes.map((e, i) => (
					<div className="inline-flex items-center space-x-2" key={i}>
						<input
							type="checkbox"
							className="appearance-none checked:bg-blue-600 checked:border-transparent "
						/>
						<label className="text-sm"> {e}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default RefinedSearch;
