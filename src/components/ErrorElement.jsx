import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
	const error = useRouteError();
	// console.log(error);
	return <div className="font-bold text-4xl">Something went wrong...</div>;
};

export default ErrorElement;
