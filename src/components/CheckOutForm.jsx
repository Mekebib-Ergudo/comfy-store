import React from "react";
import { Form, redirect } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import { customFetch, formatPrice } from "../utilis";
import { clearCart } from "../features/cart/cartSlice";

export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const { name, address } = Object.fromEntries(formData);
		const user = store.getState().userState.user;
		const { cartItems, orderTotal, numItemsInCart } =
			store.getState().cartState;
		// info
		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatPrice(orderTotal),
			cartItems,
			numItemsInCart,
		};

		try {
			const response = await customFetch.post(
				"/orders",
				{ data: info },
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			store.dispatch(clearCart());
			toast.success("order placed successfully");
			return redirect("/orders");
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				"there was an error placing your order";

			toast.error(errorMessage);
			return null;
		}
	};
const CheckOutForm = () => {
	return (
		<Form method="POST" className="flex flex-col gap-4">
			<h4 className="font-medium text-xl capitalize">shipping Information</h4>
			<FormInput label="first name" name="name" type="text" />
			<FormInput label="address" name="address" type="text" />
			<div className="mt-4">
				<SubmitBtn text="place your order" />
			</div>
		</Form>
	);
};

export default CheckOutForm;
