import { Filters, Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utilis";
const url = "/products";
export const loader = async ({ request }) => {
	// const parma = new URL(request.url).searchParams.get('search')
	// for group of requests
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	const response = await customFetch(url, { params });
	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta, params };
};
const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<Pagination />
		</>
	);
};

export default Products;
