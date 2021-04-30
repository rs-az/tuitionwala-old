import LoginSlider from "../components/LoginSlider";
import QueDisclosure from "../components/QueDisclosure";
import RegistrationForm from "../components/RegistrationForm";

const Signup = () => {
	const data = require("../questore/tutorque.json");
	return (
		<div>
			<div className="grid grid-cols-2 my-3">
				<LoginSlider />
				<RegistrationForm />
			</div>
			{data.map((o) => (
				<QueDisclosure key={o.id} que={o.que} ans={o.ans} />
			))}
		</div>
	);
};

export default Signup;
