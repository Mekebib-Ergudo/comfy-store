import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utilis";

const CartTotal = () => {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(
		(state) => state.cartState
	);
	return (
		<div className="card bg-base-200">
			<div className="card-body">
				{/* SubTotal */}
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Subtotal :-</span>
					<span className="font-medium"> {formatPrice(cartTotal)}</span>
				</p>
				{/* Shipping Cost */}
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Shipping :- </span>
					<span className="font-medium"> {formatPrice(shipping)}</span>
				</p>
				{/* TAX */}
				<p className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Tax :-</span>
					<span className="font-medium"> {formatPrice(tax)}</span>
				</p>

				<p className="flex justify-between text-sm mt-4 border-b border-base-300 pb-2">
					<span>OrderTotal :-</span>
					<span className="font-medium"> {formatPrice(orderTotal)}</span>
				</p>
			</div>
		</div>
	);
};

export default CartTotal;
