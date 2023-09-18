import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
	return (
		<div className="grid lg:grid-cols-2 gap-24 items-center">
			<div>
				<h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl font-serif  text-emerald-500">
					We are changing the way people shop
				</h1>
				<p className=" mt-8 max-w-2xl text-lg leading-8">
					In a world where convenience and innovation reign supreme, our mission
					is clear: we are redefining the shopping experience. With a fresh
					perspective and a commitment to pushing boundaries, we're changing the
					way people shop for the better.
				</p>
				<div className="mt-8">
					<Link to="/products" className="btn btn-primary">
						Our Product
					</Link>
				</div>
			</div>
			<div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
				{images.map((image) => {
					return (
						<div key={image} className="carousel-item">
							<img
								src={image}
								className="rounded-box h-full w-80 object-cover "
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Hero;
