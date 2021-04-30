import LoginSlider from "../components/LoginSlider";
import QueDisclosure from "../components/QueDisclosure";
import RequestTutorForm from "../components/RequestTutorForm";

const RequestTutor = () => {
	const data = require("../questore/parentque.json");

	return (
		<div>
			<div className="grid grid-cols-2 my-3">
				<LoginSlider />
				<RequestTutorForm />
			</div>
			{data.map((o) => (
				<QueDisclosure key={o.id} que={o.que} ans={o.ans} />
			))}
		</div>
	);
};

export default RequestTutor;
