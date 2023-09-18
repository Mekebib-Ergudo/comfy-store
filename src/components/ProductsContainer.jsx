import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";
const ProductsContainer = () => {
	const { meta } = useLoaderData();
	const totalProducts = meta.pagination.total;
	const [layout, setLayout] = useState("grid");
	const serActiveStyle = (pattern) => {
		return `text-xl btn btn-circle btn-sm ${
			pattern === layout
				? "btn-primary text-primary-content"
				: "btn-ghost text-based-content"
		}`;
	};
	return (
		<>
			<div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
				<h4 className="font-medium text-md">
					{totalProducts > 0 ? `${totalProducts} products` : `${0} product`}
				</h4>
				<div className="flex gap-x-2">
					<button
						type="button"
						onClick={() => setLayout("grid")}
						className={serActiveStyle("grid")}
					>
						<BsFillGridFill />
					</button>
					<button
						type="button"
						onClick={() => setLayout("list")}
						className={serActiveStyle("list")}
					>
						<BsList />
					</button>
				</div>
			</div>
			{/* Products */}
			<div>
				{totalProducts === 0 ? (
					<h5 className="text-2xl mt-16 text-amber-600 flex justify-center">
						No product found!
					</h5>
				) : layout === "grid" ? (
					<ProductGrid />
				) : (
					<ProductList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
