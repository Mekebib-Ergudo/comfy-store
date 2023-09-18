import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { store } from "./store.js";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
		<ToastContainer position="top-center" />
	</Provider>
);
