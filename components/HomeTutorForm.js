import TutorFormSelector from "./TutorFormSelector";

const HomeTutorForm = () => {
	const cities = ["select city", "delhi", "mumbai", "chennai", "kolkata"];

	const locations = [
		"select location",
		"sector-1",
		"sector-2",
		"sector-3",
		"sector-4",
	];

	const classes = ["select classes", "1", "2", "3", "4", "5", "6"];

	const subjects = [
		"select subjects",
		"maths",
		"science",
		"english",
		"c",
		"java",
	];
	return (
		<form className="">
			<div className="grid grid-cols-2 gap-6 ">
				<TutorFormSelector options={cities} key="1" />
				<TutorFormSelector options={locations} key="2" />
				<TutorFormSelector options={classes} key="3" />
				<TutorFormSelector options={subjects} key="4" />
			</div>
			<div className="mt-8">
				<button
					type="submit"
					className="text-lg bg-gray-700 p-3 mr-5 text-gray-100 cursor-pointer"
				>
					Submit
				</button>
				or
				<button
					type="submit"
					className="text-lg bg-blue-700 p-3 ml-3 text-blue-100 cursor-pointer"
				>
					Let us Find you a Tutor
				</button>
			</div>
		</form>
	);
};

export default HomeTutorForm;
