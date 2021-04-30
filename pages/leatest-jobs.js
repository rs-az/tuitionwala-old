import Pagination from "../components/Pagination";
import JobsListItem from "../components/JobsListItem";

const LeatestJobs = () => {
	return (
		<div className="border-l-2 border-b-2 border-r-2 border-gray-100 mb-8">
			<div className="bg-gray-100 p-2 flex flex-col">
				<span className="text-lg font-semibold block text-center w-full">
					Latest Tuition Jobs in Lucknow & Delhi
				</span>
				<p>
					Looking for interesting teaching jobs in Lucknow or Delhi to excel
					your teaching experience? If teaching jobs interests you, then you are
					on the right place. At TheTuitionTeacher.com, we often have 500+ open
					teaching jobs that are genuine and 100% verified. Whether you are
					starting your career as a tuition teacher or an expert in your field,
					we can help you find your next big tuition job. You can search and
					apply to the tuition jobs that best fit your skills, favorable
					location, class and subjects.
				</p>
				<p className="text-lg font-semibold text-right w-full inline-flex items-center justify-end">
					Showing Jobs in Delhi & Lucknow - Filter Jobs
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
							clipRule="evenodd"
						/>
					</svg>
				</p>
			</div>
			{Array.apply(null, { length: 5 }).map((e, i) => (
				<JobsListItem key={i} />
			))}

			<Pagination />
		</div>
	);
};

export default LeatestJobs;
