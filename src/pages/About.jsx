import React from "react";
const About = () => {
	return (
		<>
			<div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
				<h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
					We love
				</h1>
				<div className="stats bg-primary shadow">
					<div className="stat">
						<div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
							Comfy
						</div>
					</div>
				</div>
			</div>
			<p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
				We love Comfy" is a heartfelt sentiment that expresses a deep affection
				for comfort and the simple joys it brings to our lives. It encapsulates
				a universal appreciation for those cozy moments when we can relax,
				unwind, and feel truly at ease. Whether it's sinking into a soft, plush
				armchair, snuggling up in a warm blanket, or slipping into a pair of
				comfortable pajamas, the phrase "We love Comfy" reminds us of the
				importance of self-care and .....
			</p>
		</>
	);
};

export default About;
