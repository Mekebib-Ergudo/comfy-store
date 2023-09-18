import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utilis";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
	(store) =>
	async ({ request }) => {
		// Login Inforamtion or  input form the User
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			const response = await customFetch.post("/auth/local", data);
			toast.success("User Logged in successfully");
			store.dispatch(loginUser(response.data));
			// console.log(response.data);
			return redirect("/");
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				"please double check your credentials";
			toast.error(errorMessage);
			return null;
		}
	};

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// Guest Information
	const guestInfo = { identifier: "test@test.com", password: "secret" };
	const loginAsGuestUSer = async () => {
		try {
			const response = await customFetch.post("/auth/local", guestInfo);
			dispatch(loginUser(response.data));
			toast.success("Welcome Guset User");
			navigate("/");
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				"please double check your credentials";
			toast.error(errorMessage);
			return null;
		}
	};

	return (
		<section className="h-screen grid place-content-center bg-slate-400">
			<Form
				method="post"
				className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
			>
				<h4 className="text-center text-3xl font-bold">Login</h4>
				<FormInput type="email" label="email" name="identifier" />
				<FormInput type="password" label="password" name="password" />
				<div className="mt-4">
					<SubmitBtn text="login" />
				</div>
				<button
					type="button"
					className="btn btn-secondary btn-block"
					onClick={loginAsGuestUSer}
				>
					guset user
				</button>
				<p className="text-center">
					Not a memebr yet ?
					<Link
						to="/register"
						className="ml-2 link link-hover link-primary capitalize"
					>
						register
					</Link>
				</p>
			</Form>
		</section>
	);
};

export default Login;
