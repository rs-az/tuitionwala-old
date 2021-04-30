const JobCard = () => {
	return (
		<div className=" border-r-2 border-gray-200  ml-1 mt-2 flex flex-col p-2">
			<p className="text-sm">
				<span className="font-semibold text-sm text-gray-700">Area:</span>
				Aliganj, Lucknow
			</p>
			<p className="text-sm">
				<span className="font-semibold text-sm text-gray-700">Parent:</span>
				Rohit Singh
			</p>
			<p className="text-sm">
				<span className="font-semibold text-sm text-gray-700">
					Tuition For:
				</span>
				9th - maths, science social science
			</p>
			<p className="text-sm">
				<span className="font-semibold text-sm text-gray-700">
					Teachers preferred gender:
				</span>
				Female Tutor
			</p>
			<p className="text-sm">
				<span className="font-semibold text-sm text-gray-700">
					Requirement:
				</span>
				Want female tutor for 9th class icse board
			</p>
			<div className="flex justify-end w-full">
				<button className="bg-gray-700 text-gray-100 text-sm m-2 p-2 rounded-sm">
					Apply Now
				</button>
				<button className="bg-gray-700 text-gray-100 text-sm m-2 p-2 rounded-sm">
					View
				</button>
			</div>
		</div>
	);
};

export default JobCard;
