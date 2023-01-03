import React from "react";

const Text = ({ children, className }) => {
	return <p className={`${className} text-gray-500  `}>{children}</p>;
};

export default Text;
