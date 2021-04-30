const JobsListItem = () => {
	return (
		<div className=" ml-1 mt-2 flex flex-col p-2 border-b-2 border-gray-100 text-gray-500">
			<p className=" ">
				<span className="font-semibold   text-gray-700 mr-2">Area:</span>
				Aliganj, Lucknow
			</p>
			<p className=" ">
				<span className="font-semibold   text-gray-700 mr-2">Parent:</span>
				Rohit Singh
			</p>
			<p className=" ">
				<span className="font-semibold   text-gray-700 mr-2">Tuition For:</span>
				9th - maths, science social science
			</p>
			<p className=" ">
				<span className="font-semibold   text-gray-700 mr-2">
					Teachers preferred gender:
				</span>
				Female Tutor
			</p>
			<p className=" ">
				<span className="font-semibold   text-gray-700 mr-2">Requirement:</span>
				Want female tutor for 9th class icse board
			</p>
			<div className="flex w-full">
				<button className="bg-gray-700 text-gray-100 p-2 rounded-md">
					Apply Now
				</button>
			</div>
		</div>
	);
};

export default JobsListItem;
