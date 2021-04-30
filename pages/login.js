import LoginForm from "../components/LoginForm";
import LoginSlider from "../components/LoginSlider";

const Login = () => {
	return (
		<div className="grid grid-cols-2 my-3">
			<LoginSlider />
			<LoginForm />
		</div>
	);
};

export default Login;
