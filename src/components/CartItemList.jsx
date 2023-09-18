import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartItemList = () => {
	const cartItems = useSelector((state) => state.cartState.cartItems);
	return (
		<>
			{cartItems.map((item) => {
				return <CartItems key={item.cartID} cartItem={item} />;
			})}
		</>
	);
};

export default CartItemList;
