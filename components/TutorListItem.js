import Link from "next/link";

const TutorListItem = () => {
	return (
		<div className="flex">
			<div className="flex flex-col justify-center items-center">
				<img
					src="https://thetuitionteacher.com/thumb.php?src=//thetuitionteacher.com/wp-content/uploads/1046938_1619604936.jpg&w=136&h=175&q=75&a=t"
					alt=""
					className=""
				/>
				<Link href="#">
					<a className="p-2 bg-gray-500 text-sm text-gray-100 mt-2">
						view profile
					</a>
				</Link>
			</div>
			<div className="flex flex-col ml-4">
				<span className="text-lg">Rohit Singh</span>
				<span className="text-base font-medium text-gray-500 mt-4">
					Home Tutor Class Nursery To 5th
				</span>
				<span className="text-base font-medium text-gray-500 mt-4">
					Location : Lucknow | Indira Nagar, Mahanagar, Nishatganj, Badshahnagar
				</span>
				<span className="text-base font-medium text-gray-500 mt-4">
					Classes I Teach : Nursery, Kg, 1st, 2nd, 3rd, 4th, 5th
				</span>
				<span className="text-base font-medium text-gray-500 mt-4">
					Experience : 2 years
				</span>
				<span className="text-base font-medium text-gray-500 mt-4">
					Friendly With Student Try To Teach Them According To Their
					Understanding Level
				</span>
			</div>
		</div>
	);
};

export default TutorListItem;
