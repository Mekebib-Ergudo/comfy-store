import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAMountOptions } from "../utilis";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
	const response = await customFetch(`/products/${params.id}`);
	return { product: response.data.data };
};
const SingleProduct = () => {
	const { product } = useLoaderData();
	const { title, company, description, image, price, colors } =
		product.attributes;
	const totalAmount = formatPrice(price);
	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);
	const handleAmount = (e) => {
		setAmount(parseInt(e.target.value));
	};

	const cartProduct = {
		cartID: product.id + productColor,
		productID: product.id,
		image,
		title,
		price,
		amount,
		productColor,
		company,
	};
	const dispatch = useDispatch();

	const itemsToCart = () => {
		dispatch(addToCart({ product: cartProduct }));
	};
	return (
		<section>
			<div className="breadcrumbs">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>
			<div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
				<img
					src={image}
					alt={title}
					className="w-96 h-96 object-cover rounded-lg lg:w-full"
				/>
				<div>
					<h1 className="capitalize text-3xl font-bold">{title}</h1>
					<h4 className="text-xl text-neutral-content font-bold mt-2">
						{company}
					</h4>
					<p className="mt-3 text-xl ">{totalAmount}</p>
					<p className="mt-5 leading-8">{description}</p>
					{/* Color */}
					<div className="mt-6">
						<h4 className="text-md font-medium tracking-wider capitalize">
							colors
						</h4>
						<div className="mt-2">
							{colors.map((color) => {
								return (
									<button
										key={color}
										type="button"
										className={`badge w-6 h-6 mr-2 ${
											color === productColor && "border-2 border-orange-600"
										}`}
										style={{ backgroundColor: color }}
										onClick={() => setProductColor(color)}
									></button>
								);
							})}
						</div>
					</div>
					{/* Amount */}
					<div className="form-control w-full max-w-xs">
						<label className="label" htmlFor="amount">
							<h4 className="text-md font-medium tracking-wider capitalize">
								amount
							</h4>
						</label>
						<select
							id="amount"
							value={amount}
							className="select select-secondary select-bordered select-md"
							onChange={handleAmount}
						>
							{generateAMountOptions(10)}
						</select>
					</div>
					{/* Cart */}
					<div className="mt-10">
						<button className="btn btn-secondary btn-md" onClick={itemsToCart}>
							Add to bag
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
