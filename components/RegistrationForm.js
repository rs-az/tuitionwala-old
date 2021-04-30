import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const RegistrationForm = () => {
	return (
		<div className="bg-gray-100 flex flex-col justify-center items-center space-y-4 ml-12">
			<h1 className="text-lg font-bold mt-3">Register as a Tuition Teacher</h1>
			<h3>We often have 500+ Open tuition jobs</h3>
			<button
				href="#"
				className="text-blue-100 px-2 py-3 bg-blue-700 hover:bg-blue-900 block w-64"
			>
				<FontAwesomeIcon icon={faFacebookF} />
				<span className="border-l border-blue-900 ml-2 px-3">
					Continue With Facebook
				</span>
			</button>

			<button
				href="#"
				className="text-red-100 px-3 py-3 bg-red-700 hover:bg-red-900 block  w-64"
			>
				<FontAwesomeIcon icon={faGoogle} />
				<span className="border-l border-red-900 ml-2 px-3">
					Continue With Google
				</span>
			</button>
			<p className="text-md">OR</p>
			<form action="" className="flex flex-col space-y-3">
				<input type="text" className="" placeholder="Name" />
				<input type="email" className="" placeholder="Email" />
				<input type="number" className="" placeholder="Mobile" />
				<input type="password" className="" placeholder="Password" />
				<div className="inline-flex items-start space-x-2 w-64">
					<input
						type="checkbox"
						className="appearance-none checked:bg-blue-600 checked:border-transparent "
					/>
					<label className="text-sm font-small">
						{" "}
						I agree to the{" "}
						<a href="#" className="text-semibold hover:underline">
							Terms & Conditions
						</a>{" "}
						and{" "}
						<a href="#" className="text-semibold hover:underline">
							Privacy Policy
						</a>{" "}
						and also authorize TheTuitionTeacher.com to contact me. This will
						override the registry with Dnc/Ndnc.
					</label>
				</div>
				<button
					type="submit"
					className="bg-gray-600 p-4 m-8 text-gray-100 rounded hover:bg-gray-800"
				>
					Signup
				</button>
			</form>

			<span className="">
				Already a member?
				<a href="" className="hover:underline text-semibold">
					Login
				</a>
			</span>
		</div>
	);
};

export default RegistrationForm;
