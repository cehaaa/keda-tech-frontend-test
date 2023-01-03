import React from "react";

const Container = ({ children, className = "" }) => {
	return (
		<div className={`w-full px-5 md:px-0 md:w-9/12 mx-auto ${className}`}>
			{children}
		</div>
	);
};

export default Container;
