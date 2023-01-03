import React from "react";

const Heading = ({ children, className }) => {
	return (
		<div
			className={`text-4xl mb-4 mt-2 font-bold max-w-[500px] leading-snug ${className}`}>
			{children}
		</div>
	);
};

export default Heading;
