import React from "react";

const Subheading = ({ children, className }) => {
	return (
		<div className={`text-blue-600 font-bold mb-2 ${className}`}>
			{children}
		</div>
	);
};

export default Subheading;
