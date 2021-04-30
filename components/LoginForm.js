import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const LoginForm = () => {
	return (
		<div className="bg-white ml-12">
			<div className="bg-gray-100 flex flex-col justify-center items-center space-y-4">
				<h1 className="text-lg font-bold mt-3">Tuition Teacher Login</h1>
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
					<input
						type="text"
						className=""
						placeholder="Email or mobile or TTT id"
					/>
					<input type="password" className="" placeholder="password" />
					<button
						type="submit"
						className="bg-green-600 p-4 m-8 text-green-100 rounded hover:bg-green-800"
					>
						Login
					</button>
				</form>
				<span className="">
					Forgot Password?{" "}
					<a href="" className="hover:underline">
						Click Here
					</a>
				</span>
				<span className="">
					Don't have an account?{" "}
					<a href="" className="hover:underline">
						Register Here
					</a>
				</span>
			</div>{" "}
			<h1 className="bg-gray-100 mt-8 text-lg font-bold p-8 text-center">
				We have often 500+ Tuition Jobs
			</h1>
		</div>
	);
};

export default LoginForm;
