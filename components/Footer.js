import Link from "next/link";
import JobCard from "./JobCard";

const Footer = () => {
	return (
		<div className="w-full flex flex-col items-center justify-between">
			<h3 className="text-sm my-4">
				<span className="text-semibold text-lg">Latest Tuition Jobs</span>
				<Link href="/leatest-jobs">
					<a className="text-sm bg-blue-400 hover:bg-blue-500 p-1 mx-2 text-blue-100 rounded-sm cursor-pointer">
						view all
					</a>
				</Link>
				500+ Open Jobs..
			</h3>
			<div className="flex flex-nowrap border-t-2 border-gray-100">
				{Array.apply(null, { length: 5 }).map((e, i) => (
					<JobCard key={i} />
				))}
			</div>
			<img src="./images/footer-art.jpg" alt="" className="w-full" />
			<div className="flex w-full bg-gray-100 h-16 justify-center items-center text-gray-500 font-semibold">
				<h1>Copyright &copy; 2021</h1>
				<nav className="flex items-center ml-2">
					<ul>
						<Link href="#">
							<a className="px-2 border-l-2 border-gray-300 text-sm">
								Contact Us
							</a>
						</Link>
						<Link href="#">
							<a className="px-2 border-l-2 border-gray-300 text-sm">
								About Us
							</a>
						</Link>
						<Link href="#">
							<a className="px-2 border-l-2 border-gray-300 text-sm">
								Privacy Policy
							</a>
						</Link>
						<Link href="#">
							<a className="px-2 border-l-2 border-gray-300 text-sm">
								Terms & Conditions
							</a>
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
