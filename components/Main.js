import Link from "next/link";
import HomeTutorForm from "./HomeTutorForm";

const Main = () => {
	return (
		<main className="mb-5">
			<div className="flex">
				<div>
					<h1 className="text-lg font-semibold text-gray-700">
						Find Best Home Tutors in Lucknow & Delhi
					</h1>
					<p className="text-base font-medium text-gray-500 ml-5 mt-3">
						We have 80,000+ qualified tuition teachers to work with students of
						all ages from Pre-Nursery to Post Graduate, covering all academic
						and competitive subjects, music and general interest/hobby classes.
						Search for the best home tutor in your local area and get one to one
						free trial session.
					</p>
					<HomeTutorForm />
				</div>
				<img src="./images/who-we-are.jpg" alt="" />
			</div>
			<div>
				<p className="mt-8 text-semibold">
					Recently Joined Teachers
					<Link href="/search">
						<a className="text-sm bg-blue-400 p-1 mx-5 text-blue-100 rounded-sm cursor-pointer hover:bg-blue-500">
							view all
						</a>
					</Link>
				</p>
				<div className="flex flex-nowrap m-3 h-15">
					{Array.apply(null, { length: 10 }).map((e, i) => (
						<a>
							<img
								className="rounded-sm border-3 border-blue-400 w-16 mr-1"
								src="./images/profile.jpg"
								key={i}
							/>
						</a>
					))}
				</div>
			</div>
		</main>
	);
};

export default Main;
