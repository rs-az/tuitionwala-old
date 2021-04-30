import TutorFormSelector from "./TutorFormSelector";

const RequestTutorForm = () => {
	const cities = ["select city", "delhi", "mumbai", "chennai", "kolkata"];

	return (
		<div className="bg-white ml-12">
			<div className="bg-gray-100 flex flex-col justify-center items-center space-y-4 my-4">
				<h1 className="text-lg font-bold font-large mt-3">Get A HomeTutor</h1>

				<p className="text-md px-12">
					Your Search for Perfect Tuition Teacher ends here, Just fill out the
					details below & our team will find you "The Best" home tutor to help
					you or your kid with studies.
				</p>

				<form action="" className="flex flex-col space-y-3">
					<TutorFormSelector options={cities} />
					<input type="text" className="" placeholder="First name" />
					<input type="number" className="" placeholder="Mobile" />
					<button
						type="submit"
						className="bg-green-600 p-4 m-8 text-green-100 rounded hover:bg-green-800"
					>
						Get a Home tutor
					</button>
				</form>

				<span className="">
					By filling this form you agree to our terms and policies
				</span>
			</div>{" "}
			<h1 className="bg-gray-100 mt-8 text-lg font-bold p-8 text-center">
				We are a Group of 80,000+ Home Tutors
			</h1>
		</div>
	);
};

export default RequestTutorForm;
