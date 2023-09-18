import { useSelector } from "react-redux";
import { CartTotal, CheckOutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
	const user = store.getState().userState.user;

	if (!user) {
		toast.warning("You Must Login Before CheckOut!");
		return redirect("/login");
	}
	return null;
};
const CheckOut = () => {
	const cartTotal = useSelector((state) => state.cartState.cartTotal);
	if (cartTotal === 0) {
		return <SectionTitle text={"Your Cart Is Empty"} />;
	}
	return (
		<>
			<SectionTitle text="Place Your Order.." />
			<div className="mt-8 grid gap-8 md:grid-cols-2 items-start ">
				<CheckOutForm />
				<CartTotal />
			</div>
		</>
	);
};

export default CheckOut;
