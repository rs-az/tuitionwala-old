import Link from "next/link";
import NavItem from "./NavItem";
import { useRouter } from "next/router";

const Nav = () => {
	const router = useRouter();
	return (
		<div className="my-2">
			<div className="flex justify-between items-center">
				<Link href="/">
					<a>
						<img src="./images/tutionwala.png" alt="TuitionWala" />
					</a>
				</Link>
				<div className="flex flex-col items-center">
					<Link href="/request-a-tutor">
						<a className="bg-green-500 hover:bg-green-600 font-semibold text-green-100 py-3 px-4 rounded inline-flex items-center">
							<span>Hire a Home Tutor</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-2"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</Link>
					<a
						href="#"
						className="text-sm text-gray-500 hover:underline hover:text-gray-900"
					>
						Confused whether your child need a Home tutor ?
					</a>
				</div>
				<div className="flex flex-col items-center">
					<Link href="/signup">
						<a className="bg-blue-500 hover:bg-blue-600 text-blue-100 font-semibold py-3 px-4 rounded inline-flex items-center">
							<span>Register as a Teacher</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-2"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</Link>
					<a
						href="#"
						className="text-sm text-gray-500 hover:underline hover:text-gray-900"
					>
						Do you stll ask Pocket Money ?
					</a>
				</div>
			</div>
			<nav className="border-b-2 border-gray-100 pb-4">
				<ul className="flex space-x-5">
					<li className={router.pathname == "/" ? "active" : ""}>
						<NavItem path="/" link="Home" />
					</li>
					<li className={router.pathname == "/search" ? "active" : ""}>
						<NavItem path="/search" link="Search Home Tutor" />
					</li>
					<li className={router.pathname == "/leatest-jobs" ? "active" : ""}>
						<NavItem path="/leatest-jobs" link="Find Tuition Jobs" />
					</li>
					<li className={router.pathname == "/login" ? "active" : ""}>
						<NavItem path="/login" link="Teacher Login" />
					</li>
					<li>
						<NavItem
							path="tel:991-123-4567"
							link="991-123-4567"
							isIcon={true}
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
