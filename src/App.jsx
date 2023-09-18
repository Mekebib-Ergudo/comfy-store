import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	Cart,
	CheckOut,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
	Error,
} from "./pages";
import { ErrorElement } from "./components";
// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/CheckOut";
import { loader as ordersLoader } from "./pages/Orders";
// Actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckOutForm";

import { store } from "./store";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Landing />,
					errorElement: <ErrorElement />,
					loader: landingLoader,
				},
				{
					path: "products",
					element: <Products />,
					errorElement: <ErrorElement />,
					loader: productsLoader,
				},
				{
					path: "products/:id",
					element: <SingleProduct />,
					errorElement: <ErrorElement />,
					loader: singleProductLoader,
				},
				{
					path: "cart",
					element: <Cart />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "checkout",
					element: <CheckOut />,
					errorElement: <ErrorElement />,
					loader: checkoutLoader(store),
					action: checkoutAction(store),
				},
				{
					path: "orders",
					element: <Orders />,
					loader: ordersLoader(store),
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
			errorElement: <Error />,
			action: loginAction(store),
		},
		{
			path: "/register",
			element: <Register />,
			errorElement: <Error />,
			action: registerAction,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
