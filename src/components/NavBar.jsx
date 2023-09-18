import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";

const themes = {
	winter: "winter",
	dracula: "dracula",
};
const getThemeFromLocalStorage = () => {
	return localStorage.getItem("theme") || themes.winter;
};
const NavBar = () => {
	const [theme, setTheme] = useState(getThemeFromLocalStorage);

	const handleTheme = () => {
		const { winter, dracula } = themes;
		const newTheme = theme === winter ? dracula : winter;
		setTheme(newTheme);
	};
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);
	//
	// Number in cart getting from the slice...
	const numberInCart = useSelector((state) => state.cartState.numItemsInCart);

	return (
		<nav className="bg-base-200">
			<div className="navbar mx-auto max-w-6xl px-8 ">
				<div className="navbar-start">
					{/* The Logo */}
					<NavLink
						to="/"
						className="hidden md:flex btn btn-primary text-3xl items-center"
					>
						M
					</NavLink>
					{/* Drop Down*/}
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost md:hidden">
							<FaBarsStaggered className="h-6 w-6" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className="navbar-center hidden md:flex">
					<ul className="menu menu-horizontal">
						<NavLinks />
					</ul>
				</div>
				<div className="navbar-end">
					{/* Theme Setup */}
					<label className="swap swap-rotate">
						<input type="checkbox" onChange={handleTheme} />
						{/* Sun */}
						<BsSunFill className="swap-on h-4 w-4" />
						{/* moon */}
						<BsMoonFill className="swap-off h-4 w-4" />
					</label>
					{/* cart */}
					<NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
						<div className="indicator">
							<BsCart3 className="h-7 w-7" />
							<span className="badge badge-sm badge-primary indicator-item">
								{numberInCart}
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
