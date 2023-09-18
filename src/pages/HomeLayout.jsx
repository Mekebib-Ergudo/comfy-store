import { Outlet, useNavigation } from "react-router-dom";
import { Header, NavBar, Loading } from "../components";
const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLaoding = navigation.state === "loading";
	return (
		<>
			<Header />
			<NavBar />
			{isPageLaoding ? (
				<Loading />
			) : (
				<section className="mx-auto max-w-6xl px-8 py-20">
					<Outlet />
				</section>
			)}
		</>
	);
};
export default HomeLayout;
