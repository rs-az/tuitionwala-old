import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
	console.log(children);
	return (
		<div className="bg-white">
			<div className="container center mx-auto px-10 ">
				<Nav />
				{children}
			</div>
			<Footer className="w-full" />
		</div>
	);
};

export default Layout;
