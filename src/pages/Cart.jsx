import { useSelector } from "react-redux";
import { CartItemList, CartTotal, SectionTitle } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
	// Temp
	const user = useSelector((state) => state.userState.user);
	const numberInCart = useSelector((state) => state.cartState.numItemsInCart);
	if (numberInCart === 0) {
		return <SectionTitle text="Your Cart is Empty" />;
	}
	return (
		<>
			<SectionTitle text="Shoping Cart" />
			<div className="mt-8 grid gap-8 lg:grid-cols-12">
				<div className="lg:col-span-8">
					<CartItemList />
				</div>
				<div className="lg:col-span-4 lg:pl-4">
					<CartTotal />
					{user ? (
						<Link to="/checkout" className="btn btn-primary btn-block mt-8">
							Proceed to Checkout
						</Link>
					) : (
						<Link to="/login" className="btn btn-primary btn-block mt-8">
							Pleas Login
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
