import Link from "next/link";
import Pagination from "../components/Pagination";
import RefinedSearch from "../components/RefinedSearch";
import TutorFormSelector from "../components/TutorFormSelector";
import TutorListItem from "../components/TutorListItem";

const Search = () => {
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
		<div className="flex justify-between">
			<div>
				<p className="text-lg text-semibold">Your Search Results:</p>
				<div className="flex flex-col justify-center items-center w-full m-5 p-5 bg-gray-100">
					<span className="text-lg text-semibold">
						Don't Have time to scroll through Results, No worries!
					</span>
					<Link href="#">
						<a className="bg-green-700 text-green-100 py-4 px-2">
							Let us help you find a Home Tutor
						</a>
					</Link>
				</div>
				<div className="grid grid-col-1 gap-12">
					{Array.apply(null, { length: 5 }).map((e, i) => (
						<TutorListItem key={i} />
					))}
				</div>
				<div className="flex flex-col justify-center items-center w-full m-5 p-5 bg-gray-100">
					<span className="text-lg text-semibold">
						Don't Have time to scroll through Results, No worries!
					</span>
					<Link href="#">
						<a className="bg-green-700 text-green-100 py-4 px-2">
							Let us help you find a Home Tutor
						</a>
					</Link>
				</div>
				<Pagination />
			</div>
			<div className="flex flex-col">
				<div className="bg-search-pattern bg-no-repeat mr-4">
					<div className="pl-8 pt-48 pr-48 pb-24">
						<TutorFormSelector options={cities} />
						<TutorFormSelector options={locations} />
						<TutorFormSelector options={classes} />
						<TutorFormSelector options={subjects} />
						<div className="flex justify-center">
							<button className="bg-gray-500 rounded-sm px-3 m-2 text-sm text-gray-100">
								Search
							</button>
							<button className="bg-gray-500 rounded-sm px-3 m-2 text-sm text-gray-100">
								Clear
							</button>
						</div>
					</div>
				</div>
				<RefinedSearch />
			</div>
		</div>
	);
};

export default Search;
